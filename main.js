/*=======================================================================================*/
// components sections
/*=======================================================================================*/

function Item(name, img) {
  // creating components
  let item_container = document.createElement("div");
  let img_product = document.createElement("img");
  let productName = document.createElement("h2");
  let buttons_container = document.createElement("div");
  let incrementBtn = document.createElement("button");
  let decrementBtn = document.createElement("button");
  // adding attributes
  item_container.setAttribute("class", "item");
  img_product.setAttribute("class", "img");
  buttons_container.setAttribute("class", "btn_container");
  incrementBtn.setAttribute("class", "btn");
  decrementBtn.setAttribute("class", "btn");
  productName.setAttribute("class", "item-title");
  // inserting props
  img_product.setAttribute("src", img);
  productName.textContent = name;
  incrementBtn.textContent = "+";
  decrementBtn.textContent = "-";
  // inserting elements
  buttons_container.append(decrementBtn, incrementBtn);
  item_container.append(img_product, productName, buttons_container);

  return item_container;
}

function Header(title) {
  // creating element
  let header = document.createElement("h1");
  // adding attributes
  header.setAttribute("class", "header");
  // adding content
  header.textContent = title;
  return header;
}

/*=======================================================================================*/
// assets
/*=======================================================================================*/

const img1 = "./assets/headphone.jpg";
const img2 = "./assets/mouse_lobo.jpg";
const img3 = "./assets/david_murariu.jpg";
const img4 = "./assets/ps5.jpg";
const img5 = "./assets/pc.jpg";
const img6 = "./assets/white_xbox_elite.jpg";

let arrOfImg = [img1, img2, img3, img4, img5, img6];

/*=======================================================================================*/
// titles
/*=======================================================================================*/

let products_names = [
  "headphone",
  "gaming mouse",
  "keyboard",
  "ps5",
  "gaming pc",
  "xbox controller",
];

/*=======================================================================================*/
//  rendering components
/*=======================================================================================*/

let container = document.querySelector("#container");
let app = document.querySelector("#app");
//
app.prepend(Header("Welcome to gaming store"));
//
for (let i = 0; i < products_names.length; i++) {
  container.append(Item(products_names[i], arrOfImg[i]));
}
