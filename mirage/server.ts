import { createServer, Response } from "miragejs";

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const refreshToken = "f81d4fae-7dec-11e9-b911-8baf1e6355a7";

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
            accessToken,
            refreshToken,
            tokenExpiration: Math.floor(Date.now() / 1000) + 60 * 15,
          });
        } else {
          return new Response(401, {}, { error: "Invalid credentials" });
        }
      });
    },
  });

  return server;
}
