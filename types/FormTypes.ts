import { FieldError } from "react-hook-form";
import { z, ZodType } from "zod";
import { Posts } from "../models/Post";

export type FormData = {
    title: string;
    description: string;
    content_text: string;
    author_name: string;
    photo_url: string;
    content_html: string;
    category: string;
};

export type FormFieldProps = {
  name: ValidFieldNames;
  error: FieldError | undefined;
  value?: string|number;
  placeholder?: string;
  options?: {label: string, value: string|number}[];
  type?: string;
  label?: string;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "title" | "description" | "content_text" | "author_name" | "photo_url" | "content_html" | "category"  ;

export const PostSchema: ZodType<FormData> = z.object({
  title: z.string({ required_error: "required field" }).max(255).min(3),
  description: z.string({ required_error: "required field" }).max(1000).min(10),
  content_text: z.string({ required_error: "required field" }).max(6000).min(1),
  author_name: z.string({ required_error: "required field" }).max(50).min(1),
  photo_url: z.string({ required_error: "required field" }).max(400).min(1),
  content_html: z.string({ required_error: "required field" }).max(6000).min(1),
  category: z.string({ required_error: "required field" }).max(50).min(1),
});



export interface NewPosts extends Posts {
    updatedAt: string;
    createdAt: string;
  }