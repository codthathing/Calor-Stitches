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
    productColors: [{id: 0, color: "#808000", style: true, colorText: "Olive green"}, {id: 1, color: "#DAA520", style: false, colorText: "Goldenrod"}],
    productSize: [{id: 0, size: ""}],
    cartAmt: 1,
    wishlistDate: "August 20, 2024",
    wishlistStock: 10
  },
  {
    id: 1,
    productImage: product_two,
    productImages: [{ id: 0, style: true, image: product_two}, { id: 1, style: false, image: product_five}, { id: 2, style: false, image: product_four}, { id: 3, style: false, image: product_three}, { id: 4, style: false, image: product_five}],
    productName: "dust lightweight jacket",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "50% OFF",
    productAvailableColor: "#FF421D",
    cutOff: 50,
    productDetails: { cartSize: "L" },
    productSize: [{id: 0, size: ""}],
    cartAmt: 1,
    wishlistDate: "May 31, 2024",
    wishlistStock: 4
  },
  {
    id: 2,
    productImage: product_three,
    productImages: [{ id: 0, style: true, image: product_three}, { id: 1, style: false, image: product_six}, { id: 2, style: false, image: product_four}, { id: 3, style: false, image: product_five}, { id: 4, style: false, image: product_eight}],
    productName: "karatima outwear",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "SOLD OUT",
    productAvailableColor: "#C2272D",
    productDetails: { cartColor: "Olive green" },
    productColors: [{id: 0, color: "#808000", style: true, colorText: "Olive green"}, {id: 1, color: "pink", style: false, colorText: "Pink"}],
    cartAmt: 1,
    wishlistDate: "August 24, 2024",
    wishlistStock: 0
  },
  {
    id: 3,
    productImage: product_four,
    productImages: [{ id: 0, style: true, image: product_four}, { id: 1, style: false, image: product_five}, { id: 2, style: false, image: product_three}, { id: 3, style: false, image: product_two}, { id: 4, style: false, image: product_five}],
    productName: "white dressed pants",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "NEW IN",
    productAvailableColor: "#00A849",
    cartAmt: 1,
    wishlistDate: "June 19, 2024",
    wishlistStock: 20,
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
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    productDetails: { cartColor: "Navy blue", cartSize: "XL" },
    productColors: [{id: 0, color: "#000080", style: true, colorText: "Valy blue"}, {id: 1, color: "#228B22", style: false, colorText: "Forest green"}],
    productSize: [{id: 0, size: ""}],
    cartAmt: 1,
    wishlistDate: "September 9, 2024",
    wishlistStock: 30
  },
  {
    id: 5,
    productImage: product_six,
    productImages: [{ id: 0, style: true, image: product_six}, { id: 1, style: false, image: product_two}, { id: 2, style: false, image: product_three}, { id: 3, style: false, image: product_four}, { id: 4, style: false, image: product_five}],
    productName: "dust lightweight jacket",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    doubleProductAvail: "NEW IN",
    doubleAvailColor: "#00A849",
    productAvailable: "50% OFF",
    productAvailableColor: "red",
    cutOff: 50,
    productDetails: { cartColor: "Army green", cartSize: "XXL" },
    productColors: [{id: 0, color: "#4B5320", style: true, colorText: "Army green"}, {id: 1, color: "#DC143C", style: false, colorText: "Crimson"}],
    productSize: [{id: 0, size: ""}],
    cartAmt: 1,
    wishlistDate: "February 14, 2024",
    wishlistStock: 20
  },
  {
    id: 6,
    productImage: product_seven,
    productImages: [{ id: 0, style: true, image: product_seven}, { id: 1, style: false, image: product_seven}, { id: 2, style: false, image: product_six}, { id: 3, style: false, image: product_eight}, { id: 4, style: false, image: product_five}],
    productName: "lime punch outerwear",
    priceOne: 109,
    priceTwo: 129,
    averagePrice: 117,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    cartAmt: 1,
    wishlistDate: "April 1, 2024",
    wishlistStock: 38
  },
  {
    id: 7,
    productImage: product_eight,
    productImages: [{ id: 0, style: true, image: product_eight}, { id: 1, style: false, image: product_five}, { id: 2, style: false, image: product_seven}, { id: 3, style: false, image: product_eight}, { id: 4, style: false, image: product_two}],
    productName: "cocoon davni dress",
    productPrice: 85,
    productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!",
    productAvailable: "HOT",
    productAvailableColor: "#FF421D",
    productDetails: { cartColor: "Moon black", cartSize: "L" },
    productColors: [{id: 0, color: "#191919", style: true, colorText: "Moon black"}, {id: 1, color: "#00BFFF", style: false, colorText: "Deep Sky Blue"}],
    productSize: [{id: 0, size: ""}],
    cartAmt: 1,
    wishlistDate: "December 29, 2024",
    wishlistStock: 8
  }
] 