function showAlert() {
  alert("Welcome to PPI Ghana! Explore our research and policy initiatives.");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }
  alert("Thank you for contacting us, " + name + "!");
  return true;
}

const button = document.getElementById("learn-more");
const section = document.getElementById("more-info");

if(button && section) {
button.addEventListener("click", () => {
  section.classList.toggle("show");
  button.textContent = section.classList.contains("show") ? "Show Less" : "Learn More";
});
}

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return false;
  }
  {
  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  return true;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  alert('Please enter a valid email address.');
  return false;
}
}
