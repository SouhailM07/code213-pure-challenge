let Id = 0;

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
  item_container.setAttribute("id", `item${Id}`);
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
  //  adding events
  incrementBtn.addEventListener("click", (e) => {
    console.log(item_container.id);
  });

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

function SideBar() {
  // creating elements
  let side_bar = document.createElement("div");
  let shopList_toggleBtn_container = document.createElement("div");
  let shopList_toggleBtn = document.createElement("button");
  let h2 = document.createElement("h2");
  let h2_title = document.createElement("div");
  let shopList_container = document.createElement("ul");
  let shopList = document.createElement("li");
  let shopListItem = document.createElement("div");
  let SHOPLIST_DELETE_BTN = document.createElement("button");
  // adding attributes
  side_bar.setAttribute("class", "side_bar");
  shopList_toggleBtn_container.setAttribute("class", "shopList_toggleBtn");
  h2.setAttribute("id", "side_bar-title");
  shopList_container.setAttribute("class", "shopList_container");
  shopList.setAttribute("class", "shopList_list");
  // adding content
  // ! make list here of shop items
  h2_title.textContent = "Your List";
  shopList_toggleBtn.textContent = "X";
  SHOPLIST_DELETE_BTN.textContent = "Delete";
  shopListItem.textContent = "ps7 : 7";
  // making the component
  shopList.append(shopListItem, SHOPLIST_DELETE_BTN);
  h2.append(h2_title);
  shopList_toggleBtn_container.append(shopList_toggleBtn);
  //
  shopList_container.append(shopList);
  side_bar.append(shopList_toggleBtn_container, h2, shopList_container);
  return side_bar;
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
  Id += 1;
}

app.append(SideBar());
