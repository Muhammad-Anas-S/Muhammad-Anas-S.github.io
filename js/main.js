/**
 * Muhammad Anas - Developer Portfolio JavaScript
 * Interactive functionality, navigation, animations, and form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initActiveNavSpy();
  initScrollReveal();
  initContactForm();
});

/* ===================================================================
   1. NAVBAR SCROLL EFFECT
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ===================================================================
   2. MOBILE NAVIGATION MENU
   =================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggleBtn || !navMenu) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', isOpen);
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close menu when clicking any nav link
  const navLinks = navMenu.querySelectorAll('.nav-link, .nav-resume-btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close menu on clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* ===================================================================
   3. ACTIVE NAVIGATION SECTION SPY
   =================================================================== */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 120; // Offset for header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial check
}

/* ===================================================================
   4. SCROLL REVEAL ANIMATIONS
   =================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // Reveal once
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not available
    revealElements.forEach(el => el.classList.add('active'));
  }
}

/* ===================================================================
   5. CONTACT FORM VALIDATION & HANDLING
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const statusBox = document.getElementById('formStatus');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  const clearErrors = () => {
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (input) input.classList.remove('invalid');
    });
    [nameError, emailError, subjectError, messageError].forEach(span => {
      if (span) span.textContent = '';
    });
    if (statusBox) {
      statusBox.className = 'form-status';
      statusBox.textContent = '';
      statusBox.style.display = 'none';
    }
  };

  // Reset errors when the form is reset
  form.addEventListener('reset', clearErrors);

  // Clear validation errors when user navigates away from Contact section via links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (link.getAttribute('href') !== '#contact') {
        clearErrors();
      }
    });
  });

  // Clear validation errors when user scrolls away from Contact section
  const contactSection = document.getElementById('contact');
  if (contactSection && 'IntersectionObserver' in window) {
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          clearErrors();
        }
      });
    }, { threshold: 0.05 });
    contactObserver.observe(contactSection);
  }

  // Realtime clear on typing or focus
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    const handleFieldInteraction = () => {
      input.classList.remove('invalid');
      const errEl = document.getElementById(`${input.id}Error`) || (input.id === 'fullName' ? nameError : null);
      if (errEl) errEl.textContent = '';
    };
    input.addEventListener('input', handleFieldInteraction);
    input.addEventListener('focus', handleFieldInteraction);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validate Full Name
    const nameVal = nameInput.value.trim();
    if (!nameVal) {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Please enter your full name.';
      isValid = false;
    } else if (nameVal.length < 2) {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Name must be at least 2 characters.';
      isValid = false;
    }

    // Validate Email
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      emailInput.classList.add('invalid');
      emailError.textContent = 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      emailInput.classList.add('invalid');
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate Subject
    const subjectVal = subjectInput.value.trim();
    if (!subjectVal) {
      subjectInput.classList.add('invalid');
      subjectError.textContent = 'Please enter a subject.';
      isValid = false;
    } else if (subjectVal.length < 3) {
      subjectInput.classList.add('invalid');
      subjectError.textContent = 'Subject must be at least 3 characters.';
      isValid = false;
    }

    // Validate Message
    const msgVal = messageInput.value.trim();
    if (!msgVal) {
      messageInput.classList.add('invalid');
      messageError.textContent = 'Please enter your message.';
      isValid = false;
    } else if (msgVal.length < 10) {
      messageInput.classList.add('invalid');
      messageError.textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Set Loading State
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner"></span>
      <span>Sending Message...</span>
    `;

    const config = window.PORTFOLIO_CONFIG || {};
    const formspreeId = (config.formspreeId || '').trim();
    const destinationEmail = config.email || 'smuhammadanas021@gmail.com';

    // If Formspree ID is configured, send through API
    if (formspreeId && formspreeId !== 'your_formspree_id') {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            subject: subjectVal,
            message: msgVal
          })
        });

        if (response.ok) {
          statusBox.className = 'form-status success';
          statusBox.textContent = 'Thank you! Your message has been sent successfully. Muhammad Anas will get back to you shortly.';
          statusBox.style.display = 'block';
          form.reset();
        } else {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || 'Server error occurred while sending message.');
        }
      } catch (err) {
        statusBox.className = 'form-status error';
        statusBox.textContent = `Unable to send message via form endpoint (${err.message}). You can also email directly to ${destinationEmail}.`;
        statusBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    } else {
      // Formspree not yet configured:
      // In accordance with instructions: Do NOT pretend that a message was sent if no delivery service is configured.
      // Instead, explain and trigger mailto with prefilled fields!
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;

        const mailtoUrl = `mailto:${destinationEmail}?subject=${encodeURIComponent('[Portfolio Contact] ' + subjectVal)}&body=${encodeURIComponent(
          `From: ${nameVal} (${emailVal})\n\nMessage:\n${msgVal}`
        )}`;

        statusBox.className = 'form-status info';
        statusBox.innerHTML = `
          <strong>Opening Your Email App:</strong> Form backend is in direct-mail mode. We are launching your email client with your message prefilled to <strong>${destinationEmail}</strong>. 
          <br><br>
          <a href="${mailtoUrl}" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; display: inline-flex; margin-top: 0.3rem;">
            Click here if email app didn't open
          </a>
          <br><small style="margin-top: 0.5rem; display: block; color: var(--text-muted);">
            (To configure direct web form submissions, set your Formspree ID in <code>js/config.js</code>).
          </small>
        `;
        statusBox.style.display = 'block';

        // Trigger mail client
        window.location.href = mailtoUrl;
      }, 600);
    }
  });
}
