const sections = document.querySelectorAll('.navbar-header a');

sections.forEach(section => {
    section.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        target.scrollIntoView({ behavior: 'smooth' });
    })

});
