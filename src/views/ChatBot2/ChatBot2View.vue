<template>
    <v-container class="chat2" v-show="visible">
        <v-container class="logou"></v-container>
        <v-card class="chatbot-message">
            <v-card-text>{{ message }}</v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'ChatBot2View',
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

<style src='../../views/ChatBot2/chatBot2.css'></style>