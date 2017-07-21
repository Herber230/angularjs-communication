(function(){

    'use strict';

    angular.module('app.ejemplo').service('PersonaService', serviceController);

    serviceController.$inject = ['$http', 'AppConfig'];

    function serviceController($http, AppConfig)
    {
        var sv = this;

        sv.getCollection = function()
        {
            return $http({
                method: 'GET',
                url: AppConfig.baseUrl + 'persona'
            });
        };

        sv.save = function(data)
        {
            return $http({
                method: 'POST',
                url: AppConfig.baseUrl + 'persona',
                data: data
            });
        };

        return sv;
    };


})();