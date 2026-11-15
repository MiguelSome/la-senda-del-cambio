// Navegación móvil accesible
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Formulario de contacto: prepara un correo; no envía ni almacena datos en la web.
const form = document.getElementById('formCita');
const aviso = document.getElementById('avisoExito');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const data = new FormData(form);
        const nombre = String(data.get('nombre') || '').trim();
        const apellido = String(data.get('apellido') || '').trim();
        const email = String(data.get('email') || '').trim();
        const telefono = String(data.get('telefono') || '').trim();
        const subject = `Solicitud de primera cita — ${nombre} ${apellido}`;
        const body = [
            'Hola, Belén:',
            '',
            'Me gustaría solicitar información sobre disponibilidad para una primera cita de psicología para adultos.',
            '',
            `Nombre: ${nombre} ${apellido}`,
            `Correo electrónico: ${email}`,
            `Teléfono: ${telefono || 'No indicado'}`,
            '',
            'Un saludo.'
        ].join('\n');
        const mailto = `mailto:belenfelisa.granados@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        if (aviso) {
            aviso.hidden = false;
            aviso.textContent = 'Se abrirá tu aplicación de correo con la solicitud preparada. Comprueba los datos y pulsa «Enviar» para completar el envío. Si no se abre, escribe directamente a belenfelisa.granados@gmail.com.';
        }
        window.location.href = mailto;
    });
}

// Año actualizado automáticamente en el pie de página.
const currentYear = document.getElementById('currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();
