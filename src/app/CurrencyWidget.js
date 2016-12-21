var _ = require('lodash');
module.exports = {
  template: require('./CurrencyWidget.html'),
  controller: function ($http,$scope) {
     $scope.rates = {};
        $http.get('http://api.fixer.io/latest?base=ZAR')
            .then(function(res) {
              debugger;
                $scope.rates = _.pick(res.data.rates,["CAD","USD","EUR"]);
                $scope.toType = $scope.rates.CAD;
                $scope.fromType = $scope.rates.USD;
                $scope.fromValue = 1;
                $scope.forExConvert();
            });
        $scope.forExConvert = function() {
            $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
            $scope.toValue = Math.round($scope.toValue* 100)/100;  
        };

  }
};
