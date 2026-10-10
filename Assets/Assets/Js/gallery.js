
(() => {
 const modal=document.getElementById('gallery-lightbox');
 const buttons=[...document.querySelectorAll('.gallery-tile')];
 buttons.forEach(b=>b.addEventListener('click',()=>{const im=b.querySelector('img');modal.querySelector('img').src=im.src;modal.querySelector('img').alt=im.alt;modal.querySelector('p').textContent=b.querySelector('span').textContent;if(modal.showModal)modal.showModal();else modal.setAttribute('open','');}));
 modal.querySelector('.gallery-close').addEventListener('click',()=>modal.close?modal.close():modal.removeAttribute('open'));
 modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
})();