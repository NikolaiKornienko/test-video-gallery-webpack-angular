import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import uibootstrap from 'angular-ui-bootstrap';
import '../style/app.css';
import MainCtrl from './main/MainCtrl';
import AlbumCtrl from './album/AlbumCtrl';
import ModalCtrl from './modal';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, uibootstrap])
    .config(routing)
    .controller('MainCtrl', MainCtrl)
    .controller('AlbumCtrl', AlbumCtrl)
    .controller('ModalCtrl', ModalCtrl);

export default MODULE_NAME;