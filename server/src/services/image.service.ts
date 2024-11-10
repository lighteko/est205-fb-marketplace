import ImageDAO from "../daos/image.dao";

class ImageService {
  async uploadImage(imageData: Base64URLString) {
    return await ImageDAO.uploadImage(imageData);
  }

  async getImage(imageId: string) {
    return await ImageDAO.getImage(imageId);
  }

  async deleteImage(imageId: string) {
    return await ImageDAO.deleteImage(imageId);
  }
}

export default new ImageService();
