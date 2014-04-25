var app = angular.module('stayClassyPc', []);

app.constant('scAuth', {
  baseUrl: 'http://www.stayclassy.org/api1/',
  token: 'HOrZfn1emVn9bWpyvojz',
  cid: 13512
});

/**
 * scOptions
 *
 * Value service to hold our query options, pulls straight fundraiser feed by default.
 * Extend this to add option variables.
 */
app.value('scOptions', {
  queryType: 'fundraisers'
});

/**
 * percent
 *
 * Quick filter to calculate percentage of donation.
 */
app.filter('percent',function() {
  return function(goal, contributed) {
    if(goal === 0) {
      return '';
    }
    var percentage = (contributed/goal)*100;
    percentage.toFixed();
    return percentage + '%';
  };
});

/**
 * scFetch
 *
 * A factory to compile our options service and run out http request Stay Classy.
 */
app.factory('scFetch', function($http, scAuth, scOptions) {
  return {
    scGet: function() {
      var scHttpRequest = scAuth.baseUrl + scOptions.queryType + '?cid=' + scAuth.cid + '&token=' + scAuth.token;
      var promise =
  $http.get(scHttpRequest).then(function(res) {
        return res.data;
      });
      return promise;
    }
  }
});

/**
 * ScListingController
 *
 * Simple controller to inject our returned fundraisers array to scope.
 */
app.controller('ScListingController', ['$scope', 'scFetch', function($scope, scFetch){
  scFetch.scGet().then(function(scData){
    $scope.fundraisers = scData.fundraisers;
  });
  console.log($scope);
}]);
