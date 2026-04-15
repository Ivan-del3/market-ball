// frontend/public/js/views/login.js
export const Login = {
    render: function() {
        return `
            <h2>Iniciar Sesión</h2>
            <form id="form-login" style="background: white; padding: 20px; border-radius: 8px;">
                <input type="email" id="email" placeholder="Correo electrónico" required style="display:block; margin-bottom: 10px; padding: 5px;">
                <input type="password" id="password" placeholder="Contraseña" required style="display:block; margin-bottom: 10px; padding: 5px;">
                <button type="submit" id="btn-submit">Entrar</button>
            </form>
            <p id="login-error" style="color: red; display: none;"></p>
            <a href="/" data-link>Volver al inicio</a>
        `;
    },

    init: function() {
        const formulario = document.getElementById('form-login');
        const errorMsg = document.getElementById('login-error');
        
        if (!formulario) return;

        formulario.addEventListener('submit', async function(evento) {
            evento.preventDefault(); 
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                // Hacemos la llamada al backend
                const response = await fetch('http://localhost/trade-ball/backend/public/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, password: password })
                });

                const data = await response.json();

                if (response.ok) {
                    // ¡Login correcto! Guardamos el token en localStorage
                    localStorage.setItem('tradeball_token', data.token);
                    
                    // Redirigimos al panel del usuario (por ejemplo la ruta /tu)
                    history.pushState({}, "", "/tu");
                    
                    // Disparamos un evento para que el enrutador se entere y cargue la vista
                    window.dispatchEvent(new Event('popstate')); 
                } else {
                    // Mostramos el error del servidor (ej: credenciales incorrectas)
                    errorMsg.textContent = data.error;
                    errorMsg.style.display = 'block';
                }

            } catch (error) {
                console.error("Error conectando con el servidor:", error);
                errorMsg.textContent = "Error de conexión.";
                errorMsg.style.display = 'block';
            }
        });
    }
};