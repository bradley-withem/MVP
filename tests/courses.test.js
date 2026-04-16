const request = require("supertest");
const app = require("../app");

describe("Courses API", () => {
  test("GET /courses should return 200", async () => {
    const res = await request(app).get("/courses");
    expect(res.statusCode).toBe(200);
  });
});