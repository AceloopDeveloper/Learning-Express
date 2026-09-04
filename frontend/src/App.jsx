import { useState } from 'react';

function App() {
    
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                message: message })
        });

        const data = await response.json();
        console.log(data);

    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default App;