"use client";

import { useEffect, useState } from "react";
import { TodoItemApi, TodoItemModel, Configuration } from "ts-api";

const todoItemApi = new TodoItemApi(
  new Configuration({ basePath: "http://localhost:8080" })
);

const getTodoItems = async () => {
  const response = await todoItemApi.apiTodoItemGet();
  // const response = await todoItemApi.apiTodoItemGet({ isComplete: false });

  return response;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<TodoItemModel[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getTodoItems().then((todos) => {
      console.log("response: ", todos);
      setItems(todos);
      setIsLoading(false);
    });
  }, []);

  // const items = [{ id: 1, isComplete: false, name: "Test" }];

  const openTodo = () => {
    console.log("open");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading && (
        <ul role="list" className="divide-y divide-gray-100 w-full">
          <li className="flex justify-between bg-white gap-x-6 p-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Loading
                </p>
              </div>
            </div>
          </li>
        </ul>
      )}
      <ul role="list" className="divide-y divide-gray-100 w-full">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between bg-white gap-x-6 p-5 m-2"
            onClick={openTodo}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </p>
                {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {item.description}
                </p> */}
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              {item.isComplete ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-sm leading-5 text-gray-900">Complete</p>
                </div>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  </div>
                  <p className="text-sm leading-5 text-gray-900">To do</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
