(function() {
    angular
        .module('locYobenApp')
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl() {
        var vm = this;
        vm.pageHeader = {
            title: 'About LocYoben',
        };
        vm.main = {
            content: 'LocYoben was created in order to complete candidature for s1 academic degree in akakom.\n\nAplikasi ini dirancang untuk memenuhi kebutuhan pengunjung kafe yang memiliki fasilitas hotspot untuk menentukan fasilitas, hidangan serta pelayanan yang ditawarkan dari masing – masing kafe, melalui aplikasi ini pengunjung juga dapat memberikan review atau feedback mengenai kafe yang mereka kunjungi menggunakan teklonogi – teknologi terbaru dalam dunia web developmen dan cloud computing seperti non-blocking io dan Single Page Application (SPA).         “Aplikasi Berbasis Web untuk Pencarian Hotspot Kafe Menggunakan MEAN Stack (MongoDb, ExpressJs, AngularJs dan NodeJs)”.'
        };
    }
})();
