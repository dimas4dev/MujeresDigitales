const Fila = ({ columns }) => {
    return (
        <div className="fila">
            {columns.map((column) => (
                <input
                    key={column.id}
                    type="text"
                    placeholder={column.name}
                    className="input-field"
                />
            ))}
        </div>
    );
};

export default Fila;
