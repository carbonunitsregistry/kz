
function renderHistory() {
  const list = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('operationHistory') || '[]');
  list.innerHTML = '';
  history.forEach((entry, i) => {
    const li = document.createElement('li');
    li.textContent = `${entry.timestamp} — ${entry.action}`;
    list.appendChild(li);
  });
}
renderHistory();
