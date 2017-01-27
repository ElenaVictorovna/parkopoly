(function() {
  'use strict';

  angular
    .module('parkopoly')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$timeout'];

  function DashboardController($timeout) {

    var vm = this;

    vm.calendar = {};

    vm.currentDate = new Date();
    vm.currentDateString = moment().locale('fr').format('LLLL');

    var d = vm.currentDate.getDate(),
      m = vm.currentDate.getMonth(),
      y = vm.currentDate.getFullYear();

    // calendar.fullCalendar('changeView', 'basicWeek');

    /* config object */
    // vm.uiConfig = {
    //   calendar: {
    //     lang: 'da',
    //     height: '100%',
    //     editable: true,
    //     header: {
    //       //left: 'month basicWeek basicDay',
    //       //center: 'title',
    //       right: 'today prev,next'
    //     },
    //     eventClick: function(date, jsEvent, view) {
    //       vm.alertMessage = (date.title + ' was clicked ');
    //     },
    //     dayClick: vm.alertEventOnClick,
    //     eventDrop: vm.alertOnDrop,
    //     eventResize: vm.alertOnResize,
    //     eventRender: vm.eventRender
    //   }
    // };

    vm.uiConfig = {
      calendar: {
        lang: 'fr',
        dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        dayNamesShort: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        height: 700,
        slotDuration: '01:00:00',
        editable: false,
        defaultView: 'agendaWeek',
        allDaySlot: false,
        nowIndicator: true,
        minTime: '08:00:00',
        maxTime: '21:00:00',
        slotLabelFormat: 'H:mm',
        firstDay: 1,
        // timeFormat: 'hh:mm',
        header: {
          left: '',
          center: 'title',
          right: 'today prev,next'
        },
        columnFormat: 'dddd D'
        // viewRender: function(view){
        //   if(!vm.calendarEntity) {
        //     var calendar = uiCalendarConfig.calendars[this.calendarName];
        //     this.calendarEntity = calendar.fullCalendar.bind(calendar);
        //     this.onViewRendered({view: view});
        // }

      }
    };

    vm.events = [{
      title: 'All Day Event',
      start: new Date(y, m, 1)
    }, {
      title: 'Long Event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2)
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d - 3, 16, 0),
      allDay: false
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d + 4, 16, 0),
      allDay: false
    }, {
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false
    }, {
      title: 'Click for Google',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/'
    }];

    vm.eventSources = [{
      events: vm.events
    }];


  }

})();
