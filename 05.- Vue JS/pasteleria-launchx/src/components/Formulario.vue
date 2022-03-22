<template>
    <div class="pedido">
        <h1 class="heading">Realizar tu pedido</h1>
        <div class="container">
            <form class="row g-3">

                <div class="col-sm-12 col-md-4 col-lg-4 mt-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Juan Perez Lopez">
                </div><!--./col-->

                <div class="col-sm-12 col-md-4 col-lg-4 mt-3">
                    <label for="telefono" class="form-label">Telefono</label>
                    <input type="tel" class="form-control" id="telefono" placeholder="(55)1236-4515">
                </div><!--./col-->
                        

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <label for="email" class="form-label">Correo electronico</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                </div><!--./col-->

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <label for="descripcion" class="form-label">Descrición general del pastel</label>
                    <textarea class="form-control" id="descripcion" rows="3"></textarea>
                </div><!--./col-->

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <p>Sabores</p>
                    <div class="btn-group">
                        <div class="row">
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="chocolate">
                                <label for="chocolate" class="btn btn-outline-light border border-dark">Chocolate</label>
                            </div>
                            
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="envinado">
                                <label for="envinado" class="btn btn-outline-light border border-dark">Envinado</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="vainilla">
                                <label for="vainilla" class="btn btn-outline-light border border-dark">Vainilla</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="fresa">
                                <label for="fresa" class="btn btn-outline-light border border-dark">Fresa</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="cajeta">
                                <label for="cajeta" class="btn btn-outline-light border border-dark">Cajeta</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="cafe">
                                <label for="cafe" class="btn btn-outline-light border border-dark">Cafe</label>
                            </div>
                            
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="cheesecake">
                                <label for="cheesecake" class="btn btn-outline-light border border-dark">Cheesecake</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="oreo">
                                <label for="oreo" class="btn btn-outline-light border border-dark">Oreo</label>
                            </div>
                            
                        </div><!--./row-->                                                
                    </div><!--./btn-group-->
                </div><!--./col-->

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <p>Adornos</p>
                    <div class="btn-group">
                        <div class="row">
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="crema">
                                <label for="crema" class="btn btn-outline-light border border-dark">Crema batida</label>
                            </div>
                            
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="trozos">
                                <label for="trozos" class="btn btn-outline-light border border-dark">Trozos de chocolate</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="galletas">
                                <label for="galletas" class="btn btn-outline-light border border-dark">Galletas</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="frutas">
                                <label for="frutas" class="btn btn-outline-light border border-dark">Frutas</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="fondat">
                                <label for="fondat" class="btn btn-outline-light border border-dark">Fondat</label>
                            </div>

                        </div><!--./row-->
                    </div><!--./btn-group-->
                </div><!--./col--> 

            </form><!--./row-->

            <div class="row mb-4">
                <div class="col centrado">
                    <button class="btn-pink">Enviar</button>
                </div><!--./col-->
            </div><!--./row-->

        </div><!--./container-->
    </div><!--./pedido-->
</template>

<script>
export default {
    name: 'Formulario'
}
</script>

<style scoped>
.pedido h1{
    position: relative;
    text-align: center;
    margin: 35px;
    font-weight: 900;
}

.row{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

label{
    color: #FF4D6D;
    font-weight: 900;
}

p{
    color: #FF4D6D;
    font-size: 25px;
    font-weight: 900;
}

.btn-group label{
    text-shadow: 0px 0px 5px #FF4D6D;
}

.btn-pink{
    width: 200px;
    height: 50px;
    font-size: 20px;
    margin-top: 30px;
    background: #FF4D6D;
    color: #C6F33F;
    border: none;
    cursor: pointer;
}

.centrado{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>