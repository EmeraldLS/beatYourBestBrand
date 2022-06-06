const select = document.querySelectorAll('.selectBtn');
    const option = document.querySelectorAll('.option');
    let index = 1;

select.forEach(a => {
        a.addEventListener('click', b => {
            const next = b.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = index++;
        })
    })
option.forEach(a => {
    
    a.addEventListener('click', b => {
        
        // You can get the country of element by using getAttribute() method of a.country-code

            b.target.parentElement.classList.remove('toggle');

            const parent = b.target.closest('.select').children[0];
            parent.setAttribute('data-type', b.target.getAttribute('data-type'));
            parent.innerHTML = b.target.innerHTML;
        })
})
