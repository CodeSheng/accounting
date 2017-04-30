<template>
    <div class="home">
        <div class="header">
            <mt-header title='国电金融杯会计知识大赛' id="header"></mt-header>
        </div>
        <div class="content">
            <div v-model="selected">
                <div v-if="selected === '首页'" id="首页">
                    <h1>首页</h1>
                </div>
                <div  v-if="selected === '收藏'" id='收藏'>
                    <h1>收藏</h1>
                </div>
                <div v-if="selected === '错题'" id='错题'>
                    <h1>错题</h1>
                </div>
                <div v-if="selected === '我的'" id='我的'>
                    <h1>我的</h1>
                </div>
            </div>
    
            <div class="footer">
                <mt-tabbar v-model="selected">
                    <mt-tab-item id="首页">
                        <icon slot="icon" name="home"></icon>
                        首页
                    </mt-tab-item>
                    <mt-tab-item id="收藏">
                        <icon slot="icon" name="star"></icon>
                        收藏
                    </mt-tab-item>
                    <mt-tab-item id="错题">
                        <icon slot="icon" name="book"></icon>
                        错题
                    </mt-tab-item>
                    <mt-tab-item id="我的">
                        <icon slot="icon" name="user-circle-o"></icon>
                        我的
                    </mt-tab-item>
                </mt-tabbar>
            </div>
        </div>
    </div>
</template>

<script>
    // import Icon from 'vue-awesome/components/Icon'
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
    
    #header {
        font-size: 16px;
        height: 50px;
    }
</style>