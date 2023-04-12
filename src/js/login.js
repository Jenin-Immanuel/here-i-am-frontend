import { getCookie } from "./utils";

const url = "http://localhost:4000/graphql/";

const signUpForm = document.querySelector("[data-signup-form]");
const loginForm = document.querySelector("[data-login-form]");

console.log(loginForm);
// Fields

// API requests
const resolveQuery = async (query, variables) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
  const data = await res.json();
  return data;
};

if (signUpForm !== null) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.uname.value;
    const email = form.email.value;
    const dob = form.dob.value;
    const gender = form.gender.value;
    const mobile = Number(form.mobile.value);
    const password = form.password.value;
    const confirm = form.confirmpassword.value;

    // Validate the password
    if (password.length < 6) {
      alert("Password is too short");
      return;
    }
    if (password.length > 50) {
      alert("Password is too long");
      return;
    }
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }

    console.log(name, email, dob, gender, mobile, password, confirm);

    const input = {
      name,
      email,
      password,
      dob,
      gender,
      mobile,
    };

    const data = await resolveQuery(
      `mutation($input: CreateUserInput!) {
            createUser(input: $input) {
                name,
                email,
                _id
            }
        }
    `,
      { input: input }
    );

    if (data.data !== null) {
      console.log(data.data);
      window.location = "/";
    } else {
      alert(data.errors[0].message);
    }
  });
}

if (getCookie("accessToken") !== "") {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    window.location = "/home.html";
  }
}

if (loginForm !== null) {
  loginForm.addEventListener("submit", async (e) => {
    console.log("Hello");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const input = {
      email,
      password,
    };

    const data = await resolveQuery(
      `
        mutation ($input: LoginInput!) {
          loginUser(input: $input)
        }
      `,
      { input: input }
    );
    if (data.data !== null) {
      document.cookie = `accessToken=${data.data.loginUser}`;
      alert("Logged in successfully");
      window.location = "/landingN.html";
    } else if (data.errors !== null) {
      alert("Password or email is incorrect");
    }
  });
}
