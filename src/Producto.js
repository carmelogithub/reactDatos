const Producto = props => {//atributos de clase
    const {nombre, unidades,precio} = props
    return(
        <div>
            <h2>{nombre}</h2>
            <h3>{unidades} - {precio} - Total : {unidades*precio} €</h3>
            <hr/>
        </div>
    );
}
export default Producto;