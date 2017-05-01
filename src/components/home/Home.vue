<template>
    <div class="home">
        <div class="header">
            <mu-appbar title='国电金融杯会计知识大赛' id="header" slot="right"></mu-appbar>
        </div>
        <div class="content">
            <div class="list">
                <router-link to="/read">
                    <mu-raised-button class="button btn1" label="要点背记" icon="description" primary/>
                </router-link>
                <mu-raised-button class="button btn2" label="单项练习" icon="question_answer" primary/>
                <mu-raised-button class="button btn3" label="模拟测试" icon="trending_up" primary/>
            </div>
        </div>
        <div class="navibar">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="recents" title="Recents" icon="restore"/>
                    <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite" />
                    <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on" />
                    <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on" />
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            bottomNav: 'recents'
        }
    },
    methods: {
        handleChange(val) {
            this.bottomNav = val
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


#header {
    font-size: 16px;
    height: 50px;
}

.navibar {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>