
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Parallax effect on hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - scrolled / 700;
            }
        });

         document.getElementById('downloadCV').addEventListener('click', function(e) {
            e.preventDefault();
            // Replace 'your-cv.pdf' with the actual path to your CV file
            const cvUrl = 'Mini_Agarwal_Resume.pdf';
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'Mini_Agarwal_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });