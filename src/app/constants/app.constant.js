(function() {
    'use strict';

    angular.module('parkopoly')
        .constant('appConstant', {
            STATES: {

                LOGIN: {
                  URL: '/login',
                  NAME: 'login'
                },

                CONTACTS: {
                  URL: '/contacts',
                  NAME: 'contacts'
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
            },


            FOLDER:{
                IMAGES: 'assets/images/'
            }

        });
})();
