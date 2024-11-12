import ImageDAO from "../daos/image.dao";
import dotenv from "dotenv";
import axios from "axios";

class ImageService {
  private APIKEY: string;
  
  constructor() {
    dotenv.config();
    this.APIKEY = process.env.APIKEY as string;
  }

  async uploadImage(imageData: Base64URLString) {
    const response = await axios.post(
      `https://freeimage.host/api/1/upload?key=${this.APIKEY}&source=${imageData}&format=json`,
    );
    try {
      const imgUrl = response.data.image.image.url;
      imgUrl.replace("\\", "");
      if (!imgUrl || !imgUrl.match(/(https:\/\/iili.io\/).*/)) {
        throw new Error("Image upload failed");
      }
      return await ImageDAO.uploadImage(imgUrl);
    } catch (error) {
      throw new Error("Image upload failed");
    }
  }

  async getImage(imageId: string) {
    return await ImageDAO.getImage(imageId);
  }

  async deleteImage(imageId: string) {
    return await ImageDAO.deleteImage(imageId);
  }
}

const imageService = new ImageService();

export default imageService;
