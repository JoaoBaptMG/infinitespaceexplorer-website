document.onscroll = function(){
  if(window.pageYOffset > 0){
    document.getElementById('menu').className = 'scroll';
  } else {
    document.getElementById('menu').className = '';
  }
};

var menutoggle = document.getElementById('menu-toggle');
menutoggle.onclick = function(){
  if(menutoggle.className == 'sel'){
    document.getElementById('menu-toggle').className = '';
    document.getElementById('menugg').className = '';
  } else {
    document.getElementById('menu-toggle').className = 'sel';
    document.getElementById('menugg').className = 'sel';
  }
};