


//============= more button ============

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');

    if (readMoreBtn.innerText === 'Less') {
        readMoreBtn.innerHTML = 'More';
    } else {
        readMoreBtn.innerHTML = 'Less';
    }
});


