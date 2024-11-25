// Sample data for demonstration
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", address: "123 Elm St" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", address: "456 Oak St" },
    // Add more users as needed
];

function populateUserTable() {
    const userTable = document.getElementById("userTable");
    users.forEach(user => {
        const newRow = userTable.insertRow();
        newRow.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
    });
}

function editUser(userId) {
    // Implement the edit user functionality (could be a modal or redirect)
    alert(`Edit User with ID: ${userId}`);
}

function deleteUser(userId) {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex > -1) {
        users.splice(userIndex, 1);
        document.getElementById("userTable").innerHTML = "";
        populateUserTable();
    }
}

// Populate the table on load
window.onload = populateUserTable;
