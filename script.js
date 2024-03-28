function openMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}

function downloadPDF() {
  var link = document.createElement('a');
  link.style.display = 'none';
  
  link.href = '/assets/CV/CV.pdf';
  
  link.download = 'Curriculum - Testa Zeus';
  
  document.body.appendChild(link);
  
  link.click();
  
  document.body.removeChild(link);
}

function copyEmail() {
  let email = "zeusjtesta@gmail.com";

  navigator.clipboard.writeText(email);
  alert("Copied email");
}