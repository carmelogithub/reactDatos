import logo from './logo.svg';
import './App.css';
import Producto from './Producto';

function App() {
  const productos=[
    {"nombre":"pantalón","unidades":50,"precio":10.95},
    {"nombre":"sombrero","unidades":30,"precio":20.95},
    {"nombre":"chaqueta","unidades":45,"precio":50.95},
    {"nombre":"bufanda","unidades":65,"precio":47.95}
  ]
  return (
    <div className="App">
      <h2>Lista de productos</h2>
     <Producto nombre="camisa" unidades="15" precio="9.95"/>
     {productos.map(producto => <Producto nombre={producto.nombre} unidades={producto.unidades} precio={producto.precio} />)}
    </div>
  );
}

export default App;
