import React from "react";
import "./CreatePostView.css";
import PhotoSelector from "../components/designbox/PhotoSelector";

export default function CreatePostView(): JSX.Element {
  return (
    <div className="create-post-container">
      <h2 className="title">Product Information</h2>
      <PhotoSelector />
      <div className="image-upload">
        <div className="upload-info">
          
        </div>
      </div>

      <label className="label">Product Name</label>
      <input className="input-field" type="text" placeholder="Enter product name" />

      <label className="label">Category</label>
      <input className="input-field" type="text" placeholder="Enter category" />

      <label className="label">Product Description</label>
      <textarea className="textarea-field" placeholder="Enter product description"></textarea>

      <label className="label">Hashtag</label>
      <input className="input-field" type="text" placeholder="Enter hashtag" />

      <label className="label">Sell Method</label>
      <div className="sell-method-buttons">
        <button className="sell-method-button selected">To Sell</button>
        <button className="sell-method-button">Give Away</button>
      </div>

      <input className="amount-input" type="text" placeholder="$ Insert Amount" />

      <div className="option">
        <input type="checkbox" id="open-offers" checked />
        <label htmlFor="open-offers">Open to Offers</label>
      </div>

      <label className="label">Delivery Type</label>
      <div className="delivery-options">
        <label className="option">
          <input type="radio" name="delivery-type" defaultChecked />
          Direct
        </label>
        <label className="option">
          <input type="radio" name="delivery-type" />
          Post Delivery
        </label>
      </div>

      <label className="label">Direct Location Range</label>
      <button className="add-location">+ Add Location</button>

      <label className="label">Delivery Expense</label>
      <div className="delivery-options">
        <label className="option">
          <input type="radio" name="delivery-expense" defaultChecked />
          Included
        </label>
        <label className="option">
          <input type="radio" name="delivery-expense" />
          Excluded
        </label>
      </div>

      <button className="post-product">Post Product</button>
    </div>
  );
}

