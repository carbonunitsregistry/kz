
let companies = JSON.parse(localStorage.getItem('companies') || '[]');

function logAction(action) {
  const history = JSON.parse(localStorage.getItem('operationHistory') || '[]');
  history.push({ timestamp: new Date().toLocaleString(), action });
  localStorage.setItem('operationHistory', JSON.stringify(history));
}

function addCompany() {
  const name = document.getElementById('companyName').value;
  const id = document.getElementById('companyID').value;
  if (!name || !id) return;
  companies.push({ name, id });
  localStorage.setItem('companies', JSON.stringify(companies));
  logAction(`Создана компания ${name} (ID: ${id})`);
  renderCompanies();
}

function renderCompanies() {
  const list = document.getElementById('companyList');
  list.innerHTML = '';
  companies.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.name} (${c.id})`;
    list.appendChild(li);
  });
}
renderCompanies();
