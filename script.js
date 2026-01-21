// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.style.display = isOpen ? "none" : "block";
});

// Close mobile nav on click
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.style.display = "none";
  });
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Fake form submit (frontend only)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const privacy = document.getElementById("privacy").checked;

  if (!name || !email || !message || !privacy) {
    statusEl.textContent = "Compila i campi obbligatori e accetta la privacy.";
    return;
  }

  // Qui puoi integrare: Formspree / Netlify Forms / endpoint WP / API custom
  statusEl.textContent = "Messaggio pronto! ";
  form.reset();
});
