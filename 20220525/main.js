let pageData ={
    graduationIndex:0,
    graduationList:[
    '大學',
    '碩士',
    '博士'
    ],
    neme:'',
    club_experience:false,
    work_experience:'無',
    statusList:[
        '',
        '0~1年',
        '1年',
        '2年',
        '3年以上'
    ],
    selectedIndex:0,
    summary:"",
    result:0,
    showResult:false,
    
};
let pageMethods={
    displaySummary(){
        this.summary = `${this.name} : ${this.graduationList[this.graduationIndex]}畢業, 社團經驗:
        ${this.club_experience}, ${this.work_experience}工作經驗
        ${this.statusList[this.selectedIndex]}`;
    },
    calculate(){
        this.showResult = true;
    },
    clearResult(){
        this.showResult = false;
    },
    reset_work_experience(){
        if(this.work_experience=='無'){
            this.selectedIndex =0;
        }
    }
};
let pageComputed = {
    result_realtime(){
        this.result = eval(32000+3000*this.graduationIndex + 2000*this.selectedIndex);
        if(this.club_experience) this.result+=2000;
        return this.result;
    }
};
let pageReset ={
    

}
Vue.createApp({
data(){
    return pageData;
},
methods:pageMethods,
computed:pageComputed,
reset:pageReset,
}).mount("#app");