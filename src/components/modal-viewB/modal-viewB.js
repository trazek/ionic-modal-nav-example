import template from './modal-viewB.html';

class ModalViewBController {
    constructor($ionicHistory, $state, IonicModalNavService) {
        'ngInject';

        this.IonicModalNavService = IonicModalNavService;
        console.log(">>> ", $state);
    }

    $onInit() {}

    goBack() {
        //Do any logic...
        this.IonicModalNavService.goBack({
            foo: "bar"
        });
    }
}

export const ModalViewBComponent = {
    name: 'modalViewB',
    def: {
        controller: ModalViewBController,
        template,
        bindings: {}
    }
};