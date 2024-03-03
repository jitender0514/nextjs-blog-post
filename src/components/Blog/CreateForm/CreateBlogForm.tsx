"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, PostSchema } from "../../../../types/FormTypes";
import InputField from "@/components/Form/Fields/InputField";
import TextAreaField from "@/components/Form/Fields/TextAreaField";
import Link from "next/link";

const CreateBlogForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(PostSchema), // Apply the zodResolver
  });

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: FormData) => {
    try {
      const res = await fetch("/api/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        console.log("Form error:", res);
        toast.error("Form error, Please try again later", {
          position: "top-center",
        });
        return;
      }

      console.log("Form success:", res);
      toast.success("Success Saved!!", { position: "top-center" });
      methods.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to saved, Please try again later", {
        position: "top-center",
      });
    }
  };    

  return (
    <>
      <ToastContainer />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(postData)}
          className="max-w-md mx-auto"
        >
          <div className="grid col-auto">
            <div className="mb-5 col-span-full">
              <InputField
                label="Title"
                type="title"
                placeholder="Title"
                name="title"
                error={methods.formState.errors.title}
              />
            </div>
            <div className="mb-5 col-span-full">
              <InputField
                label="Description"
                placeholder="Description"
                name="description"
                error={methods.formState.errors.description}
              />
            </div>
            <div className="mb-5 col-span-full">
              <InputField
                label="Author Name"
                placeholder="Author Name"
                name="author_name"
                error={methods.formState.errors.author_name}
              />
            </div>
            <div className="mb-5 col-span-full">
              <InputField
                label="Category"
                placeholder="Category"
                name="category"
                error={methods.formState.errors.category}
              />
            </div>
            <div className="mb-5 col-span-full">
              <InputField
                label="Media URL"
                placeholder="Media URL"
                name="photo_url"
                error={methods.formState.errors.photo_url}
              />
            </div>
            <div className="mb-5 col-span-full">
              <TextAreaField
                label="Raw Content Text"
                placeholder="Raw Content Raw Text"
                name="content_text"
                error={methods.formState.errors.content_text}
              />
            </div>
            <div className="mb-5 col-span-full">
              <TextAreaField
                label="Content"
                placeholder="Content"
                name="content_html"
                error={methods.formState.errors.content_html}
              />
            </div>

            <div className="mb-5 col-span-full sm:flex sm:items-center sm:justify-end sm:gap-x-6">
              <Link href="/" className="w-full sm:w-1/2">
                <button
                  type="button"
                  className="rounded-md mt-5 btn w-full bg-gray-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Back to task list
                </button>
              </Link>
              <button
                type="submit"
                className="rounded-md mt-5 btn w-full sm:w-1/2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create New Task
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default CreateBlogForm;
