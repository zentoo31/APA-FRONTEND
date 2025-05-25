export default {
    name: 'RestablecerContraseñaView',
    data(){
        return{
            usuario:{
                IdPersonal:'',
                username:'',
                password:'',
            },
            confirmPassword: '',
            showPassword: false,
            showConfirmPassword: false,
            dialogValidar: false,
            dialogError: false,
            dialogExit: false,
        }
    },
    created(){
         this.obtenerDatos();
    },
    methods:{
        irlogin(){
            this.$router.push("/");
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        obtenerDatos(){
            this.usuario.IdPersonal=localStorage.getItem("IdPersonal");
            console.log(this.usuario.IdPersonal)
            this.usuario.username =localStorage.getItem('username')
            console.log(this.usuario.username)
        },

        restablecer(){
        
            if (!this.usuario.IdPersonal || !this.usuario.username || !this.usuario.password || !this.confirmPassword) {
                this.mensaje = "Todos los campos deben ser completados.";
                this.typemsg="error";
                this.dialogError = true;
                return;
            }

            // Verificación de que las contraseñas coinciden
            if (this.usuario.password !== this.confirmPassword) {
            this.mensaje = "Verifique la contraseña y su confirmación";
            this.dialogError = true;
            // Limpiando los campos de contraseña
            this.usuario.password = '';
            this.confirmPassword = '';
            return;
            }

            //Consultando existencia de usuario por su código
            this.$axios.get("/usuarios/" + this.usuario.IdPersonal).then((res) => {
                this.usuarioencontrado = res.data;
                if(this.usuarioencontrado && this.usuarioencontrado.username) {
                this.mensaje = "¿Esta seguro que desea cambiar la contraseña de su cuenta?";
                this.typemsg = "success";
                this.dialogValidar = true;
                } else {
                this.mensaje = "No ha sido encontrada una cuenta asocida, al codigo del docente: ''"+this.usuario.IdPersonal +"', por favor verifique";
                this.dialogError = true;
                }
            })
            .catch((error) => {
                console.error(error);  // Aquí debes manejar el error adecuadamente
                this.mensaje = "Error al buscar datos del docente";
                this.dialogError = true;
            });
       },
       cerrar() {
            this.dialogError = false;
            this.mensaje= " ";
            this.limpiar();
        },

        cancelar(){
            this.dialogValidar = false;
            this.mensaje= " ";
            this.limpiar();
        },

        async aceptar(){
            this.dialogValidar=false;
            try {
                const saveResponse = await this.$axios.patch(`/usuarios/${this.usuario.IdPersonal}`, this.usuario);
                this.limpiar();
                this.typemsg="success"
                this.mensaje = "La actualización ha sido completado con éxito";
                this.dialogExit = true;
            } catch (error) {
                console.error("Error al obtener los usuarios o al modificar el usuario:", error);
                this.mensaje = "Error durante el registro del usuario.";
                this.dialogError = true;
            }
        },

        volver(){
            this.dialogExit=false;
            this.$router.push("/");
        },

        limpiar(){
        this.usuario.password='';
        this.confirmPassword='';
        },
    },
}