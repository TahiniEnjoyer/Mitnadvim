// AJAX request to fetch companies from SQL
async function getCompanies() {

    const res = await fetch('/api/companies');
    return res.json();
  
  }
  
  // Render companies
  function renderCompanies(companies) {
  
    const container = document.getElementById('companies');
  
    companies.forEach(company => {
  
      const element = document.createElement('div');
      element.classList.add('company');
  
      element.innerHTML = `
        <h2>${company.name}</h2>
        <p>${company.description}</p>
        <a href="tel:${company.phone}">${company.phone}</a>
      `;
  
      container.appendChild(element);
  
    });
  
  }
  
  // Initialize 
  getCompanies()
    .then(companies => renderCompanies(companies));

    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("demo").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
      }