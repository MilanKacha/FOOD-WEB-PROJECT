export function createOrder(order) {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8081/api/v1/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    resolve({ data });
  });
}
