import { expect, it } from "vitest";
import { TodoItemApi, Configuration } from "ts-api";

const todoItemApi = new TodoItemApi(
  new Configuration({ basePath: "http://localhost:8080" })
);
const getTodoItems = async () => {
  const response = await todoItemApi.apiTodoItemGet();

  return response;
};

// const getCompleteTodoItems = async () => {
//   const response = await todoItemApi.apiTodoItemGet({ isComplete: true });

//   return response;
// };

const getTodoItemById = async (id: number) => {
  const response = await todoItemApi.apiTodoItemIdGet({ id: id });

  return response;
};

it("fetch todo item list", async () => {
  const result = await getTodoItems();
  expect(result).toEqual([
    { id: 1, isComplete: false, name: "Test" },
    { id: 2, isComplete: true, name: "Test2" },
  ]);
});

// it("fetch todo item list with query param", async () => {
//   const result = await getCompleteTodoItems();
//   expect(result).toEqual([{ id: 2, isComplete: true, name: "Test2" }]);
// });

it("fetch todo item by id", async () => {
  const result = await getTodoItemById(1);

  expect(result).toEqual({
    id: 1,
    isComplete: false,
    name: "Test",
  });
});
