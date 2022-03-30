let imageUtil = require('../util/image_util');
let ImageUtil = imageUtil.ImageJimpUtil;

class ImageService {
    constructor(util) {
        this._originImgDestination = './assets/origin_img/';
        this._operateImgDestination = './assets/operate_img/';
        if(util)
            this._imageUtil = util;
        else
            this._imageUtil = new ImageUtil();
    }

    async downloadUrlIamgeAndFlip(imgUrl) {
        let image = await this._imageUtil.getImage(imgUrl);
        this._imageUtil.saveImage(image, this._originImgDestination);
        let flipImage = await this._imageUtil.flipImage(image);
        return this._imageUtil.saveImage(flipImage, this._operateImgDestination);
    }
}

module.exports = {
    ImageService: ImageService
};