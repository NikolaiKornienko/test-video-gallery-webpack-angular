import tmpl1 from './main/main.html';
import tmpl2 from './album/album.html';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('main', {
            url: '/',
            template: tmpl1,
            controller: 'MainCtrl',
            controllerAs: 'vm'
        })
        .state('album', {
            url: '/:albumId',
            template: tmpl2,
            controller: 'AlbumCtrl',
            controllerAs: 'vm',
            params: {
                data: ''
            }
        });

}
