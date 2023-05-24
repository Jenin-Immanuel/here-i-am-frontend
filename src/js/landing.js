const chatForm = document.querySelector("[data-chat-form]");
console.log(chatForm);

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const question = e.target.userquestion.value;
  alert("You are being redirected to CV Generation");
  if (question === "Generate CV") {
    window.location.href = "/cvform.html";
  }
});
