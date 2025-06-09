
function issueUnits() {
  const companyID = document.getElementById('targetCompany').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const type = document.getElementById('unitType').value;
  const expiryYear = document.getElementById('expiryYear').value;
  if (!companyID || !quantity) return;

  let units = JSON.parse(localStorage.getItem('units') || '[]');
  const dateStr = '2025-06-09';

  for (let i = 0; i < quantity; i++) {
    const id = `${type}-${dateStr.replaceAll('-', '')}-${units.length + 1}`;
    units.push({
      id,
      issuedDate: dateStr,
      firstOwner: companyID,
      currentOwner: companyID,
      expiryYear
    });
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
    li.textContent = `${u.id} → ${
      u.currentOwner
    } (до: ${u.expiryYear || '-'})`;
    list.appendChild(li);
  });
}

renderUnits();
