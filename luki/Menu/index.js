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

const btnWrapper = document.querySelector('.buttons');
const dataWrapper = document.querySelector('.menu_data');

document.addEventListener('DOMContentLoaded', function() {
    cats.forEach(data => {
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.innerHTML = data;
        btn.className = "nav_btn";

        btn.onClick = function(){
            console.log(btn.innerHTML);
        }

        btnWrapper.appendChild(btn);
    });

    datas.forEach(data => {
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
        
        dataWrapper.appendChild(image);
        dataWrapper.appendChild(title);
        dataWrapper.appendChild(price);
        dataWrapper.appendChild(line);
        dataWrapper.appendChild(desc);
    })
})