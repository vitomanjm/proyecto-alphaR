import React from "react";
import '../styles/Portada.scss'

const Portada = () => {
return (


<div> 
    <nav className="nv">
    
    <div className="navbar-items">
    <ul>
        <li>
        <a href="/">Inicio</a>
        </li>
        <li>
        <a href="#informacion">Informacion</a>
        </li>
        <li>
        <a href="#tituloServicios">Servicios</a>
        </li>
        <li>
        <a href="https://encuesta.com/survey/YaWR1UO88D/maquinarias-y-vehiculos-dj" target="_blank">Contacto</a>
        </li>
    </ul>
    </div>
</nav>

<div className="Portada">

<h1 className="titulo"> Maquinarias y Vehiculos DJ</h1>
</div>

<div className="informacion" >

<h1 className="tituloInfo" id="informacion">NUESTRA VISION</h1>
    
    <p className="parrafo" >
    Nuestra visión como empresa es convertirnos en un proveedor líder de servicios de reparación confiables y eficientes para vehículos pesados. Nuestro objetivo es ofrecer una solución integral para todas las necesidades de reparación de vehículos pesados, incluida la reparación de motores, la reparación de transmisiones, la reparación de frenos y la reparación de carrocerías.
Nuestra empresa contará con un equipo de mecánicos altamente calificados y experimentados que utilizarán la última tecnología y equipo para diagnosticar y solucionar cualquier problema con los vehículos pesados. Nos centraremos en brindar servicios personalizados a nuestros clientes, asegurándonos de que reciban el mejor servicio y soporte posible de nuestro equipo.
    </p>
</div>

<div className="Servicios">

<h1 className="tituloServicios" id="tituloServicios">Servicios</h1>

<figure className="serviciosGaleria">

<section class="gallery">

<div class="gallery__item">

<lu className="listaServicios">
    <li>
    <p> 
        Reparacion de maquinaria Pesada
    </p>
    <p> 
        Venta de Repuestos para Maquinaria Pesada
    </p>
    <p> 
        Mantenimiento de Maquinaria Pesada
    </p>
    <p> 
        Marcas Internacionales como:
    </p>
    <p> 
        - Deasel
    </p>
    <p>
        - HLR
    </p>
    <p>
        - Volvo
    </p>
    <p>
        - Freightliner
    </p>
    </li>
   
</lu>
<img
   
    src="https://posada.pe/wp-content/uploads/2022/02/maquinaria-pesada-amarilla.jpeg"
    alt=""
/>

    <img src="https://posada.pe/wp-content/uploads/2022/02/maquinaria-pesada-amarilla.jpeg" alt="" />

</div>

</section>

</figure>
</div>

</div>
)}

export default Portada;