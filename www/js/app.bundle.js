/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(15);

	__webpack_require__(16);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _base = __webpack_require__(2);

	var _nextBase = __webpack_require__(4);

	var _sideNav = __webpack_require__(6);

	var _nextSideNav = __webpack_require__(8);

	var _modalViewA = __webpack_require__(10);

	var _modalViewB = __webpack_require__(12);

	__webpack_require__(14);

	angular.module('app', ['ionic', 'app.run', 'app.components', 'app.states', 'IonicModalNav']).config(function (IonicModalNavServiceProvider) {
	    //    IonicModalNavServiceProvider.setModalOptions({
	    //        backdropClickToClose: false
	    //    });
	});

	angular.module('app.run', []);
	angular.module('app.components', []);
	angular.module('app.states', []);

	//--- Components
	angular.module('app.components').component(_base.BaseComponent.name, _base.BaseComponent.def);
	angular.module('app.components').component(_nextBase.NextBaseComponent.name, _nextBase.NextBaseComponent.def);

	angular.module('app.components').component(_modalViewA.ModalViewAComponent.name, _modalViewA.ModalViewAComponent.def);
	angular.module('app.components').component(_modalViewB.ModalViewBComponent.name, _modalViewB.ModalViewBComponent.def);

	angular.module('app.components').component(_sideNav.SideNavComponent.name, _sideNav.SideNavComponent.def);
	angular.module('app.components').component(_nextSideNav.NextSideNavComponent.name, _nextSideNav.NextSideNavComponent.def);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BaseComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(3);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseController = function () {
	    function BaseController($ionicHistory, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, BaseController);

	        this.IonicModalNavService = IonicModalNavService;

	        this.IonicModalNavService.onClose(function (data) {
	            console.log(">>> reacting to closing", data);
	        });
	    }

	    _createClass(BaseController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return BaseController;
	}();

	var BaseComponent = exports.BaseComponent = {
	    name: 'base',
	    def: {
	        controller: BaseController,
	        template: _base2.default,
	        bindings: {}
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.IonicModalNavService.show('modal-viewA')\">Open Modal</button>\n        </div>\n        <div class=\"col\">\n            <button class=\"button button-positive\" ui-sref=\"next-base\">Next Base</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-energized\" ui-sref=\"side-nav\">To Side Nav</button>\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NextBaseComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nextBase = __webpack_require__(5);

	var _nextBase2 = _interopRequireDefault(_nextBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NextBaseController = function () {
	    function NextBaseController($ionicHistory, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, NextBaseController);

	        this.IonicModalNavService = IonicModalNavService;
	    }

	    _createClass(NextBaseController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return NextBaseController;
	}();

	var NextBaseComponent = exports.NextBaseComponent = {
	    name: 'nextBase',
	    def: {
	        controller: NextBaseController,
	        template: _nextBase2.default,
	        bindings: {}
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.IonicModalNavService.show('modal-viewA')\">Open Modal</button>\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SideNavComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sideNav = __webpack_require__(7);

	var _sideNav2 = _interopRequireDefault(_sideNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SideNavController = function () {
	    function SideNavController($ionicSideMenuDelegate, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, SideNavController);

	        this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
	        this.IonicModalNavService = IonicModalNavService;

	        this.IonicModalNavService.onClose(function (data) {
	            console.log(">>> reacting to closing", data);
	        });
	    }

	    _createClass(SideNavController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return SideNavController;
	}();

	var SideNavComponent = exports.SideNavComponent = {
	    name: 'sideNav',
	    def: {
	        controller: SideNavController,
	        template: _sideNav2.default,
	        bindings: {}
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<ion-side-menus enable-menu-with-back-views=\"true\">\n    <!-- Left menu -->\n    <ion-side-menu side=\"left\">\n        <ion-header-bar class=\"bar-assertive\">\n            <h1 class=\"title\">Left Menu</h1>\n        </ion-header-bar>\n\n        <ion-content>\n            <ion-list>\n                <ion-item ui-sref=\"next-side-nav\">\n                    To Side Nav State #1\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n\n    <ion-side-menu-content>\n        <ion-nav-bar class=\"bar-stable\">\n            <ion-nav-buttons side=\"left\">\n                <!-- Toggle left side menu -->\n                <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n            </ion-nav-buttons>\n        </ion-nav-bar>\n\n        <ion-view>\n            <ion-content class=\"has-header\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <button class=\"button button-positive\" ng-click=\"$ctrl.$ionicSideMenuDelegate.toggleLeft()\">Open Left</button>\n                    </div>\n                    <div class=\"col\">\n                        <button class=\"button button-energized\" ui-sref=\"base\">To Base State</button>\n                    </div>\n                </div>\n            </ion-content>\n        </ion-view>\n    </ion-side-menu-content>\n\n</ion-side-menus>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NextSideNavComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nextSideNav = __webpack_require__(9);

	var _nextSideNav2 = _interopRequireDefault(_nextSideNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NextSideNavController = function () {
	    function NextSideNavController($ionicHistory, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, NextSideNavController);

	        this.IonicModalNavService = IonicModalNavService;
	    }

	    _createClass(NextSideNavController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return NextSideNavController;
	}();

	var NextSideNavComponent = exports.NextSideNavComponent = {
	    name: 'nextSideNav',
	    def: {
	        controller: NextSideNavController,
	        template: _nextSideNav2.default,
	        bindings: {}
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.IonicModalNavService.show('modal-viewA')\">Open Modal</button>\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModalViewAComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modalViewA = __webpack_require__(11);

	var _modalViewA2 = _interopRequireDefault(_modalViewA);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModalViewAController = function () {
	    function ModalViewAController($ionicHistory, $state, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, ModalViewAController);

	        this.$ionicHistory = $ionicHistory;
	        this.IonicModalNavService = IonicModalNavService;

	        IonicModalNavService.onBack(function (data) {
	            console.log(">>> got the data from previous state", data);
	        });
	    }

	    _createClass(ModalViewAController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.IonicModalNavService.hide({
	                foo: "hiding"
	            });
	        }
	    }, {
	        key: 'next',
	        value: function next(viewName) {
	            this.IonicModalNavService.go('modal-viewB', { id: "Woot" });
	        }
	    }]);

	    return ModalViewAController;
	}();

	var ModalViewAComponent = exports.ModalViewAComponent = {
	    name: 'modalViewA',
	    def: {
	        controller: ModalViewAController,
	        template: _modalViewA2.default,
	        bindings: {}
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<ion-header-bar class=\"bar-stable\">\n    <h1 class=\"title\">Modal View A</h1>\n    <div class=\"buttons\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.hide()\">Close</button>\n    </div>\n</ion-header-bar>\n<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.next()\">Next Modal State</button>\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModalViewBComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modalViewB = __webpack_require__(13);

	var _modalViewB2 = _interopRequireDefault(_modalViewB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModalViewBController = function () {
	    function ModalViewBController($ionicHistory, $state, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, ModalViewBController);

	        this.IonicModalNavService = IonicModalNavService;
	        console.log(">>> ", $state);
	    }

	    _createClass(ModalViewBController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'goBack',
	        value: function goBack() {
	            //Do any logic...
	            this.IonicModalNavService.goBack({
	                foo: "bar"
	            });
	        }
	    }]);

	    return ModalViewBController;
	}();

	var ModalViewBComponent = exports.ModalViewBComponent = {
	    name: 'modalViewB',
	    def: {
	        controller: ModalViewBController,
	        template: _modalViewB2.default,
	        bindings: {}
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<ion-header-bar class=\"bar-stable\">\n    <div class=\"buttons\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.goBack()\">Back</button>\n    </div>\n    <h1 class=\"title\">Modal View B</h1>\n    <div class=\"buttons\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.IonicModalNavService.hide({data:'123'})\">Close</button>\n    </div>\n</ion-header-bar>\n<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            NO WHERE LEFT TO GO\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @description
	 * Channels for basic $ionicModal manipulation
	 */
	var SHOW_MODAL = "ionicModalNav:show";
	var HIDE_MODAL = "ionicModalNav:hide";
	var DESTROY_MODAL = "ionicModalNav:destroy";

	/**
	 * @description 
	 * Channels for reacting to modal events
	 * * ionicModalNav:backdata - Fired when going back from a modal state
	 * * ionicModalNav:closeData - Fired when the modal is closed
	 */
	var MODAL_BACK_DATA = "ionicModalNav:backData";
	var MODAL_CLOSE_DATA = "ionicModalNav:closeData";

	/**
	 * @name IonicModalNavService
	 * @module IonicModalNav
	 * @description
	 * Service used to orchestrate multiple states within an $ionicModal. This
	 * can servce as the application's main modal but the user is free to spawn 
	 * other modals within the application or even within the IonicModalNav if desired
	 */

	var IonicModalNavService = function () {
	    function IonicModalNavService($ionicModal, $rootScope, $state, $ionicHistory, $ionicViewSwitcher, modalOptions) {
	        var _this = this;

	        _classCallCheck(this, IonicModalNavService);

	        this._$rootScope = $rootScope;
	        this._$state = $state;
	        this._$ionicHistory = $ionicHistory;
	        this._$ionicViewSwitcher = $ionicViewSwitcher;

	        this._backView = null;
	        this._currentView = null;

	        this._onBackCallbacks = {};
	        this._onCloseCallbacks = {};

	        if (!this._modal) {
	            //Set up modal with a separate named ion-nav-view
	            this._modal = $ionicModal.fromTemplate("\n                <ion-modal-view> \n                    <ion-nav-view name=\"ionic-modal-nav\"></ion-nav-view>\n                </ion-modal-view>\n            ", {
	                scope: $rootScope,
	                animation: modalOptions.animation,
	                focusFirstInput: modalOptions.focusFirstInput,
	                backdropClickToClose: modalOptions.backdropClickToClose,
	                hardwareBackButtonClose: modalOptions.hardwareBackButtonClose
	            });

	            /**
	             * Register basic modal events
	             */
	            $rootScope.$on(SHOW_MODAL, function (event, data) {
	                _this._modal.show();
	            });

	            $rootScope.$on(HIDE_MODAL, function (event, data) {
	                _this._modal.hide();
	            });

	            $rootScope.$on(DESTROY_MODAL, function (event, data) {
	                _this._modal.destroy();
	            });
	        }
	    }

	    /**
	     * Open the modal and transition to the given modal state with no animation.
	     * Cache the `backView` and the `currentView` so we can restore proper state once 
	     * the modal is closed.
	     * 
	     * @param {string} modalState
	     * @params {Object} data                    
	     */


	    _createClass(IonicModalNavService, [{
	        key: "show",
	        value: function show(modalState, data) {
	            this._backView = this._$ionicHistory.backView();
	            this._currentView = this._$ionicHistory.currentView();

	            this._$ionicHistory.nextViewOptions({
	                disableAnimate: true
	            });

	            this._$rootScope.$emit(SHOW_MODAL);
	            if (data) {
	                this._$state.go(modalState, data);
	            } else {
	                this._$state.go(modalState);
	            }
	        }

	        /**
	         * Wrapper around the usual `$state.go()`. Force the animation direction to be 
	         * forward using `$ionicViewSwitcher`
	         * 
	         * @param {string} modalState
	         */

	    }, {
	        key: "go",
	        value: function go(modalState, data) {
	            this._$ionicViewSwitcher.nextDirection('forward');
	            if (data) {
	                this._$state.go(modalState, data);
	            } else {
	                this._$state.go(modalState);
	            }
	        }

	        /**
	         * Wrapper around usual `$ionicHistory.goBack()`. If data is passed, send it on 
	         * the `ionicModalNav:backData` channel.
	         * 
	         * @param {Object} data
	         */

	    }, {
	        key: "goBack",
	        value: function goBack(data) {
	            this._$ionicHistory.goBack();
	            if (data) {
	                this._$rootScope.$broadcast(MODAL_BACK_DATA, data);
	            }
	        }

	        /**
	         * Restore the cache `backView` and `currentView` to the `$ionicHistory` and
	         * close the modal. If data is passed, send it on the 
	         * `ionicModalNav:closeData` channel.
	         * 
	         * @param {any} data
	         */

	    }, {
	        key: "hide",
	        value: function hide(data) {
	            this._$ionicHistory.backView(this._backView);
	            this._$ionicHistory.currentView(this._currentView);
	            this._backView = null;
	            this._currentView = null;

	            this._$rootScope.$emit(HIDE_MODAL);
	            if (data) {
	                this._$rootScope.$broadcast(MODAL_CLOSE_DATA, data);
	            }
	        }

	        /**
	         * Destroy the modal (probably never used)
	         */

	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this._$rootScope.$emit(DESTROY_MODAL);
	        }

	        //-------------------------
	        // Callbacks handlers

	        /**
	         * Register a callback function when a modal state goes back. To
	         * ensure the correct callback is fired, the registering `viewId` is mapped to the passed
	         * callback function. If data ia passed, it will be given to the callback function.
	         * 
	         * @param {Function} callback
	         */

	    }, {
	        key: "onBack",
	        value: function onBack(callback) {
	            var _this2 = this;

	            var currentViewId = this._$ionicHistory.currentView().viewId;
	            this._onBackCallbacks[currentViewId] = callback;

	            this._$rootScope.$on(MODAL_BACK_DATA, function (event, data) {
	                var currentViewId = _this2._$ionicHistory.currentView().viewId;

	                var fn = _this2._onBackCallbacks[currentViewId];
	                if (fn) {
	                    fn(data);
	                }
	            });
	        }

	        /**
	         * Register a callback function when the modal closes. To ensure the correct
	         * callback is fired, the registering `viewId` is mapped to the passed
	         * callback function. If data ia passed, it will be given to the callback function.
	         * 
	         * @param {Function} callback
	         */

	    }, {
	        key: "onClose",
	        value: function onClose(callback) {
	            var _this3 = this;

	            var currentViewId = this._$ionicHistory.currentView().viewId;
	            this._onCloseCallbacks[currentViewId] = callback;

	            this._$rootScope.$on(MODAL_CLOSE_DATA, function (event, data) {
	                //Get the current view id at the time this handler was fired
	                var currentViewId = _this3._$ionicHistory.currentView().viewId;

	                var fn = _this3._onCloseCallbacks[currentViewId];
	                if (fn) {
	                    fn(data);
	                }
	            });
	        }
	    }]);

	    return IonicModalNavService;
	}();

	var IonicModalNavServiceConfig = function () {
	    function IonicModalNavServiceConfig() {
	        _classCallCheck(this, IonicModalNavServiceConfig);

	        this.options = {
	            animation: "slide-in-up",
	            focusFirstInput: false,
	            backdropClickToClose: true,
	            hardwareBackButtonClose: true
	        };
	    }

	    _createClass(IonicModalNavServiceConfig, [{
	        key: "setModalOptions",
	        value: function setModalOptions(options) {
	            this.options.animation = options ? options.animation : this.options.animation;
	            this.options.focusFirstInput = options ? options.focusFirstInput : this.options.focusFirstInput;
	            this.options.backdropClickToClose = options ? options.backdropClickToClose : this.options.backdropClickToClose;
	            this.options.hardwareBackButtonClose = options ? options.hardwareBackButtonClose : this.options.hardwareBackButtonClose;
	        }
	    }, {
	        key: "$get",
	        value: function $get($ionicModal, $rootScope, $state, $ionicHistory, $ionicViewSwitcher) {
	            return new IonicModalNavService($ionicModal, $rootScope, $state, $ionicHistory, $ionicViewSwitcher, this.options);
	        }
	    }]);

	    return IonicModalNavServiceConfig;
	}();

	// --- Declare module -- 

	var moduleName = 'IonicModalNav';

	angular.module(moduleName, []).provider('IonicModalNavService', IonicModalNavServiceConfig);

	exports.default = moduleName;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	/**
	 Any state with `parent: app` is a top level tab (e.g. First state in the tree for their respective tabs)
	*/

	angular.module('app.states').config(function ($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    /****
	     Stand alone states (outside the tab container)
	    ****/

	    $stateProvider.state('base', {
	        url: '/base',
	        template: '\n                <ion-view view-title=\'Base State\'>\n                    <base></base>\n                </ion-view>'
	    });

	    $stateProvider.state('next-base', {
	        url: '/next-base',
	        template: '\n                <ion-view view-title=\'Next Base State\'>\n                    <next-base></next-base>\n                </ion-view>'
	    });

	    $stateProvider.state('modal-viewA', {
	        views: {
	            'ionic-modal-nav@': {
	                template: '\n                        <ion-view view-title=\'Modal View A\'>\n                            <modal-view-a></modal-view-a>\n                        </ion-view>'
	            }
	        }
	    });

	    $stateProvider.state('modal-viewB', {
	        params: {
	            id: ""
	        },
	        views: {
	            'ionic-modal-nav@': {
	                template: '\n                        <ion-view>\n                            <modal-view-b></modal-view-b>\n                        </ion-view>'
	            }
	        }
	    });

	    $stateProvider.state('side-nav', {
	        url: '/side-nav',
	        template: '\n                <ion-view view-title=\'Side Nav State\'>\n                    <side-nav></side-nav>\n                </ion-view>'
	    });

	    $stateProvider.state('next-side-nav', {
	        url: '/next-side-nav',
	        template: '\n                <ion-view view-title=\'Next Side Nav State\'>\n                    <next-side-nav></next-side-nav>\n                </ion-view>'
	    });

	    $urlRouterProvider.otherwise('/base');
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app.run').run(function ($ionicPlatform) {
	    $ionicPlatform.ready(function () {
	        if (window.cordova && window.cordova.plugins.Keyboard) {
	            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	            // for form inputs)
	            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

	            // Don't remove this line unless you know what you are doing. It stops the viewport
	            // from snapping when text inputs are focused. Ionic handles this internally for
	            // a much nicer keyboard experience.
	            cordova.plugins.Keyboard.disableScroll(true);
	        }
	        if (window.StatusBar) {
	            StatusBar.styleDefault();
	        }
	    });
	});

/***/ }
/******/ ]);