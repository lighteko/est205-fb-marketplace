import Image from "../models/image.model";

class ImageDAO {
  async uploadImage(imageData: Base64URLString) {
    const image = new Image({ imageData });
    return await image.save();
  }

  async getImage(imageId: string) {
    return await Image.findById(imageId);
  }

  async deleteImage(imageId: string) {
    return await Image.findByIdAndDelete(imageId);
  }
}

export default new ImageDAO();
