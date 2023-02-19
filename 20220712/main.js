var y = "1";
var x = prompt("請輸入數字(0-99)")
x = parseInt(x);
function check1(){
    if(x>99){
    alert("數字無效"),
    x = prompt("請輸入其他數字");
    check1();
    }
}
function cin(){
    x = prompt("請輸入下一筆數字")
    x = parseInt(x);
    check1();
    if(y!=0){
        cin();
    }
    if(x==10){
        y = 0;
    }
}
check1();
document.write(x);