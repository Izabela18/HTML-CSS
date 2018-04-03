var i = 0;
var imgnews = [];
var time = 1600;
imgnews[0] = 'cafeer.png';
imgnews[1] = 'lunch.png';
imgnews[2] = 'jobb.png';
imgnews[3] = "teknik.png";

function changeImgNews(){
  document.slidenyhet.src = imgnews[i];

if(i < imgnews.length - 1){
  i++;
}
else{
      i = 0;
}
setTimeout("changeImgNews()", time);
}


window.onload =changeImgNews;
