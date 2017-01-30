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
        email: 'fakeemail@gmail.com',
        picture: 'assets/images/user_img.png'
      }

    });
})();
