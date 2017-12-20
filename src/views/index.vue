<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                    <router-link to="/music">/other</router-link>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                let scope = this;
                //this.
                this.$ajax.get('http://182.18.38.43:8086/netMusic//api/albumList?offset=0&order=hot')
                    .then((result)=>{
                        console.log(result);
                        this.$Modal.info({
                            title: 'Bravo',
                            content: 'Now, enjoy the convenience of iView.'
                        });
                        this.$router.push('music');
                    });
            }
        }
    }
</script>
