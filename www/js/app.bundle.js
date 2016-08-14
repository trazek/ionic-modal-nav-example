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

	__webpack_require__(11);

	__webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _base = __webpack_require__(2);

	var _nextBase = __webpack_require__(4);

	var _modalViewA = __webpack_require__(6);

	var _modalViewB = __webpack_require__(8);

	__webpack_require__(10);

	angular.module('app', ['ionic', 'app.run', 'app.components', 'app.states', 'IonicModalNav']);

	angular.module('app.run', []);
	angular.module('app.components', []);
	angular.module('app.states', []);

	//--- Components
	angular.module('app.components').component(_base.BaseComponent.name, _base.BaseComponent.def);
	angular.module('app.components').component(_nextBase.NextBaseComponent.name, _nextBase.NextBaseComponent.def);

	angular.module('app.components').component(_modalViewA.ModalViewAComponent.name, _modalViewA.ModalViewAComponent.def);
	angular.module('app.components').component(_modalViewB.ModalViewBComponent.name, _modalViewB.ModalViewBComponent.def);

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
	            console.log(">>> got it yo", data);
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

	module.exports = "<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.IonicModalNavService.show('modal-viewA')\">Open Modal</button>\n        </div>\n        <div class=\"col\">\n            <button class=\"button button-positive\" ui-sref=\"next-base\">Next Base</button>\n        </div>\n    </div>\n</ion-content>"

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
	exports.ModalViewAComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modalViewA = __webpack_require__(7);

	var _modalViewA2 = _interopRequireDefault(_modalViewA);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModalViewAController = function () {
	    function ModalViewAController($ionicHistory, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, ModalViewAController);

	        this.$ionicHistory = $ionicHistory;
	        this.IonicModalNavService = IonicModalNavService;

	        IonicModalNavService.onBack(function (data) {
	            console.log(">>> got the data from B", data);
	        });
	    }

	    _createClass(ModalViewAController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.IonicModalNavService.hide({
	                woot: "hiding"
	            });
	        }
	    }, {
	        key: 'next',
	        value: function next(viewName) {
	            this.IonicModalNavService.go('modal-viewB');
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
/* 7 */
/***/ function(module, exports) {

	module.exports = "<ion-header-bar class=\"bar-stable\">\n    <h1 class=\"title\">Modal View A</h1>\n    <div class=\"buttons\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.hide()\">Close</button>\n    </div>\n</ion-header-bar>\n<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.next()\">Next Modal State</button>\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModalViewBComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modalViewB = __webpack_require__(9);

	var _modalViewB2 = _interopRequireDefault(_modalViewB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModalViewBController = function () {
	    function ModalViewBController($ionicHistory, IonicModalNavService) {
	        'ngInject';

	        _classCallCheck(this, ModalViewBController);

	        console.log(">>> options", $ionicHistory.nextViewOptions());
	        this.IonicModalNavService = IonicModalNavService;
	    }

	    _createClass(ModalViewBController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'goBack',
	        value: function goBack() {
	            //Do any logic...
	            this.IonicModalNavService.goBack({
	                woot: "foo"
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
/* 9 */
/***/ function(module, exports) {

	module.exports = "<ion-header-bar class=\"bar-stable\">\n    <div class=\"buttons\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.goBack()\">Back</button>\n    </div>\n    <h1 class=\"title\">Modal View B</h1>\n    <div class=\"buttons\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.IonicModalNavService.hide({data:'123'})\">Close</button>\n    </div>\n</ion-header-bar>\n<ion-content class=\"has-header\">\n    <div class=\"row\">\n        <div class=\"col\">\n            NO WHERE LEFT TO GO\n        </div>\n    </div>\n</ion-content>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	function _classCallCheck(a, b) {
	  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
	}Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
	  function a(a, b) {
	    for (var c = 0; c < b.length; c++) {
	      var d = b[c];d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
	    }
	  }return function (b, c, d) {
	    return c && a(b.prototype, c), d && a(b, d), b;
	  };
	}(),
	    SHOW_MODAL = "ionicModalNav:show",
	    HIDE_MODAL = "ionicModalNav:hide",
	    DESTROY_MODAL = "ionicModalNav:destroy",
	    MODAL_BACK_DATA = "ionicModalNav:backData",
	    MODAL_CLOSE_DATA = "ionicModalNav:closeData",
	    IonicModalNavService = function () {
	  function a(b, c, d, e, f) {
	    var g = this;_classCallCheck(this, a), this._$rootScope = c, this._$state = d, this._$ionicHistory = e, this._$ionicViewSwitcher = f, this._backView = null, this._currentView = null, this._onBackCallbacks = {}, this._onCloseCallbacks = {}, this._modal || (this._modal = b.fromTemplate('\n                <ion-modal-view> \n                    <ion-nav-view name="ionic-modal-nav"></ion-nav-view>\n                </ion-modal-view>\n            ', { scope: c }), c.$on(SHOW_MODAL, function (a, b) {
	      g._modal.show();
	    }), c.$on(HIDE_MODAL, function (a, b) {
	      g._modal.hide();
	    }), c.$on(DESTROY_MODAL, function (a, b) {
	      g._modal.destroy();
	    }));
	  }return _createClass(a, [{ key: "show", value: function value(b) {
	      this._backView = this._$ionicHistory.backView(), this._currentView = this._$ionicHistory.currentView(), this._$ionicHistory.nextViewOptions({ disableAnimate: !0 }), this._$rootScope.$emit(SHOW_MODAL), this._$state.go(b);
	    } }, { key: "go", value: function value(b) {
	      this._$ionicViewSwitcher.nextDirection("forward"), this._$state.go(b);
	    } }, { key: "goBack", value: function value(b) {
	      this._$ionicHistory.goBack(), b && this._$rootScope.$broadcast(MODAL_BACK_DATA, b);
	    } }, { key: "hide", value: function value(b) {
	      this._$ionicHistory.backView(this._backView), this._$ionicHistory.currentView(this._currentView), this._backView = null, this._currentView = null, this._$rootScope.$emit(HIDE_MODAL), b && this._$rootScope.$broadcast(MODAL_CLOSE_DATA, b);
	    } }, { key: "destroy", value: function value() {
	      this._$rootScope.$emit(DESTROY_MODAL);
	    } }, { key: "onBack", value: function value(b) {
	      var c = this,
	          d = this._$ionicHistory.currentView().viewId;this._onBackCallbacks[d] = b, this._$rootScope.$on(MODAL_BACK_DATA, function (a, b) {
	        var d = c._$ionicHistory.currentView().viewId,
	            e = c._onBackCallbacks[d];e && e(b);
	      });
	    } }, { key: "onClose", value: function value(b) {
	      var c = this,
	          d = this._$ionicHistory.currentView().viewId;this._onCloseCallbacks[d] = b, this._$rootScope.$on(MODAL_CLOSE_DATA, function (a, b) {
	        var d = c._$ionicHistory.currentView().viewId,
	            e = c._onCloseCallbacks[d];e && e(b);
	      });
	    } }]), a;
	}();IonicModalNavService.$inject = ["$ionicModal", "$rootScope", "$state", "$ionicHistory", "$ionicViewSwitcher"];var moduleName = "IonicModalNav";angular.module(moduleName, []).service("IonicModalNavService", IonicModalNavService), exports.default = moduleName;

/***/ },
/* 11 */
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
	        views: {
	            'ionic-modal-nav@': {
	                template: '\n                        <ion-view>\n                            <modal-view-b></modal-view-b>\n                        </ion-view>'
	            }
	        }
	    });

	    $urlRouterProvider.otherwise('/base');
	});

/***/ },
/* 12 */
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