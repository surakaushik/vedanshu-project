function addNotification() {
  const input = document.getElementById("notificationInput");
  const message = input.value.trim();

  if (message === "") {
    alert("Please enter a notification message");
    return;
  }

  const notificationList = document.getElementById("notificationList");

  const div = document.createElement("div");
  div.className = "notification";

  div.innerHTML = `
        <span>${message}</span>
        <div class="notification-actions">
            <span class="delete-btn" onclick="deleteNotification(this)">Delete</span>
        </div>
    `;

  notificationList.prepend(div);
  input.value = "";
}

function deleteNotification(element) {
  if (confirm("Are you sure you want to delete this notification?")) {
    element.closest(".notification").remove();
  }
}

function searchUser() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#userTable tbody tr");

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(input) ? "" : "none";
    });
}

function deleteUser(button) {
    if (confirm("Are you sure you want to delete this user?")) {
        button.closest("tr").remove();
    }
}

// function editUser(button) {
//     const row = button.closest("tr");

//     const name = prompt("Edit Name:", row.cells[0].innerText);
//     const email = prompt("Edit Email:", row.cells[1].innerText);
//     const contact = prompt("Edit Contact:", row.cells[2].innerText);

//     if (name && email && contact) {
//         row.cells[0].innerText = name;
//         row.cells[1].innerText = email;
//         row.cells[2].innerText = contact;
//     }
// }


document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("User details updated successfully!");
});
