import { test, expectTypeOf } from "vitest";
import { TodoItemModel } from "ts-api";
import { mock, instance } from "ts-mockito";

test("TodoItem model interface", () => {
  // what the application is currently expecting
  interface TestModel {
    id?: number;
    name?: string;
    isComplete?: boolean;
  }

  //   interface TestModel {
  //     id?: number;
  //     name?: string;
  //     isComplete?: boolean;
  //     author?: string;
  //   }

  const mockedModel = mock<TodoItemModel>();
  const model = instance(mockedModel);

  expectTypeOf(model).toEqualTypeOf<TestModel>();
});
