import '../styles.scss';
import React from 'react';
import Title from '../components/Title';
import Timer from '../components/Timer';

function App() {
    return (
        <div className="app">
            <div className="panel">
                <Title />
                <Timer />
            </div>
        </div>
    );
}

export default App;
