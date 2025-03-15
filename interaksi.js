// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Animasi hover pada artikel
    const blogPost = document.querySelector('.blog-post');
    blogPost.addEventListener('mouseover', () => {
        blogPost.style.transform = 'translateY(-5px)';
        blogPost.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    blogPost.addEventListener('mouseout', () => {
        blogPost.style.transform = 'translateY(0)';
        blogPost.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});