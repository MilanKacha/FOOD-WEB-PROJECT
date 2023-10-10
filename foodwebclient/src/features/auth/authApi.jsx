import Cookies from "js-cookie";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const res = await fetch("/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    // Set the JWT token in the cookie
    // console.log(data);
    Cookies.set("jwt", data.token, { secure: true });
    resolve({ data });
  });
}

//For LogIn Check user is available in data or not
export function logIn(logInInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(logInInfo),
        headers: { "content-type": "application/json" },
        withCredentials: true,
      });
      if (response.ok) {
        const data = await response.json();
        Cookies.set("jwt", data.token);
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function logOut() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/api/v1/users/logout");
      if (response.ok) {
        // If the server confirms the logout, remove the JWT token cookie
        Cookies.remove("jwt");
        localStorage.removeItem("jwt");
        localStorage.removeItem("currentOrder");
        resolve({ data: "success" });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
