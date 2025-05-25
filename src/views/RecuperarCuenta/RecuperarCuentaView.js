export default {
    name: 'RecuperarCuentaView',
    data(){
        return{
            typemsg:"error",
            correo: "",
            dialogError: false,
            dialogCorrect: false,
            usuarios:[],
        }
    },
    created(){
      this.obtenerDatos();
    },
    methods:{
        irlogin(){
            this.$router.push("/");
        },

        obtenerDatos(){
          
        this.$axios.get("/usuarios").then((res)=>{this.usuarios=res.data}).catch((error)=>error);
        },

        async enviarCodigo() {

        const emailPattern = /^(.+)@(gmail\.com|ucvvirtual\.edu\.pe)$/;
        // Verifica si la dirección de correo electrónico coincide con el patrón
        if (!emailPattern.test(this.correo)) {
        this.mensaje = "La dirección de correo electrónico debe ser de tipo '@gmail.com' o '@ucvvirtual.edu.pe'";
        this.typemsg = "error";
        this.dialogError = true;
        return;
        }
        //Verificar correo valido dentro de base de datos 
        const usuarioE= this.usuarios.find(usuario=> usuario.correo===this.correo);
        if(!usuarioE){
          this.mensaje = "La dirección de correo electrónico no esta vinculada a ningun usuario, no esta registrado en base de datos";
          this.typemsg = "error";
          this.dialogError = true;
          return
        }else{
          localStorage.setItem('IdPersonal',usuarioE.IdPersonal);
          localStorage.setItem('username',usuarioE.username);
          console.log(usuarioE.IdPersonal)
        }
        try {
            const response = await this.$axios.post("/email/enviarCorreo", { email: this.correo });
            this.mensaje="El codigo de verificacion ha sido enviado correctamente al correo de verificación: " + this.correo;
            this.typemsg="success"
            this.correo= "";
            this.dialogCorrect=true;
        
        } catch (error) {
            this.mensaje="Error al enviar el correo de verificación";
            console.log(error)
            this.dialogError=true;
        }
        },
        
        cerrar(){
            this.mensaje="";
            this.correo="";
            this.dialogError= false;
        },

        verificar(){
            this.mensaje="";
            this.correo="";
            this.dialogCorrect= false;
            this.$router.push("/ValidarCodigo");
        }
     },
}