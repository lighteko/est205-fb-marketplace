import { Schema, model } from "mongoose";
const ReviewSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    target: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export default model("Review", ReviewSchema);
