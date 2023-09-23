
const groceriesItem = document.getElementsByClassName("grocery")[0];
const submitButton = document.getElementById("button");
const items = document.getElementById("items");
const user_input = document.getElementById("user");
user_input.addEventListener("keydown", function (event) {
  if (event.key == "Enter")
    addItem();
});

button.addEventListener("click", function() {
  addItem();
});

function addItem() {
  const userInput = user_input.value.trim();
  if (userInput !== "") {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    const itemText = document.createElement("span");
    itemText.className = "itemtext";
    itemText.textContent = userInput;

    const deleteIcon = document.createElement('i');
    deleteIcon.className = "fas fa-trash delete-icon";

    deleteIcon.addEventListener('click', function(){
      itemDiv.remove();
    });

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(deleteIcon);
    items.appendChild(itemDiv);

    user_input.value = "";
  }
}

function removeAllItems() {
  const resetText = document.getElementById("items");
  while (resetText.firstChild) {
    resetText.removeChild(resetText.firstChild);
  }
}

function createClearButton() {
  const resetButton = document.createElement('div');
  resetButton.className = 'removetext';

  const clearButton = document.createElement('button');
  clearButton.textContent = "Clear Text";
  clearButton.addEventListener('click', removeAllItems);

  resetButton.appendChild(clearButton);


  items.parentNode.appendChild(resetButton);
}

createClearButton();