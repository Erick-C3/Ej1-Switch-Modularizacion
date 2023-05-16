const ulCarrito = document.querySelector("#contenedor-carrito ul");
const selectCantidadProducto = document.querySelector("#contenedor-producto select");
const pCostoTotal = document.querySelector("#costo-total");

const pNombreProducto = document.querySelector("#nombre-producto");
const pPrecioProducto = document.querySelector("#precio-producto");
const imgProducto = document.querySelector("#contenedor-producto img");

const IMG_PROD_2 = "https://i0.wp.com/es.cooking-tree.com/wp-content/uploads/2022/07/9817-Como-hacer-Cheesecake-de-te-verde-Pastel-Matcha.jpg";

const PRECIO_PRODUCTO_1 = 700;
const NOMBRE_PRODUCTO_1 = "Té de matcha";
const PROD_1_DESCUENTO_1 = 10;
const PROD_1_DESCUENTO_2 = 25;

const PRECIO_PRODUCTO_2 = 1500;
const NOMBRE_PRODUCTO_2 = "Cheesecake de matcha";
const PROD_2_DESCUENTO_1 = 15;
const PROD_2_DESCUENTO_2 = 30;
const PROD_2_CANT_EXTRA_REGALO = 1;

let costoTotal = 0;
let nombreProductoActual = NOMBRE_PRODUCTO_1;
let precioPruductoActual = PRECIO_PRODUCTO_1;

/**
 * Agregar el producto actual al carrito
 */
function agregarProducto(){
    let cantidadProducto = parseInt(selectCantidadProducto.value);
    let descuentoMostrar = actualizarCostoTotal(cantidadProducto);
    pCostoTotal.innerHTML = `Total: $${costoTotal}`;
    ulCarrito.innerHTML += `<li> ${nombreProductoActual} (${cantidadProducto}) [%${descuentoMostrar}] </li>`;
}

/**
 * Actualiza el costo total de los productos a comprar
 * @param {Number} cantidadProducto actual a comprar
 */
function actualizarCostoTotal(cantidadProducto) {
    let descuentoAplicar = detectarDescuentoProductoActual(cantidadProducto);
    costoTotal += (precioPruductoActual * ((100-descuentoAplicar)/100))* cantidadProducto;
    return descuentoAplicar;
}

/**
 * Dependiendo del producto y la cantidad a comprar detecta el descuento a realizar
 * @param {Number} cantidadProducto actual a comprar
 * @returns descuento detectado
 */
function detectarDescuentoProductoActual(cantidadProducto) {
    let descuentoDetectado = 0;
    switch (nombreProductoActual) {
        case NOMBRE_PRODUCTO_1:
            descuentoDetectado = obtenerDescuentoPorCantProd1(cantidadProducto);
            break;
        case NOMBRE_PRODUCTO_2:
            descuentoDetectado = obtenerDescuentoPorCantProd2(cantidadProducto);
    }
    return descuentoDetectado;
}

/**
 * Devuelve el descuento correspondiente del producto 2 dependiendo de la cantidad a comprar
 * @param {Number} cantidadProducto 2 a comprar
 * @returns descuento a aplicar dependiendo de la cantidad del producto 2 a comprar
 */
function obtenerDescuentoPorCantProd2(cantidadProducto) {
    let descuentoCantidad = 0;
    switch (cantidadProducto) {
        case 1:
            descuentoCantidad = PROD_2_DESCUENTO_1;
            break;
        case 7:
            descuentoCantidad = PROD_2_DESCUENTO_2;
            ulCarrito.innerHTML += `<li> ${nombreProductoActual} (${PROD_2_CANT_EXTRA_REGALO}) [EXTRA] </li>`;
    }
    return descuentoCantidad;
}

/**
 * Devuelve el descuento correspondiente del producto 1 dependiendo de la cantidad a comprar
 * @param {Number} cantidadProducto 1 a comprar
 * @returns descuento a aplicar dependiendo de la cantidad del producto 1 a comprar
 */
function obtenerDescuentoPorCantProd1(cantidadProducto) {
    let descuentoCantidad = 0; 
    switch (cantidadProducto) {
        case 3:
            descuentoCantidad = PROD_1_DESCUENTO_1;
            break;
        case 7:
            descuentoCantidad = PROD_1_DESCUENTO_2;
    }
    return descuentoCantidad;
}

/**
 * Muestra el siguiente producto en la pagina
 */
function mostrarSigProducto(){
    imgProducto.src = IMG_PROD_2;
    pNombreProducto.innerHTML = NOMBRE_PRODUCTO_2;
    pPrecioProducto.innerHTML = PRECIO_PRODUCTO_2+"$";
    actualizarInfoProductoActual();
}

/**
 * Actualiza la informacion del producto actual al producto 2
 */
function actualizarInfoProductoActual() {
    nombreProductoActual = NOMBRE_PRODUCTO_2;
    precioPruductoActual = PRECIO_PRODUCTO_2;
}
