// Ensure the script runs after the DOM is fully loaded
window.onload = function () {
  const button = document.getElementById("myButton");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.textContent = "Hello from JavaScript!";
  });
};
