/**
 * Bible Verse Generator - Interactive App
 * Features:
 * - Random Bible verses with meaningful content
 * - 4 beautiful biblical-themed designs
 * - Smooth transitions and animations
 * - Fully responsive design
 * 
 * Bible verses selected for their inspirational value
 * and relevance to daily Christian life
 */

class BibleVerseApp {
    constructor() {
        this.verseCard = document.getElementById('verseCard');
        this.verseText = document.getElementById('verseText');
        this.verseRef = document.getElementById('verseRef');
        this.newVerseBtn = document.getElementById('newVerseBtn');
        this.designBtn = document.getElementById('designBtn');
        
        // Bible verses - meaningful and inspirational
        this.verses = [
            {
                text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
                ref: "John 3:16 (NIV)"
            },
            {
                text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters.",
                ref: "Psalm 23:1-2 (NIV)"
            },
            {
                text: "I can do all this through him who gives me strength.",
                ref: "Philippians 4:13 (NIV)"
            },
            {
                text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
                ref: "Joshua 1:9 (NIV)"
            },
            {
                text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
                ref: "John 14:27 (NIV)"
            },
            {
                text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
                ref: "Romans 8:28 (NIV)"
            },
            {
                text: "Trust in the Lord with all your heart and lean not on your own understanding.",
                ref: "Proverbs 3:5 (NIV)"
            },
            {
                text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
                ref: "Psalm 34:18 (NIV)"
            },
            {
                text: "Cast all your anxiety on him because he cares for you.",
                ref: "1 Peter 5:7 (NIV)"
            },
            {
                text: "Come to me, all you who are weary and burdened, and I will give you rest.",
                ref: "Matthew 11:28 (NIV)"
            }
        ];
        
        this.currentDesign = 1;
        this.maxDesigns = 4;
        
        this.init();
    }
    
    init() {
        // Event Listeners
        this.newVerseBtn.addEventListener('click', () => this.getNewVerse());
        this.designBtn.addEventListener('click', () => this.changeDesign());
        
        // Initial design label
        this.updateDesignLabel();
    }
    
    /**
     * Get a random Bible verse
     */
    getNewVerse() {
        const randomIndex = Math.floor(Math.random() * this.verses.length);
        const verse = this.verses[randomIndex];
        
        this.verseText.textContent = verse.text;
        this.verseRef.textContent = verse.ref;
        
        // Trigger card animation
        this.verseCard.style.animation = 'none';
        setTimeout(() => {
            this.verseCard.style.animation = 'fadeInUp 0.8s ease-out';
        }, 10);
    }
    
    /**
     * Cycle through beautiful biblical designs
     */
    changeDesign() {
        this.currentDesign = (this.currentDesign % this.maxDesigns) + 1;
        
        // Remove all design classes
        this.verseCard.classList.remove('design-1', 'design-2', 'design-3', 'design-4');
        
        // Add new design class
        this.verseCard.classList.add(`design-${this.currentDesign}`);
        
        // Show design indicator
        this.verseCard.classList.add('show-design');
        this.updateDesignLabel();
        
        // Hide design indicator after 2 seconds
        setTimeout(() => {
            this.verseCard.classList.remove('show-design');
        }, 2000);
        
        // Button feedback
        this.designBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.designBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    /**
     * Update design label in card
     */
    updateDesignLabel() {
        this.verseCard.setAttribute('data-design', `Design ${this.currentDesign}`);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BibleVerseApp();
    
    // Add subtle background animation
    document.body.style.animation = 'fadeInUp 1s ease-out';
});
