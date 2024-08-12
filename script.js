// Initialize the queue
let queue = [];

// Function to update the queue display
function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = ''; // Clear the current list
    queue.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        queueList.appendChild(li);
    });
}

// Function to enqueue an item
function enqueue() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();
    if (newItem) {
        queue.push(newItem);
        itemInput.value = ''; // Clear the input
        updateQueueDisplay();
    } else {
        alert('Please enter an item.');
    }
}

// Function to dequeue an item
function dequeue() {
    if (queue.length > 0) {
        queue.shift(); // Remove the first item from the queue
        updateQueueDisplay();
    } else {
        alert('Queue is empty.');
    }
}
