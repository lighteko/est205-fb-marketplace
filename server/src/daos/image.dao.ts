import Image from "../models/image.model";

class ImageDAO {
  async uploadImage(imgUrl: string) {
    const image = new Image({ imgUrl });
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
