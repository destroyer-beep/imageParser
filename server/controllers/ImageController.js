import ImageService from "../service/ImageService.js";

class ImageController {
    async imgParser(req, res) {
        try {
            const imageText = await ImageService.imgParser(req.file);
            res.end(imageText);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new ImageController();