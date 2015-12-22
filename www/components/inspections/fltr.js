angular.module('app')
  .filter('inspection_status', function () {
    return function (input, status) {
      return input.filter(function (inspection) {
        return inspection.status === status;
      });
    };
  });
