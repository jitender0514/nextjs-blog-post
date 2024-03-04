import React from 'react'
import dbConnect from '../../../utils/database';
import Post from "../../../models/Post";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Blog from '@/components/Blog/Blog/Blog';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import Image from 'next/image';
import { NewPosts } from '../../../types/FormTypes';

type Props = {
    post: NewPosts;
}

interface Params extends NextParsedUrlQuery {
    id: string;
  }

const BlogPage = (props: Props) => {
    const { post } = props;
  return (
    <>
    {/* <h1 className='text-3xl text-center'>{post.title}</h1>
    <h2 className='text-xl text-center'>{post.description}</h2>
    
    <Image className='w-full h-1/4' src={post.photo_url} width={"400"} height={"400"}  alt={post.photo_url}/>
    <div dangerouslySetInnerHTML={{__html: post.content_html}}>
    </div>
    <p>{post.author_name}</p>
    <p>{post.category}</p> */}

<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert dark:text-white">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{post.author_name}</a>
                          <p className="text-base text-gray-500 dark:text-gray-400">{post.category}</p>
                          <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">{post.updatedAt}</time></p>
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
          </header>
          <p className="lead">{post.description}</p>
          <Image className='w-full h-1/4' src={post.photo_url} width={"400"} height={"400"}  alt={post.photo_url}/>
          <div dangerouslySetInnerHTML={{__html: post.content_html}}></div>

      </article>
  </div>
</main>

{/* <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
  <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1">
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2">
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 12 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3">
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 8 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4">
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 4 minutes
              </a>
          </article>
      </div>
  </div>
</aside> */}
    </>
  )
}


/* Retrieves single post data from mongodb database */
export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
    params,
  }: GetServerSidePropsContext) => {
    await dbConnect();
  
    if (!params?.id) {
      return {
        notFound: true,
      };
    }
  
    const pet = await Post.findById(params.id).lean();
  
    if (!pet) {
      return {
        notFound: true,
      };
    }
  
    /* Ensures all objectIds and nested objectIds are serialized as JSON data */
    const serializedPost = JSON.parse(JSON.stringify(pet));
  
    return {
      props: {
        post: serializedPost,
      },
    };
  };
  

export default BlogPage