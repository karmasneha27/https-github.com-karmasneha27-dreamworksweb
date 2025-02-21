const parentInfo2 = document.querySelector('.history');

parentInfo2 .addEventListener('click', event=>{
    const current = event.target;
    const isReadBtn = current.className.includes('read-btn');
    if(!isReadBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more');

    currentText.classList.toggle('read-more--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less..." : "Read More...";
})