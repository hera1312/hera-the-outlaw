window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const stories = document.querySelectorAll('.colter-story, .colter-story2');
        stories.forEach(story => {
            story.style.display = 'none';
        });
        const story3 = document.querySelector('.colter-story3');
        if (story3) {
            story3.style.display = 'block';
        }
    }, 4000);
});


