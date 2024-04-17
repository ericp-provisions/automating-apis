import { expect, test, it } from "vitest";
import { TodoItemApi, TodoItem, Configuration } from "typescript-openapi";

const todoItemApi = new TodoItemApi(
  new Configuration({ basePath: "http://localhost:8080" })
);
const getTodoItems = async () => {
  const response = await todoItemApi.apiTodoItemGet();

  return response;
};

const getTodoItemById = async (id: number) => {
  const response = await todoItemApi.apiTodoItemIdGet({ id: id });

  return response;
};

it("fetch todo item list", async () => {
  const result = await getTodoItems();

  expect(result).toEqual([{ id: 1, isComplete: false, name: "Test" }]);
});

it("fetch todo item by id", async () => {
  const result = await getTodoItemById(1);

  expect(result).toEqual({ id: 1, isComplete: false, name: "Test" });
});
