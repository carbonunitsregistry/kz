
function logAction(action) {
  const history = JSON.parse(localStorage.getItem('operationHistory') || '[]');
  history.push({ timestamp: new Date().toLocaleString(), action });
  localStorage.setItem('operationHistory', JSON.stringify(history));
}

function issueUnits() {
  const companyID = document.getElementById('targetCompany').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const type = document.getElementById('unitType').value;
  const expiryYear = document.getElementById('expiryYear').value;
  if (!companyID || !quantity) return;

  let units = JSON.parse(localStorage.getItem('units') || '[]');
  const dateStr = new Date().toISOString().split('T')[0];

  for (let i = 0; i < quantity; i++) {
    const id = `${type}-${dateStr.replaceAll('-', '')}-${units.length + 1}`;
    units.push({
      id,
      issuedDate: dateStr,
      firstOwner: companyID,
      currentOwner: companyID,
      expiryYear
    });
    logAction(`Выпущена единица ${id} для компании ${companyID}`);
  }

  localStorage.setItem('units', JSON.stringify(units));
  renderUnits();
}

function renderUnits() {
  let units = JSON.parse(localStorage.getItem('units') || '[]');
  const list = document.getElementById('issuedUnits');
  list.innerHTML = '';
  units.forEach(u => {
    const li = document.createElement('li');
    li.textContent = `${u.id} → ${u.currentOwner} (до: ${u.expiryYear || '-'})`;
    list.appendChild(li);
  });
}

renderUnits();
