
(function(){

    'use strict';

    angular.module('app.ejemplo').controller('listadoController', controller);

    controller.$inject = ['PersonaService'];

    function controller(PersonaService)
    {
        var vm = this;

        function activate()
        {
            cargarPersonas();
        };

        function cargarPersonas()
        {
            PersonaService.getCollection().then(
                (responseSuccess)=>{
                    vm.personas = responseSuccess.data;
                },(responseError)=>{

                }
            );
        };


        activate();
    };


})();