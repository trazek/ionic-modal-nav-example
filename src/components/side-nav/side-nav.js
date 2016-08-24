import template from './side-nav.html';

class SideNavController {
    constructor($ionicSideMenuDelegate, IonicModalNavService) {
        'ngInject';

        this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.IonicModalNavService = IonicModalNavService;
        
        this.IonicModalNavService.onClose((data) => {
            console.log(">>> reacting to closing", data);
        });
    }

    $onInit() {}
}

export const SideNavComponent = {
    name: 'sideNav',
    def: {
        controller: SideNavController,
        template,
        bindings: {}
    }
};