import { useState } from 'react';
import './App.css';

function App() {
  // Estados para los valores de los campos
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [superheroes, setSuperheroes] = useState([]);
  const [header, setHeader] = useState('Bienvenido a la Liga de Superhéroes');

  // Estados para manejar si el campo fue tocado (para mostrar validaciones)
  const [touched, setTouched] = useState({
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  // Validaciones dinámicas
  const nombreValido = nombre.length >= 4 || nombre === '';
  const apellidoValido = apellido.length >= 4 || apellido === '';
  const emailValido = email.length >= 10 || email === '';
  const passwordValida = password.length >= 12 || password === '';
  const confirmPasswordValida = password === confirmPassword || confirmPassword === '';

  // Función para manejar el toque de campos
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  // Función de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombreValido &&
      apellidoValido &&
      emailValido &&
      passwordValida &&
      confirmPasswordValida
    ) {
      const nuevoSuperheroe = { nombre, apellido, email };
      setSuperheroes([...superheroes, nuevoSuperheroe]);
      setHeader('Superhéroe Registrado Exitosamente');
      limpiarFormulario();
    }
  };

  // Función para limpiar el formulario después de crear un superhéroe
  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setTouched({
      nombre: false,
      apellido: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
  };

  return (
    <div className="app" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>{header}</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo de Nombre */}
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onBlur={() => handleBlur('nombre')}
            required
          />
          {!nombreValido && touched.nombre && (
            <p style={{ color: 'red' }}>El nombre debe tener al menos 4 caracteres.</p>
          )}
        </div>

        {/* Campo de Apellido */}
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            onBlur={() => handleBlur('apellido')}
            required
          />
          {!apellidoValido && touched.apellido && (
            <p style={{ color: 'red' }}>El apellido debe tener al menos 4 caracteres.</p>
          )}
        </div>

        {/* Campo de Correo Electrónico */}
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            required
          />
          {!emailValido && touched.email && (
            <p style={{ color: 'red' }}>El correo debe tener al menos 10 caracteres.</p>
          )}
        </div>

        {/* Campo de Contraseña */}
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            required
          />
          {!passwordValida && touched.password && (
            <p style={{ color: 'red' }}>La contraseña debe tener al menos 12 caracteres.</p>
          )}
        </div>

        {/* Campo de Confirmación de Contraseña */}
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            required
          />
          {!confirmPasswordValida && touched.confirmPassword && (
            <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>
          )}
        </div>

        <button type="submit">Crear Superhéroe</button>
      </form>

      {/* Lista de Superhéroes Registrados */}
      <h2>Superhéroes Registrados</h2>
      <ul>
        {superheroes.map((superheroe, index) => (
          <li key={index}>
            {superheroe.nombre} {superheroe.apellido} - {superheroe.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;