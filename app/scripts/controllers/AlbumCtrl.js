(function() {
    function AlbumCtrl(Fixtures, SongPlayer, $scope) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;


        $scope.$watch(function(){return SongPlayer.currentBuzzObject}, function(newValue, oldValue){
            if(!newValue){return;}
            
            newValue.bind('timeupdate', function() {
                $scope.$apply(function() {
                    SongPlayer.currentTime = newValue.getTime();
                });
            });

            newValue.bind('volumechange', function() {
                $scope.$apply(function() {
                    SongPlayer.volume = newValue.getVolume();
                });
            });

        })



    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$scope', AlbumCtrl]);
})();
