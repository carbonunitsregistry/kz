
function renderLog() {
  const units = JSON.parse(localStorage.getItem('units') || '[]');
  const table = document.getElementById('logTable');
  table.innerHTML = '';
  units.forEach((u, i) => {
    const row = `<tr>
      <td>${i + 1}</td><td>${u.id}</td><td>${u.issuedDate}</td>
      <td>${u.firstOwner}</td><td>${u.currentOwner}</td><td>${u.expiryYear || '-'}</td>
    </tr>`;
    table.innerHTML += row;
  });
}
renderLog();
