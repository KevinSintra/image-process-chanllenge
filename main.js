let imgService = require('./service/img_service');
let ImageService = imgService.ImageService;

console.log('main start');

async function start() {
    service = new ImageService();
    let result = await service.downloadUrlIamgeAndFlip('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf');
    console.log(result);
}

start();
