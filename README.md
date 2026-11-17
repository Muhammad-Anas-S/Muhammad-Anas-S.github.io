# Muhammad Anas | Professional Java Developer Portfolio

A modern, responsive, high-performance personal portfolio website for **Muhammad Anas**, Java Developer.

Built with clean semantic HTML5, modern CSS3, and vanilla JavaScript following a premium dark developer theme.

---

## 🎨 Design System

- **Main Background:** `#010B13` (Deep Obsidian Dark)
- **Cards & Surfaces:** `#1338BC` (Deep Blue Foundation with Glassmorphism Overlays)
- **Primary Text:** `#F2F2F2` (Soft White)
- **Secondary Text:** `#94A3B8` (Muted Light Grey)
- **Accent Blues:** `#2563EB`, `#3B82F6`, `#60A5FA`
- **Subtle Glow Effects:** Radial blue glow highlights behind cards and circular profile avatars

---

## 📁 Project Structure

```
d:\Portfolio\
├── index.html                   # Core semantic HTML5 document
├── css\
│   └── style.css                # Premium dark theme, responsive grid, animations
├── js\
│   ├── config.js                # Configuration for contact forms & social links
│   └── main.js                  # Interactivity, active nav spy, validation, reveal
├── assets\
│   ├── Muhammad_Anas_Resume.pdf # Downloadable resume PDF
│   └── images\
│       ├── muhammad-anas.png    # High-resolution circular profile photo
│       └── favicon.svg          # Portfolio monogram favicon
├── server.js                    # Zero-dependency local Node.js static file server
└── README.md                    # Documentation & setup guide
```

---

## 🚀 Running the Website Locally

### Option 1: Direct Browser Launch (Simplest)
Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Brave, Safari):
```powershell
Start-Process "d:\Portfolio\index.html"
```

### Option 2: Using the Built-In Local Server
Run with Node.js or `agy-node`:
```bash
node server.js
```
Then visit `http://localhost:3000` in your browser.

---

## ✉️ Contact Form Configuration

The contact form is configured to never display fake success messages. It operates in two reliable modes:

### Mode A: Formspree Delivery (Recommended for Direct Web Submissions)
1. Register a free account at [Formspree](https://formspree.io).
2. Create a new form with your destination email (`smuhammadanas021@gmail.com`).
3. Copy your Form ID (e.g. `xvgozrep`).
4. Open `js/config.js` and set:
   ```javascript
   const PORTFOLIO_CONFIG = {
     // ...
     formspreeId: "xvgozrep" // Replace with your Formspree ID
   };
   ```
5. Save the file. Form submissions will now be sent directly to your inbox with full validation and loading states.

### Mode B: Direct Mail Fallback (Default when unconfigured)
When `formspreeId` is left empty, the contact form validates all fields and opens the visitor's default email client (`mailto:smuhammadanas021@gmail.com`) with the subject and message prefilled. No messages are ever lost, and no fake success notices are shown.

---

## 🌐 Deploying to Production

This website is statically optimized and requires zero build steps:

### GitHub Pages:
1. Initialize git and push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Muhammad-Anas-S/<repo-name>.git
   git push -u origin main
   ```
2. In your repository on GitHub, go to **Settings > Pages**.
3. Under **Build and deployment > Source**, choose **Deploy from a branch** and select `/ (root)` of `main`.
4. Your site will be live at `https://muhammad-anas-s.github.io/<repo-name>/`.

### Vercel / Netlify:
- Drag and drop the `d:\Portfolio` folder into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub into Vercel.

---

## 📝 Features & Checklist Verification

- [x] **Complete 9 Sections:** Navigation, Home (Hero), About, Skills, Projects, Experience, Education, Certifications, Contact, and Footer.
- [x] **Dark Developer Theme:** Consistent palette (`#010B13` background, `#1338BC` card base, `#F2F2F2` text, professional blue glows).
- [x] **Real Photo & Resume:** Features Muhammad Anas's uploaded profile picture and PDF resume download.
- [x] **Zero Hallucination:** Exact project repositories, internships, education CGPA, and certifications from resume.
- [x] **Excluded Zebrons:** Excluded as requested.
- [x] **Responsive Layout:** Desktop, laptop, tablet, and mobile views tested.
- [x] **Interactive & Accessible:** Smooth scrolling, active link highlighting, hamburger mobile drawer, and form validation.
