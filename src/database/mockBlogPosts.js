import post_one from "../assets/post-images/design-twenty-one.jpeg";
import post_two from "../assets/post-images/design-twenty-three.jpeg";
import post_three from "../assets/post-images/design-twenty-five.jpeg";
import post_image from "../assets/display-images/design-twenty-four.jpeg";

export const mockBlogPosts = [
  {
    id: 0,
    postImage: post_one,
    postDetails: [
      { id: 0, text: "october 24, 2023", style: true },
      { id: 1, inner_text: [{ id: 0, text: "fashion", style: true }, { id: 1, text: "lifestyle", style: false }] },
      { id: 2, text: `comment: ${0}`, style: false }
    ],
    postAuthor: { profile_picture: post_image, name: "jena peter", description: "Founded by Begha over many cups of tea at her kitchen table in 2009, our brand promise is simple: to provide powerful digital marketing solutions..." },
    postHead: "The Perfect Guide To Pick Your Perfect Duffle 2024!",
    postParagraph: "Summer is here, the season of road trips, redeyes, and getaways is upon us. Add in regularly like your Tuesday cycling class and a duffle. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed praesentium ex odio sint iure eveniet asperiores animi minus consequatur esse, ratione recusandae accusantium nesciunt ipsam! Necessitatibus fuga, qui iusto possimus beatae perspiciatis esse soluta sunt repellat dolorem nisi? \n\n Quasi obcaecati dicta error iusto dolorem minus, velit voluptate id voluptatibus. Quidem facilis laborum obcaecati corrupti quae sapiente saepe eum libero perspiciatis odit dignissimos vitae recusandae nobis atque sunt totam tenetur sint pariatur est rerum, amet perferendis iste aspernatur. \n\n Accusantium, praesentium quas est, nihil expedita dignissimos animi beatae optio provident voluptas magni atque eos aspernatur rem facere? Incidunt labore nulla quaerat quidem."
  },
  {
    id: 1,
    postImage: post_two,
    postDetails: [
      { id: 0, text: "october 24, 2023", style: true },
      { id: 1, inner_text: [{ id: 0, text: "denium", style: true }, { id: 1, text: "industry", style: false }] },
      { id: 2, text: `comment: ${0}`, style: false }
    ],
    postAuthor: { profile_picture: post_image, name: "jena peter", description: "Founded by Begha over many cups of tea at her kitchen table in 2009, our brand promise is simple: to provide powerful digital marketing solutions..." },
    postHead: "Products With Purpose: What is clean denim...",
    postParagraph: "We’ve come up with a few tips, in the form of a practical care guide, to increase your products’ lifespan while keeping things like energy. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed praesentium ex odio sint iure eveniet asperiores animi minus consequatur esse, ratione recusandae accusantium nesciunt ipsam! Necessitatibus fuga, qui iusto possimus beatae perspiciatis esse soluta sunt repellat dolorem nisi? \n\n Quasi obcaecati dicta error iusto dolorem minus, velit voluptate id voluptatibus. Quidem facilis laborum obcaecati corrupti quae sapiente saepe eum libero perspiciatis odit dignissimos vitae recusandae nobis atque sunt totam tenetur sint pariatur est rerum, amet perferendis iste aspernatur. \n\n Accusantium, praesentium quas est, nihil expedita dignissimos animi beatae optio provident voluptas magni atque eos aspernatur rem facere? Incidunt labore nulla quaerat quidem."
  },
  {
    id: 2,
    postImage: post_three,
    postDetails: [
      { id: 0, text: "october 24, 2023", style: true },
      { id: 1, inner_text: [{ id: 0, text: "gold", style: true }, { id: 1, text: "style", style: false }] },
      { id: 2, text: `comment: ${0}`, style: false }
    ],
    postAuthor: { profile_picture: post_image, name: "jena peter", description: "Founded by Begha over many cups of tea at her kitchen table in 2009, our brand promise is simple: to provide powerful digital marketing solutions..." },
    postHead: "Gold Seal of Sustainability: GOTS, Finally Explained!",
    postParagraph: "One of the reasons why sustainable brands tend to have higher prices than what’s considered the average it’s because the product’s price reflects its. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed praesentium ex odio sint iure eveniet asperiores animi minus consequatur esse, ratione recusandae accusantium nesciunt ipsam! Necessitatibus fuga, qui iusto possimus beatae perspiciatis esse soluta sunt repellat dolorem nisi? \n\n Quasi obcaecati dicta error iusto dolorem minus, velit voluptate id voluptatibus. Quidem facilis laborum obcaecati corrupti quae sapiente saepe eum libero perspiciatis odit dignissimos vitae recusandae nobis atque sunt totam tenetur sint pariatur est rerum, amet perferendis iste aspernatur. \n\n Accusantium, praesentium quas est, nihil expedita dignissimos animi beatae optio provident voluptas magni atque eos aspernatur rem facere? Incidunt labore nulla quaerat quidem."
  }
]