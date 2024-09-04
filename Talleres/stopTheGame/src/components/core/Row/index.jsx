
const Fila = ({ columns, currentLetter, inputs, setInputs }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    }

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
                        onChange={handleInputChange}
                        name={column.name}
                    />
                )
            ))}
        </div>
    );
};

export default Fila;

