let pageData ={
    productName:"訂張票到月球",
    productdsp:"月球之旅是搭乘我們最高級的飛行船，可以觀看宇宙的奧秘。",
    imageSrc:[
        "20220511/image/asteroid.jpg",
        "20220511/image/fantasy.jpg",
        "20220511/image/space.jpg",
        "20220511/image/spaceship.jpg"
],
h2ClassController:{
    centered:false,
    colorFont:true
},
pstyleController:{
    color:'blue',
    'margin-left':'50px',
    'font-size':'20px',
    'font-style':'italic',
},
imageStyleController:{
    margin:'auto',
    display:'block',
    width:'50%',
},
    imageAlt:"Photo from space",
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        }
    ]
};

const App = Vue.createApp({
    data(){
        return  pageData;
    }
});

App.mount("#app");

