let sinon = require("sinon");
let imgService = require('../service/img_service');
let imageUtil = require('../util/image_util');
let ImageService = imgService.ImageService;

describe('unit testing hook', function() {

    it('ImageService 使用 ImageJimpUtil 翻轉圖片要走這些流程', async() => {
        let obj = new imageUtil.ImageJimpUtil();
        let getImage = sinon.stub(obj, 'getImage');
        let flipImage = sinon.stub(obj, 'flipImage');
        let saveImage = sinon.stub(obj, 'saveImage');

        let imgUrl = 'https://i.imgur.com/K9Zut3g.jpg?1'
        let service = new ImageService(obj);
        await service.downloadUrlIamgeAndFlip(imgUrl);

        sinon.assert.callCount(getImage, 1);
        sinon.assert.callCount(flipImage, 1);
        sinon.assert.callCount(saveImage, 2);
    });

});

describe('integration testing hook', function() {

    it('ImageService 使用 ImageJimpUtil 翻轉圖片要走這些流程', async() => {
        let obj = new imageUtil.ImageJimpUtil();
        let getImage = sinon.spy(obj, 'getImage');
        let flipImage = sinon.spy(obj, 'flipImage');
        let saveImage = sinon.spy(obj, 'saveImage');

        let imgUrl = 'https://i.imgur.com/K9Zut3g.jpg?1'
        let service = new ImageService(obj);
        await service.downloadUrlIamgeAndFlip(imgUrl);
        
        getImage.restore();
        sinon.assert.callCount(getImage, 1);
        sinon.assert.callCount(flipImage, 1);
        sinon.assert.callCount(saveImage, 2);
    });
});