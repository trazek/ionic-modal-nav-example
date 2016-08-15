import template from './modal-viewA.html';

class ModalViewAController {
    constructor($ionicHistory, $state, IonicModalNavService) {
        'ngInject';

        this.$ionicHistory = $ionicHistory;
        this.IonicModalNavService = IonicModalNavService;

        IonicModalNavService.onBack((data) => {
            console.log(">>> got the data from previous state", data);
        });
        
        console.log(">>> $state", $state);
    }

    $onInit() {}

    hide() {
        this.IonicModalNavService.hide({
            foo: "hiding"
        });
    }

    next(viewName) {
        this.IonicModalNavService.go('modal-viewB', {id: "Woot"});
    }
}

export const ModalViewAComponent = {
    name: 'modalViewA',
    def: {
        controller: ModalViewAController,
        template,
        bindings: {}
    }
};