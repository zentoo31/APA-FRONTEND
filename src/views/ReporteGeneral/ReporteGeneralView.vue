<template>
    <v-container class="reporteGeneral">

        <v-container class="todofondo">

            <v-container class="cont-blanco">

                <v-container class="cont-izq">

                    <v-container class="datagenero">

                        <v-container class="subtitulo1">
                            <p class="t1">Género</p>
                        </v-container>

                        <v-container class="cajagenero">
                            <v-container class="btn-generoF"
                                @mouseover="showMessage(8, 'chatbot1')"
                                @mouseleave="hideMessage('chatbot1')">
                                <span class="text-generoF">Femenino</span> {{ femenino }}
                            </v-container>

                            <v-container class="btn-generoM"
                                @mouseover="showMessage(9, 'chatbot1')"
                                @mouseleave="hideMessage('chatbot1')">
                                <span class="text-generoM">Masculino</span>{{ masculino }}
                            </v-container>
                        </v-container>

                    </v-container>

                    <v-container class="dataedad"
                        @mouseover="showMessage(10, 'chatbot1')"
                        @mouseleave="hideMessage('chatbot1')">
                        <v-container class="subtituloe1">
                            <p class="t1">Nota Promedio</p>
                            <p class="t2">Del Estudiante (0-20)</p>
                        </v-container>
                        <v-container class="subtituloe2">
                            <p class="e2">{{ notaPromedio }}</p>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq1"
                        @mouseover="showMessage(0, 'chatbot1')"
                        @mouseleave="hideMessage('chatbot1')">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p class="p1">Promedios</p>
                                <p class="p2">Ponderados Satisfactorios</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo">
                            <v-container class="izqizquierda">
                                <p class="p3">{{ promedioClasificadasS }}</p>
                                <p class="p4">Estudiantes</p>
                            </v-container>
                            <v-container class="izqderecha">
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq2"
                        @mouseover="showMessage(1, 'chatbot1')"
                        @mouseleave="hideMessage('chatbot1')">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p class="p1">Promedios</p>
                                <p class="p2">Ponderados regulares</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo">
                            <v-container class="izqizquierda">
                                <p class="p3">{{ promedioClasificadasR }}</p>
                                <p class="p4">Estudiantes</p>
                            </v-container>
                            <v-container class="izqderecha">
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-container class="infoizq3"
                        @mouseover="showMessage(2, 'chatbot1')"
                        @mouseleave="hideMessage('chatbot1')">
                        <v-container class="izqarriba">
                            <v-container class="izqizquierda">
                                <p>Cursos con menor</p>
                                <p class="p5">Promedio</p>
                            </v-container>
                            <v-container class="izqderecha">
                                <v-icon right>mdi-star-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqabajo1">
                            <v-container class="izqizquierda">
                                <p class="p6" v-for="(cursosPonderado, index) in cursosPonderados" :key="index">{{ capitalizeFirstLetter(cursosPonderado.curso_NombreCurso) }}</p>
                            </v-container>
                            <v-container class="izqderecha1">
                                <p class="p7" v-for="(cursosPonderado, index) in cursosPonderados" :key="index">{{ cursosPonderado.promedio }}</p>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-btn class="btn-reg" @click="irmenu">
                        Regresar
                    </v-btn>

                </v-container>

                <v-container class="cont-der">
                    <v-container  class="cont-arriba">
                        <v-container class="c-arr-izq">
                            <v-container class="arr-izq">
                                <v-container class="izq-izq">
                                    <v-container class="b">
                                        <p class="p8">Dashboard - Análisis de desempeño</p>
                                        <p class="p9">Indicadores</p>
                                    </v-container>
                                </v-container>
                                <v-container class="izq-der">
                                    
                                </v-container>
                            </v-container>
                            <v-container class="aba-izq">
                                <v-container class="infoizq4"
                                    @mouseover="showMessage(3, 'chatbot1')"
                                    @mouseleave="hideMessage('chatbot1')">
                                    <v-container class="der-4">
                                        <p class="p10">{{ totalEstudiantes }}</p>
                                        <p class="p11">Estudiantes Totales</p>
                                    </v-container>
                                </v-container>
                                <v-container class="infoizq4"
                                    @mouseover="showMessage(4, 'chatbot1')"
                                    @mouseleave="hideMessage('chatbot1')">
                                    <v-container class="izquierda-4">
                                        <v-progress-circular
                                        :model-value="porcentajesNotas14.porcentaje"
                                        :rotate="360"
                                        :size="110"
                                        :width="14"
                                        color="#DD0919">
                                        <p class="porc">{{ porcentajesNotas14.porcentaje }}%</p>
                                        </v-progress-circular>
                                    </v-container>
                                    <v-container class="derecha-4">
                                        <p class="p12">Tasa de Riesgo </p>
                                        <p class="p13">Notas no satisfactorias</p>
                                        <p class="p14">{{ porcentajesNotas14.cantidad  }}</p>
                                    </v-container>
                                </v-container>
                                <v-container class="infoizq4"
                                    @mouseover="showMessage(0, 'chatbot2')"
                                    @mouseleave="hideMessage('chatbot2')">
                                    <v-container class="izquierda-4">
                                        <v-progress-circular
                                        :model-value=" porcentajesNotas18.porcentaje"
                                        :rotate="360"
                                        :size="110"
                                        :width="14"
                                        color="#002854">
                                        <p class="porc">{{ porcentajesNotas18.porcentaje }}%</p>
                                        </v-progress-circular>
                                    </v-container>
                                    <v-container class="derecha-4">
                                        <p class="p12">Tasa de Beneficio</p>
                                        <p class="p13">Notas satisfactorias</p>
                                        <p class="p14"> {{ porcentajesNotas18.cantidad }}</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="c-arr-der">
                            <p class="p15">Exportar en:</p>
                            <v-btn class="btn-desc" @click="descargarPDF">
                                PDF
                            </v-btn>
                        </v-container>
                    </v-container>
                    <v-container  class="cont-abajo">
                        <v-container class="columna1">
                            <v-container class="caja1"
                                @mouseover="showMessage(5, 'chatbot1')"
                                @mouseleave="hideMessage('chatbot1')">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Cantidad de Estudiantes</p>
                                        <p class="l2">Por Distrito de Residencia</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-check</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="caja1abajo">
                                    <v-container class="casa1abiz">
                                        <p v-for="(distrito, index) in estudiantesDistritos" :key="index" class="l3">{{ distrito.descripcionD }}</p>
                                    </v-container>
                                    <v-container class="casa1abder">
                                        <p v-for="(distrito, index) in estudiantesDistritos" :key="index" class="l4">{{ distrito.cantidad }}</p>
                                    </v-container>
                                </v-container>
                                <v-container class="caja1abajo1">
                                    <v-container class="abajo1izq">
                                        <p class="l5">Total de estudiantes</p>
                                        <p class="l6">que residen en en Cono Norte</p>
                                    </v-container>
                                    <v-container class="abajo1der">
                                        <p class="l7">{{ estudiantesConoNorte }}</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="columna2">
                            <v-container class="caja2"
                                @mouseover="showMessage(6, 'chatbot1')"
                                @mouseleave="hideMessage('chatbot1')">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Notas no satisfactorias</p>
                                        <p class="l2">Por Género</p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-star-outline</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="barra_1">
                                    <p class="b1">Cantidad de notas Femeninos</p>
                                    <v-container class="barra">
                                        <v-progress-linear
                                            v-model="porcentajeFemenino"
                                            color="#DD0919"
                                            height="25">
                                        </v-progress-linear>
                                        <p class="b2">{{ porcentajeFemenino }}%</p>
                                    </v-container>
                                </v-container>
                                <v-container class="barra_2">
                                    <p class="b4">Cantidad de notas Masculinas</p>
                                    <v-container class="barra">
                                        <v-progress-linear
                                            v-model="porcentajeMasculino"
                                            color="#002854"
                                            height="25">
                                        </v-progress-linear>
                                        <p class="b3">{{ porcentajeMasculino }}%</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="caja3"
                                @mouseover="showMessage(7, 'chatbot1')"
                                @mouseleave="hideMessage('chatbot1')">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Nivel de estudiantes</p>
                                        <p class="l2">Por turno </p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <v-icon right>mdi-check</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="cont_1">
                                    <v-container class="cont_2">
                                        <v-container class="c2_1">
                                            <p  v-for="(estudiante, index) in estudiantesTurnos" :key="index" :class="'l' + (8 + index)">{{ estudiante.cantidadEstudiantes }}</p>
                                        </v-container>
                                        <v-container class="c2_2">
                                            <p class="l11" v-for="(estudiante, index) in estudiantesTurnos" :key="index">{{ estudiante.Turno }}</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="grafica3">
                                        <v-progress-circular
                                        :model-value="porcentajeN"
                                        :rotate="180"
                                        :size="150"
                                        :width="16"
                                        color="#DD0919"
                                        class="gc1"
                                        >
                                            <v-progress-circular
                                            :model-value="porcentajeT"
                                            :rotate="180"
                                            :size="110"
                                            :width="16"
                                            color="#7e7e7e"
                                            class="gc2"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentajeM"
                                                :rotate="180"
                                                :size="68"
                                                :width="16"
                                                color="#002854"
                                                class="gc3"
                                                >
                                                </v-progress-circular>
                                            </v-progress-circular>
                                        </v-progress-circular>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-container class="columna3">
                            <v-container class="caja4"
                                @mouseover="showMessage(1, 'chatbot2')"
                                @mouseleave="hideMessage('chatbot2')">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Consolidados Notas  </p>
                                        <p class="l2">Por  Asignatura</p>
                                    </v-container>
                                    <v-container class="caja1der_1">
                                        <p class="genF">No Satistactorios (<14) </p>
                                        <p class="genM">Satisfactorias (>16)</p>
                                        <v-icon right>mdi-star-outline</v-icon>
                                    </v-container>
                                </v-container>
                                <v-container class="cont_a">
                                    <v-container v-for="(curso, index) in notasCursos" :key="index" class="cont_2 j">
                                        <v-container class="cont_2 c">
                                        <p>{{ curso.NotasMenor14 }}</p>
                                        </v-container>
                                        <v-container class="cont_2 c">
                                        <p>{{ curso.NotasMayor16 }}</p>
                                        </v-container>
                                    </v-container>
                                </v-container>
                                <v-container class="grlive">
                                    <v-container v-for="(curso, index) in notasCursos" :key="'porcentaje' + index" class="especial">
                                        <v-progress-linear
                                        v-model="curso.PorcentajeNotasMenor14"
                                        color="#DD0919"
                                        height="20"
                                        class="vertical-progress1"
                                        ></v-progress-linear>
                                        <v-progress-linear
                                        v-model="curso.PorcentajeNotasMayor16"
                                        color="#002854"
                                        height="20"
                                        class="vertical-progress2"
                                        ></v-progress-linear>
                                    </v-container>
                                </v-container>
                                <v-container  class="cont_2">
                                    <v-container class="h">
                                            <p v-for="(curso, index) in cursos" :key="index" class="ab p-spacing">{{ curso }}</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="caja5">
                                <v-container class="caja6"
                                    @mouseover="showMessage(2, 'chatbot2')"
                                    @mouseleave="hideMessage('chatbot2')">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Cantidad de Estudiante</p>
                                            <p class="l2">Por Categorización</p>
                                        </v-container>
                                        <v-container class="caja1der">
                                            <v-icon right>mdi-check</v-icon>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                            <!-- Categorías -->
                                            <v-container class="espacio">
                                                <v-container v-for="(categoria, index) in estudiantesCategorias" :key="index" class="especialA">
                                                    <p class="m1">{{ categoria.Categoria }}</p>
                                                </v-container>
                                            </v-container>
                                            <!-- Barras y cantidades -->
                                            <v-container class="p0">
                                                <v-container v-for="(categoria, index) in estudiantesCategorias" :key="index" class="barra2">
                                                    <v-progress-linear
                                                        v-model="categoria.porcentaje"
                                                        color="#DD0919"
                                                        height="20">
                                                    </v-progress-linear>
                                                    <p class="c2">{{ categoria.cantidad_estudiantes }}</p>
                                                </v-container>
                                            </v-container>
                                    </v-container>
                                </v-container>
                                <v-container class="caja7"
                                    @mouseover="showMessage(3, 'chatbot2')"
                                    @mouseleave="hideMessage('chatbot2')">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Relación Total</p>
                                            <p class="l2">{{ estudiantesEstados.Total }}</p>
                                        </v-container>
                                        <v-container class="caja1der">
                                            <v-icon right>mdi-check</v-icon>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="cont_3">
                                            <p class="l8">Solteros</p>
                                            <p class="l12">{{ estudiantesEstados.solteros }}</p>
                                            <p class="l9">Casados</p>
                                            <p class="l12">{{ estudiantesEstados.casados }}</p>
                                            <p class="l10">Viudos</p>
                                            <p class="l12">{{ estudiantesEstados.viudos }}</p>
                                        </v-container>
                                        <v-container class="cont_4">
                                            <svg viewBox="0 0 36 36" class="circular-chart">
                                                <path class="circle-bg" 
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 1 1 0 31.831
                                                    a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                    <path class="color1" 
                                                stroke-width="4"
                                                :stroke-dasharray="dashArray1"
                                                fill="none"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 1 1 0 31.831
                                                a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                <path class="color2" 
                                                    stroke-width="4"
                                                    :stroke-dasharray="dashArray2"
                                                    fill="none"
                                                    :stroke-dashoffset="`-${porcentajeS}`"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 1 1 0 31.831
                                                    a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                <path class="color3" 
                                                    stroke-width="4"
                                                    :stroke-dasharray="dashArray3"
                                                    fill="none"
                                                    :stroke-dashoffset="`-${porcentajeS + porcentajeC}`"
                                                    d="M18 2.0845
                                                    a 15.9155 15.9155 0 1 1 0 31.831
                                                    a 15.9155 15.9155 0 1 1 0 -31.831"/>
                                                <text x="18" y="16" text-anchor="middle" dy=".3em" class="texto1">
                                                    Estudiantes
                                                </text>
                                                <text x="18" y="21" text-anchor="middle" dy=".3em" class="texto2">
                                                    Por estado civil
                                                </text>
                                            </svg>
                                        </v-container>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>

            </v-container>

        </v-container>

        <ChatBot1View
            v-if="currentMessage1 !== null"
            :message="containers1[currentMessage1].message"
            :visible="messageVisible1"
        />

        <ChatBot2View
            v-if="currentMessage2 !== null"
            :message="containers2[currentMessage2].message"
            :visible="messageVisible2"
        />

    </v-container>
</template>

<script src='../../views/ReporteGeneral/ReporteGeneralView'></script>

<style src='../../views/ReporteGeneral/reporteGeneral.css'></style>