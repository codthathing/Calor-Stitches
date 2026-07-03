export type BlogType = {
  id: number;
  postImage: string;
  postDetails: { id: number, text?: string, style?: boolean; inner_text?: { id: number, text: string, style: boolean; }[] }[];
  postHead: string;
  postParagraph: string;
  postAuthor: { profile_picture: string; name: string; description: string; };
}