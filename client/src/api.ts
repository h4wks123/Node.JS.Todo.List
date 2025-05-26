type TodoItem = {
  todo_list_ID: number;
  todo_list_text: string;
};

export async function fetchTodoList(
  setTodoListValues: React.Dispatch<React.SetStateAction<TodoItem[]>>
) {
  try {
    const response = await fetch("http://localhost:5000/todo_list_read");
    if (!response.ok) {
      throw new Error("Could not connect to the database");
    }
    const todoListValues = await response.json();
    setTodoListValues(todoListValues);
    console.log(todoListValues);
  } catch (err) {
    console.error(err);
  }
}

export async function insertTodoList(inputValue: string) {
  try {
    const response = await fetch("http://localhost:5000/todo_list_insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo_list_text: inputValue }),
    });

    if (!response.ok) {
      throw new Error("Failed to insert new todo!");
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTodoList(todoListID: number) {
  try {
    const response = await fetch("http://localhost:5000/todo_list_delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo_list_id: todoListID }),
    });
    if (!response.ok) {
      throw new Error("Failed to delete todo message!");
    }
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
