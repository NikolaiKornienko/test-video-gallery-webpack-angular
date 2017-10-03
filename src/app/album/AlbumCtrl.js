export default class AlbumCtrl {
    constructor($stateParams, $http, $sce, $uibModal){
        this.$sce = $sce;
        this.$uibModal = $uibModal;
        if (!$stateParams.albumId) {
            $state.go('main');
        } else {
            if (!$stateParams.data) {
                $http.get('local.json').then((response)=>{
                    if (response.data) {
                        this.currentAlbum = response.data.albums[$stateParams.albumId];
                    }
                });
            } else {
                this.currentAlbum = $stateParams.data;
            }
        }
    }

    openModal(){
        let modalInstance = this.$uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modal.html',
            controller: 'ModalCtrl',
            controllerAs: 'vm'
        });

        modalInstance.result.then((selectedItem)=>{
            this.currentAlbum.videos.push(selectedItem);
        }, ()=>{
            alert('Adding a new video goes wrong');
        });
    }

    trustSrc(src){
        let url = 'http://www.youtube.com/embed/' + src + '?autoplay=0';
        return this.$sce.trustAsResourceUrl(url);
    }
}

AlbumCtrl.$inject = ['$stateParams', '$http', '$sce', '$uibModal'];