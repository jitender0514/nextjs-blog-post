import mongoose from "mongoose";

export interface Posts extends mongoose.Document {
  title: string;
  description: string;
  content_text: string;
  author_name: string;
  photo_url: string;
  content_html: string;
  category: string;
}

/* PetSchema will correspond to a collection in MongoDB database. */
const PostSchema = new mongoose.Schema<Posts>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title."],
      maxlength: [255, "Title cannot be more than 255 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a title."],
      maxlength: [1000, "Title cannot be more than 1000 characters"],
    },
    content_text: {
      type: String,
      required: [true, "Please provide a title."],
      maxlength: [6000, "Title cannot be more than 6000 characters"],
    },
    content_html: {
        type: String,
      required: [true, "Please provide a title."],
      maxlength: [6000, "Title cannot be more than 6000 characters"],
        
    },
    author_name: {
      type: String,
      required: [true, "Please provide author."],
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    category: {
        type: String,
        required: [true, "Please provide category."],
        maxlength: [100, "Category cannot be more than 100 characters"],
      },
    photo_url: {
      type: String,
      required: [false, "Please provide image url for this."],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post ||
  mongoose.model<Posts>("Post", PostSchema);
