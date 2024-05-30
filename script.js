function openMenu() {
  const nav = document.getElementById('navBar')
  nav.classList.toggle('open');
}

function downloadPDF() {
  var link = document.createElement('a');
  link.style.display = 'none';
  
  link.href = 'assets/CV/Cv - Testa Zeus.docx';
  
  link.download = 'Curriculum - Testa Zeus';
  
  document.body.appendChild(link);
  
  link.click();
  
  document.body.removeChild(link);
}

function copyEmail() {
  navigator.clipboard.writeText('zeusjtesta@gmail.com');
  alert('Copied email');
}