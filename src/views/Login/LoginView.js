import axios from 'axios';

export default {
    name: 'LoginView',
    data(){
        return{
            usuarios: [],
            username: "",
            password: "",
            mensaje: "",
            typemsg: "error",
            dialogError: false,
            dialogProce: false,
            showPassword: false,
            message:'',
        }
    },
    created(){
    this.obtenerUsuario();
    },
    methods:{
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        obtenerUsuario(){
            this.$axios.get("/usuarios").then((res)=>{this.usuarios=res.data}).catch((error)=>error)
        },
        async runETL() {
            try {
                await axios.get(`${process.env.VUE_APP_BOT_URL}/run_etl_process`).then((res)=>{this.message=res.data.message});
            } catch (error) {
                this.message = 'Error al ejecutar ETL';
            }
        },

        async iniciarSesion(){
            if(this.username==="" || this.password===""){
                this.mensaje= "Faltan completar los campos de inicio de Sesión, por favor completelos.";
                this.typemsg= "error";
                this.dialogError= true;
                return
            }
            try{
                const response= await this.$axios.post("usuarios/validar",{
                    username: this.username,
                    password: this.password,
                });
                if(response.data.message === 'Autenticación exitosa'){
                    this.mensaje='Ejecutando, el proceso de ETL, el periodo en que se esta procesando los datos es de 2009 a 2023, por favor esperar un momento'
                    this.dialogProce= true;

                    await this.runETL(); 
                    if(this.message==='Proceso ETL ejecutado exitosamente'){
                        this.mensaje='Proceso exitoso, se ha ejecutado correctamente el ETL en el periodo señalado';
                    }else{
                        this.mensaje='Error'
                    }
                    this.dialogProce= false;
                    const usuarioE= this.usuarios.find(usuario=> usuario.username===this.username && usuario.password===this.password);
                    localStorage.setItem('IdPersonal', usuarioE.IdPersonal);
                    this.irmenu()
                }
            }catch(error){
                if(error.response && error.response.status===401){
                    this.mensaje= "Credenciales incorrectas, por favor revise el usuario y contraseña ingresado"
                }else{
                    this.mensaje= "Error desconocido al iniciar sesión"
                }
                this.dialogError= true;
            }
        },
        irrecuperarCuenta(){
            this.$router.push("/RecuperarCuenta");
        },
        irmenu(){
            this.$router.push("/Menu");
        },
        cerrar(){
            this.mensaje="";
            this.username="";
            this.password="";
            this.dialogError= false;
        },
        irregistrar(){
            this.$router.push("/RegistrarPersonal");
        },
    },
};