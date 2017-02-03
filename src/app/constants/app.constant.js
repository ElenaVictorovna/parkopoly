(function() {
    'use strict';

    angular.module('parkopoly')
        .constant('appConstant', {
            STATES: {

                LOGIN: {
                  URL: '/login',
                  NAME: 'login'
                },

                MAIN: {
                  URL: '/',
                  NAME: 'main'
                },

                DASHBOARD: {
                  URL: 'dashboard',
                  NAME: 'main.dashboard'
                }

            },

            MISSION_STATUS: {
                FINISHED: 'finished',
                ONGOING: 'ongoing'
            }

        });
})();
