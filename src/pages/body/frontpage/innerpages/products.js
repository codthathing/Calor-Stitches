import product_one from "../../../../asset/images-icons/productImages/design_two.jpeg";
import product_two from "../../../../asset/images-icons/productImages/design_two.jpeg";
import product_three from "../../../../asset/images-icons/productImages/design_three.jpeg";
import product_four from "../../../../asset/images-icons/productImages/design_four.jpeg";
import product_five from "../../../../asset/images-icons/productImages/design_five.jpeg";
import product_six from "../../../../asset/images-icons/productImages/design_six.jpeg";
import product_seven from "../../../../asset/images-icons/productImages/design_seven.jpeg";
import product_eight from "../../../../asset/images-icons/productImages/design_eight.jpeg";

export const productDetails = [
  {
    id: 0,
    productImage: product_one,
    productImages: [{ id: 0, style: true, image: product_one }, { id: 1, style: false, image: product_four }, { id: 2, style: false, image: product_eight }, { id: 3, style: false, image: product_five }, { id: 4, style: false, image: product_two }],
    productName: "sunflower jumpsuit",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productDetails: { cartColor: "Olive green", cartSize: "L" },
    productColors: [{id: 0, color: "#808000", style: true, text: "Olive green"}, {id: 1, color: "#DAA520", style: false, text: "Goldenrod"}],
    productSizes: [{id: 0, text: "L", style: true}, {id: 1, text: "XL", style: false}],
    cartAmt: 1,
    wishlistDate: "August 20, 2024",
    wishlistStock: 0,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "8472ABX9"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "outerwear"}, {id: 1, text: "dresses", style: false}]}
    ]
  },
  {
    id: 1,
    productImage: product_two,
    productImages: [{ id: 0, style: true, image: product_two}, { id: 1, style: false, image: product_five}, { id: 2, style: false, image: product_four}, { id: 3, style: false, image: product_three}, { id: 4, style: false, image: product_five}],
    productName: "dust lightweight jacket",
    productPrice: 5000,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    cutOff: 10,
    productDetails: { cartSize: "L" },
    productSizes: [{id: 0, text: "L", style: true}, {id: 1, text: "XXL", style: false}],
    cartAmt: 1,
    wishlistDate: "May 31, 2024",
    wishlistStock: 2,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "5693ZYT7"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "activewear"}, {id: 1, text: "t-shirts", style: false}]}
    ]
  },
  {
    id: 2,
    productImage: product_three,
    productImages: [{ id: 0, style: true, image: product_three}, { id: 1, style: false, image: product_six}, { id: 2, style: false, image: product_four}, { id: 3, style: false, image: product_five}, { id: 4, style: false, image: product_eight}],
    productName: "karatima outwear",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "hot",
    productDetails: { cartColor: "Olive green" },
    productColors: [{id: 0, color: "#808000", style: true, text: "Olive green"}, {id: 1, color: "pink", style: false, text: "Pink"}],
    cartAmt: 1,
    wishlistDate: "August 24, 2024",
    wishlistStock: 0,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "1928MNU4"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "outerwear"}, {id: 1, text: "sweaters", style: false}]}
    ]
  },
  {
    id: 3,
    productImage: product_four,
    productImages: [{ id: 0, style: true, image: product_four}, { id: 1, style: false, image: product_five}, { id: 2, style: false, image: product_three}, { id: 3, style: false, image: product_two}, { id: 4, style: false, image: product_five}],
    productName: "white dressed pants",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "new in",
    cartAmt: 1,
    wishlistDate: "June 19, 2024",
    wishlistStock: 24,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "4567QWE3"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "jeans"}, {id: 1, text: "activewear", style: false}]}
    ]
  },
  {
    id: 4,
    productImage: product_five,
    productImages: [{ id: 0, style: true, image: product_five}, { id: 1, style: false, image: product_eight}, { id: 2, style: false, image: product_two}, { id: 3, style: false, image: product_six}, { id: 4, style: false, image: product_five}],
    productName: "lime punch outerwear",
    priceOne: 109,
    priceTwo: 129,
    averagePrice: 121,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "back in store",
    productDetails: { cartColor: "Navy blue", cartSize: "XL" },
    productColors: [{id: 0, color: "#000080", style: true, text: "Valy blue"}, {id: 1, color: "#228B22", style: false, text: "Forest green"}],
    productSizes: [{id: 0, text: "XL", style: true}, {id: 1, text: "L", style: false}],
    cartAmt: 1,
    wishlistDate: "September 9, 2024",
    wishlistStock: 30,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "3902LKI5"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "sweaters"}, {id: 1, text: "t-shirts", style: false}]}
    ]
  },
  {
    id: 5,
    productImage: product_six,
    productImages: [{ id: 0, style: true, image: product_six}, { id: 1, style: false, image: product_two}, { id: 2, style: false, image: product_three}, { id: 3, style: false, image: product_four}, { id: 4, style: false, image: product_five}],
    productName: "lightweight jacket",
    productPrice: 170,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "new in",
    cutOff: 50,
    productDetails: { cartColor: "Army green", cartSize: "XXL" },
    productColors: [{id: 0, color: "#4B5320", style: true, text: "Army green"}, {id: 1, color: "#DC143C", style: false, text: "Crimson"}],
    productSizes: [{id: 0, text: "XXL", style: true}, {id: 1, text: "LL", style: false}],
    cartAmt: 1,
    wishlistDate: "February 14, 2024",
    wishlistStock: 1,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "7645OPR6"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "outerwear"}, {id: 1, text: "dresses", style: false}]}
    ]
  },
  {
    id: 6,
    productImage: product_seven,
    productImages: [{ id: 0, style: true, image: product_seven}, { id: 1, style: false, image: product_seven}, { id: 2, style: false, image: product_six}, { id: 3, style: false, image: product_eight}, { id: 4, style: false, image: product_five}],
    productName: "lime outerwear",
    priceOne: 109,
    priceTwo: 129,
    averagePrice: 117,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "back in store",
    cartAmt: 1,
    wishlistDate: "April 1, 2024",
    wishlistStock: 4,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "2138GHB8"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "sweaters"}, {id: 1, text: "activewear", style: false}]}
    ]
  },
  {
    id: 7,
    productImage: product_eight,
    productImages: [{ id: 0, style: true, image: product_eight}, { id: 1, style: false, image: product_five}, { id: 2, style: false, image: product_seven}, { id: 3, style: false, image: product_eight}, { id: 4, style: false, image: product_two}],
    productName: "cocoon davni dress",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "hot",
    productDetails: { cartColor: "Moon black", cartSize: "L" },
    productColors: [{id: 0, color: "#191919", style: true, text: "Moon black"}, {id: 1, color: "#00BFFF", style: false, text: "Deep Sky Blue"}],
    productSizes: [{id: 0, text: "L", style: true}, {id: 1, text: "XL", style: false}],
    cartAmt: 1,
    wishlistDate: "December 29, 2024",
    wishlistStock: 0,
    productInfo: [
      {id: 0, name: "SKU", type: "text", links: [{id: 0, text: "9501TSV2"}]},
      {id: 1, name: "CARTEGORIES", type: "link", links: [{id: 0, text: "t-shirts"}, {id: 1, text: "dresses", style: false}]}
    ]
  }
] 