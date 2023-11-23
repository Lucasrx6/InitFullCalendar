document.addEventListener('DOMContentLoaded', function() {
    var calendarioEl = document.getElementById('calendario');
    var calendario = new FullCalendar.Calendar(calendarioEl, {

      locale: 'pt-br'
    });
    calendario.render();
  });