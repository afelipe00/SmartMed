<template>
    <div>
        <header class="hola etc">
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.jpg"  width="30" height="30" alt="" loading="lazy">                    
                </a>
                <a href="/" class="navbar-brand text-dark">SmartMed</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-supportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-secondary" href="/">Services <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="/">Hospitals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="/">About us</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
        <div class="container-fluid" style="background: light;">
           <div class="card h-100 border-0 bg-black">
                    <img src="../assets/system.jpg" height="700">
                    <div class="card-img-overlay">
                        <div class="row vh-100 justify-content-center align-items-center">
                            <div class="col-sm-12 text-center">
                                <p class="font-weight-bold text-white" style="letter-spacing:7px; text-indent: 9px;">
                                    <span class="text-info">SmartMed</span>solutions.
                                </p>
                                <a href="/Login" class="btn btn-outline-info pr-5 pl-5 mt-5 mb-5">LOGIN</a>
                            </div>
                        </div>
                    </div> 
           </div>
        </div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-12 text-center">
                    <h1 class="h2 font-weight-bolder">Feauter Services</h1>
                    <p class="text-center"> Devices IOT and software solutions </p>
                </div>
                <div class="container">
                    <div class="col-sm-12">
                        <div class="row mt-5 shadow-sm mb-5 align-items-center bg-light border hover">
                            <div class="col-sm-5 p-0">
                                <a href="/">
                                    <img src="../assets/iot.jpg" width="400" alt="productos 1" loading="lazy" class="img-fluid">
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <h3>
                                    <a href="/" title="prueba">IOT Triage system</a>
                                </h3>
                                <p>
                                    los dispositivos Smartmed permiten a los hospitales definir de forma autonoma la clasificacion TRIAGE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-secondary pt-4 pb-4" style="background: #EBEDEF">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <img src="../assets/logo.jpg" width="30" loading = "lazy" class="mx-auto d-block" alt="log smartmed" title="smartapp">
                        <p class="text-center mt-3 text-secondary">Smartmed</p>
                        <p class="small text-center">Bogotá, Colombia TEL: 3151234567 PBX: 38 234 235 231</p>
                    </div>
                    <div class="col-sm-3">
                        <h3 class="h5">Services</h3>
                        <ul>
                            <li>
                                <a href="/">IOT Med</a>
                            </li>
                            <li>
                                <a href="/">Software Med</a>
                            </li>
                            <li>
                                <a href="/">IA solutions</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h3 class="h5">Contactanos</h3>
                        <ul>
                            <li>
                                <a href="/">About us</a>
                            </li>
                            <li>
                                <a href="/">Whatsapp</a>
                            </li>
                            <li>
                                <a href="/">Social</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-12">
                        <p class="small text-center">
                            °Todos los derechos Reservados SMARTMED | Diseño de soluciones con software y hardware | 2020
                        </p>
                    </div>                    
                </div>
            </div>
        </div>
    </div>   
</template>

<script> 
export default {
    name: 'Users',
    data: function(){
    }
}
</script>

