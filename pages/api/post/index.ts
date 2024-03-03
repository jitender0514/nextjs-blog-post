import dbConnect from "../../../utils/database";
import Post from "../../../models/Post";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  type: "success" | "error";
  status: number;
  message?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find();
        res
          .status(201)
          .json({
            type: "success",
            message: "Success",
            status: 500,
            data: posts,
          });
      } catch (e) {
        console.log(e);
        res
          .status(500)
          .json({ type: "error", message: "Invalid Request", status: 500 });
      }
      break;
    case "POST":
      try {
        console.log(req.body)
        const post = await Post.create(req.body);
        res
          .status(201)
          .json({
            type: "success",
            message: "Success",
            status: 500,
            data: post,
          });
      } catch (e) {
        console.log(e);
        res
          .status(500)
          .json({ type: "error", message: "Invalid Request", status: 500 });
      }
      break;
    default:
      res
        .status(405)
        .json({ status: 405, type: "error", message: "Unknown Request" });
      break;
  }
}
