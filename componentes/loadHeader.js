fetch('./componentes/header.html')
.then(response => {
  if (!response.ok) throw new Error('Error al cargar el encabezado');
  return response.text();
})
.then(data => {
  document.getElementById('header-container').innerHTML = data;
})
.catch(error => console.error(error));