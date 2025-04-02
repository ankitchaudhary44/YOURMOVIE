window.addEventListener('load', function () {
    document.body.classList.add('page-loaded');
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);

    
    form.reset();
});


document.querySelectorAll('a').forEach(anchor => {
    
    if (anchor.href.startsWith('http')) {
        return; 
    }
    
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});
