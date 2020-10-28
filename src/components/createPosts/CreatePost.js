import React, { useContext, useEffect, useRef } from "react";
import { CategoryContext } from "../Categories/CategoryProvider";
import { PostsContext } from "../posts/PostsProvider";
import "./CreatePost.css";

export const CreatePostForm = (props) => {

  const { categories, getCategories } = useContext(CategoryContext);
  const { addPost } = useContext(PostsContext);

  const postBody = useRef(null)
  const title = useRef(null)
  const Category = useRef(null)
  

  useEffect(() => {
    getCategories();
  }, []);

  const saveEntry = () => {
    const CategoryId = parseInt(Category.current.value)
    const userId = parseInt(localStorage.getItem("rare_user_id"))

    addPost({
      postBody: postBody.current.value,
      postDate: Date.now(),
      title: title.current.value,
      userId: userId,
      CategoryId: CategoryId,
    })
    .then(() => props.history.push("./posts"))

  }

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
                  ref={title}
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
                  ref={postBody}
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
                  ref={Category}
                  type="text"
                  name="CategoryId"
                  id="CategoryId"
                  required
                  className="form-control"
                >
                  <option value="0">Select a Category</option>
                  {categories.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <button
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                saveEntry();
              }}
              >Save Entry</button>
          </form>
        </div>
      </div>
    </>
  );
};
