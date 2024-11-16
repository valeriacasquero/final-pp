fetch('./componentes/footer.html')
.then(response => {
  if (!response.ok) throw new Error('Error al cargar el pie de página');
  return response.text();
})
.then(data => {
  document.getElementById('footer-container').innerHTML = data;
})
.catch(error => console.error(error));