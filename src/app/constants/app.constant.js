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


            FOLDER:{
                IMAGES: 'assets/images/'
            }

        });
})();
