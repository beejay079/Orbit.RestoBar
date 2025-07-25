// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Menu Filtering
function filterMenu(category) {
  const menuItems = document.querySelectorAll(".menu-item");
  const categoryButtons = document.querySelectorAll(".menu-category-btn");

  // Update active button
  categoryButtons.forEach((button) => {
    if (
      button.textContent.toLowerCase().includes(category) ||
      (category === "all" && button.textContent === "All")
    ) {
      button.classList.remove(
        "bg-gray-300",
        "hover:bg-amber-500",
        "hover:text-white"
      );
      button.classList.add("bg-amber-600", "text-white");
    } else {
      button.classList.remove("bg-amber-600", "text-white");
      button.classList.add(
        "bg-gray-300",
        "hover:bg-amber-500",
        "hover:text-white"
      );
    }
  });

  // Filter items
  menuItems.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Image Modal
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modal.classList.remove("hidden");
  modalImg.src = imgElement.src;
  modalImg.alt = imgElement.alt;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Form Submission
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    showToast("Your reservation has been submitted successfully!");
    this.reset();
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  showToast("Your message has been sent successfully!");
  this.reset();
});

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}

function hideToast() {
  document.getElementById("toast").classList.add("hidden");
}

// Scroll Animation
function checkScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Set minimum date for reservation to today
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("date").min = today;
});
