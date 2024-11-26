import { Schema, model } from "mongoose";
import IImage from "./interfaces/iimage";

const ImageSchema = new Schema<IImage>({
  data: { type: String, required: true },
});

export default model<IImage>("Image", ImageSchema);