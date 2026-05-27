/**
 * Ello Da Nang - Policy Site JavaScript
 * Functions: Table of Contents generator, FAQ accordion, back-to-top button, mobile menu
 */

document.addEventListener('DOMContentLoaded', function() {
  initTableOfContents();
  initBackToTop();
  initFaqAccordion();
  initMobileMenu();
  initScrollSpy();
});

/**
 * Generate Table of Contents from H2 and H3 headings
 */
function initTableOfContents() {
  const content = document.querySelector('.content');
  if (!content) return;

  const headings = content.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  const toc = document.querySelector('.table-of-contents');
  if (!toc) return;

  const tocList = document.createElement('ul');
  tocList.className = 'toc-list';

  headings.forEach((heading, index) => {
    // Add ID if not present
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }

    const level = parseInt(heading.tagName.substring(1));
    const li = document.createElement('li');
    li.className = `toc-level-${level}`;

    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });

  toc.appendChild(tocList);
}

/**
 * Back-to-Top button functionality
 */
function initBackToTop() {
  const button = document.querySelector('.back-to-top');
  if (!button) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });

  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * FAQ Accordion toggle
 */
function initFaqAccordion() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      this.setAttribute('aria-expanded', !isExpanded);

      if (answer && answer.classList.contains('faq-answer')) {
        if (isExpanded) {
          answer.setAttribute('hidden', '');
        } else {
          answer.removeAttribute('hidden');
        }
      }
    });

    // Keyboard support
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  if (!hamburger || !sidebar) return;

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    sidebar.classList.toggle('mobile-open');
  });

  // Close menu when a link is clicked
  const sidebarLinks = sidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      sidebar.classList.remove('mobile-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
      hamburger.classList.remove('active');
      sidebar.classList.remove('mobile-open');
    }
  });
}

/**
 * Scroll spy - highlight active TOC item based on scroll position
 */
function initScrollSpy() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  const headings = document.querySelectorAll('.content h2, .content h3');

  if (tocLinks.length === 0 || headings.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-50px 0px -50% 0px'
  });

  headings.forEach(heading => observer.observe(heading));
}

/**
 * Language toggle (if implemented later)
 * Currently Vietnamese only
 */
function initLanguageToggle() {
  // Reserved for future bilingual implementation
  const langButtons = document.querySelectorAll('[data-lang]');
  if (langButtons.length === 0) return;

  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Load saved preference
  const savedLang = localStorage.getItem('ello-policy-lang') || 'vi';
  setLanguage(savedLang);
}

function setLanguage(lang) {
  localStorage.setItem('ello-policy-lang', lang);

  // Implementation would go here
  // Hide/show content based on language
  console.log('Language set to:', lang);
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
