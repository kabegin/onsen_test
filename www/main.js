
ons.ready(function(){
    console.log('Onsen UI is ready!');
});
function btnClick(){
    var str =document.getElementById('text1').value;
    ons.notification.alert({
        'title':'Alert',
        'message':'Hello,'+str+'!!'
    });    
   
};
;;
angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"yamada", "score":11.11},
            {"name":"hayashi", "score":5.25},
            {"name":"tanahashi", "score":82.4},
            {"name":"yasuda", "score":55.21},
            {"name":"minami", "score":32.8},
            {"name":"yanagi", "score":72.2}
        ];
         $scope.today=new Date();
    }]);
function doc(){
     var modal = document.getElementById('modal');
  modal.toggle();
}    