document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Sosiologi DhiSha siap digunakan!');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});