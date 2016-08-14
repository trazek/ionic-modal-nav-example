import template from './nextBase.html';

class NextBaseController {
    constructor($ionicHistory, IonicModalNavService) {
        'ngInject';
    
        this.IonicModalNavService = IonicModalNavService;
    }

    $onInit() {}
}

export const NextBaseComponent = {
    name: 'nextBase',
    def: {
        controller: NextBaseController,
        template,
        bindings: {}
    }
};