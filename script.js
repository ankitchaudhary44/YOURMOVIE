document.addEventListener("DOMContentLoaded", function () {
    const getStartedButton = document.querySelector('.get-started');
    const emailInput = document.querySelector('.email-input');
    const moviesContainer = document.querySelector('.movies');
    const scrollButtons = document.querySelectorAll('.scroll-btn');
    const navbar = document.querySelector('.navbar');
    const movieImages = document.querySelectorAll(".movies img");

    
    getStartedButton.addEventListener('click', function () {
        const email = emailInput.value;
        if (email) {
            localStorage.setItem('userEmail', email);
            console.log('Email stored in localStorage:', email);
            window.location.href = 'index2.html';
        } else {
            alert("Please enter a valid email.");
        }
    });

    
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const scrollDirection = button.classList.contains('left') ? -300 : 300;
            moviesContainer.scrollBy({ left: scrollDirection, behavior: 'smooth' });
        });
    });

    
    document.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const trailers = {
        "Movie 1": "https://youtu.be/BAk5ZCoTWY8?si=nUns2B0aG5F-laXN",
        "Movie 2": "https://youtu.be/kQDd1AhGIHk?si=1vaAeiBHWhZOgPEG",
        "Movie 3": "https://youtu.be/HihakYi5M2I?si=DOyfGKgsGb9w7NFe",
        "Movie 4": "https://youtu.be/1kVK0MZlbI4?si=xNwjpokautClnpPN",
        "Movie 5": "https://youtu.be/AdwGOloQcAs?si=aGAoQBPs7lo_5Fdc",
        "Movie 6": "https://youtu.be/rUSdnuOLebE?si=kHzL8Ey8I2EQ-L2J",
        "Movie 7": "https://youtu.be/gwB8C7YCpH0?si=1uX4Bv6W2tatLUQg",
        "Movie 8": "https://youtu.be/GY4BgdUSpbE?si=7-piUQ-Tv4UkBkpG",
        "Movie 9": "https://youtu.be/77vRyWNqZjM?si=GYP8m7K7uKaVYyAQ",
        "Movie 10": "https://youtu.be/o17MF9vnabg?si=66gNdbInmBq_xZJG",
        "Movie 11": "https://youtu.be/VlvOgk5BHS4?si=IlxP8lYaCT1V0Qza"
    };

  
    movieImages.forEach((img) => {
        img.addEventListener("click", function () {
            const movieName = img.getAttribute("alt");
            if (trailers[movieName]) {
                window.open(trailers[movieName], "_blank");
            } else {
                alert("Trailer not available for this movie.");
            }
        });
    });
});