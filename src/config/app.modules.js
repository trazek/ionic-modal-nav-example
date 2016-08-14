'use strict';

import {BaseComponent} from 'components/base/base';
import {NextBaseComponent} from 'components/nextBase/nextBase';

import {ModalViewAComponent} from 'components/modal-viewA/modal-viewA';
import {ModalViewBComponent} from 'components/modal-viewB/modal-viewB';

import 'ionic-modal-nav';

angular.module('app', [
    'ionic',
    'app.run',
    'app.components',
    'app.states',
    'IonicModalNav'
]);


angular.module('app.run', []);
angular.module('app.components', []);
angular.module('app.states', []);


//--- Components
angular.module('app.components').component(BaseComponent.name, BaseComponent.def);
angular.module('app.components').component(NextBaseComponent.name, NextBaseComponent.def);

angular.module('app.components').component(ModalViewAComponent.name, ModalViewAComponent.def);
angular.module('app.components').component(ModalViewBComponent.name, ModalViewBComponent.def);

