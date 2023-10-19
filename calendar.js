var calendar;

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'today prev,next',
    },
    locale: 'es',
    navLinks: true,
    dayMaxEvents: true,
    events: [],
  });

  calendar.render();
});

function cambiarHorario() {
  var seleccion = document.getElementById('opciones').value;

  var archivo = seleccion + '.json';
  calendar.setOption('events', archivo);
}
