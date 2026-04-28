document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleDesign');
    const verseWrapper = document.querySelector('.verse-wrapper');
    let isDesigned = false;

    toggleBtn.addEventListener('click', function() {
        isDesigned = !isDesigned;
        
        if (isDesigned) {
            verseWrapper.classList.add('design-active');
            toggleBtn.textContent = 'Remove Design';
        } else {
            verseWrapper.classList.remove('design-active');
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

    console.log('✅ Bible Verse loaded! Click button or press SPACEBAR to toggle.');
});
