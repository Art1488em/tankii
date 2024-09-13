const catalog = [
  {
    name: "Тигр порше",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29.2.jpg/332px-Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29.2.jpg",
    price: 120000000,
    oldPrice: 120000001,
    currency: "$",
    desription: "Достался от деда",
  },
  {
    name: "Тигр порше2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUb43llVuzKHCcOP9tmWxqIaeTOhDnix_tQ&s",
    price: 150000000,
    oldPrice: 150000001,
    currency: "$",
    desription: "Достался от деда",
  },
  {
    name: "Пантера порше",
    img: "https://parkpatriot.ru/upload/iblock/d7e/srzrzsq87sxopx04grj5zyvfa70htsrq/IMG_0919.jpg",
    price: 100000000,
    oldPrice: 100000001,
    currency: "$",
    desription: "Достался от деда",
  },
  {
    name: "ЯгТигр порше",
    img: "https://i.ytimg.com/vi/12Z1ZKoyD5s/maxresdefault.jpg",
    price: 180000000,
    oldPrice: 180000001,
    currency: "$",
    desription: "Достался от деда",
  },
  {
    name: "ЯгПантер порше",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/9676276/pub_64bfd82c01a29c616fa62dff_64c0e6d95edc8218101dc3d2/scale_1200",
    price: 200000000,
    oldPrice: 200000001,
    currency: "$",
    desription: "Достался от деда",
  },
];

const cards = document.querySelector(".cards");

catalog.forEach((card) => {
  cards.innerHTML += `
                <div class="card">
                    <img src=${card.img} alt="">
                    <h3>${card.name}</h3>
                    <p>${card.desription}</p>
                    <s>${card.oldPrice} ${card.currency}</s>
                    <h4>${card.price} ${card.currency}</h4>
                    <button>Купить</button>
                </div>` 
})
