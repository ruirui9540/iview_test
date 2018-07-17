<template>
      <div style='height:100%'>
       <Row class='user-row'>
           <Col span="4">
                <Card>
                    <p slot="title">
                        <Icon type="android-contact"></Icon>
                        站点管理
                    </p>
                      
                </Card>
            </Col>
            <Col span="20" class="padding-left-10">
                <Card>
                    <p slot="title">
                        <Icon type="android-contacts"></Icon>
                        站点信息
                    </p>
                    <div class="access-user-con access-change-access-con">
                        
                    </div>
                </Card>
            </Col>
        </Row>
   </div>
</template>
<script>
export default {
    name: 'site-management',
    components: {
    },
    data () {
        return {
         
        };
    },
    methods: {
        
    }
};
</script>
<style lang="less" scoped>
.split-pane-con{
    width: 100%;
    height: 89vh;
}
.custom-trigger{
    position: absolute;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .1) , 2px 2px 10px 2px rgba(0, 0, 0, .2) inset;
    border: 1px solid #c3c3c3;
    cursor: pointer;
}
.introduce-left-con h4{
    margin-bottom: 20px;
}
.introduce-left-con h5{
    margin-bottom: 10px;
    margin-left: 20px;
}
.split-pane-right-con{
    padding: 30px;
}
.split-pane-right-con p{
    font-size: 26px;
    font-weight: 700;
    color: white;
}
</style>

