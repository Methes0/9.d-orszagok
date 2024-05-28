
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const content = document.querySelector('.content');

    window.addEventListener('scroll', function() {
        if (window.scrollY > videoContainer.clientHeight) {
            videoContainer.style.display = 'none';
            content.style.marginTop = '0';
        } else {
            videoContainer.style.display = 'block';
        }
    });
});

