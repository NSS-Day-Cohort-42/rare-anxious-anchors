import React, { useContext, useEffect, useState } from "react";
import "./CreatePost.css";

export const CreatePostForm = (props) => {
  return (
    <>
      <div className="centeringContainer">
        <div className="CreatePostContainer">
          <h2>Create A Post</h2>
          <form>
            <fieldset>
              <div className="form-group">
                <label htmlFor="PostTitle">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="postTitle"
                  required
                  autoFocus
                  className="form-control"
                  placeholder="Give your post a super cool title"
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="PostBody">Body:</label>
                <textarea
                  rows="600"
                  cols="50"
                  name="postBody"
                  id="postBody"
                  required
                  className="form-control"
                  placeholder="Enter all the cool details of your post here!"
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="ChooseCategory">Assign a Category:</label>
                <select
                  proptype="int"
                  // value={category.name}
                  // onChange={handleControledInputChange}
                  type="text"
                  name="CategoryId"
                  id="CategoryId"
                  required
                  className="form-control"
                >
                  <option value="0">Select a Category</option>
                </select>
              </div>
            </fieldset>
            <button
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                // saveEntry();
              }}
              >Save Entry</button>
          </form>
        </div>
      </div>
    </>
  );
};
