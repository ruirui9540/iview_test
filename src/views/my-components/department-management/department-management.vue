<template>
       <div style='height:100%' class='depart'>
       <Row class='depart-row'>
           <Col :span="iconBtn?'0':'4'" class='col1 background'>
                <div class='backTop'>部门管理</div>
                <Tree :data="data"  @on-select-change="seclectChange" ref='tree'></Tree>
            </Col>
           <Col :span="iconBtn?'24':'20'" class='col2'>
                <div :class=" iconBtn?'navicon1':'navicon'" @click="toggleClick">
                        <!-- <Icon type="android-arrow-forward" size=16></Icon> -->
                        <Icon type="android-arrow-back" size=16 :style="{transform: 'rotateZ(' + (this.iconBtn ? '-180' : '0') + 'deg)'}" ></Icon>
                </div>
                 <Row class='row1'>
                    <Col span='24' class="margin-left-20 white">
                       <tableEdit :editInlineData='editInlineData' :editInlineColumns='editInlineColumns'></tableEdit>
                    </Col>
                </Row>
            </Col>
        </Row>
   </div>
</template>
<script>
import canEditTable from '../../tables/components/canEditTable.vue';
import tableData from '../../tables/components/table_data.js';
import util from '@/libs/util.js';
import Vue from 'vue';
import tableEdit from './rightCon/tableEdit.vue'
export default {
    name: 'department-management',
    components: {
        canEditTable,
        tableEdit
    },
    data () {
        return {
            data1: [{
                        title: '部门管理',
                        expand: true,
                        selected:true,
                        children: []}],
            editInlineData: tableData.editInlineData,
            editInlineColumns : tableData.editInlineColumns,
            iconBtn:false,
            data: [
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
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ],
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
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
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
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                    ]
        }
    },
          methods:{
            seclectChange(data){
                if(data.length!==0){
                    var ele = data[data.length-1] //当前选中的树节点 点名字展开
                    ele.expand = true //设置为展开
                    localStorage.setItem('idDepart',ele.id)
                console.log(ele.children)
                if(ele.children==undefined){
                    console.log(0)
                }
                }
                
                
            },
            getSiteInfo(params){
                //调用接口，本周接口不能用，会报错，暂时注释掉
                // this.$api.getSiteInfo(params).then((res) => {
                //     if(res.status===200){
                //         if(res.data.error===0){
                //             this.data1[0].children=res.data.result 
                //         }
                //     }
                // }).catch((r)=>{
                //    util.errorStatus(this,r)
                // })
            },
             toggleClick () {
                this.iconBtn = !this.iconBtn;
            },
        },
        mounted(){
            var params=''
            console.log(localStorage.idDepart)
            if(localStorage.idDepart!='undefined') {
                var id=localStorage.idDepart;
                 params= '?last_id='+id;
                 this.data1[0].selected=false    
                }else{
                 this.data1[0].selected=true
                }
              this.getSiteInfo(params)   
        }
};
</script>
<style lang="less" scope>
    @import '../../../styles/common.less';
    // @import '../user-management/user-management.less';
    .depart .ivu-tree {
    overflow-y: scroll;
    padding-bottom: 110px;
    height: 100%;
}
.depart .col1 {
    background-color: #EAEDF1;
    height: 100%;
    overflow-y: hidden;
}
.depart-row {
    height: 99%;
    .col2{
        height: 100%;
        overflow-y: scroll;
    }
}
.main .single-page-con{
    overflow-y: hidden
}
</style>

