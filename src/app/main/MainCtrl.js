export default class MainCtrl {
    constructor($http, $sce) {
        this.$sce = $sce;
        $http.get('local.json').then((response)=>{
            if (response.data) {
                this.albums = response.data.albums;
            }
        });
    }

    trustSrc(src){
        let url = 'http://www.youtube.com/embed/' + src + '?autoplay=0';
        return this.$sce.trustAsResourceUrl(url);
    }
}

MainCtrl.$inject = ['$http', '$sce'];