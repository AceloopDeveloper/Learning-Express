import { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    const getMessage = () => {
        fetch('http://localhost:8000/api/message')
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
            });
    };

    return (
        <div>
            <h1>Frontend</h1>

            <button onClick={getMessage}>
                Get Message
            </button>

            <p>{message}</p>
        </div>
    );
}

export default App;