<template>
    <div class="home">
        <div class="header">
            <mu-appbar title='要点背记' id="header" slot="right">
                <mu-icon-button icon="menu" slot="left" />
            </mu-appbar>
        </div>
        <div class="content">
            <mu-paper :zDepth="2">
                <mu-card>
                    <mu-card-title title="content"/>
                    <mu-card-text >
                    </mu-card-text>
                </mu-card>
            </mu-paper>
        </div>
        <div class="navibar">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="home" title="首页" icon="home" />
                    <mu-bottom-nav-item value="favorites" title="收藏" icon="grade" />
                    <mu-bottom-nav-item value="wrong" title="错题" icon="book" />
                    <mu-bottom-nav-item value="me" title="我" icon="account_circle" />
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
            bottomNav: 'home',
            content: {
            }
        }
    },
    created() {
        // GET /someUrl
        this.$http.get('/api/read').then(response => {

            // get body data
            response = response.body
            if (response.errno === 0) {
                this.content = Object.assign({}, this.content, response.data);
            }

        }, response => {
            // error callback
        });
    },
    methods: {
        handleChange(val) {
            this.bottomNav = val
        }
    },

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