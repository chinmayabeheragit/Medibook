import React, { useState, useRef, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import Fuse from 'fuse.js';
import { FiSearch, FiCamera } from 'react-icons/fi';

const knownMedicines = [
  "Paracetamol",
  "Azithromycin",
  "Amoxicillin",
  "Pinoclav-CL",
  "Cetirizine",
  "Ibuprofen",
  "Metformin",
  "Omeprazole",
  "Aspirin",
  // Add more known medicine names here
];

const fuse = new Fuse(knownMedicines, {
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
});

const Mymediput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchedMedicine, setMatchedMedicine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ocrRawText, setOcrRawText] = useState('');
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      await tf.setBackend('webgl');
      await tf.ready();
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const handleCameraClick = () => fileInputRef.current.click();

const preprocessImage = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.filter = 'contrast(150%) brightness(110%)';
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          const avg = (d[i] + d[i + 1] + d[i + 2]) / 3;
          d[i] = d[i + 1] = d[i + 2] = avg;
        }
        ctx.putImageData(imageData, 0, 0);

        const dataURL = canvas.toDataURL(); // use base64 instead
        resolve(dataURL);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });


  const drawBoxes = (detections) => {
    if (!canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const img = imgRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    detections.forEach((det) => {
      if (det.score < 0.5) return;
      const [x, y, w, h] = det.bbox;
      ctx.strokeStyle = 'lime';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, h);
      ctx.fillStyle = 'lime';
      ctx.font = '16px Arial';
      ctx.fillText(det.class, x, y > 10 ? y - 5 : 10);
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !model) return;

    setLoading(true);
    setMatchedMedicine(null);
    setSearchTerm('');
    setOcrRawText('');

    try {
      const blob = await preprocessImage(file);
      imgRef.current.src = URL.createObjectURL(blob);

      // OCR with whitelist for alphanumeric + dash only
      const result = await Tesseract.recognize(blob, 'eng', {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            console.log('OCR Progress:', (m.progress * 100).toFixed(2), '%');
          }
        },
        tessedit_char_whitelist:
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789- ',
      });

      const textRaw = result.data.text;
      setOcrRawText(textRaw);

      // Clean and normalize OCR text
      const cleaned = textRaw
        .trim()
        .replace(/\n+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .toLowerCase();

      // Fuzzy search medicine names against OCR output
      const matches = fuse.search(cleaned);

      if (matches.length > 0) {
        setMatchedMedicine(matches[0].item);
        setSearchTerm(matches[0].item);
      } else {
        setMatchedMedicine(null);
        setSearchTerm('No known medicine found. Try a clearer image.');
      }

      // Run object detection (optional)
      const detections = await model.detect(imgRef.current);
      drawBoxes(detections);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to process image. Please try again.');
    } finally {
      setLoading(false);
      event.target.value = ''; // reset file input
    }
  };

  const handleSearchClick = () => {
    alert(`Searching for medicine: ${searchTerm || 'None'}`);
  };

  return (
    <div className="container" style={{ maxWidth: 480, margin: 'auto', padding: 20 }}>
      <div className="search-bar" style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for medicine..."
          style={{ flexGrow: 1, padding: '8px 12px', fontSize: 16 }}
        />
        <button onClick={handleSearchClick} title="Search">
          <FiSearch size={24} />
        </button>
        <button onClick={handleCameraClick} title="Upload Image">
          <FiCamera size={24} />
        </button>
      </div>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        onChange={handleImageUpload}
        hidden
      />

      {loading && <p style={{ color: 'blue' }}>Processing image, please wait...</p>}

      {ocrRawText && (
        <p style={{ fontSize: 14, fontStyle: 'italic', color: '#666' }}>
          OCR Raw Text: <br />
          {ocrRawText}
        </p>
      )}

      {matchedMedicine && (
        <p style={{ fontWeight: 'bold', color: 'green' }}>
          Detected Medicine: {matchedMedicine}
        </p>
      )}

      {!matchedMedicine && searchTerm && !loading && (
        <p style={{ fontWeight: 'bold', color: 'red' }}>{searchTerm}</p>
      )}

      <div style={{ position: 'relative', marginTop: 10 }}>
        <img
          ref={imgRef}
          alt="Uploaded preview"
          style={{ maxWidth: '100%', borderRadius: 8, boxShadow: '0 0 10px #ccc' }}
          crossOrigin="anonymous"
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            borderRadius: 8,
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default Mymediput;
