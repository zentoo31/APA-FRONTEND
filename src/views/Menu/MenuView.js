import Splide from '@splidejs/splide';

export default {
    name: 'MenuView',
    data() {
    return {
        images: [
            require('../../components/img/A.png'),
            require('../../components/img/B.png'),
            require('../../components/img/C.png'),
            require('../../components/img/D.png'),
            require('../../components/img/A.png'),
            require('../../components/img/B.png'),
            require('../../components/img/C.png'),
            require('../../components/img/D.png'),
            require('../../components/img/A.png'),
            require('../../components/img/B.png'),
            require('../../components/img/C.png'),
            require('../../components/img/D.png'),
            require('../../components/img/A.png'),
            require('../../components/img/B.png'),
            require('../../components/img/C.png'),
            require('../../components/img/D.png'),
            require('../../components/img/A.png'),
            require('../../components/img/B.png'),
            require('../../components/img/C.png'),
            require('../../components/img/D.png'),
        ],
        expandedImage: null,
    };
    },
    mounted() {
        var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        pagination : false,
        arrows: false,
        });
        splide.mount();
    },
    methods: {
        irlogin() {
            this.$router.push("/");
        },
        irReporteGeneral() {
            this.$router.push("/ReporteGeneral");
        },
        irReportePersonalizado() {
            this.$router.push("/ReportePersonalizado");
        },
        irInfoEstudiante() {
            this.$router.push("/InfoEstudiante");
        },
        expandImage(index) {
            this.expandedImage = index;
        },
        collapseImage() {
            this.expandedImage = null;
        },
        irGmail(){
            window.open('https://mail.google.com/', '_blank');
        },
        irDrive(){
            window.open('https://drive.google.com/', '_blank');
        },
        irMyloft(){
            window.open('https://app.myloft.xyz/', '_blank');
        },
        irTrilce(){
            window.open('https://trilce.ucv.edu.pe/', '_blank');
        },
        irBlackboard(){
            window.open('https://ucv.blackboard.com/', '_blank');
        },
        irClementina(){
            window.open('https://uvcv.edu.pe/', '_blank');
        },
    },
};