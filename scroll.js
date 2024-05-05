const navButtons = document.querySelectorAll('.nav-button'); 

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;
        let targetPosition = 0;

        switch(buttonId) {
            case "about-button":  
                targetPosition = 800; 
                break;
            case "skills-button": 
                targetPosition = 1500; 
                break;
            case "contact-button": // Add a case for your contact button
                targetPosition = 2200; // Example target position, adjust as needed
                break; 
            default: 
                targetPosition = 0; 
        }

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

