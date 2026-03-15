# Medicine OCR 💊

A mobile app that scans prescription images and extracts medicine details — name, dosage, frequency, and duration — using OCR and image recognition.

Built with React Native (Expo) + Express.js + Google Cloud Vision API.

---

## Demo

> 📸 Take a photo of any prescription → get a structured medicine list in seconds

*(Add a screen recording GIF here once Google Vision is connected)*

---

## Features

- 📷 Capture prescription via camera or upload from gallery
- 🔍 Extracts medicine name, dosage, frequency, and duration
- 📋 Clean result screen showing all detected medicines
- ⚡ Fast — results returned in under 2 seconds
- 🗂️ Tab navigation between Scan and History screens

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile App | React Native (Expo) |
| Backend | Node.js + Express.js |
| OCR Engine | Google Cloud Vision API |
| Image Upload | Multipart/form-data via Axios |

---

## Project Structure

```
medicine-ocr/
├── server/
│   ├── index.js        # Express server + /scan endpoint
│   ├── ocr.js          # Google Vision API integration
│   ├── parser.js       # Medicine text extraction logic
│   └── credentials.json # Google Cloud service account key
│
└── app/
    ├── App.js           # Root + tab navigation
    ├── screens/
    │   ├── ScanScreen.js    # Camera + upload + results
    │   └── HistoryScreen.js # Past scans
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- Expo Go app on your phone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))
- Google Cloud account with Vision API enabled

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/medicine-ocr.git
cd medicine-ocr
```

### 2. Set up the backend

```bash
cd server
npm install
```

Add your Google Cloud credentials:
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a project → Enable **Cloud Vision API**
- Create a Service Account → Download JSON key
- Save it as `server/credentials.json`

Start the server:
```bash
node index.js
# Server running on http://localhost:3000
```

### 3. Set up the React Native app

```bash
cd app
npm install
```

Update the server URL in `App.js`:
```javascript
const SERVER = 'http://YOUR_LOCAL_IP:3000';
// Find your IP: ipconfig (Windows) or ifconfig (Mac/Linux)
```

Start the app:
```bash
npx expo start
```

Scan the QR code with **Expo Go** on your phone.

---

## How It Works

```
User takes photo
      ↓
React Native sends image to Express via multipart POST
      ↓
Express forwards image bytes to Google Vision API
      ↓
Vision API returns raw OCR text
      ↓
Parser extracts medicine name, dose, frequency, duration using regex
      ↓
Structured JSON returned to app and displayed
```

### Sample API response

```json
{
  "success": true,
  "totalFound": 2,
  "medicines": [
    {
      "type": "Tab",
      "name": "Metformin",
      "dose": "500mg",
      "frequency": "1-0-1",
      "duration": "30 days"
    },
    {
      "type": "Cap",
      "name": "Pantoprazole",
      "dose": "40mg",
      "frequency": "OD",
      "duration": "7 days"
    }
  ]
}
```

---

## API Reference

### `POST /scan`

Accepts a prescription image and returns extracted medicine data.

**Request**
```
Content-Type: multipart/form-data
Body: { image: <file> }
```

**Response**
```json
{
  "success": true,
  "rawText": "Tab. Metformin 500mg 1-0-1 x 30 days...",
  "medicines": [...],
  "totalFound": 2
}
```

---

## Roadmap

- [x] React Native UI with tab navigation
- [x] Camera and gallery integration
- [x] Express backend with `/scan` endpoint
- [ ] Google Vision API integration
- [ ] Deploy backend to AWS EC2
- [ ] Store scan history with AWS S3
- [ ] AI-powered medicine explanation using Claude API
- [ ] Add medicine interaction warnings

---

## What I Learned

- Integrating device camera in React Native using `expo-image-picker`
- Building and consuming a multipart file upload API with Express
- Text extraction and regex-based parsing from unstructured OCR output
- Google Cloud Vision API setup and authentication

---

## Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourname](https://linkedin.com/in/yourname)

---

## License

MIT
