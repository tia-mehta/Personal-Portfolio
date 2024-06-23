document.addEventListener("DOMContentLoaded", function() {
    const texts = [
         'Technology Enthusiast', 'Aspiring Photographer','Analytical Thinker'
        
    ];
    const typewriterElement = document.getElementById('typewriter');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isTag = false;
    let tag = "";

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            if (charIndex > 0 && currentText.charAt(charIndex - 1) === '>') {
                while (charIndex > 0 && currentText.charAt(charIndex - 1) !== '<') {
                    charIndex--;
                }
                charIndex--; // To remove '<'
            }
            typewriterElement.innerHTML = currentText.substring(0, charIndex);
            charIndex--;
            if (charIndex <= 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, 1000); // Pause before typing new text
                return;
            }
        } else {
            if (currentText.charAt(charIndex) === '<') {
                isTag = true;
                tag = "";
            }

            if (isTag) {
                tag += currentText.charAt(charIndex);
            }

            if (!isTag) {
                typewriterElement.innerHTML = currentText.substring(0, charIndex + 1);
            }

            if (currentText.charAt(charIndex) === '>') {
                isTag = false;
                typewriterElement.innerHTML = currentText.substring(0, charIndex + 1);
            }

            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, 1000); // Pause before deleting text
                return;
            }
        }

        setTimeout(typeWriter, isDeleting ? 50 : 100); // Adjust typing and deleting speed
    }

    // Clear the initial text and start the typewriter effect
    typewriterElement.innerHTML = "";
    typeWriter();
});

//about section------------------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks ){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents ){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }


