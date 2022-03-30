
class ImageUtilInterface {
    // 模仿介面
    constructor() {
        if(!this.getImage) {
            throw new Error("not implement getImage");
        }

        if(!this.flipImage) {
            throw new Error("not implement flipImage");
        }

        if(!this.saveImage) {
            throw new Error("not implement saveImage");
        }        
    }

}

const  Jimp = require('jimp');

class ImageJimpUtil extends ImageUtilInterface {
    constructor() {
        super();

        // Jimp 設定 maxMemoryUsageInMB 為 1024 MB
        let cachedJpegDecoder = Jimp.decoders['image/jpeg'];
        Jimp.decoders['image/jpeg'] = (data) => {
            let userOpts = { maxMemoryUsageInMB: 1024 };
            return cachedJpegDecoder(data, userOpts);
        }
    }

    getImage(source) {
        return new Promise((resolve, reject) => {
            Jimp.read(source, (err, img) => {
                if(err)
                    reject(err);
                resolve(img);
            });
        });
    }

    flipImage(image) {
        return new Promise((resolve, reject) => {
            image.flip(true, true, (err, img) => {
                if(err)
                    reject(err);
                resolve(img);
            });
            
        });
    }

    saveImage(image, rootDestination) {
        let save_destination = `${rootDestination}/${Date.now()}.${image.getExtension()}`;

        return new Promise((resolve, reject) => {
            image.write(save_destination, (err, img) => {
                if(err)
                    reject(err);
                resolve('success');
            });
            
        });
    }
}

module.exports = {
    ImageJimpUtil: ImageJimpUtil
};