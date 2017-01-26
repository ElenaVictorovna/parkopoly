(function() {
    'use strict';

    angular.module('parkopoly')
        .constant('appConstant', {
            STATES: {
                ROOT: '/',
                LOGIN: '/login',
                DASHBOARD: 'dashboard'
            },

            FOLDER:{
                IMAGES: 'assets/images/'
            },

            PLACE: {
                CUSTOMER: 'customer',
                CONCESSION: 'concession'
            },

            CAR_TYPE: {
                CUSTOMER: 'VC',
                NEW: 'VN',
                REPLACEMENT: 'VR'
            },

            MISSION_TYPE: {
                VN_DELIVERY: 5,
                PICKUP_VR: 1,
                DELIVERY_VR: 2,
                PICKUP: 3,
                DELIVERY: 4
            },

            USER_ROLE: {
              USER: 'USER',
              USER_ADMIN:'USER_ADMIN'
            },

            PDF: {
              DT_DOCUMENT: 'demande_travaux.pdf',
              CP_DOCUMENT: 'contrat_pret.pdf',
              FCT_DOCUMENT: 'facture.pdf',
              LIM_RSP_DOCUMENT: 'annexe_limitations_responsabilites.pdf',
              FINAL_DOCUMENT: 'rapport_transfert_final.pdf',
              OTHER_DOCUMENT: 'autre_document.pdf',
              DR_DOCUMENT: 'decharge_responsabilite.pdf'
            },

          UPLOAD_STATUS: {
            ONGOING: 'ONGOING',
            UPLOADED:'UPLOADED',
            FAILED:'FAILED'
          }
        });
})();
