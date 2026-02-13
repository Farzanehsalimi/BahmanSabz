import http from "./httpService";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_AUTH === "true";

export async function loginReq(payload) {
  if (USE_MOCK) {
    console.log("MOCK LOGIN ACTIVE - Any credentials work!");
    return mockLogin(payload);
  }
  const { data } = await http.post("/auth/login", payload);
  return data;
}

// MOCK LOGIN
function mockLogin(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        username: payload.username || "user",
        token: `mock-jwt-token-${Date.now()}`,
      });
    }, 800);
  });
}
