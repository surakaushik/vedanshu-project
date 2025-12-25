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
