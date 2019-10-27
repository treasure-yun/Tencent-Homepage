var num=0;
function fun(){
    var Num=num%2+1;
    var img=document.getElementById("img");
    img.src="img/"+Num+".png";
    num++;
}
function jishiqi(){
    window.setInterval("fun()",2000);
}	