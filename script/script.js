'use strict';

angular.module('mainApp', []).controller('mainCtrl', function($scope) {
    //By default all the products are displayed.
    $scope.Products = products.list;

    //Filter by maximum price
    $scope.priceFilter = function (product) {
        //get input the maximum price
        var inputPrice = document.getElementById('maximumPrice').value;

        //If the user does not fill the maximum price ==> Show all products with a price greater than or equal to 0.
        if(inputPrice==null || inputPrice=="")
            return (product.price >= 0);
        //If the user fill the maximum price ==> Show all products with a price lower or equal to maximumPrice.
        else
            return (product.price <= $scope.maximumPrice);
    }

    //Ascending / Descending order by title.
    $scope.orderBy = function(x) {
        if ($scope.myOrderBy === x)
            $scope.myOrderBy = '-' + x;
        else if ($scope.myOrderBy === '-' + x)
            $scope.myOrderBy = x;
        else
            $scope.myOrderBy = x;
    }
});