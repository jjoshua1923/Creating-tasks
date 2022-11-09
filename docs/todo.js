function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    var newButton = document.getElementById('buttonn');
    var forms = document.getElementById('todoForm');
    var oldList = document.getElementById('todoList');
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
    newItem.style.color = 'black';
    newItem.style.fontSize = 'bold';
    headline.style.color = 'black';
    headline.style.fontSize = 'bold';
    buttonn.style.color = 'gray';
    buttonn.style.backgroundColor = 'black';
    todoInput.value = "";





}