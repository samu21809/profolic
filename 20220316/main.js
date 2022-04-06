let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy,imgKing,imgSave;
var a = 1;
var b = 1;
function refresh(){
   window.location.reload();
}
const gridLength = 50;
$(function(){
    mapArray = [
        [0,1,1,3,0,0,0,0,0,0,1,0],
        [0,3,0,0,0,3,0,0,3,0,3,1],
        [0,0,0,1,0,1,1,0,1,3,0,3],
        [3,3,1,3,1,0,0,0,0,0,3,1],
        [1,1,0,0,0,0,1,3,1,0,1,3],
        [0,1,3,1,0,0,3,3,0,0,0,1],
        [0,0,0,0,1,0,1,0,0,1,3,1],
        [0,2,0,0,0,0,1,0,0,1,0,1],
        [0,0,3,0,3,3,0,0,0,0,0,2],
        [3,1,0,0,0,1,0,1,0,1,3,0],
        [1,1,0,2,1,3,0,1,0,0,0,1],
        [1,0,0,0,0,3,0,0,1,5,0,3]

    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "yes/spriteSheet.png";
    currentImgMain ={
        "x":0,
        "y":0
    };
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,120,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    }
    imgMountain = new Image();
    imgMountain.src = "yes/mountains3.jpg"
    imgEnemy = new Image();
    imgEnemy.src = "yes/Enemy.png";
    imgKing = new Image();
    imgKing.src = "yes/king.png";
    imgSave = new Image();
    imgSave.src = "yes/bitch.png";
    imgAfter = new Image();
    imgAfter.src = "yes/after.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            imgKing.onload = function(){
                imgSave.onload = function(){
                    imgAfter.onload = function(){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(imgMountain,0,205,138,100,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[x][y]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[x][y]==2){
                    ctx.drawImage(imgKing,0,95,67,67,y*gridLength,x*gridLength,gridLength,gridLength);
                    mapArray[x][y]=4;
                }
                else if(mapArray[x][y]==4){
                    ctx.drawImage(imgMain,0,0,80,120,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
                }
                else if(mapArray[x][y]==5){
                   ctx.drawImage(imgSave,0,0,200,200,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                }
                }
            }
            }
        }
    }
    }
})

$(document).on("keydown",function(event){
    let targetImg,targetBlock,cutImagePositionX;
    targetImg = {
        "x":-1,
        "y":-1
    };
    targetBlock ={
        "x":-1,
        "y":-1
    }
    event.preventDefault();
    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y- gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;   
        case "ArrowDown":
            targetImg.x = currentImgMain.x ;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
        return;
    }
    if(targetImg.x<=550 && targetImg.x>=0 &&targetImg.y<=550 && targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        if(b==1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                $("#talkBox").text("有山");
                break;
            case 4:
                $("#talkBox").text("拿到王冠了!");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                $("h2").text(a+"/3"); 
                 a++;
                 if(a==4){
                     a=3;
                    alert('你可以解救公主了!');
                    setTimeout(1000);
                    b=0;
                }
                break;
            case 3:
                $("#talkBox").text("哈囉");
                break;
        }
        }
        if(b==0){ 
            switch(mapArray[targetBlock.x][targetBlock.y]){
                case 0:
                    $("#talkBox").text("");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    break;
                case 1:
                    $("#talkBox").text("有山");
                    break;
                case 4:
                    $("#talkBox").text("拿到王冠了!");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                    $("h2").text(a+"/3"); 
                    break;
                case 3:
                    $("#talkBox").text("哈囉");
                    break;
                case 5:
                    alert('You save the princess!');
                   $("img").attr("src",`yes/after.png`).attr("width","500px").attr("right","10%");
                    setTimeout('refresh()',3000);
                    break;
   }
}
    }else{
        $("#talkBox").text("邊界");
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
})

