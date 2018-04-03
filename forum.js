addEventListener('load', function () {
  window.mdc.autoInit();

/*
  var drawer = new mdc.drawer.MDCTemporaryDrawer(document.getElementById('drawer-drop'));
  document.getElementById('menu-drop').addEventListener('click', function () { drawer.open = !drawer.open;
  });
*/

  console.dir(document.getElementById('addanchor'));

  var addNew2 = document.getElementById('add-plus');
  var addNew = document.getElementById('addanchor');
  var closeThread = document.getElementById('close-box');
  var createThread = document.getElementById('new-thread');

  addNew.onclick = function() {
    createThread.style.display='block';
  }

  addNew2.onclick = function() {
    createThread.style.display='block';
  }

  addNew2.onclick = function() {
    createThread.style.display='block';
  }

  closeThread.onclick = function() {
    createThread.style.display='none';
  }

var menuIcon = document.getElementById('menu-drop');


menuIcon.onclick = function() {
    document.getElementById('drawer').style.display = "block";
}

var closeIcon = document.getElementById('close-drawer');

closeIcon.onclick = function() {
  document.getElementById('drawer').style.display = "none";
}



var sendIt = document.getElementById('posta');

sendIt.onclick = function() {
  document.getElementById('new-thread').style.display = "none";
  var newDiv = document.createElement("div");
  newDiv.className = "divclass";
  var newh3 = document.createElement("h3");
  var newP = document.createElement("p");
  newP.id="p-text";
  var newButton = document.createElement("button");
  newButton.className = "svara";
  var t = document.createTextNode("Svara");
  newButton.appendChild(t);
  newh3.innerHTML =
  document.getElementById('forum-rubrik').value;
  newP.innerHTML = document.getElementById('content-post').value;

  document.getElementsByClassName('divclass')[0].insertAdjacentElement('beforeBegin', newDiv);
  newDiv.appendChild(newh3);
  newDiv.appendChild(newP);
  newDiv.appendChild(newButton);

    newButton.onclick = function() {
      var newDiv2 = document.createElement("div");
      newDiv2.id = "divclass2";
      var newText = document.createElement("textarea");
      newText.id = "svar-text";
      newText.cols = "80";
      newText.rows = "10";
      newText.placeholder = "Skriv här:";
      var newButton2 = document.createElement("button");
      newButton2.className = "send-ans";
      var t2 = document.createTextNode("Skicka in svar");
      newButton2.appendChild(t2);
      newDiv2.appendChild(newText);
      newDiv2.appendChild(newButton2);
      newDiv.appendChild(newDiv2);
      newButton.style.display = "none";

      newButton2.onclick = function() {
        var newDiv3 = document.createElement("div");
        newDiv3.id= "divclass3";
        var newP2 = document.createElement("p");
        newP2.className = "svar-p";
        newP2.innerHTML = newText.value;
        newDiv3.appendChild(newP2);
        newDiv2.appendChild(newDiv3);
        newText.style.display = "none";
        newButton2.style.display = "none";
        newButton.style.display = "block";
       };
    };

 };



var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');

var div1 = document.getElementById('pre1');
var div2 = document.getElementById('pre2');
var div3 = document.getElementById('pre3');



btn1.onclick = function() {
  var newdiv1 = document.createElement("div");
  newdiv1.id = "div1new";
  var newtext1 = document.createElement("textarea");
  newtext1.id = "text1new";
  newtext1.cols = "70";
  newtext1.rows = "10";
  newtext1.placeholder = "Skriv här:";
  var newbut1 = document.createElement("button");
  newbut1.id = "but1new";
  var buttext1 = document.createTextNode("Skicka svar");
  newbut1.appendChild(buttext1);
  newdiv1.appendChild(newbut1);
  newbut1.style.clear = "left";
  newdiv1.appendChild(newtext1);
  div1.appendChild(newdiv1);
  btn1.style.display = "none";

  /*event.target.parentElement.insertAdjacentElement('beforeend', newdiv1);*/

  newbut1.onclick = function() {
    var newnewdiv1 = document.createElement("div");
    newnewdiv1.id = "div1newnew";
    var newnewp = document.createElement("p");
    newnewp.innerHTML = newtext1.value;
    newnewdiv1.appendChild(newnewp);
    event.target.parentElement.insertAdjacentElement('beforeend', newnewdiv1);
    newtext1.style.display = "none";
    newbut1.style.display = "none";
    btn1.style.display = "block";
  }
};

btn2.onclick = function() {
  var newdiv1 = document.createElement("div");
  newdiv1.id = "div1new";
  var newtext1 = document.createElement("textarea");
  newtext1.id = "text1new";
  newtext1.cols = "70";
  newtext1.rows = "10";
  newtext1.placeholder = "Skriv här:";
  var newbut1 = document.createElement("button");
  newbut1.id = "but1new";
  var buttext1 = document.createTextNode("Skicka svar");
  newbut1.appendChild(buttext1);
  newdiv1.appendChild(newbut1);
  newbut1.style.clear = "left";
  newdiv1.appendChild(newtext1);
  event.target.parentElement.insertAdjacentElement('beforeend', newdiv1);
  btn2.style.display = "none";

  newbut1.onclick = function() {
    var newnewdiv1 = document.createElement("div");
    newnewdiv1.id = "div1newnew";
    var newnewp = document.createElement("p");
    newnewp.innerHTML = newtext1.value;
    newnewdiv1.appendChild(newnewp);
    event.target.parentElement.insertAdjacentElement('beforeend', newnewdiv1);
    newtext1.style.display = "none";
    newbut1.style.display = "none";
    btn2.style.display = "block"
  }
};

  btn3.onclick = function() {
    var newdiv1 = document.createElement("div");
    newdiv1.id = "div1new";
    var newtext1 = document.createElement("textarea");
    newtext1.id = "text1new";
    newtext1.cols = "70";
    newtext1.rows = "10";
    newtext1.placeholder = "Skriv här:";
    var newbut1 = document.createElement("button");
    newbut1.id = "but1new";
    var buttext1 = document.createTextNode("Skicka svar");
    newbut1.appendChild(buttext1);
    newdiv1.appendChild(newbut1);
    newbut1.style.clear = "left";
    newdiv1.appendChild(newtext1);
    event.target.parentElement.insertAdjacentElement('beforeend', newdiv1);
    btn3.style.display = "none";

    newbut1.onclick = function() {
      var newnewdiv1 = document.createElement("div");
      newnewdiv1.id = "div1newnew";
      var newnewp = document.createElement("p");
      newnewp.innerHTML = newtext1.value;
      newnewdiv1.appendChild(newnewp);
      event.target.parentElement.insertAdjacentElement('beforeend', newnewdiv1);
      newtext1.style.display = "none";
      newbut1.style.display = "none";
      btn3.style.display = "block";
    }
};
/*
var btn2 = document.getElementById('pre2-btn');

btn2.onclick = function() {

  var preDiv2 = document.createElement("div");
  preDiv2.id = "pre-div";
  var preText2 = document.createElement("textarea");
  preText2.id = "pre-text2";
  preText2.cols = "80";
  preText2.rows = "10";
  preText2.placeholder = "Skriv här:";
  var preButton2 = document.createElement("button");
  preButton2.className = "pre-ans2";
  var txt2 = document.createTextNode("Skicka in svar");
  preButton2.appendChild(txt2);
  preDiv2.appendChild(preText2);
  preDiv2.appendChild(preButton2);
  document.getElementById('pre2').appendChild(preDiv2);
  preButton2.style.float = "right";
  btn2.style.display = "none";
};
*/
});
