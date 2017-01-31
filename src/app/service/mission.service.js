(function() {
  'use strict';

  angular.module('parkopoly')
    .factory('missionService', missionService);

  missionService.$inject = ['backendApiFactory', 'appConstant'];

  function missionService(backendApiFactory, appConstant) {
    var factory = {};

    factory.getMissionList = function() {
      return backendApiFactory.getMissionList()
        .then(function(missionList){
          transformMissionsToUiCalendarFormat(missionList);
          return missionList;
        });
    };

    function transformMissionsToUiCalendarFormat(missionList) {
      missionList.forEach(function(mission) {

        mission.title = mission.summary;
        mission.end = mission.stop;

        switch (mission.description.missionStatus) {
          case appConstant.MISSION_STATUS.ONGOING:
            mission.className = 'active_mission';
            break;
          case appConstant.MISSION_STATUS.NOT_ASSIGNED:
            mission.className = 'unassigned_mission';
            break;
          default:
            mission.className = 'inactive_mission';
        }

      });
    }

    return factory;
  }
})();
