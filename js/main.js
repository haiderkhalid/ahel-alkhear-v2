const list = document.querySelector('.navigation__list').children;

for (let i = 0; i <= list.length; i++){
    list[i].addEventListener('click', function(){
        document.getElementById('navi-toggle').checked = false;
    })
}

