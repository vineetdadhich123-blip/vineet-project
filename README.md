# QuickPrint — Online Printing Web App

QuickPrint is a modern, responsive web application designed for campus print shops, xerox centers, cyber cafes, and commercial printing desks.

Customers can scan a shop's counter QR code, upload documents (PDF, Word, PPT, high-res images), configure exact print and finishing options (B&W/Color, paper size, duplex, GSM quality, spiral/thermal binding, lamination), see real-time price calculations, simulate or execute online payment via UPI/Cards/Net Banking, and track their print job in real time.

Print shop owners get a live admin control station with audio chime alerts, 1-click status transitions, live revenue metrics, customizable pricing tables, and printable counter standee tent cards.

---

## 🚀 Key Features

### For Customers:
- **Instant QR Counter Connection**: Auto-detects counter via `?shopId=SHOP-A001` or built-in QR code scanner.
- **Multi-Document Uploader**: Drag & drop PDF, DOCX, PPTX, JPG, PNG with auto-detection of page counts.
- **✨ One-Click Sample Files**: Instant preloaded documents for instant demonstration and testing.
- **Granular Print Customization**:
  - Color Mode: B&W vs Full Color
  - Sides: Single Sided vs Double Sided (Duplex)
  - Paper Size: A4, A3, A5, Letter
  - Paper Quality: Normal (75 GSM), Premium Bond (100 GSM), Glossy Photo (180 GSM)
  - Page Range: All Pages or Custom ranges (e.g. `1-5, 8, 10-12`)
  - Copies: Stepper `[-] [ 1 ] [+]`
  - Finishing: Corner Staple, Spiral Binding, Soft Thermal Book Binding
  - Protection: Waterproof Gloss Lamination
- **Live Itemized Price Breakdown**: Instant subtotal, paper upgrades, binding, lamination, and shop service fee.
- **Interactive Payment Gateway Simulation**:
  - UPI Apps (Google Pay, PhonePe, Paytm, BHIM)
  - Dynamic UPI QR code with real-time countdown timer
  - Credit / Debit Card form with card formatting
  - Net Banking with popular banks
  - Sandbox test controls: `⚡ Pay & Simulate Success` and `❌ Simulate Failure`
- **Celebration Confetti & Live Order Tracking**: Step-by-step progress timeline synchronized live via Server-Sent Events (SSE).
- **Printable Order Receipt**: Direct print docket for customer records.

### For Print Shop Owners:
- **Real-Time Live Dashboard**:
  - Today's verified revenue
  - Printing queue count
  - Ready for pickup count
  - Total registered orders
- **Audio Chime Alerts**: Pleasant double-ding alert on incoming orders (with mute toggle).
- **1-Click Workflow Controls**:
  - `[Accept Order]` ➔ `[Start Printing]` ➔ `[Mark as Ready]` ➔ `[Complete Order]`
- **WhatsApp Customer Shortcut**: 1-click ready-notification sent directly to customer's WhatsApp.
- **Live Rate Manager**: Edit B&W/Color page rates, GSM upgrades, binding, lamination, and service fee. Changes broadcast live to customer screens!
- **Printable QR Standee Generator**: Formatted tent card for A4/A5 counter displays with customer instructions.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti, QRCode, Web Audio API synthesizer.
- **Backend**: Node.js, Express, Multer (file uploads), PDF page counter (`pdf-parse`), UUID.
- **Real-time Sync**: Server-Sent Events (SSE) `/api/events`.

---

## 🏃 Running the Application

### 1. Start Backend Server (Port 5000)
```bash
cd server
npm start
```
*Runs on `http://localhost:5000`*

### 2. Start Frontend Client (Port 5173)
```bash
cd client
npm run dev
```
*Open `http://localhost:5173/` in your browser*

### 3. Or run together from root:
```bash
npm run server
npm run client
```

---

## 🧪 Testing the Live Workflow

1. Visit `http://localhost:5173/`.
2. Click **✨ One-Click Sample Files** to instantly populate student documents.
3. Change print settings (e.g. Spiral Binding, Bond Paper, Lamination) and inspect the **Live Price Breakdown**.
4. Click **Enter Details & Pay**, enter your details, and in the Payment Gateway click **⚡ Pay & Simulate Success**.
5. Observe the Confetti and live order progress tracker.
6. Open **Shop Admin** from the navbar, locate the new order, click **Start Printing**, then **Mark as Ready**.
7. Return to the customer tracker or use **Track Order** to watch the status update live!
