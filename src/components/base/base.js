import template from './base.html';

class BaseController {
    constructor($ionicHistory, IonicModalNavService) {
        'ngInject';

        this.IonicModalNavService = IonicModalNavService;
        
        this.IonicModalNavService.onClose((data) => {
            console.log(">>> reacting to closing", data);
        });
    }

    $onInit() {}
}

export const BaseComponent = {
    name: 'base',
    def: {
        controller: BaseController,
        template,
        bindings: {}
    }
};