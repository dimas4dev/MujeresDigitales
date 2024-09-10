import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Simulación de credenciales válidas
    const validUsername = 'admin';
    const validPassword = 'password123';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === validUsername && password === validPassword) {
            // Guardamos en Local Storage que el usuario está autenticado
            localStorage.setItem('isAuthenticated', 'true');
            // Redirigir al Dashboard
            navigate('/dashboard');
        } else {
            setError('Credenciales inválidas. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
