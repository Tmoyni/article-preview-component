let arrowIcon = document.getElementById('arrow');
let socialBtn = document.getElementById('article__share-btn');
let socialModule = document.querySelector('.social')

arrowIcon.addEventListener('click', (e) => {
  if (socialBtn.className === 'article__share-btn') {
    socialBtn.className = 'article__share-btn-active';
    arrowIcon.setAttribute("class","arrow-active");
    socialModule.style.display = 'flex'
  } else {
    socialBtn.className = 'article__share-btn';
    arrowIcon.setAttribute("class","arrow");
    socialModule.style.display = 'none'
  } 
})