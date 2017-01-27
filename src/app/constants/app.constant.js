(function() {
    'use strict';

    angular.module('parkopoly')
        .constant('appConstant', {
            STATES: {

                LOGIN: {
                  URL: '/login',
                  NAME: ''
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
