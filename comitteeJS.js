function addMember() {
    const nameInput = document.getElementById('memberName');
    const roleInput = document.getElementById('memberRole');
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();

    if (name === '' || role === '') {
      alert('Please enter both name and role.');
      return;
    }

    const tableBody = document.getElementById('committeeTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td>${name}</td>
      <td>${role}</td>
      <td>
        <button id="actbutton" onclick="editMember(this)">Edit</button>
        <button id="actbutton" onclick="deleteMember(this)">Delete</button>
      </td>
    `;

    tableBody.appendChild(newRow);

    nameInput.value = '';
    roleInput.value = '';
  }

  function editMember(button) {
    const row = button.parentNode.parentNode;
    const nameCell = row.children[0];
    const roleCell = row.children[1];

    const newName = prompt('Enter new name:', nameCell.textContent);
    const newRole = prompt('Enter new role:', roleCell.textContent);

    if (newName) nameCell.textContent = newName;
    if (newRole) roleCell.textContent = newRole;
  }

  function deleteMember(button) {
    const row = button.parentNode.parentNode;
    row.remove();
  }