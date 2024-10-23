document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const typingElement = document.getElementById('typing');
    const words = ["Web Developer.", "Educationist.", "Tech Enthusiast.", "Full-Stack Developer.", "Virtual Assistant."];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function typeEffect() {
        if (wordIndex < words.length) {
            if (!isDeleting && letterIndex < words[wordIndex].length) {
                // Typing out the letters
                currentWord = words[wordIndex].substring(0, letterIndex + 1);
                typingElement.innerHTML = currentWord;
                letterIndex++;
                setTimeout(typeEffect, 150);  // Speed of typing
            } else if (isDeleting && letterIndex > 0) {
                // Deleting the letters
                currentWord = words[wordIndex].substring(0, letterIndex - 1);
                typingElement.innerHTML = currentWord;
                letterIndex--;
                setTimeout(typeEffect, 100);  // Speed of deleting
            } else if (!isDeleting && letterIndex === words[wordIndex].length) {
                // Finished typing the full word, start deleting after a pause
                isDeleting = true;
                setTimeout(typeEffect, 1000); // Pause before deleting
            } else if (isDeleting && letterIndex === 0) {
                // Finished deleting the word, move to the next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
                setTimeout(typeEffect, 200); // Pause before starting the next word
            }
        }
    }
    typeEffect();
});

