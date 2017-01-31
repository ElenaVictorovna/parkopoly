(function() {
  'use strict';

  var dayNamesFr = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['uiCalendarConfig', 'backendApiFactory'];

  function DashboardController(uiCalendarConfig, backendApiFactory) {

    var vm = this;

    vm.calendar = {};

    vm.currentDate = new Date();
    vm.currentDateString = moment().locale('fr').format('dddd Do MMMM YYYY');
    vm.eventSources = [];

    backendApiFactory.getEventList()
      .then(function(events) {
        vm.eventSources.push({
          events: events
        });

      });

    vm.prev = function() {
      uiCalendarConfig.calendars['dashboardCtrl.calendar'].fullCalendar('prev');
    };
    vm.next = function() {
      uiCalendarConfig.calendars['dashboardCtrl.calendar'].fullCalendar('next');
    };
    vm.today = function() {
      uiCalendarConfig.calendars['dashboardCtrl.calendar'].fullCalendar('today');
    };

    vm.uiConfig = {
      calendar: {
        lang: 'fr',
        dayNames: dayNamesFr,
        height: 700,
        slotDuration: '01:00:00',
        editable: false,
        defaultView: 'agendaWeek',
        allDaySlot: false,
        nowIndicator: true,
        minTime: '08:00:00',
        maxTime: '21:00:00',
        slotLabelFormat: 'H[h]mm',
        firstDay: 1,
        header: false,
        columnFormat: 'dddd \r\n D',
        displayEventTime: false,
        viewRender: function(view) {

          setDateRange(view);
          customizeColumnHeader(view);

        },
        eventRender: function(event, element){

          //add extra class to the active events in order to show them with different bg
          if (event.active) {
            element.addClass('active_event')
          }
        }
      }
    };

    function setDateRange(view) {
      vm.intervalStartDay = view.intervalStart.date();
      vm.intervalStartMonth = view.intervalStart.locale('fr').format('MMMM');

      // we get a day before because intervalEnd keeps the next day after real end day
      var dayBeforeIntervalEnd = view.intervalEnd.add(-1, 'days');
      vm.intervalEndDay = dayBeforeIntervalEnd.date();
      vm.intervalEndMonth = dayBeforeIntervalEnd.locale('fr').format('MMMM');
    }

    function customizeColumnHeader(view) {
      var angularEl, date;
      angular.element(view.el).find('th').each(function() {
        angularEl = angular.element(this);
        if ( angularEl.hasClass('fc-axis') ) {
          return;
        }
        date = moment(angularEl.data('date'));
        angularEl.html(buildDateColumnHeader(date));
      });
    }

    function buildDateColumnHeader(date) {
      var container = document.createElement('div');
      var ddddFormatWrapper = document.createElement('div');
      var DFormatWrapper = document.createElement('span');
      ddddFormatWrapper.textContent = date.format('dddd');
      DFormatWrapper.textContent = date.format('D');
      container.appendChild(ddddFormatWrapper);
      container.appendChild(DFormatWrapper);
      return container;
    }


  }

})();
