# Taller de React: Construcción de una Aplicación de Tienda de Productos

## Objetivo

Desarrollar una aplicación simple de tienda de productos utilizando React. La aplicación permitirá ver una lista de productos, ver detalles de un producto seleccionado, y agregar productos a un carrito de compras simulado.

## Instrucciones del Taller

### 1. Crear la estructura básica de la aplicación

Los componentes necesarios para la aplicación son los siguientes:

- **`App`**: Componente principal que contiene la estructura general de la aplicación.
- **`ProductList`**: Componente que renderiza la lista de productos.
- **`ProductItem`**: Componente que representa un producto individual.
- **`ProductDetails`**: Componente que muestra los detalles de un producto seleccionado.
- **`Cart`**: Componente que simula un carrito de compras.

### 2. Implementar el componente `ProductItem`

- Recibe props como `name`, `price`, y `description`.
- Renderiza un `div` con el nombre del producto, precio, y un botón para "Ver Detalles".

### 3. Implementar el componente `ProductList`

- Recibe un array de productos como prop.
- Renderiza un `ProductItem` para cada producto.
- Incluye la función `onViewDetails` como prop, que se llama cuando se hace clic en "Ver Detalles".

### 4. Implementar el componente `ProductDetails`

- Recibe el producto seleccionado como prop y muestra todos sus detalles.
- Incluye un botón para "Agregar al Carrito".

### 5. Implementar el componente `Cart`

- Renderiza los productos agregados al carrito, mostrando nombre y precio de cada uno.
- Muestra un resumen del costo total de los productos en el carrito.

### 6. Implementar el componente `App`

- Mantiene un array de productos y otro array para los items del carrito.
- Define funciones para seleccionar un producto y agregarlo al carrito.
- Pasa los arrays y funciones como props a `ProductList`, `ProductDetails`, y `Cart`.
