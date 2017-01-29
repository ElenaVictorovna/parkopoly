(function() {
  'use strict';

  var
    currentDate = moment(),
    d = currentDate.date(),
    m = currentDate.month(),
    y = currentDate.year();

  angular.module('parkopoly')
    .value('testData', {
      USER: {
        firstName: 'Arthur',
        lastName: 'Darde',
        fullName: 'Arthur Darde',
        email: 'fakeemail@gmail.com'
      },

      EVENTS: [{
        title: 'D',
        start: new Date(y, m, d, 15, 0),
        end: new Date(y, m, d, 16, 0),
        active: true,
        allDay: false
      }, {
        title: 'PU&D',
        start: new Date(y, m, d + 1, 11, 0),
        end: new Date(y, m, d + 1, 14, 0),
        active: false,
        allDay: false
      }, {
        title: 'NV',
        start: new Date(y, m, d - 1, 9, 0),
        end: new Date(y, m, d - 1, 11, 0),
        active: true,
        allDay: false
      }]

    });
})();
