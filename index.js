const linksMenu = document.querySelectorAll('.menu a[href^="#"]');

linksMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let atributo = e.currentTarget.getAttribute('href');
        let div = document.querySelector(atributo);
        div.scrollIntoView( {block: "center", behavior: "smooth"});
    }) 
}); 


const btnToggle = document.querySelector('.btn-toggle'); 
const menu = document.querySelector('.menu ul')

btnToggle.addEventListener('click', () => {
    menu.classList.toggle('show')
})

 