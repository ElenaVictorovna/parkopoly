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

        mission.title = 'hello';
        mission.end = mission.stop;

        if (mission.description.missionStatus === appConstant.MISSION_STATUS.ONGOING) {
          mission.className = 'active_mission';
        } else if (mission.description.missionStatus === appConstant.MISSION_STATUS.NOT_ASSIGNED) {
          mission.className = 'unassigned_mission';
        }

      });
    }

    return factory;
  }
})();
