document.addEventListener('DOMContentLoaded', function() {
  var calendarioEl = document.getElementById('calendario');
  var calendario = new FullCalendar.Calendar(calendarioEl, {
      locale: 'pt-br'
  });
  calendario.render();

  // Capturando o formulário
  var form = document.querySelector('form');

  // Adicionando um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o comportamento padrão do formulário (recarregar a página)

      // Obtendo os valores do formulário
      var nomeEvento = document.getElementById('nomeEvento').value;
      var dataEvento = document.getElementById('dataEvento').value;

      // Verificando se ambos os campos estão preenchidos
      if (nomeEvento && dataEvento) {
          // Criando um objeto de evento
          var novoEvento = {
              title: nomeEvento,
              start: dataEvento, // A data já está no formato correto (yyyy-mm-dd)
              allDay: true // Evento de dia inteiro
          };

          // Adicionando o evento ao calendário
          calendario.addEvent(novoEvento);

          // Limpando os campos do formulário
          document.getElementById('nomeEvento').value = '';
          document.getElementById('dataEvento').value = '';
      } else {
          alert('Preencha todos os campos do formulário.');
      }
  });
});
