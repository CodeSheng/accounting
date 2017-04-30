<template>
    <div class="startup">
        <div class="avatar">
            <img src="./img01.png" id="image">
        </div>
        <div class="message">
            <p align="center">劳资非要拿下调考</p>
        </div>
        <div class="button">
            <router-link to="/home">
                <mt-button type="default" class="start"> 开始学习
                </mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'startup',
        methods: {
            jump() {
                alert("It is working.")
            }
        }
    }
</script>

<style scoped>
    .startup {
        background-color: #ED6247;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    
    .avatar {
        width: 375px;
        margin-left: auto;
        margin-right: auto;
    }
    
    #image {
        margin-top: 115px;
        width: 375px;
        height: 276px;
    }
    
    .message {
        margin-top: 60px;
        font-size: 24px;
        color: #fff;
        margin-left: auto;
        margin-right: auto;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .button {
        margin-top: 60px;
    }
    
    .start {
        display: block;
        width: 200px;
        margin: 0 auto;
    }
    
</style>