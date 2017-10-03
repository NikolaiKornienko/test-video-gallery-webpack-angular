export default class ModalCtrl {
    constructor($uibModalInstance) {
        this.$uibModalInstance = $uibModalInstance;

    }

    add(){
        var url = this.newVideo.link;
        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if(videoid != null) {
            this.newVideo.link = videoid[1];
            this.error = '';
        } else {
            this.error = "The youtube url is not valid.";
            return;
        }
        this.$uibModalInstance.close(this.newVideo);
    }

    cancel(){
        this.$uibModalInstance.dismiss('cancel');
    }
}

ModalCtrl.$inject = ['$uibModalInstance'];