var my = angular.module('app',[]);


my.controller('personalController',['$scope',function($scope){

    var init = function (){
        $scope.dataValue = true;
        $scope.newVal = false;
        $scope.data='';
    };

    init();

    $scope.submitApplication = function (data) {
        $scope.dataVal = data;
        if(data && data.firstName && data.lastName && data.gender &&
            data.address1 && data.zipCode && data.phoneNumber &&
            data.emailId){
            $scope.dataValue = false;
            $scope.newVal = true;
        }
    };

    $scope.editApplication = function (dataVal) {
        $scope.dataValue = true;
        $scope.newVal = false;
        $scope.data = dataVal;
    };

    $scope.reset = function () {
         init();
    };

}]);
