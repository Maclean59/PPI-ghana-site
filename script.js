const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
	const closeMenu = () => {
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Open menu");
		primaryNav.classList.remove("is-open");
	};

	menuToggle.addEventListener("click", () => {
		const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
		menuToggle.setAttribute("aria-expanded", String(!isExpanded));
		menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
		primaryNav.classList.toggle("is-open", !isExpanded);
	});

	primaryNav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 680) {
			closeMenu();
		}
	});
}

document.querySelectorAll("[data-year]").forEach((year) => {
	year.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll("[data-reveal]");

if (
	revealItems.length &&
	"IntersectionObserver" in window &&
	!window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
	document.documentElement.classList.add("motion-ready");
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15, rootMargin: "0px 0px -24px 0px" });

	revealItems.forEach((item) => revealObserver.observe(item));
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(contactForm);
		const subject = `Website enquiry: ${formData.get("topic")}`;
		const body = [
			`Name: ${formData.get("name")}`,
			`Email: ${formData.get("email")}`,
			`Topic: ${formData.get("topic")}`,
			"",
			formData.get("message"),
		].join("\n");
		const mailto = `mailto:info@ppighana.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		const status = document.querySelector("#form-status");
		status.textContent = "Your email app will open with your message addressed to info@ppighana.org.";
		window.location.href = mailto;
	});
}
