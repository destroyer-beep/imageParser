import ImageService from "../service/ImageService.js";

class ImageController {
    async imgParser(filename) {
        try {
            await ImageService.imgParser(filename);
        } catch (e) {
            console.log('Service error');
        }
    }
}

export default new ImageController();