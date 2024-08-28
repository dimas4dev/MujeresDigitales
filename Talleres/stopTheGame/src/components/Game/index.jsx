// Game.js
import { useState, useEffect } from 'react';
import { COLUMNS } from '../../constants';
import Columna from '../core/Column';
import Fila from '../core/Row';
import { getRandomLetter } from '../../utils';


const Game = () => {
    const [rows, setRows] = useState([]);
    const [currentLetter, setCurrentLetter] = useState('');

    useEffect(() => {
        // Seleccionar una letra aleatoria al iniciar el juego o una nueva ronda
        const letter = getRandomLetter();
        setCurrentLetter(letter);
    }, []);

    const handleAddRow = () => {
        setRows([...rows, {}]);
    };

    return (
        <div className="game-container">
            <h1>Juego de Stop</h1>

            <div className="column-container">
                {COLUMNS.map((column) => (
                    <Columna key={column.id} name={column.name} />
                ))}
            </div>

            <div className="rows-container">
                {rows.map((_, index) => (
                    <Fila key={index} columns={COLUMNS} currentLetter={currentLetter} />
                ))}
            </div>

            <button onClick={handleAddRow}>Agregar Fila</button>
        </div>
    );
};

export default Game;