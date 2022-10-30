//imgs
const imgs = [
    "./imgs/img1.jpeg",
    "./imgs/img2.webp",
    "./imgs/img3.jpeg",
    "./imgs/img4.jpeg",
    "./imgs/img5.jpeg",
    "./imgs/img6.webp"
];

//category
const cats = [
    "cat1",
    "cat2",
    "cat3",
    "cat4",
    "cat5",
    "cat6"
];

//data
const datas = [
    {
        idx: 1,
        title: "Test1",
        category: cats[0],
        price: 19.99,
        img_url: imgs[0],
        desc: "Desc1"
    },
    {
        idx: 2,
        title: "Test2",
        category: cats[1],
        price: 19.99,
        img_url: imgs[1],
        desc: "Desc2"
    },
    {
        idx: 3,
        title: "Test3",
        category: cats[2],
        price: 19.99,
        img_url: imgs[2],
        desc: "Desc3"
    },
    {
        idx: 4,
        title: "Test4",
        category: cats[3],
        price: 19.99,
        img_url: imgs[3],
        desc: "Desc4"
    },
    {
        idx: 5,
        title: "Test5",
        category: cats[4],
        price: 19.99,
        img_url: imgs[4],
        desc: "Desc5"
    },
    {
        idx: 6,
        title: "Test6",
        category: cats[5],
        price: 19.99,
        img_url: imgs[5],
        desc: "Desc6"
    }
]

const body = document.querySelector('body');
const btnWrapper = document.querySelector('.buttons');
let dataWrapper = document.querySelector('.menu_data');

document.addEventListener('DOMContentLoaded', function () {
    cats.forEach(data => {
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.innerHTML = data;
        btn.className = "nav_btn";

        btn.onclick = function () {
            console.log(data);
            dataWrapper.remove();
            dataWrapper = document.createElement('div');
            dataWrapper.className = 'menu_data';

            body.appendChild(dataWrapper);

            datas.forEach(data => {
                if (btn.innerHTML === data.category) {
                    let div = document.createElement('div');
                    div.className = 'menu_element'
                    let text_div = document.createElement('div');
                    text_div.className = 'menu_element_txt'
                    let text = document.createElement('div');
                    text.className = "top_txt";
                    let image = document.createElement('img')
                    image.src = data.img_url;
                    let title = document.createElement('p')
                    title.innerHTML = data.title;
                    title.id = 'title'
                    let price = document.createElement('p')
                    price.innerHTML = data.price;
                    price.id = 'price'
                    let line = document.createElement('hr');
                    let desc = document.createElement('p');
                    desc.innerHTML = data.desc;
                    desc.id = 'description'

                    div.appendChild(image);
                    text.appendChild(title);
                    text.appendChild(price);
                    text_div.appendChild(text);
                    text_div.appendChild(line);
                    text_div.appendChild(desc);
                    div.appendChild(text_div);
                    dataWrapper.appendChild(div);
                }
            })
        }

        btnWrapper.appendChild(btn);
    });

    datas.forEach(data => {
        let div = document.createElement('div');
        div.className = 'menu_element'
        let text_div = document.createElement('div');
        text_div.className = 'menu_element_txt'
        let text = document.createElement('div');
        text.className = "top_txt";
        let image = document.createElement('img')
        image.src = data.img_url;
        let title = document.createElement('p')
        title.innerHTML = data.title;
        title.id = 'title'
        let price = document.createElement('p')
        price.innerHTML = data.price;
        price.id = 'price'
        let line = document.createElement('hr');
        let desc = document.createElement('p');
        desc.innerHTML = data.desc;
        desc.id = 'description'

        div.appendChild(image);
        text.appendChild(title);
        text.appendChild(price);
        text_div.appendChild(text);
        text_div.appendChild(line);
        text_div.appendChild(desc);
        div.appendChild(text_div);
        dataWrapper.appendChild(div);
    })
})