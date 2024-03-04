import React from "react";
import { Posts } from "../../../../models/Post";
import Link from "next/link";
import { NewPosts } from "../../../../types/FormTypes";


type Props = {
  post: NewPosts;
};

const Blog = (props: Props) => {
  const { post } = props;

  const displayShortInfo = (txt:string, len:number):string => { 
    if (txt.length > len) {
      return txt.substring(0, len) + "...";
    } else {
      return txt;
    }
  }

  return (

    <div className="max-w-4xl mt-4 px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">{post.updatedAt}</span>
            <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{post.category}</span>
        </div>
        <div className="mt-2">
            <p className="text-2xl text-gray-700 font-bold hover:underline">{post.title}</p>
            <p className="mt-2 text-gray-600">{displayShortInfo(post.content_text, 500)}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
        <Link
            href={`/blogs/${post._id}`}
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Read full post
            <svg
              className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
            <div>
                <div className="flex items-center">
                    {/* <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" :src="data.image" alt="avatar"> */}
                    <p className="text-gray-700 font-bold hover:underline">{post.author_name}</p>
                </div>
            </div>
        </div>
    </div>



    
    // <div className="w-full mt-4 bg-white border border-gray-200 rounded-lg shadow">
    //   <div id="defaultTabContent">
    //     <div
    //       className="p-4 bg-white rounded-lg md:p-8 "
    //       id="about"
    //       role="tabpanel"
    //       aria-labelledby="about-tab"
    //     >
    //       <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
    //         {post.title}
    //       </h2>
    //       <p className="mb-3 text-gray-500 dark:text-gray-400">
    //         {post.description}
    //       </p>
    //       <Link
    //         href={`/blogs/${post._id}`}
    //         className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
    //       >
    //         Read full post
    //         <svg
    //           className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="m1 9 4-4-4-4"
    //           />
    //         </svg>
    //       </Link>
    //     </div>
        
    //   </div>
    // </div>
  );
};

export default Blog;
