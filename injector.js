var body = document.querySelector('body');
var editor = document.createElement('div');
editor.style.backgroundColor = 'gray';
editor.style.width = '500px';
editor.style.height = '500px';
editor.style.position = 'fixed';
editor.style.top = '40px';
editor.style.border = '1px solid black';
editor.style.zIndex = 999999;

var textArea = document.createElement('textarea');
textArea.style.width = '480px';
textArea.style.height = '450px';
textArea.style.marginLeft = '10px';
textArea.style.marginRight = '10px';
textArea.style.marginTop = '10px';

var button = document.createElement('button');
button.innerText = "Run";
button.style.marginLeft = '10px';
button.onclick = function () {
    eval(textArea.value);
}

var buttonIncl = document.createElement('button');
buttonIncl.innerText = "Include";
buttonIncl.style.marginLeft = '5px';


buttonIncl.onclick = function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = textArea.value;
    document.head.appendChild(script);
}

function addListeners() {
    editor.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

var mouseMoveEvt = function(e){
    editor.style.position = 'fixed';
    editor.style.top = e.clientY + 'px';
    editor.style.left = e.clientX + 'px';
}

function mouseUp() {
    window.removeEventListener('mousemove', mouseMoveEvt, true);
}

function mouseDown() {
  window.addEventListener('mousemove', mouseMoveEvt, true);
}





editor.appendChild(textArea);
editor.appendChild(button);
editor.appendChild(buttonIncl);
body.appendChild(editor);
addListeners();
console.log(body);