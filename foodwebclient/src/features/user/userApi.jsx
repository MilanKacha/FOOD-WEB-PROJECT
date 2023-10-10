import Cookies from "js-cookie";

export function fetchLoggedInUser() {
  return new Promise(async (resolve, reject) => {
    try {
      const token = Cookies.get("jwt") || localStorage.getItem("jwt");

      const res = await fetch("http://localhost:8081/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (!res.ok) {
        throw new Error(`Request failed with status`);
      }

      const data = await res.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const token = Cookies.get("jwt") || localStorage.getItem("jwt");
    const res = await fetch("http://localhost:8081/api/v1/users/updateMe", {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    resolve({ data });
  });
}
