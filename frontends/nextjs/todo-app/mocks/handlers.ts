import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:8080/api/TodoItem", () => {
    return Response.json([{ id: 1, isComplete: false, name: "Test" }]);
  }),
  http.get("http://localhost:8080/api/TodoItem/*", () => {
    return Response.json({ id: 1, isComplete: false, name: "Test" });
  }),
];
