const chatForm = document.querySelector("[data-chat-form]");
console.log(chatForm);

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const question = e.target.userquestion.value;
  if (question === "Generate CV") {
    alert("You are being redirected to CV Generation");
    window.location.href = "/cvform.html";
  }
});
