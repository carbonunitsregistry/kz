
function logAction(action) {
  const history = JSON.parse(localStorage.getItem('operationHistory') || '[]');
  history.push({ timestamp: new Date().toLocaleString(), action });
  localStorage.setItem('operationHistory', JSON.stringify(history));
}

function transfer() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const qty = parseInt(document.getElementById('qty').value);
  let units = JSON.parse(localStorage.getItem('units') || '[]');

  let count = 0;
  for (let u of units) {
    if (u.currentOwner === from && count < qty) {
      u.currentOwner = to;
      count++;
      logAction(`Перевод единицы ${u.id} от ${from} к ${to}`);
    }
  }

  localStorage.setItem('units', JSON.stringify(units));
  document.getElementById('transferLog').innerText = `Переведено: ${count}`;
}
