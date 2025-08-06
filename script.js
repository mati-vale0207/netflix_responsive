
    const usuarios = [
      { email: "usuario@example.com", password: "123456" },
      { email: "test@gmail.com", password: "abc123" }
    ];

    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("error-msg");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        errorMsg.textContent = "Todos los campos son obligatorios.";
        return;
      }

      // Validación de email básico (opcional si solo validas texto)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMsg.textContent = "Formato de correo inválido.";
        return;
      }

      // Buscar usuario
      const usuarioValido = usuarios.find(
        user => user.email === email && user.password === password
      );

      if (usuarioValido) {
        errorMsg.textContent = "";
        // Redireccionar (puedes cambiar la URL)
        window.location.href = "perfiles.html";
      } else {
        errorMsg.textContent = "Correo o contraseña incorrectos.";
      }
    });