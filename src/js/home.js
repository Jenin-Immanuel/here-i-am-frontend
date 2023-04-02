import { getCookie, resolveQuery, deleteCookie } from "./utils";

const head = document.querySelector("[data-head-name]");
const logoutButton = document.querySelector("[data-logout-button]");

document.addEventListener("DOMContentLoaded", async () => {
  let data;
  data = await resolveQuery(`
  query {
    me {
      name
      email
    }
  }
  `);

  console.log(data);
  if (data != null) {
    head.innerText = "Welcome: " + data.data.me.name;
  }

  if (getCookie("accessToken") === null) {
    logoutButton.style.display = "none";
  }
  console.log("Hello");
});

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (getCookie("accessToken") === "") {
    alert("Session already expired");
    window.location = "/";
    return;
  }
  deleteCookie("accessToken");
  alert("Loggedout Successfully");
  window.location = "/";
});
