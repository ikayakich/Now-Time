const he=document.getElementById('h');
const me=document.getElementById('m');
const se=document.getElementById('s');
var nd=new Date();
var h=0;
var m=0;
var s=0;

function timer(){
  nd=new Date();
  h=nd.getHours();
  m=nd.getMinutes();
  s=nd.getSeconds();
  he.innerHTML='<h1 id="h">'+h+'</h1>';
  me.innerHTML='<h1 id="m">'+m+'</h1>';
  se.innerHTML='<h1 id="s">'+s+'</h1>';
};

setInterval(timer,1);
