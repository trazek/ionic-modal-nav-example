import template from './modal-viewB.html';

class ModalViewBController {
    constructor($ionicHistory, IonicModalNavService) {
        'ngInject';
        
        this.IonicModalNavService = IonicModalNavService;
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