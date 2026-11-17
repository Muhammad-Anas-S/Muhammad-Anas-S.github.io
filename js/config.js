/**
 * Muhammad Anas - Developer Portfolio Configuration
 * 
 * Contact Form Configuration:
 * To receive messages directly in your inbox:
 * 1. Go to https://formspree.io and create a free account.
 * 2. Create a new form with recipient: smuhammadanas021@gmail.com.
 * 3. Copy your Form ID (e.g. "xpznvgqw") and paste it below into `formspreeId`.
 * 
 * Note: If `formspreeId` is left blank, the form transparently informs the user
 * and opens their mail client (mailto:) with the prefilled message so no contact is ever lost!
 */
const PORTFOLIO_CONFIG = {
  name: "Muhammad Anas",
  title: "Java Developer",
  email: "smuhammadanas021@gmail.com",
  phone: "+91 8220643258",
  location: "Chennai, Tamil Nadu",
  socials: {
    github: "https://github.com/Muhammad-Anas-S",
    linkedin: "https://linkedin.com/in/muhammad-anas-s-49395a28a",
    leetcode: "https://leetcode.com/u/GEtXaA2KA3/"
  },
  // Set your Formspree form ID here (e.g. "myformid")
  formspreeId: "" 
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
