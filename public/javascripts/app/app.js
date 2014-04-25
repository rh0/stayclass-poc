angular.module('stayClassyPc', []);

angular.module('stayClassyPc').controller('StayClassyListing', ['$scope', '$http', function($scope, $http){
http://www.stayclassy.org/api1/account-info?cid=13512&token=HOrZfn1emVn9bWpyvojz
  $http.get('http://www.stayclassy.org/api1/fundraiser-info?cid=13512&token=HOrZfn1emVn9bWpyvojz&eid=31404&fcid=314969')
    .success(function(data, status, headers, config){
      $scope.fundraiser = {
        url: data.fundraiser_url,
        donationUrl: data.donation_url,
        eventName: data.event_name,
        projectName: data.project_name,
        memberName: data.member_name,
        memberImg: data.member_image_medium
      }
    });
    console.log($scope);
}]);
