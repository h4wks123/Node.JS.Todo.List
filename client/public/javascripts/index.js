createTodoList = async () => {
  let inputValue = document.getElementById("todo-list-header__input").value;
  document.getElementById("todo-list-header__input").value = "";

  try {
    if (inputValue === "") {
      throw new Error(`Input must not be empty`);
    }

    const response = await fetch("/addTodoList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: inputValue }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
  } catch (error) {
    console.error("Fetching data Failed: ", error);
  }
};
