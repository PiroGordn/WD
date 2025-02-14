document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("D-D7cKAolsatKzytl");
});

function addstr() {
  const nameInput = document.getElementById('memberName');
  const storyInput = document.getElementById('story');
  const name = nameInput.value.trim();
  const story = storyInput.value.trim();

  if (name === '' || story === '') {
      alert('Please enter both name and story.');
      return;
  }

  const tableBody = document.getElementById('committeeTableBody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
      <td>${name}</td>
      <td>${story}</td>
      <td>
          <button id="actbutton" onclick="editstr(this)">Edit</button>
          <button id="actbutton" onclick="deletestr(this)">Delete</button>
      </td>
  `;

  tableBody.appendChild(newRow);

  sendEmail(name, story);
  nameInput.value = '';
  storyInput.value = '';
}

function sendEmail(name, story) {
  emailjs.send("service_0kfyit8", "template_8rk8kbg", 
    {
      member_name: name,
      message: story,
      recipient_email: "rudra.bokil241@vit.edu"
    })
    .then(function(response) 
    {
      alert("Story has been emailed successfully!");
    }, 
    function(error) 
    {
      alert("Failed to send email. Please try again.");
    });
}

function editstr(button) {
  const row = button.parentNode.parentNode;
  const nameCell = row.children[0];
  const storyCell = row.children[1];

  const newName = prompt('Enter new name:', nameCell.textContent);
  const newStory = prompt('Enter new story:', storyCell.textContent);

  if (newName) nameCell.textContent = newName;
  if (newStory) storyCell.textContent = newStory;
}

function deletestr(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}