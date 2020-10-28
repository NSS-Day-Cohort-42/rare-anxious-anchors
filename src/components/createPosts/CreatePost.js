import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../Categories/CategoryProvider";
// import { PostsContext } from "../posts/PostsProvider";
import "./CreatePost.css";

export const CreatePostForm = (props) => {

  const { categories, getCategories } = useContext(CategoryContext);
  // const { posts, getPosts, addPost } = useContext(PostsContext);

  useEffect(() => {
    getCategories();
    // getPosts();
  }, []);

  // const handleControledInputChange = (event) => {
  //   const newPost = Object.assign({}, post);
  //   newPost[event.target.name] = event.target.value;
  //   setPost(newPost);
  // }

  const saveEntry = () => {
    const postBody = "test body of text"
    const postDate = Date.now()
    const title = "testTitle"
    const userId = parseInt(localStorage.getItem("rare_user_id"))
    const CategoryId = 2

    // addPost({
    //   postBody: postBody,
    //   postDate: postDate,
    //   title: title,
    //   userId: userId,
    //   CategoryId: CategoryId,
    // }).then(() => props.history.push("./posts"))

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
