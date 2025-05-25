<template>
    <v-container class="recuperarcuenta_css">

        <v-container class="todofondo">

            <v-container class="cajaprincipal">

                <v-container class="izquierda">

                    <p class="bientext">Recuperar Cuenta</p>

                    <p class="texto">Escribe tu correo para enviarte un código de recuperación.</p>

                    <v-container class="info">

                        <v-text-field
                            label="Correo Electrónico"
                            variant="outlined"
                            v-model="correo"
                            class="ingtxt"
                        ></v-text-field>

                        <v-btn variant="tonal" class="btn-recuperar" @click="enviarCodigo">
                            Enviar código
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
              @click="verificar">
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
     </v-dialog>
</template>

<script src='../../views/RecuperarCuenta/RecuperarCuentaView'></script>

<style src='../../views/RecuperarCuenta/recuperarCuenta.css'></style>