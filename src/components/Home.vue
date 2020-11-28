<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png"  width="30" height="30" alt="" loading="lazy">                    
                </a>
                <a href="/" class="navbar-brand">SmartMed</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-supportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Page</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
        <div>
            <h1>imagenes</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="card">
                        <div class="carousel-item active">
                        <img src="" class="d-block w-100" alt="">
                    </div>
                </div>
                    <div class="carousel-item">
                        <img src="" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                        <img src="" class="d-block w-100" alt="">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>   
</template>

<script>
import img from '../assets/logo.png' 
export default {
    name: 'Users',
    data: function(){
        return {
            image: img
        }
    }
}

</script>

<style>
    h3{
        margin-bottom: 5%;
    }
    a{
        font-family: sans-serif;
        color: dodgerblue; 
    }
</style>

