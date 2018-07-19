<style lang="less" >
    @import '../../../styles/common.less';
    @import './user-management.less';
</style>

<template>
   <div style='height:100%'>
       <Row class='user-row'>
           <Col span="24">
           <Card>
                 <Row class='row1'>
                    <Col span="4" class='col3'>
                         <Tree :data="data"  @on-select-change="seclectChange" ref='tree'></Tree>
                    </Col>
                    <Col span='20' class="padding-left-20">
                         <div class="access-user-con access-change-access-con">
                              <tableEdit :editInlineData='editInlineData' :editInlineColumns='editInlineColumns'></tableEdit>
                         </div>
                         
                    </Col>
                </Row>
           </Card>
               
            </Col>
        </Row>
   </div>
  
</template>
<script>
import canEditTable from '../../tables/components/canEditTable.vue';
import tableData from '../../tables/components/table_data.js';
import util from '@/libs/util.js';
import Vue from 'vue';
import tableEdit from '../department-management/rightCon/tableEdit.vue'
    export default {
         name: 'user-management',
          components: {
            canEditTable,
            tableEdit
        },
        data () {
            return {
                data1: [],
                editInlineData: tableData.userData,
                editInlineColumns : tableData.useColumns,
                idstr:'',
                value:"",
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
                    this.idstr=ele.id
                    localStorage.setItem('idstr',ele.id)
                }
            },
            //接口请求，暂时注释
            // getSiteInfo(params){
            //     this.$api.getSiteInfo(params).then((res) => {
            //         if(res.status===200){
            //             if(res.data.error===0){
            //                 this.data1=res.data.result 
            //             }
            //         }
            //     }).catch((r)=>{
            //        util.errorStatus(this,r)
            //     })
            // }
        },
        mounted(){
            var params=''
            if(localStorage.idstr) {
                var id=localStorage.idstr;
                 params= '?last_id='+id      
                }
            //   this.getSiteInfo(params)   //接口请求，暂时注释
        }
    }
</script>
