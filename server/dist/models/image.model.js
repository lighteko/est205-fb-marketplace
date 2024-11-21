import { Schema, model } from "mongoose";
const ImageSchema = new Schema({
    data: { type: String, required: true },
});
export default model("Image", ImageSchema);
