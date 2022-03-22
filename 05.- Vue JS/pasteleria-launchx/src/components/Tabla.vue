<template>
    <section class="container">
        <div class="table-responsive">
            <table class="table table-striped table-secondary align-middle">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Correo electrónico</th>
                        <th>Descripción</th>
                        <th>Sabores</th>
                        <th>Adornos</th>
                    </tr>
                </thead><!--./thead-->

                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Juan Lopez Jimenez</td>
                        <td>55 1252-1541</td>
                        <td>juan_120@hotmail.com</td>
                        <td>Tamaño pequeño, sin gluten <br> y poca azucar</td>
                        <td>Chocolate</td>
                        <td>Frutas,Fondat</td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>Juan Lopez Jimenez</td>
                        <td>55 1252-1541</td>
                        <td>juan_120@hotmail.com</td>
                        <td>Tamaño pequeño, sin gluten <br> y poca azucar</td>
                        <td>Chocolate</td>
                        <td>Frutas,Fondat</td>
                    </tr>
                </tbody><!--./tdoby-->            
            </table><!--./table-->
        </div><!--./table-responsive-->
    </section><!--./section-->
</template>

<script>
export default {
    name: 'Pastelero'
}
</script>

<style scoped>

.container{
    margin-top: 20px;
}

</style>