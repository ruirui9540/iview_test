<style lang="less" >
    @import '../../../styles/common.less';
    @import './user-management.less';
</style>

<template>
   <div style='height:100%'>
       <Row class='user-row'>
           <Col span="24">
           <Card>
                <p slot="title">
                    <Icon type="android-contact"></Icon>
                    用户管理
                </p>
                 <Row class='row1'>
                    <Col span="4" class='col3'>
                         <Tree :data="data"  @on-select-change="seclectChange" ref='tree'></Tree>
                    </Col>
                    <Col span='20' class="padding-left-20">
                         <div class='right'>
                              <Input v-model="value" icon="ios-search-strong" placeholder="检索"  style="width: 200px"></Input>
                                <Button type="primary">检索</Button>
                         </div>
                         <div class="access-user-con access-change-access-con">
                          <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                         </div>
                         <!-- 分页 -->
                         <Page :total="100" show-elevator size='small'></Page>
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
    export default {
         name: 'user-management',
          components: {
            canEditTable
        },
        data () {
            return {
                data1: [],
                editInlineData: tableData.editInlineData,
                editInlineColumns : tableData.editInlineColumns,
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
