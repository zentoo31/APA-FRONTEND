<template>
    <v-container class="registrarpersonal_css">

        <v-container class="todofondo">

            <v-container class="cajaprincipal">

                <v-container class="izquierda">

                    <p class="bientext">Registrarse</p>

                    <p class="texto">Datos del personal</p>

                    <v-container class="info">

                        <v-text-field
                            label="Código del Personal"
                            variant="outlined"
                            @input="handleInput"
                            v-model="usuario.IdPersonal"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Nombres"
                            variant="outlined"
                            v-model="nombresP"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Documento de Identidad"
                            variant="outlined"
                            v-model="dniP"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Apellidos"
                            variant="outlined"
                            v-model="apellidosP"
                            class="ingtxt"
                        ></v-text-field>

                        <v-text-field
                            label="Categoría de Personal"
                            variant="outlined"
                            v-model="categoriaP"
                            class="ingtxt"
                        ></v-text-field>

                    </v-container>

                    <p class="texto">Datos de la cuenta</p>

                    <v-container class="info">

                        <v-text-field
                            label="Usuario"
                            variant="outlined"
                            v-model="usuario.username"
                            class="ingtxt1"
                        ></v-text-field>

                        <v-text-field
                            label="Contraseña"
                            variant="outlined"
                            v-model="usuario.password"
                            class="ingcontraseña"
                            :type="showPassword ? 'text' : 'password'"
                            >
                            <template #append>
                                <v-btn
                                text
                                @click="togglePasswordVisibility"
                                >
                                {{ showPassword ? 'OCULTAR' : 'VER' }}
                                </v-btn>
                            </template>
                            </v-text-field>

                            <v-text-field
                            label="Confirmar Contraseña"
                            variant="outlined"
                            v-model="confirmPassword"
                            class="ingcontraseña"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            >
                            <template #append>
                                <v-btn
                                text
                                @click="toggleConfirmPasswordVisibility"
                                >
                                {{ showConfirmPassword ? 'OCULTAR' : 'VER' }}
                                </v-btn>
                            </template>
                        </v-text-field>

                    </v-container>

                    <v-btn variant="text" class="btn-cancelar" @click="irlogin">
                        Cancelar
                    </v-btn>
                    <v-btn variant="tonal" class="btn-registrar" type="button" @click="registrar">
                        Registrarse
                    </v-btn>

                </v-container>

                <v-container class="derecha">
                    <v-container class="contcolor">
                    </v-container>
                </v-container>

            </v-container>

        </v-container>

    </v-container>
    <v-dialog v-model="dialogError" :width="500">
        <v-card color="#ec4a4a">
            <v-card-title>
                <span class="mx-autoR">¡Verifique!</span>
                </v-card-title>
                <v-card-text>
                <v-alert
                    v-if="mensaje !== ''"
                    color="white"
                    :type="typemsg"
                    outlined>
                    {{ mensaje }}
                </v-alert>
            </v-card-text>
            <v-card-actions class="prueba">
                <v-btn class="btnclose"
                    @click="cerrar">
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogExit" :width="500">
        <v-card color="#033076">
            <v-card-title>
                <span class="mx-autoR">¡Registro exitoso!</span>
            </v-card-title>
            <v-card-text>
                <v-alert
                    v-if="mensaje !== ''"
                    color="#033076"
                    :type="typemsg"
                    outlined>
                    {{ mensaje }}
                </v-alert>
            </v-card-text>
            <v-card-actions class="prueba">
                <v-btn class="btnclose1"
                    @click="cerrar">
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="../../views/RegistrarPersonal/RegistrarPersonalView">
</script>

<style src='../../views/RegistrarPersonal/registrarPersonal.css'></style>