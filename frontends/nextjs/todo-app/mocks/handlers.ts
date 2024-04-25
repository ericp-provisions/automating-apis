import { http } from "msw";

export const handlers = [
  http.get("http://localhost:8080/api/TodoItem", ({ request }) => {
    // Construct a URL instance out of the intercepted request.
    const url = new URL(request.url);

    // Read the "isComplete" URL query parameter using the "URLSearchParams" API.
    const isComplete = url.searchParams.get("isComplete");

    const data = [
      { id: 1, isComplete: false, name: "Test" },
      { id: 2, isComplete: true, name: "Test2" },
    ];

    const results =
      isComplete === "true"
        ? data.filter((x) => x.isComplete == true)
        : isComplete === "false"
        ? data.filter((x) => x.isComplete == false)
        : data;

    return Response.json(results);
  }),
  http.get("http://localhost:8080/api/TodoItem/*", () => {
    return Response.json({ id: 1, isComplete: false, name: "Test" });
  }),
];
