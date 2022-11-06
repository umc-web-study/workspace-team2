const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글 이 팬케익이 아무튼 존맛 탱구리라는 글`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `아무튼 이 디너 세트가 존맛 탱구리라는 글 아무튼 이 디너 세트가 존맛 탱구리라는 글 아무튼 이 디너 세트가 존맛 탱구리라는 글 아무튼 이 디너 세트가 존맛 탱구리라는 글 아무튼 이 디너 세트가 존맛 탱구리라는 글 아무튼 이 디너 세트가 존맛 탱구리라는 글 아무튼 이 디너 세트가 존맛 탱구리라는 글`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글. 아무튼 이 밀크 쉐이크가 존맛 탱구리 라는 글.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글. 아무튼 이 음식이 존맛 탱구리 라는 글.`,
  },
];

const menuContainer = document.querySelector(".menu-container");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  menuContainer.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}