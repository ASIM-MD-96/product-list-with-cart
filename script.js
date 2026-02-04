"use strict";

const products = [
  {
    image: {
      thumbnail: "./images/image-waffle-thumbnail.jpg",
      mobile: "./images/image-waffle-mobile.jpg",
      tablet: "./images/image-waffle-tablet.jpg",
      desktop: "./images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./images/image-creme-brulee-thumbnail.jpg",
      mobile: "./images/image-creme-brulee-mobile.jpg",
      tablet: "./images/image-creme-brulee-tablet.jpg",
      desktop: "./images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./images/image-macaron-thumbnail.jpg",
      mobile: "./images/image-macaron-mobile.jpg",
      tablet: "./images/image-macaron-tablet.jpg",
      desktop: "./images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./images/image-tiramisu-thumbnail.jpg",
      mobile: "./images/image-tiramisu-mobile.jpg",
      tablet: "./images/image-tiramisu-tablet.jpg",
      desktop: "./images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./images/image-baklava-thumbnail.jpg",
      mobile: "./images/image-baklava-mobile.jpg",
      tablet: "./images/image-baklava-tablet.jpg",
      desktop: "./images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./images/image-meringue-thumbnail.jpg",
      mobile: "./images/image-meringue-mobile.jpg",
      tablet: "./images/image-meringue-tablet.jpg",
      desktop: "./images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./images/image-cake-thumbnail.jpg",
      mobile: "./images/image-cake-mobile.jpg",
      tablet: "./images/image-cake-tablet.jpg",
      desktop: "./images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./images/image-brownie-thumbnail.jpg",
      mobile: "./images/image-brownie-mobile.jpg",
      tablet: "./images/image-brownie-tablet.jpg",
      desktop: "./images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./images/image-panna-cotta-thumbnail.jpg",
      mobile: "./images/image-panna-cotta-mobile.jpg",
      tablet: "./images/image-panna-cotta-tablet.jpg",
      desktop: "./images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
const globalContainer = document.querySelector(".global__container");
const productContainer = document.querySelector(".product__container");
const selectedProducts = document.querySelector(".selected__products");
const yourCartCount = document.querySelector(".cart-count");
const yourCartImage = document.querySelector(".yourcart__emptyimg ");

const fillCart = document.querySelector(".fill__cart");
const cartTotal = document.querySelector(".cart_total");
const neutral = document.querySelector(".neutral__section");
const confirmOrderBtn = document.querySelector(".confirm__order__btn");
const startNewOrder = document.querySelector(".start__new__content");
const body = document.querySelector("body");

neutral.classList.add("hidden");
cartTotal.classList.add("hidden");
confirmOrderBtn.classList.add("hidden");
function displayProducts(products) {
  products.forEach((products, index) => {
    let html = `<div class="product__preview rounded-xl"  data-index="${index}">
            <div class="relative flex justify-center ">
              <img
                src="${products.image.mobile}"
                alt=""
                class="rounded-xl md:hidden hover:border-2 hover:border-red"
              />
              <img
                src="${products.image.desktop}"
                alt=""
                class="hidden md:block rounded-xl hover:border-2 hover:border-red"
              />
              <button
                class="add__to__cart__btn flex gap-2 font-redhat font-semibold border border-rose500 py-2 px-4 rounded-full absolute -bottom-4 bg-rose50"
              >
                <img src="./images/icon-add-to-cart.svg" alt="" />
                Add to cart
              </button>
              <div
                class="quantity__box absolute  bg-red font-redhat font-semibold border border-rose500 px-4 py-2 rounded-full -bottom-4 hidden"
              >
                <div class="product__sum flex gap-8">
                  <img
                    src="images/icon-decrement-quantity.svg"
                    alt=""
                    class="decrement p-1 w-5 h-5 border rounded-full cursor-pointer"
                  />
                  <p class="product-count text-rose50">1</p>
                  <img
                    src="images/icon-increment-quantity.svg"
                    alt=""
                    class="increment p-1 w-5 h-5 border rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p
              class="product__category mt-8 text-sm font-redhat font-semibold text-rose300"
            >
             ${products.category}
            </p>
            <h3
              class="product__name text-lg text-rose900 font-semibold font-redhat"
            >
              ${products.name}
            </h3>
            <p
              class="product__price text-red text-lg font-redhat font-semibold"
            >
             $${products.price.toFixed(2)}
            </p>
          </div>
          

          `;
    productContainer.insertAdjacentHTML("beforeend", html);
  });
}
displayProducts(products);
let cart = {};
productContainer.addEventListener("click", function (e) {
  const product = e.target.closest(".product__preview");

  if (!product) return;
  const index = Number(product.dataset.index);
  const addBtn = product.querySelector(".add__to__cart__btn");
  const quantityBox = product.querySelector(".quantity__box");
  const productCount = product.querySelector(".product-count");

  if (e.target.closest(".add__to__cart__btn")) {
    cart[index] = 1;
    productCount.textContent = 1;
    yourCartCount.textContent = productCount.textContent;
    quantityBox.classList.remove("hidden");
    addBtn.classList.add("hidden");
  }

  if (e.target.closest(".increment")) {
    cart[index]++;
    productCount.textContent = cart[index];
  }

  if (e.target.closest(".decrement")) {
    cart[index]--;

    productCount.textContent = cart[index];

    if (cart[index] <= 0) {
      delete cart[index];
      addBtn.classList.remove("hidden");
      quantityBox.classList.add("hidden");
    }
  }
  updateCart();
  renderCart();
});

function updateCart() {
  let totalItems = 0;
  let totalPrice = 0;
  Object.entries(cart).forEach(([index, qty]) => {
    totalItems = totalItems + qty;
    totalPrice = totalPrice + qty * products[index].price;
  });

  // cart count
  yourCartCount.textContent = totalItems;
  // cart img
  if (totalItems === 0) {
    yourCartImage.classList.remove("hidden");
    cartTotal.classList.add("hidden");
    confirmOrderBtn.classList.add("hidden");
    neutral.classList.add("hidden");
  } else {
    cartTotal.classList.remove("hidden");
    yourCartImage.classList.add("hidden");
    neutral.classList.remove("hidden");
    confirmOrderBtn.classList.remove("hidden");
  }

  cartTotal.innerHTML = ` <span
                    class="cart__total__text flex flex-col capitalize text-sm font-normal font-redhat"
                    >order total</span
                  >
                  $${totalPrice.toFixed(2)}`;
}

function renderCart() {
  fillCart.innerHTML = "";
  Object.entries(cart).forEach(([index, qty]) => {
    if (qty <= 0) return;

    const product = products[index];
    const item = document.createElement("div");
    item.className =
      "fillcart__items relative flex flex-col justify-between py-2 border-b";
    const total = qty * product.price;

    item.innerHTML = `<div> <p
                  class="fillcart__product__name items-center font-redhat font-semibold text-rose900"
                >
                 ${product.name}
                </p>
                <p
                      class="fillcart__product__calc text-sm text-red font-bold"
                    >${qty}x
                      <span class="fill__product__rate text-rose500 font-normal"
                        >$${product.price.toFixed(2)}
                      </span>
                      <span
                        class="fillcart__product--total text-rose500 font-semibold"
                        >$${total.toFixed(2)}
                      </span>
                    </p>
                </div>
                    <img
                      src="./images/icon-remove-item.svg"
                      alt="remove"
                      class="remove__icon w-4 h-4 p-0.5 border border-rose500 rounded-full absolute right-0 mt-4 " data-index="${index}"
                    />`;
    // cart total

    fillCart.appendChild(item);
  });
}

// REMOVE ICON
fillCart.addEventListener("click", function (e) {
  const removeIcon = e.target.closest(".remove__icon");
  if (!removeIcon) return;
  const index = removeIcon.dataset.index;

  delete cart[index];

  const product = document.querySelector(
    `.product__preview[data-index="${index}"]`,
  );

  const quantityBox = product.querySelector(".quantity__box");
  const addBtn = product.querySelector(".add__to__cart__btn");

  quantityBox.classList.add("hidden");
  addBtn.classList.remove("hidden");

  updateCart();
  renderCart();
});

////////////////////////////////////////////

const confirmOrderPreview = document.querySelector(".confirm__order__preview");
function startNewOrderEl() {
  startNewOrder.innerHTML = `<div class="start__new__icon">
        <img src="images/icon-order-confirmed.svg" alt="" />
      </div>
      <h2
        class="start__new__header order-confirmed-header text-3xl text-rose900 font-bold font-redhat mt-4"
      >
        Order Confirmed
      </h2>
      <p class="start__new__text text-sm text-rose500 font-redhat">
        We hope enjoy your food
      </p>`;
  let grandTotal = 0;

  const previewBox = document.createElement("div");
  previewBox.className =
    "confirm_order_preview bg-rose100 p-4 mt-4 rounded-lg w-full max-h-[300px] overflow-y-auto";

  Object.entries(cart).forEach(([index, qty]) => {
    if (!qty) return;
    const product = products[index];
    const count = Number(qty);
    const total = count * product.price;

    grandTotal += total;

    const item = document.createElement("div");
    item.classList = "confirm__order__content relative flex mt-4 border-b";

    startNewOrder.appendChild(previewBox);
    item.innerHTML = `
          <div class="flex  gap-4 p-2 ">
             <img
            src="${product.image.thumbnail}"
            alt=""
            class="thumbnail_img rounded-lg"
          />
          <p
            class="confirm__order__text flex flex-col text-sm p-2 text-rose900 font-redhat font-semibold justify-between"
          >
           ${product.category}
            <span class="text-red text-sm"
              >${count}x <span class="text-rose500 ml-2"> @$${product.price.toFixed(2)}</span></span
            >
          </p>
           <p
            class="confirm__order__total text-rose900 text-lg font-bold font-redhat absolute top-8 right-0"
          >
            $${total.toFixed(2)}
          </p>   
        </div>
         
        `;
    previewBox.appendChild(item);
  });
  // total
  const grandTot = document.createElement("p");
  grandTot.className =
    "flex justify-between text-xl font-bold mt-4 font-redhat text-rose900 items-center";

  grandTot.innerHTML = ` <span
              class="flex flex-col capitalize text-sm font-normal font-redhat"
              >order total</span
            >
            $${grandTotal.toFixed(2)}`;
  startNewOrder.appendChild(grandTot);

  const newBtn = document.createElement("button");
  newBtn.className =
    "start__new__order--btn mt-4 text-rose50 text-lg font-semibold font-redhat bg-red/90 py-2 w-full rounded-full hover:bg-red capitalize";
  newBtn.innerHTML = ` start new order`;
  startNewOrder.appendChild(newBtn);
}

/////////////////////////////////////////////////////
function reset() {
  cart = {};
  document.querySelectorAll(".quantity__box").forEach((box) => {
    box.classList.add("hidden");
  });

  document.querySelectorAll(".add__to__cart__btn").forEach((btn) => {
    btn.classList.remove("hidden");
  });
  startNewOrder.innerHTML = "";
  startNewOrder.classList.add("hidden");
  globalContainer.classList.remove("opacity-50");
  yourCartCount.textContent = `0`;
  cartTotal.classList.add("hidden");
  neutral.classList.add("hidden");
  confirmOrderBtn.classList.add("hidden");
  yourCartImage.classList.remove("hidden");
  updateCart();
  renderCart();
}

startNewOrder.addEventListener("click", function (e) {
  const newOrderBtn = e.target.closest(".start__new__order--btn");
  if (newOrderBtn) {
    reset();
    updateCart();
    renderCart();
  }
});

confirmOrderBtn.addEventListener("click", function () {
  startNewOrder.classList.remove("hidden");
  globalContainer.classList.add("opacity-50");
  startNewOrderEl();

  // window.scrollTo({ top: 150, behavior: "smooth" });
});
// window.addEventListener("scroll", function () {
//   console.log(this.window.scrollY);
// });
