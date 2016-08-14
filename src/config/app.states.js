'use strict';


/**
 Any state with `parent: app` is a top level tab (e.g. First state in the tree for their respective tabs)
*/

angular.module('app.states')
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        /****
         Stand alone states (outside the tab container)
        ****/
        $stateProvider.state('base', {
            url: '/base',
            template: `
                <ion-view view-title='Base State'>
                    <base></base>
                </ion-view>`
        });

        $stateProvider.state('next-base', {
            url: '/next-base',
            template: `
                <ion-view view-title='Next Base State'>
                    <next-base></next-base>
                </ion-view>`
        });

        $stateProvider.state('modal-viewA', {
            views: {
                'ionic-modal-nav@': {
                    template: `
                        <ion-view view-title='Modal View A'>
                            <modal-view-a></modal-view-a>
                        </ion-view>`
                }
            }
        });

        $stateProvider.state('modal-viewB', {
            views: {
                'ionic-modal-nav@': {
                    template: `
                        <ion-view>
                            <modal-view-b></modal-view-b>
                        </ion-view>`
                }
            }
        });

        $urlRouterProvider.otherwise('/base');
    });