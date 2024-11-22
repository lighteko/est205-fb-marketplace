import Image from "../models/image.model";
class ImageDAO {
    async uploadImage(imgUrl) {
        const image = new Image({ imgUrl });
        return await image.save();
    }
    async getImage(imageId) {
        return await Image.findById(imageId);
    }
    async deleteImage(imageId) {
        return await Image.findByIdAndDelete(imageId);
    }
}
export default new ImageDAO();
