// Select DOM elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const happyEmoji = document.getElementById('happy-emoji');
const fillForm = document.getElementById('fillForm');
const contactCards = document.querySelectorAll('.contact-card');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('messageContainer');
const heroSection = document.getElementsByClassName('hero');

// Navbar hover effects
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#e0e0e0'; 
        link.style.color = 'var(--primary-color)'; 
    });
    

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''; 
        link.style.color = 'white'; 
});
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; 
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; 
    } else {
        navbar.style.backgroundColor = ''; 
        navbar.style.boxShadow = ''; 
    }
});
// hover effects for contact cards
contactCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
        card.style.transform = 'scale(1.05)'; 
        card.style.transition = 'transform 0.5s ease'; 
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none'; 
        card.style.transform = 'scale(1)'; 
        card.style.transition = 'transform 0.5s ease'; 
    });
});

//  show an error message
function showError(message) {
    messageContainer.innerHTML = ''; 

    // Create  error message element
    const errorMessage = document.createElement('p');
    errorMessage.id = 'errorMessage';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;

    // Append  error message 
    messageContainer.appendChild(errorMessage);
}

//  show a success message
function showSuccess(message) {
    messageContainer.innerHTML = ''; // Clear existing messages

    //  success message element
    const successMessage = document.createElement('p');
    successMessage.id = 'successMessage';
    successMessage.style.color = 'green';
    successMessage.textContent = message;

    // Append the success message
    messageContainer.appendChild(successMessage);
}

// Form validation
fillForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        showError('All fields are required.');
    } else {
        showSuccess('Form submitted successfully!');
        fillForm.reset(); 
    }
});
// happy emoji 😂

if (happyEmoji) {
    happyEmoji.addEventListener('mouseover', () => {
        happyEmoji.style.animation = 'bounce 0.5s ease-in-out';
    });

    happyEmoji.addEventListener('mouseout', () => {
        happyEmoji.style.animation = ''; // Remove the animation
        happyEmoji.style.transform = 'translateY(0)'; // Reset any potential vertical shift
    });
}

// Define the bounce animation using CSS keyframes (you can add this to your style.css)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px); /* Adjust the bounce height */
    }
    60% {
        transform: translateY(-5px); /* Slightly less bounce */
    }
}
`;
document.head.appendChild(styleSheet);

