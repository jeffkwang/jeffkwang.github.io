document.addEventListener('DOMContentLoaded', function() {
    var images = [
        ['./static/images/1.png', 'Alameda Creek Trail at sunset - Fremont, CA'],
        ['./static/images/2.png', 'Glass by Jeff Wang'],
        ['./static/images/3.png', 'Quarry Lakes at sunset - Fremont, CA'],
        ['./static/images/4.png', 'Shinto shrine - JiuFen, Taiwan, ROC'],
        ['./static/images/5.png', 'Art at SFMOMA - San Francisco, CA'],
        ['./static/images/6.png', 'Rainy bike day - Fremont, CA'],
        ['./static/images/7.png', 'Buddha\'s Hand Citron - Whole Foods'],
        ['./static/images/8.png', 'Waterfall - Yilan County, Taiwan, ROC'],
        ['./static/images/9.png', 'Art at SFMOMA - San Francisco, CA'],
        ['./static/images/10.png', 'Art at SFMOMA - San Francisco, CA'],
        ['./static/images/11.png', 'Art at SFMOMA - San Francisco, CA'],
        ['./static/images/12.png', 'Mushrooms in Mt. Tam - Marin County'],
        ['./static/images/13.png', 'Creek in the Hills - Palomares Rd'],

    ];

    var today = new Date();
    var imageIndex = today.getDate() % images.length;

    var main_photo=document.querySelector('img[name=main-photo]');
    var caption=document.getElementById('photo-caption');

    main_photo.src = images[imageIndex][0];
    main_photo.alt = images[imageIndex][1];
    caption.textContent = images[imageIndex][1];

});