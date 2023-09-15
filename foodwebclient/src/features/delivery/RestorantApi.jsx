export function fetchAllRestorant() {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8081/api/v1/restorant");
    const data = await res.json();
    resolve({ data });
  });
}
