import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';  // Ensure this file contains your improved CSS

export default function Success() {
    const [celebrate, setCelebrate] = useState(false);
    const nav = useNavigate();

    const navigate = () => {
        nav('/');
    };

    useEffect(() => {
        setCelebrate(true);
        const timer = setTimeout(() => setCelebrate(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`success-container ${celebrate ? 'celebrate' : ''}`}>
            <p style={{fontSize:'20px'}}>
                Your Order Successfully Completed
            </p>
            <Button onClick={navigate}>Back Home</Button>
            {celebrate && renderConfetti()}
        </div>
    );
}

const renderConfetti = () => {
    const confettiPieces = [];
    for (let i = 0; i < 150; i++) {
        const style = {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: getRandomColor(),
            transform: `rotate(${Math.random() * 360}deg)`,
            width: `${Math.random() * 5 + 5}px`,
            height: `${Math.random() * 5 + 5}px`,
        };
        confettiPieces.push(<div className="confetti-piece" style={style} key={i}></div>);
    }
    return confettiPieces;
};

const getRandomColor = () => {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#fec3a6', '#feac83', '#fe8c68', '#ff6f61'];
    return colors[Math.floor(Math.random() * colors.length)];
};
