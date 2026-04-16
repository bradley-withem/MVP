const request = require("supertest");
const app = require("../app");

describe("Users API", () => {
  test("GET /users should return 200", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
  });
});