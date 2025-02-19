let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active');
}

async function loadProjects() {
    const response = await fetch('/portfolio_db');
    const projects = await response.json();
    const projektBox = document.getElementById('projekt-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('projekt-karten');
        projectCard.innerHTML = `
            <div class="projekt-karten-inner">
                <div class="projekt-karten-front">
                    <h3>${project.titel}</h3>
                    <img src="${project.bild}" alt="${project.titel}">
                </div>
                <div class="projekt-karten-back">
                    <p>${project.beschreibung}</p>
                    <div class="technologien">
                        <h4>Technologien:</h4>
                        <p>${project.technologien}</p>
                    </div>
                </div>
            </div>
        `;
        projektBox.appendChild(projectCard);
    });
}

async function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const grund = document.getElementById('grund').value;
    const nachricht = document.getElementById('nachricht').value;
    
    const response = await fetch('/kontakte', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name, grund, nachricht})
    });

    if (response.ok) {
        alert('Nachricht erfolgreich gesendet!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Fehler beim Senden der Nachricht.');
    }
}

function typeEffect() {
    const typedTextSpan = document.getElementById('typed-text');
    const texts = ["Student", "Coder", "Sportler"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Wartezeit bevor das Löschen beginnt
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500); // Wartezeit bevor das nächste Wort beginnt
        } else {
            setTimeout(type, isDeleting ? 100 : 200); // Geschwindigkeit des Tippens/Löschens
        }
    }

    type();
}

window.onload = () => {
    loadProjects();
    typeEffect();
};

document.getElementById('contact-form').addEventListener('submit', submitContactForm);