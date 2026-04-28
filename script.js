document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleDesign');
    const container = document.querySelector('.container');
    const designElements = document.getElementById('designElements');
    let isDesigned = false;

    toggleBtn.addEventListener('click', function() {
        isDesigned = !isDesigned;
        
        if (isDesigned) {
            container.classList.add('design-active');
            toggleBtn.textContent = 'Remove Design';
        } else {
            container.classList.remove('design-active');
            toggleBtn.textContent = 'Add Design';
        }
    });

    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            toggleBtn.click();
        }
    });

    console.log('Bible Verse loaded. Press SPACEBAR to toggle design.');
});
