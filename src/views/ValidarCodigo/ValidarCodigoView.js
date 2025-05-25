export default {
    name: 'ValidarCodigoView',
    data() {
        return {
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        codigoCompleto: '',
        dialogError: false,
        mensaje: "",
        typemsg: "",
        dialogCorrect: false,
        }
    },
    methods: {
        irlogin() {
            this.$router.push("/");
        },

        irRestablecer() {
            this.$router.push("/RestablecerContraseña");
        },

        moveToNext(index) {
            const nextField = this.$refs['code' + (index + 1)];
            if (nextField) {
                this.$nextTick(() => {
                    nextField.focus();
                });
            }
        },

        moveToPrevious(index) {
            if (index > 1) {
                const prevField = this.$refs['code' + (index - 1)];
                if (prevField) {
                    this.$nextTick(() => {
                    prevField.focus();
                    });
                }
            }
        },
        
        async verificarCodigo() {
          if(this.code1!==""&&this.code2!==""&&this.code3!==""&&this.code4!==""){
            this.codigoCompleto = this.code1 + '' + this.code2 + '' + this.code3 + '' + this.code4;
            try {
                const response = await this.$axios.post("/email/verificarCodigo", { code: this.codigoCompleto });
                // Verificar si la respuesta indica que el código es válido
                if (response.data.message === 'Código de verificación válido') {
                    this.mensaje=" El Código de verificación ingresado es válido puede iniciar el restablecimiento de contraseña";
                    this.typemsg="success";
                    this.dialogCorrect=true;
                } else {
                    this.mensaje='El código de verificación es inválido';
                    this.typemsg="error";
                    this.dialogError=true;
                }
            } catch (error) {
                console.error('Error al verificar el código:', error);
            }  

          }else{
            this.mensaje= "Por favor complete todos los dígitos del código de verficación",
            this.typemsg="error";
            this.dialogError=true;
          }
        },

        cerrar(){
                this.mensaje="";
                this.dialogError= false;
        },

    },
    watch: {
        code1(newValue) {
            if (newValue.length === 1) {
                this.moveToNext(1);
            }
        },
        code2(newValue) {
            if (newValue.length === 1) {
                this.moveToNext(2);
            } else if (newValue.length === 0) {
                this.moveToPrevious(2);
            }
        },
        code3(newValue) {
            if (newValue.length === 1) {
                this.moveToNext(3);
            } else if (newValue.length === 0) {
                this.moveToPrevious(3);
            }
        },
        code4(newValue) {
            if (newValue.length === 0) {
                this.moveToPrevious(4);
            }
        },
    },
}