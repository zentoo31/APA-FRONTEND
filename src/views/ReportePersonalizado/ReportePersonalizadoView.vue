<template>
    <v-container class="reportePersonalizado">

        <v-container class="todofondo">

            <v-container class="cont-blanco">

                <v-container class="cont-izq">

                    <v-container class="cont-1">
                        <v-container class="cont-text1">
                            <p class="p1">Dashboard</p>
                            <p>{{ nombreCursoSeleccionado }}</p>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Asignaturas Académicas</p>
                            </v-container>
                            <v-container class="c2-derecha">
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajo">
                            <v-row class="elemento">
                                <template v-for="(filter1, index) in filters1" :key="filter1">
                                    <v-col
                                    :cols="filters1.length > 3 ? 12 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter1"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': selectedFilter1 === filter1}"
                                            @click="handleFilterClick(filter1)">
                                            {{ filter1 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>

                    <v-container class="cont-2">
                        <v-container class="c2-arriba">
                            <v-container class="c2-izquierda">
                                <p>Periodo de tiempo</p>
                            </v-container>
                            <v-container class="c2-derecha">
                            </v-container>
                        </v-container>
                        <v-container class="c2-abajoa">
                            <v-row class="elemento">
                                <template v-for="(filter2, index) in filters2" :key="filter2">
                                    <v-col
                                    :cols="filters2.length > 3 ? 6 : 12"
                                    class="d-flex justify-center">
                                        <v-btn
                                            :value="filter2"
                                            depressed
                                            class="ma-2 btnFiltro"
                                            :class="{'selected': selectedFilter2 === filter2}"
                                            @click="handleFilterClick1(filter2)">
                                            {{ filter2 }}
                                        </v-btn>
                                    </v-col>
                                </template>
                            </v-row>
                        </v-container>
                    </v-container>
                    <v-btn class="btn-reg" @click="descargarPDF">
                        Descargar PDF
                    </v-btn>

                    <v-btn class="btn-reg" @click="irmenu">
                        Regresar
                    </v-btn>

                </v-container>

                <v-container class="cont-der">

                    <v-container class="bloque-flex">

                        <v-container class="bloque-izquierda">
                            <v-container class="caja cajatam1">
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854"
                                        @mouseover="showMessage(0, 'chatbot1')"
                                        @mouseleave="hideMessage('chatbot1')">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc1">{{ cantidadEstu.cantidadM }}</p>
                                            <p class="txtcirc2"> Matriculados</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="coli p0"></v-container>
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854"
                                        @mouseover="showMessage(3, 'chatbot1')"
                                        @mouseleave="hideMessage('chatbot1')">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc1">{{ cantidadProfe.cantidadP }}</p>
                                            <p class="txtcirc2">Docentes</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="coli p0"></v-container>
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854"
                                        @mouseover="showMessage(4, 'chatbot1')"
                                        @mouseleave="hideMessage('chatbot1')">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc1">{{ cantidadNotas.cantidadN }}</p>
                                            <p class="txtcirc2">Notas</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="coli p0"></v-container>
                                <v-container class="p0">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        color="#002854"
                                        @mouseover="showMessage(5, 'chatbot1')"
                                        @mouseleave="hideMessage('chatbot1')">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc1">{{promedioGeneral.promedio}}</p>
                                            <p class="txtcirc2">Nota</p>
                                            <p class="txtcirc2">Promedio</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                            </v-container>
                            <v-container class="caja cajatam2"
                                @mouseover="showMessage(1, 'chatbot1')"
                                @mouseleave="hideMessage('chatbot1')">
                                <v-container class="izqarriba">
                                    <v-container class="caja1izq">
                                        <p class="l1">Número de Calificaciones</p>
                                        <p class="l2">Por tipo </p>
                                    </v-container>
                                    <v-container class="caja1der">
                                        <p class="genF">No Satisfactorias</p>
                                        <p class="genM">Satisfactorias</p>
                                    </v-container>
                                </v-container>
                                    <v-container class="cont_a">
                                        <v-container v-for="(curso, index) in cursosTipo" :key="index" class="cont_2 h">
                                            <v-container class="cont_2 c1">
                                                <p>{{ curso.NotasInSatis }}</p>
                                            </v-container>
                                            <v-container class="cont_2 c2">
                                                <p>{{ curso.NotasSatis }}</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                    <v-container class="grlive">
                                        <v-container v-for="(curso, index) in cursosTipo" :key="index">
                                            <v-progress-linear
                                            v-model="curso.PorcentajeI"
                                            color="#DD0919"
                                            height="47"
                                            class="vertical-progress1"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="curso.PorcentajeS"
                                            color="#002854"
                                            height="47"
                                            class="vertical-progress2"
                                            ></v-progress-linear>
                                        </v-container>
                                       
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="cont_2 h">
                                            <p>Examen Parcial</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>Práctica Calificada</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>Examen Final</p>
                                        </v-container>
                                        <v-container class="cont_2 j">
                                            <p>Inves. Formativa</p>
                                        </v-container>
                                    </v-container>
                            </v-container>
                        </v-container>

                        <v-container class="bloque-flex">
                            <v-container class="b-izq">
                                <v-container class="caja cajatam3"
                                    @mouseover="showMessage(0, 'chatbot2')"
                                    @mouseleave="hideMessage('chatbot2')">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Desempeño Anual</p>
                                            <p class="l2">Cantidad de notas satisfactorias</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="bloque-flex1">
                                        <v-container class="grafica3">
                                            <v-progress-circular
                                            :model-value="porcentajeC1[0]"
                                            :rotate="180"
                                            :size="150"
                                            :width="16"
                                            color="#DD0919"
                                            class="gc1"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentajeC1[1]"
                                                :rotate="180"
                                                :size="110"
                                                :width="16"
                                                color="#7e7e7e"
                                                class="gc2"
                                                >
                                                    <v-progress-circular
                                                    :model-value="porcentajeC1[2]"
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
                                        <v-container class="caja1_abcd">
                                            <p class="genA x">{{labelsC1[0]}}</p>
                                            <p class="genB x">{{ labelsC1[1] }}</p>
                                            <p class="genC x">{{ labelsC1[2] }}</p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="bloque-flex2">
                                        <v-container class="grafica3">
                                            <v-progress-circular
                                            :model-value="porcentajeC1[3]"
                                            :rotate="180"
                                            :size="150"
                                            :width="16"
                                            color="#DD0919"
                                            class="gc1"
                                            >
                                                <v-progress-circular
                                                :model-value="porcentajeC1[4]"
                                                :rotate="180"
                                                :size="110"
                                                :width="16"
                                                color="#7e7e7e"
                                                class="gc2"
                                                >
                                                    <v-progress-circular
                                                    :model-value="porcentajeC1[5]"
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
                                        <v-container class="caja1_abcd">
                                            <p class="genA x">{{ labelsC1[3] }}</p>
                                            <p class="genB x">{{ labelsC1[4] }}</p>
                                            <p class="genC x">{{ labelsC1[5] }}</p>
                                        </v-container>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-container class="b-der">
                                <v-container class="caja cajatam4"
                                    @mouseover="showMessage(1, 'chatbot2')"
                                    @mouseleave="hideMessage('chatbot2')">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Notas Satisfactorias</p>
                                            <p class="l2">Por Unidad</p>
                                        </v-container>
                                    </v-container>
                                        <v-container class="cont_a">
                                            <v-container class="cont_2 y">
                                                <p>{{ UnidadU.NotasM}}</p>
                                            </v-container>
                                            <v-container class="cont_2 j">
                                                <p> {{ UnidadS.NotasM }}</p>
                                            </v-container>
                                            <v-container class="cont_2 w">
                                                <p>{{ UnidadT.NotasM }}</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_z">
                                            <v-progress-linear
                                            v-model="UnidadU.Porcentaje"
                                            color="#002854"
                                            height="42"
                                            class="vertical-progress5"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="UnidadS.Porcentaje"
                                            color="#7e7e7e"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="UnidadT.Porcentaje"
                                            color="#DD0919"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                        </v-container>
                                    <v-container class="caja1_abc">
                                        <p class="genA x">Primera Unidad</p>
                                        <p class="genB x">Segundo Unidad</p>
                                        <p class="genC x">Tercera Unidad</p>
                                    </v-container>
                                </v-container>
                                <v-container class="caja cajatam5"
                                    @mouseover="showMessage(2, 'chatbot2')"
                                    @mouseleave="hideMessage('chatbot2')">
                                    <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Promedios </p>
                                            <p class="l2">Por Genero </p>
                                        </v-container>
                                    </v-container>
                                    <v-container class="cont_2">
                                        <v-container class="p0_1 esp">
                                            <v-container class="barra1">
                                                <v-progress-linear
                                                    v-model="GeneroFemenino.porcentaje"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c3">{{ GeneroFemenino.promedio }}</p>
                                            </v-container>
                                            <v-container class="barra0">
                                                <v-progress-linear
                                                    v-model="GeneroMasculino.porcentaje"
                                                    color="#002854"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c3">{{ GeneroMasculino.promedio }}</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                                    <v-container class="caja1_ab">
                                        <p class="genF x">{{ GeneroFemenino.Genero }}</p>
                                        <p class="genM x">{{ GeneroMasculino.Genero }}</p>
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>

                    </v-container>

                    <v-container class="bloque-flex">
                        <v-container class="caja cajatam6"
                            @mouseover="showMessage(2, 'chatbot1')"
                            @mouseleave="hideMessage('chatbot1')">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Notas Promedio</p>
                                    <p class="l2">Por Semestre Académico</p>
                                </v-container>
                            </v-container>
                            <v-container class="p0_1">
                                <v-card class="mx-auto text-center cajalinea" max-width="600" dark>
                                    <v-card-text class="cardpd">
                                        <v-sheet color="white">
                                            <div style="position: relative; height: 204px;">
                                                <v-sparkline
                                                    v-for="(line, index) in values"
                                                    :key="index"
                                                    :stroke-width="2"
                                                    :model-value="line"
                                                    :color="colors[index]"
                                                    height="100"
                                                    padding="24"
                                                    stroke-linecap="round"
                                                    smooth
                                                    :labels="[]"
                                                    style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin-top: -23px;">
                                                </v-sparkline>
                                            </div>
                                            <div class="labels">
                                                <span v-for="(label, index) in labels" :key="index" class="label">
                                                    {{ label }}
                                                </span>
                                            </div>
                                        </v-sheet>
                                    </v-card-text>
                                </v-card>
                            </v-container>
                            <v-container class="p0_1 adiclc">
                                <p class="lc1 comlc">Com. Comunicativa</p>
                                <p class="lc2 comlc">Fund. Programación</p>
                                <p class="lc3 comlc">Int. Ingeniería</p>
                                <p class="lc4 comlc">Matemática I</p>
                                <p class="lc5 comlc">Pens. Lógico</p>
                                <p class="lc6 comlc">Tutoria I</p>
                            </v-container>
                        </v-container>

                        <v-container class="caja cajatam7"
                            @mouseover="showMessage(3, 'chatbot2')"
                            @mouseleave="hideMessage('chatbot2')">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Calificación Promedio</p>
                                    <p class="l2">Por turno</p>
                                </v-container>
                            </v-container>
                            <v-container class="bloque-flex ñ">
                                <v-container class="colum1">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="124"
                                        :width="9"
                                        color="#002854">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc3">{{ promedios[1] }} .00</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="colum1">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="124"
                                        :width="9"
                                        color="#7e7e7e">
                                        <div class="centrartxtcirculo"> 
                                            <p class="txtcirc3">{{ promedios[2]}} .00</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                                <v-container class="colum1">
                                    <v-progress-circular
                                        :model-value="100"
                                        :rotate="360"
                                        :size="124"
                                        :width="9"
                                        color="#DD0919">
                                        <div class="centrartxtcirculo">
                                            <p class="txtcirc3">{{ promedios[0] }} .00</p>
                                        </div>
                                    </v-progress-circular>
                                </v-container>
                            </v-container>
                            <v-container class="bloque-flex">
                                <v-container class="ch">
                                </v-container>
                                <v-container class="ch">
                                </v-container>
                                <v-container class="ch">
                                </v-container>
                            </v-container>
                            <v-container class="bloque-flex colum1">
                                <p class="genA x">Mañana</p>
                                <p class="genB x">Tarde</p>
                                <p class="genC x">Noche</p>
                            </v-container>
                        </v-container>
                        <v-container class="caja cajatam8"
                            @mouseover="showMessage(4, 'chatbot2')"
                            @mouseleave="hideMessage('chatbot2')">
                            <v-container class="izqarriba">
                                <v-container class="caja1izq">
                                    <p class="l1">Notas No Sartistactorias</p>
                                    <p class="l2">Por docente</p>
                                </v-container>
                            </v-container>
                            <v-container class="cont_2">
                                <v-container class="espacio">
                                    <p v-for="(curso, index) in cursosProfesor" :key="index" class="m1">{{curso.NombreCompleto}}</p>
                                </v-container>
                                <v-container class="p0_1">
                                    <v-container v-for="(curso, index) in cursosProfesor" :key="index" class="barra2">
                                        <v-progress-linear
                                            v-model="curso.Porcentaje"
                                            color="#DD0919"
                                            height="10">
                                        </v-progress-linear>
                                        <p class="c3">{{ curso.NotasM }}</p>
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

<script src='../../views/ReportePersonalizado/ReportePersonalizadoView'></script>

<style src='../../views/ReportePersonalizado/reportePersonalizado.css'></style>