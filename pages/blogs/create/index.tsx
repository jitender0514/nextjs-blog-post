import React from "react";
import dbConnect from "../../../utils/database";
import Post, { Posts } from "../../../models/Post";
import { GetServerSideProps } from "next";
import Blog from "@/components/Blog/Blog/Blog";
import CreateBlogForm from "@/components/Blog/CreateForm/CreateBlogForm";

type Props = {
  posts: Posts[];
};

const BlogPage = (props: Props) => {
  return (
    <>
      <div className="px-6 py-6">
        <div className="text-3xl subpixel-antialiased font-semibold text-center py-4">
          <h1 > Create new post</h1>
        </div>
        <CreateBlogForm />
      </div>
    </>
  );
};

/* Retrieves blog-post(s) data from mongodb database */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await dbConnect();

  /* find all the data in our database */
  const result = await Post.find({});

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  const posts = result.map((doc) => {
    const post = JSON.parse(JSON.stringify(doc));
    return post;
  });
  console.log(posts);

  return { props: { posts: posts } };
};

export default BlogPage;
