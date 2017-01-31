(function() {
  'use strict';

  var dayNamesFr = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$rootScope', '$mdDialog', 'uiCalendarConfig', 'missionService'];

  function DashboardController($rootScope, $mdDialog, uiCalendarConfig, missionService) {

    var vm = this;

    vm.calendar = {};

    vm.currentDateString = moment().locale('fr').format('dddd Do MMMM YYYY');
    vm.eventSources = [];

    $rootScope.showSpinner = true;
    missionService.getMissionList()
      .then(function(events) {
        console.log(events);
        $rootScope.showSpinner = false;
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
        eventLimit: true,
        slotLabelFormat: 'H[h]mm',
        firstDay: 1,
        header: false,
        columnFormat: 'dddd D',
        displayEventTime: false,
        viewRender: function(view) {
          setDateRange(view);
          customizeColumnHeader(view);
        },
        eventClick: showMissionDetails
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

    function showMissionDetails(event) {
      var content = 'Mission\'s details';
      $mdDialog.show({
        templateUrl: '/app/dialogs/baseDialog.html',
        clickOutsideToClose: true,
        locals: {
          content: content
        },
        controllerAs: 'dialog',
        controller: function ($mdDialog, content) {
          this.content = content;
          this.closeDialog = function() {
            $mdDialog.hide();
          };
        }
      });
    }


  }

})();
