(function(){

    'use strict';

    angular.module('app.ejemplo').controller('edicionController', controller);

    controller.$inject = ['PersonaService'];

    function controller(PersonaService)
    {
        var vm = this;

        function activate()
        {
            
        };

        vm.guardar = function()
        {
            PersonaService.save(vm.persona).then( 
                (responseSuccess)=>{
                    console.info("Persona guardada");
                }, (responseError)=>{
                    console.info("Error");
                } );
        };

        activate();
    };


})();