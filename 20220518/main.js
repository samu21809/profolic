let pageData = {
members:[{
    name:'Susan',
    gender:'Female'
        },
        {
    name:'Peter',
    gender:'Male'
        },
        {
    name:'Bill',
    gender:'Unknown'
        }]
};

Vue.createApp({
    data(){ return pageData;}
}).mount("#app")