import { createServer, Response } from "miragejs";

const mockAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const mockRefreshToken = "f81d4fae-7dec-11e9-b911-8baf1e6355a7";
const mockRefreshAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.gCtyCNK1GbhBXIG_gIlb8HpB5xl4_wlivgly0yN3na8";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.post("/login", (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        if (username === "user1" && password === "123456") {
          return new Response(200, {}, {
            user: {
              id: 1,
              name: "John Doe",
              email: "user1@example.com",
              roles: ["user"],
            },
            accessToken: mockAccessToken,
            refreshToken: mockRefreshToken,
          });
        } else {
          return new Response(401, {}, { error: "Invalid credentials" });
        }
      });

      this.post("/refresh", (schema, request) => {
        const { refreshToken } = JSON.parse(request.requestBody);
        if (refreshToken === mockRefreshToken) {
          return new Response(200, {}, {
            accessToken: mockRefreshAccessToken,
          });
        } else {
          return new Response(401, {}, { error: "Invalid refresh token" });
        }
      });
    },
  });

  return server;
}
