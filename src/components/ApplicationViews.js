import React from "react";
import { Route } from "react-router-dom";
import { CategoryProvider } from "./Categories/CategoryProvider";
import { CreatePostForm } from "./createPosts/CreatePost";

export const ApplicationViews = (props) => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      ></main>
      <CategoryProvider>
        <Route
          exact
          path="/posts/create"
          render={(props) => {
            return <CreatePostForm {...props} />;
          }}
        />
      </CategoryProvider>
    </>
  );
};
