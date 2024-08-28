
const Fila = ({ columns, currentLetter }) => {
    return (
        <div className="fila">
            {columns.map((column, index) => (
                index === 0 ? (
                    // Mostrar la letra seleccionada en la primera columna
                    <div key={column.id} className="letter-field">
                        {currentLetter}
                    </div>
                ) : (
                    <input
                        key={column.id}
                        type="text"
                        placeholder={column.name}
                        className="input-field"
                    />
                )
            ))}
        </div>
    );
};

export default Fila;

