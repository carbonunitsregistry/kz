
let companies = JSON.parse(localStorage.getItem('companies') || '[]');

function addCompany() {
  const name = document.getElementById('companyName').value;
  const id = document.getElementById('companyID').value;
  if (!name || !id) return;
  companies.push({ name, id });
  localStorage.setItem('companies', JSON.stringify(companies));
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
