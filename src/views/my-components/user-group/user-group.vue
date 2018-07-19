<template>
      <div style='height:100%'>
        <Button type="primary" @click="modal1 = true">用户选择</Button>
    <Modal
        v-model="modal1"
        title="用户选择"
        @on-ok="ok"
        @on-cancel="cancel">
        <Row class='user-row'>
           <Col span='8' class='user'>
              <div class='backTop'>机构组织</div>
                <Tree :data="data1"   ref='tree'></Tree>
           </Col>
            <Col span='16' class='user-right'>
                <div>
                    <div class='top-title'>部门用户<span>(双击选择用户)</span></div>
                    <div class='top-content'>
                        <div v-for="(item,index) in data" v-on:dblclick='addSelect(item,index)' :key="index">{{item.name}}</div>
                    </div>
                </div>
                <div>
                    <div class='top-title'>已选用户
                        <Icon type="android-arrow-up"></Icon><Icon type="android-arrow-down"></Icon>
                    </div>
                    <div class='top-content' >
                        <div v-for="(item,index) in selectData" v-on:dblclick='delSelect(item,index)' :key="index">{{item.name}}</div>
                    </div>
                </div>
           </Col>
        </Row>
    </Modal>

      
   </div>
</template>
<script>
export default {
    name: 'user-group',
    components: {
    },
    data () {
        return {
            modal1:false,
            selectData:[],
         data:[{name:'小张'},{name:'小李'},{name:'小赵'},{name:'小钱'},{name:'小孙'},{name:'小吴'}],
         data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            },
                            
                        ]
                    }
                ]
        };
    },
    methods: {
        addSelect(item,index){
            this.selectData.push(item)
            this.data.splice(index,1)
        },
        delSelect(item,index){
            this.data.push(item)
            this.selectData.splice(index,1)
        },
        ok(){},
        cancel(){}
    },
    mounted(){
       
    }
};
</script>
<style lang="less" scoped>
.ivu-modal{
    width: 700px!important;
}
.user-row{
    background-color: #fff;
    width: 100%;
    height: 100%;
    min-width:240px;
    box-sizing: border-box;
        .ivu-tree {
        overflow-y: auto;
        // padding-bottom: 110px;
        height: 308px;
    }
        .user {
        background-color: #EAEDF1;
        height: 100%;
        overflow-y: hidden;
    }
    .user-right{
        padding:2px 16px;
    }
    .user-right>div:last-child{
        margin-top: 15px;
        
    }
    .top-title{
        font-size: 14px;
        font-weight: bold;
        span{
            color: #999;
            font-weight: normal;
            font-size: 13px;
        }
        i{
            margin-left:15px;
        }
    }
    .top-content{
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 8px;
        height:150px;
        overflow-y: auto;
            div{
                cursor: pointer;
                padding: 2px;
            }
            div:hover{
                background-color: #ebf7ff;
            }
    }
}

</style>

