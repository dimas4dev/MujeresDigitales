// Game.js
import { useState } from 'react';
import { COLUMNS } from '../../constants';
import Columna from '../core/Column';
import Fila from '../core/Row';


const Game = () => {
    const [rows, setRows] = useState([]);

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
                    <Fila key={index} columns={COLUMNS} />
                ))}
            </div>
            <button onClick={handleAddRow}>Agregar Fila</button>
        </div>
    );
};

export default Game;
