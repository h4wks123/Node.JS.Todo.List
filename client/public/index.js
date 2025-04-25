let addTodoList = async () => {
  let inputValue = document.getElementById("todo-list-header__input").value;
  document.getElementById("todo-list-header__input").value = "";

  try {
    if (inputValue === "") {
      throw new Error("input value cannot be empty");
    }

    const response = await fetch("/addTodoList", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data: inputValue }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }

    displayTodoList();
  } catch (error) {
    console.error("Fetching add data has failed: ", error);
  }
};

let displayTodoList = async () => {
  let todoListOutput = document.getElementById("todo-list-outputs");

  try {
    const response = await fetch("/displayTodoList");
    const result = await response.json();

    todoListOutput.innerHTML = "";
    todoListOutput.innerHTML = result;
    
    console.log(result);
  } catch (error) {
    console.error("Fetching display data has failed: ", error);
  }
};

displayTodoList();
