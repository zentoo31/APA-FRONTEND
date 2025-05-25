<template>
    <v-container class="menu_css">

        <v-container class="m_arriba">

            <v-container class="m_izquierda">
                <v-container class=""></v-container>
                <v-container class=""></v-container>
                <p class="nombretxt">Carlos Jose Alcedo Javier</p>
                <v-container class="accesos">
                    <v-container class="acceso gmail1  " @click="irGmail">Gmail</v-container>
                    <v-container class="acceso drive1" @click="irDrive">Drive</v-container>
                    <v-container class="acceso myloft1" @click="irMyloft">MyLoft</v-container>
                    <v-container class="acceso trilce1" @click="irTrilce">Trilce</v-container>
                    <v-container class="acceso blackboard1" @click="irBlackboard">BlackBoard</v-container>
                    <v-container class="acceso clementina1" @click="irClementina">Clementina</v-container>
                </v-container>
                <button class="btn_cerrar" @click="irlogin">Cerrar Sesión</button>
            </v-container>

            <v-container class="m_derecha">
                <v-container class="cajaprincipal1" @click="irReporteGeneral">
                    <p class="subtitulo">Reporte General</p>
                    <v-container class="iconogen"></v-container>
                </v-container>
                 <v-container class="cajaprincipal1" @click="irReportePersonalizado">
                    <p class="subtitulo">Reporte personalizado</p>
                    <v-container class="iconoest"></v-container>
                </v-container>
                <v-container class="cajaprincipal1" @click="irInfoEstudiante">
                    <p class="subtitulo">Análisis por Estudiante</p>
                    <v-container class="iconoest"></v-container>
                </v-container>
            </v-container>

        </v-container>

        <v-container class="m_abajo">

            <section class="splide">
                <v-container class="splide__track">
                    <ul class="splide__list">
                        <li v-for="(image, index) in images" :key="index" class="splide__slide" :style="{ backgroundImage: 'url(' + image + ')' }" @click="expandImage(index)"></li>
                    </ul>
                </v-container>
            </section>


        </v-container>

        <v-container v-if="expandedImage !== null" class="modal">
            <span class="close" @click="collapseImage">&times;</span>
            <img :src="images[expandedImage]" class="modal-content">
        </v-container>

    </v-container>

</template>

<script src='../../views/Menu/MenuView'>
</script>

<style src='../../views/Menu/menu.css'></style>