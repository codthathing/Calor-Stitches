import { StaticImageData } from "next/image";

export type BlogType = {
  id: number;
  postImage: StaticImageData;
  postDetails: { id: number, text?: string, style?: boolean; inner_text?: { id: number, text: string, style: boolean; }[] }[];
  postHead: string;
  postParagraph: string;
  [key: string]: any;
}