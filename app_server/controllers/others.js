/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About LocYoben',
        content: 'LocYoben was created in order to complete candidature for s1 academic degree in akakom.\n\nAplikasi ini dirancang untuk memenuhi kebutuhan pengunjung kafe yang memiliki fasilitas hotspot untuk menentukan fasilitas, hidangan serta pelayanan yang ditawarkan dari masing – masing kafe, melalui aplikasi ini pengunjung juga dapat memberikan review atau feedback mengenai kafe yang mereka kunjungi menggunakan teklonogi – teknologi terbaru dalam dunia web developmen dan cloud computing seperti non-blocking io dan Single Page Application (SPA).         “Aplikasi Berbasis Web untuk Pencarian Hotspot Kafe Menggunakan MEAN Stack (MongoDb, ExpressJs, AngularJs dan NodeJs)”.'
    });
};

/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'LocYoben' });
};
