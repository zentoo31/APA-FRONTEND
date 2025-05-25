<template>
    <v-container class="validarcodigo_css">
        <v-container class="todofondo">
            <v-container class="cajaprincipal">
                <v-container class="izquierda">
                    <p class="bientext">Validar Código</p>
                    <p class="texto">Ingresa el código de verificación que recibió en su correo electrónico proporcionado anteriormente.</p>
                    <v-container class="info">
                        <div>
                            <v-row>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code1"
                                        variant="outlined"
                                        v-model="code1"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code2"
                                        variant="outlined"
                                        v-model="code2"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code3"
                                        variant="outlined"
                                        v-model="code3"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                        ref="code4"
                                        variant="outlined"
                                        v-model="code4"
                                        maxlength="1"
                                        class="ingtxt"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                        <v-btn variant="tonal" class="btn-recuperar" type="button" @click="verificarCodigo">
                            Validar código
                        </v-btn>
                        <v-btn variant="text" class="btn-cancelar" @click="irlogin">
                            Cancelar
                        </v-btn>
                    </v-container>
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
          <span class="mx-auto">¡Verifique!</span>
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
    <v-dialog v-model="dialogCorrect" :width="500">
        <v-card color="#002854">
          <v-card-title>
            <span class="mx-auto">Codigo de verificación</span>
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
            <v-btn class="btncerrar"
              @click="irRestablecer">
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
</template>


<script src='../../views/ValidarCodigo/ValidarCodigoView'></script>
<style src='../../views/ValidarCodigo/validarCodigo.css'></style>