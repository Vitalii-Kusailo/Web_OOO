// Get elements
const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingList = document.getElementById('shoppingList');

// Add new item
addItemBtn.addEventListener('click', function() {
    const newItem = newItemInput.value.trim();
    if (newItem !== "") {
        const listItem = document.createElement('li');
        const itemText = document.createElement('span');
        itemText.textContent = newItem;

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this item?')) {
                shoppingList.removeChild(listItem);
            }
        });

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            const updatedItem = prompt('Edit item:', itemText.textContent);
            if (updatedItem !== null && updatedItem.trim() !== "") {
                itemText.textContent = updatedItem;
            }
        });

        listItem.appendChild(itemText);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        shoppingList.appendChild(listItem);

        // Clear input field and set focus
        newItemInput.value = '';
        newItemInput.focus();
    }
});
