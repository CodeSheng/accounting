<template>
    <div class="home">
        <div class="header">
            <mt-header title='国电金融杯会计知识大赛' id="header"></mt-header>
        </div>
        <div class="content">
            <div class="list">
                <router-link to="/read">
                    <mt-button type="primary" class="button btn1">
                        <icon slot="icon" name="file-text-o" scale='1.5'></icon>要点背记</mt-button>
                </router-link>
                <mt-button type="primary" class="button btn2">
                    <icon slot="icon" name="pencil-square-o" scale='1.5'></icon>单项练习</mt-button>
    
                <mt-button type="danger" class="button btn3">
                    <icon slot="icon" name="line-chart" scale='1.5'></icon>模拟测试</mt-button>
    
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                selected: '首页'
            }
    
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        display: block;
        height: 20%;
    }
    
    .list {
        margin-top: 5px;
        display: block;
    }
    
    .button {
        width: 80%;
        margin: 0 auto;
        display: block;
        font-size: 24px;
        padding: 0 12px;
        height: 53px;
        margin-top: 100px;
    }
    
    .btn1 {
        background: #ffa726;
    }
    
    .btn2 {
        background: #738ffe;
    }
    
    .btn3 {
        background: #ff7043;
    }
    
    #header {
        font-size: 16px;
        height: 50px;
    }
</style>