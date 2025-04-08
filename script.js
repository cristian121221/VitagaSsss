document.addEventListener("DOMContentLoaded", () => {
    console.log("Página VitaGas cargada");
});
// Mostrar el modal de promoción cuando la página cargue
window.onload = function() {
    document.getElementById("modal-promocion").style.display = "flex";
  };
  
  // Mostrar el modal cuando se haga clic en el icono de anuncio
  document.getElementById("icono-anuncio").onclick = function() {
    document.getElementById("modal-promocion").style.display = "flex";
  };
  
  // Cerrar el modal cuando se haga clic en el ícono de cerrar
  document.getElementById("cerrar-modal").onclick = function() {
    document.getElementById("modal-promocion").style.display = "none";
  };
  