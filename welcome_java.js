window.onload = function() {
  var image = document.getElementById("aaa");
  var image2 = document.getElementById("bbb");
  var img_array = ["bilder/student2.jpg", "bilder/student4.jpg", "bilder/student5.jpg"];
  var img_array2 = ["bilder/student7.jpg", "bilder/student6.jpg", "bilder/student3.jpg"];
  var index = 0;
  var index2 = 0;
  var interval = 2000;

  function slide() {
    image.src = img_array[index++ % img_array.length];
    image2.src = img_array2[index2++ % img_array2.length];
  }

  setInterval(slide, interval);



  document.getElementById("demo").addEventListener("mouseover", mouseOver);
  document.getElementById("demo").addEventListener("mouseout", mouseOut);

  function mouseOver() {
    document.getElementById("demo").style.backgroundColor = "#46494f";
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.fontSize ="60px";
    document.getElementById("demo").innerHTML = "Välkommen till Studentslink!";

  }

  function mouseOut() {
    document.getElementById("demo").style.backgroundColor = "#fcb906";
    document.getElementById("demo").style.color = "black";
    document.getElementById("demo").innerHTML = "Göteborgs storsta studentsnätverk!";
  }


  var modal = document.getElementById('myModal');

  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];


  btn.onclick = function() {
    modal.style.display = "block";
  }


  span.onclick = function() {
    modal.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
