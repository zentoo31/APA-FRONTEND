export default {
    name: 'RegistrarPersonalView',
    data(){
        return{
            usuario:{
                id:"",
                IdPersonal:"",
                username: "",
                password: "",
                correo:"",
                codigoVerificacion:""
            },
            nombresP: "",
            apellidosP: "",
            personal:"",
            usuarioRegistrado: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
            dniP: "",
            ultimoID:"",
            categoriaP:"",
            mensaje:"",
            typemsg:"",
            dialogError:false,
            dialogExit:false
        }
    },
    created(){

    },
    methods:{
        handleInput() {
            // Cancelar el timeout anterior si existe
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            // Establecer un nuevo timeout
            this.timeout = setTimeout(() => {
                this.obtenerDatos();
            }, 2000); 
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        obtenerDatos() {
            if (this.IdPersonal !== "") {
                this.$axios.get("/personal/" + this.usuario.IdPersonal)
                .then((res) => {
                    this.personal = res.data;
                    if(this.personal && this.personal.nombresP) {
                    this.nombresP = this.personal.nombresP;
                    this.apellidosP= this.personal.apellidosP;
                    this.dniP= this.personal.dniPers;
                    this.correo= this.personal.correo;
                        if(this.personal.idTipo===1){
                            this.categoriaP="Docente"
                        }else{
                            this.categoriaP="Administrativo"
                        }
                    } else {
                    this.typemsg = "error";
                    this.mensaje = "El docente no ha sido encontrado, verifique el código ingresado";
                    this.dialogError = true;
                    }
                })
                .catch((error) => {
                    console.error(error);  // Aquí debes manejar el error adecuadamente
                    this.mensaje = "Error al buscar datos del docente";
                    this.typemsg = "error";
                    this.dialogError = true;
                });
            }
        },

        irlogin(){
            this.$router.push("/");
        },

        cerrar() {
            this.dialogError = false;
            this.dialogExit= false;
            this.mensaje= " ";
        },

        async registrar() {
            // Verificación de que todos los campos necesarios están completos
            if (!this.usuario.IdPersonal || !this.usuario.password || !this.confirmPassword) {
                this.mensaje = "Todos los campos deben ser completados.";
                this.typemsg = "error";
                this.dialogError = true;
                return;
            }else{
                this.usuario.correo=this.personal.correo;
                // Verificación de que las contraseñas coinciden
                if (this.usuario.password !== this.confirmPassword) {
                    this.typemsg = "error";
                    this.mensaje = "Verifique la contraseña y su confirmación";
                    this.dialogError = true;
                    // Limpiando los campos de contraseña
                    this.usuario.password = '';
                    this.confirmPassword = '';
                    return;
                }else{
                    try {
                        
                        // Consultando existencia de usuario por su código
                        const response = await this.$axios.get("/usuarios/"+ this.usuario.IdPersonal);
                        console.log(response.data);
                        if (response.message==='User not found') {
                        this.mensaje = "El personal con Código: " + this.usuario.IdPersonal + " ya está registrado, no podemos asignarle otro usuario.";
                        this.typemsg = "error";
                        this.dialogError = true;
                        this.limpiar();
                        return;
                        
                        }else{
                            try {
                                // Obteniendo el valor del último id
                                const usersResponse = await this.$axios.get('/usuarios');
                                const usuarios = usersResponse.data;
                                let ultimoID = 0;
                                if (usuarios.length > 0) {
                                ultimoID = usuarios.sort((a, b) => b.id - a.id)[0].id;
                                }
                
                                // Asignando el siguiente ID
                                this.usuario.id = ultimoID + 1;
                
                                // Grabando usuario
                                const saveResponse = await this.$axios.post("/usuarios", this.usuario);
                                this.mensaje = "El registro ha sido completado con éxito";
                                this.typemsg = "success";
                                this.dialogExit = true;
                                this.limpiar();
                            } catch (error) {
                                console.error("Error al obtener los usuarios o al guardar el nuevo usuario:", error);
                                this.mensaje = "Error durante el registro del usuario.";
                                this.typemsg = "error";
                                this.dialogError = true;
                            }
                        }

                    } catch (error) {
                        console.error("Error al verificar la existencia del usuario:", error);
                    }
                }


            }

            

        
        },
        
        limpiar(){
            this.usuario.IdPersonal= "";
            this.usuario.password="";
            this.usuario.username="";
            this.dniP="";
            this.nombresP="";
            this.apellidosP="";
            this.confirmPassword="";
            this.categoriaP="";
        }

    },
}