!function(){
    "use strict";
    var shopList= ["cabbage","tomato","spinach","wheat grains","radish seeds","potatoes","sweetpotatoes","cauliflower"];    
    
    var shopListDetails= [ 
        { name:"cabbage", price:15, quan:1/2},
        { name:"tomato", price:70, quan:2},
        { name:"spinach", price:15, quan:1},
        { name:"wheat grains", price:35, quan: 1},
        { name:"radish seeds", price:67, quan: 2},
        { name:"potatoes", price:30, quan: 2},
        { name:"sweetpotatoes", price:35, quan: 2},
        { name:"cauliflower", price:50, quan: 1},
        

    ];

    angular.module('repApp', [])
    .controller('repController', repController);
        
    repController.$inject = ['$scope'];
    function repController($scope) {
        $scope.shopList = shopList;
        $scope.shopListDetails = shopListDetails;
    }
}();