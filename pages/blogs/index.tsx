import React from "react";
import dbConnect from "../../utils/database";
import Post from "../../models/Post";
import { GetServerSideProps } from "next";
import Blog from "@/components/Blog/Blog/Blog";
import { NewPosts } from "../../types/FormTypes";

type Props = {
  posts: NewPosts[];
};

const BlogPage = (props: Props) => {
  return (
    <>
      <div className="px-6 py-8 bg-white dark:bg-gray-900">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
            </div>
            <div className="mt-6">
              {props.posts.map((post) => (
                <Blog key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
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
