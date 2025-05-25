<template >
    <v-container class="chat1" v-show="visible">
        <v-card class="chatbot-message">
            <v-card-text>{{ message }}</v-card-text>
        </v-card>
        <v-container class="logou"></v-container>
    </v-container>
</template>

<script>
    export default {
        name: 'ChatBot1View',
        props: {
            message: {
                type: String,
                required: true,
            },
            visible: {
                type: Boolean,
                required: true,
            },
        },
    };
</script>

<style src='../../views/ChatBot1/chatBot1.css'></style>