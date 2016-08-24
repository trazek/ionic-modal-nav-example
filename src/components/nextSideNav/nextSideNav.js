import template from './nextSideNav.html';

class NextSideNavController {
    constructor($ionicHistory, IonicModalNavService) {
        'ngInject';
    
        this.IonicModalNavService = IonicModalNavService;
    }

    $onInit() {}
}

export const NextSideNavComponent = {
    name: 'nextSideNav',
    def: {
        controller: NextSideNavController,
        template,
        bindings: {}
    }
};