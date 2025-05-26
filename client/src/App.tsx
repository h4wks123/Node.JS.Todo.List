import { useEffect, useState } from "react";
import { fetchTodoList, insertTodoList, deleteTodoList } from "./api";

type TodoItem = {
  todo_list_ID: number;
  todo_list_text: string;
};

function App() {
  let [todoListValues, setTodoListValues] = useState<TodoItem[]>([]);

  function insertTodoListValues() {
    const input = document.getElementById(
      "input_todo_list"
    ) as HTMLInputElement;
    const value = input?.value.trim();

    if (!value) return;

    insertTodoList(value).then(() => {
      fetchTodoList(setTodoListValues);
      input.value = "";
    });
  }

  async function deleteTodoListValues(todoListID: number) {
    await deleteTodoList(todoListID);
    await fetchTodoList(setTodoListValues);
  }

  useEffect(() => {
    fetchTodoList(setTodoListValues);
  }, []);

  return (
    <main className="bg-[#8EB6F3] w-dvw h-dvh flex justify-center items-center">
      <section className="bg-gray-200 w-[90%] max-w-[640px] flex flex-col items-center gap-10 m-10 rounded-2xl">
        <article className="bg-[#8AB2ED] w-[90%] mt-10 text-white text-xl font-bold p-4 rounded-3xl shadow-xl/45 shadow-[#8AB2ED]">
          Manage your <br /> time well!
        </article>
        <div className="w-[90%] flex justify-between gap-6">
          <input
            id="input_todo_list"
            className="bg-[#FEFEFF] w-[85%] h-10 rounded-md placeholder-gray-400 px-4"
            placeholder="test"
          />
          <button
            onClick={insertTodoListValues}
            className="bg-[#2F60AA] w-[15%] h-10 cursor-pointer rounded-md text-white font-bold"
          >
            ADD
          </button>
        </div>
        <ul className="w-[90%] flex flex-col gap-8 rounded my-2 mb-8">
          {todoListValues.map((item) => (
            <li className="flex gap-6 rounded-xl">
              <h6
                key={item.todo_list_ID}
                className="w-[85%] bg-white p-2 rounded-md text-gray-700"
              >
                {item.todo_list_text}
              </h6>
              <button
                onClick={() => deleteTodoListValues(item.todo_list_ID)}
                className="w-[15%] h-full p-2 rounded-md cursor-pointer bg-red-500"
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
