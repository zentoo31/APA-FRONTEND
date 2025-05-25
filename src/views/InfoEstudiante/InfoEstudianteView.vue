<template>
    <v-container class="infoEst_css">
        <v-container class="infoFondo">
            <v-container class="cajaprincipal">
                <v-container class="cajaizq">
                    <v-container class="caja1">
                        <v-container class="c1">
                            <p class="p1">Lista de Estudiantes</p>
                        </v-container>
                    </v-container>
                    <v-container class="caja2">
                        <p class="p2">Ciclo:</p>
                        <select v-model="selectedCiclo" class="cbxCiclo" >
                            <option v-for="(ciclo, index) in ciclos" :key="index" :value="ciclo.id" disabled>{{ ciclo.name }}</option>
                        </select>
                        <p class="p3">Curso:</p>
                        <select v-model="selectedCurso" class="cbxCurso" @change="filtrar">
                            <option v-for="(curso, index) in cursos" :key="index" :value="curso.name">{{ curso.name }}</option>
                        </select>
                        <p class="p3">Semestre Académico:</p>
                        <select v-model="selectedSemestre" class="cbxCiclo" @change="filtrar">
                            <option v-for="(semestre, index) in semestres" :key="index" :value="semestre.name">{{ semestre.name }}</option>
                        </select>
                        <v-btn class="btnO" @click="borrarFiltro"><span class="letra">Limpiar</span></v-btn>
                        <v-btn class="btnO" @click="irmenu"><span class="letra">Regresar</span></v-btn>
                    </v-container>
                    <v-container class="caja3">
                        <table class="tablaEstudiantes">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>DNI</th>
                                    <th>Género</th>
                                    <th>Distrito</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(estudiante, index) in estudiantes" :key="index">
                                    <td>{{ estudiante.codigo }}</td>
                                    <td>{{ estudiante.e_nombresE + ' ' + estudiante.e_apellidosE }}</td>
                                    <td>{{ estudiante.dni }}</td>
                                    <td>{{ estudiante.genero }}</td>
                                    <td>{{ estudiante.distrito }}</td>
                                    <td>
                                        <span class="ver-detalles" @click="verDetalles(index)">ver</span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </v-container>
                </v-container>
                <v-container class="cajader">
                    <v-container>
                        <p class="tit1">Detalle de Notas de</p>
                        <p class="tit2">{{selectedCurso}}</p>
                    </v-container>
                    <v-container class="igual">
                        <v-container class="der2">
                            <v-container class="cp1">
                                <p class="txt1">Nombre:</p>
                                <p class="txt2">{{ nombresEstudiante }}</p>
                            </v-container>
                            <v-container class="cp1">
                                <p class="txt1">Carrera:</p>
                                <p class="txt2">{{ carrera }}</p>
                            </v-container>
                            <v-container class="cp1">
                                <p class="txt1">Ciclo:</p>
                                <p class="txt2">{{ciclo }}</p>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="der3">
                        <v-container class="card1" v-for="unidad in unidades" :key="unidad.id">
                            <p class="cardtit">{{ unidad.titulo }}</p>
                            <v-container class="flexcard">
                                <v-container class="cuadrado" v-for="nota in unidad.notas" :key="nota.idTipo">
                                    <p class="m1">{{ nota.tipo }}</p>
                                    <p class="m2">{{ nota.nota }}</p>
                                </v-container>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="der4">
                        <v-container class="card2">
                            <p class="cardtit1">Resumen</p>
                            <p class="cardcont1">- La unidad con menor promedio es: </p>
                            <v-container class="flexcard1">
                                <p class="u1"> {{unidadMenor}}</p>
                                <span class="mdi mdi-arrow-right-bold iconflecha"></span>
                                <p class="u2">{{ promedioMenor }}</p>
                            </v-container>
                            <p class="cardcont1">- Debe mejorar sus calificaciones en el área de: </p>
                            <v-container class="flexcard1">
                                <p class="u1"> {{ area.tipo }}</p>
                                <span class="mdi mdi-arrow-right-bold iconflecha"></span>
                                <p class="u2">{{ area.promedio }}</p>
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>

<script src='../../views/InfoEstudiante/InfoEstudianteView.js'></script>

<style src='../../views/InfoEstudiante/infoEstudiante.css'></style>