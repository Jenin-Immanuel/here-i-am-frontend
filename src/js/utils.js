const url = "http://localhost:4000/graphql";

export const resolveQuery = async (query, variables) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${getCookie("accessToken")}`,
    },

    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
  const data = await res.json();
  return data;
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const deleteCookie = (cname) => {
  let name = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = name;
};
