<template lang="html">
  <div id="organ">
	  <Row style='padding-bottom:110px;'>
		  <Col span="24">
        <div class='succ'>
          <p>关于组织管理页面的说明：</p>
          <p>组织管理页面将于2018年7月1日开始针对完善页面以及页面功能，具体完善方向以及如何完善就不告诉你们了</p>
        </div>
        <Card >
          <!-- <div class='ivu-card-head'> -->
              <p slot="title">
              <Icon type="android-contact"></Icon>
                菜单管理
            </p>
          <!-- </div> -->
          
           <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="plus-round"></Icon>
            添加
          </a>
          <zk-table
          ref="table"
          sum-text="sum"
          index-text="#"
          :data="data"
          @checkbox-click="checkboxClick"
          :columns="columns"
          :stripe=false 
          :border=true
          :show-header=true
          :show-summary=false
          :show-row-hover=true
          :show-index=false
          :tree-type=true
          :expand-type=false
          :selection-type=false>
          <template slot="likes" slot-scope="data">
            <Button class='primary' type="primary" size='small'  v-for="(item,index) in data.row.likes" @click="btn(item,data.row,data.rowIndex)"    :key="index">{{item.name}}</Button>
            <Modal
            v-model="modal1"
            title="添加"
            @on-ok="ok"
            @on-cancel="cancel">
            <Form :model="formLeft" label-position="left" :label-width="80">
              <FormItem label="部门名称">
                  <Input v-model="formLeft.name"></Input>
              </FormItem>
              <FormItem label="部门人数">
                  <Input v-model="formLeft.num"></Input>
              </FormItem>
              <FormItem label="等级">
                  <Input v-model="formLeft.score"></Input>
              </FormItem>
              <FormItem label="sum">
                  <Input v-model="formLeft.sum"></Input>
              </FormItem>
          </Form>
        </Modal>
          </template>
          </zk-table>
        </Card>
         <Modal
            v-model="modal2"
            title="添加"
            @on-ok="modalOk"
            @on-cancel="cancel">
            <Form :model="formLeft" label-position="left" :label-width="80">
              <FormItem label="部门名称">
                  <Input v-model="formLeft.name"></Input>
              </FormItem>
              <FormItem label="部门人数">
                  <Input v-model="formLeft.num"></Input>
              </FormItem>
              <FormItem label="等级">
                  <Input v-model="formLeft.score"></Input>
              </FormItem>
              <FormItem label="sum">
                  <Input v-model="formLeft.sum"></Input>
              </FormItem>
          </Form>
        </Modal>
		  </Col>
	  </Row>
    
  </div>
</template>

<script>
import util from '@/libs/util.js';
import Vue from 'vue';
  export default {
    name: 'menu-management',
    components: {},
    data() {
      return {
         formLeft: {
                    id:Math.random()*100+20,
                    name: '',
                    num: '',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: '',
                    sum:'',
                },
        modal1: false,
        modal2: false,
        data: [
          {
            id:1,
            name: '组织',
            num: 'male',
            likes: [{name:'添加',id:0}, {name:'删除',id:1}],
            score: 10,
            sum:20,
            children: [
              {
                id:2,
                name: 'Ashley',
                num: 'female',
                likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                score: 20,
                sum:20,
                children: [
                  {
                    id:3,
                    name: 'Ashley',
                    num: 'female',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: 20,
                    sum:20,
                  },
                  {
                    id:4,
                    name: 'Taki',
                    num: 'male',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: 10,
                    sum:20,
                    children: [
                      {
                        id:5,
                        name: 'Ashley',
                        num: 'female',
                        likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                        score: 20,
                        sum:20,
                      },
                      {
                        id:6,
                        name: 'Taki',
                        num: 'male',
                        likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                        score: 10,
                        sum:20,
                        children: [
                          {
                            id:7,
                            name: 'Ashley',
                            num: 'female',
                            likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                            score: 20,
                            sum:20,
                          },
                          {
                            id:8,
                            name: 'Taki',
                            num: 'male',
                            likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                            score: 10,
                            sum:20,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id:9,
                name: 'Taki',
                num: 'male',
                likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                score: 10,
                sum:20,
              },
            ],
          },
          {
            id:10,
            name: 'Tom1',
            num: 'male',
            likes: [{name:'添加',id:0}, {name:'删除',id:1}],
            score: 20,
            sum:20,
            children: [
              {
                id:11,
                name: 'Ashley',
                num: 'female',
                likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                score: 20,
                sum:20,
                children: [
                  {
                    id:12,
                    name: 'Ashley',
                    num: 'female',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: 20,
                    sum:20,
                  },
                  {
                    id:13,
                    name: 'Taki',
                    num: 'male',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: 10,
                    sum:20,
                  },
                ],
              },
              {
                id:14,
                name: 'Taki',
                num: 'male',
                likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                score: 10,
                sum:20,
                children: [
                  {
                    id:15,
                    name: 'Ashley',
                    num: 'female',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: 20,
                    sum:20,
                  },
                  {
                    id:16,
                    name: 'Taki',
                    num: 'male',
                    likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                    score: 10,
                    sum:20,
                  },
                ],
              },
            ],
          },
          {
            id:17,
            name: 'Tom2',
            num: 'male',
            likes: [{name:'添加',id:0}, {name:'删除',id:1}],
            score: 20,
            sum:20,
          },
          {
            id:18,
            name: 'Tom3',
            num: 'male',
            likes: [{name:'添加',id:0}, {name:'删除',id:1}],
            score: 20,
            sum:20,
            children: [
              {
                id:19,
                name: 'Ashley',
                num: 'female',
                likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                score: 20,
                sum:20,
              },
              {
                id:20,
                name: 'Taki',
                num: 'male',
                likes: [{name:'添加',id:0}, {name:'删除',id:1}],
                score: 10,
                sum:20,
              },
            ],
          },
        ],
        columns: [
          {
            label: '名称',
            prop: 'name',
            width: '200px',
          },
          {
            label: '简称',
            prop: 'num',
            minWidth: '50px',
          },
          {
            label: '链接',
            prop: 'sum',
            minWidth: '50px',
          },
          {
            label: '启用',
            prop: 'score',
          },
          {
            label: '操作',
            prop: 'likes',
            minWidth: '200px',
            type: 'template',
            template: 'likes',
          },
        ],
      };
    },
    computed: {
      // propList() {
      //   return Object.keys(this.props).map(item => ({
      //     name: item,
      //   }));
      // },
    },
    mounted(){
      var id=localStorage.oriId
      console.log(id)
     util.restore(Vue,this.data,id)
    },
    methods: {
      btn(item,row,index){
        // console.log(row)
        this.row=row
        var id=row.id;
        var that=this;
        localStorage.setItem('oriId',id)
        if(item.name=='添加'){
          that.modal1 = true
        }else{
          this.getArray(this.data, id,[],row._normalIndex)
          that.$Message.info('删除成功');
        } 
      },
      getArray ( data, id,children,index){
        var state;
        if (data instanceof Array) {
            for (let i in data) {
                if (data[i].id === id) {
                    this.$set(data[i], 'children', children);
                    this.$set(data[i], '_isFold', false);
                    if(index){
                       data.splice(i,1)
                    }
                    return true;
                } else {
                    if ((data[i].children !== undefined) && (data[i].children instanceof Array)) {
                        state = this.getArray(data[i].children, id,children,index);
                          if (state) {
                        var children=data[i].children
                        console.log(children)
                         for(var j in children){
                             children[j]._isHide=false
                           }
                        return true;
                    }
                    }
                }
            }
        }
        return false;
    },
       ok () {
         var children=this.row.children||[]
         children.push(this.formLeft)
           var id=this.row.id;
           for(var i in children){
             children[i]._isHide=false
           }
           console.log(children)
            this.getArray(this.data,id,children)
                this.formLeft= {}//清空model
              this.$Message.info('添加成功');
            },
            cancel () {
              this.$Message.info('取消成功');
            },
            //添加同一级别的
            changeLimit(){
          this.modal2 = true
            },
            modalOk(){
              this.data.push(this.formLeft)
               this.formLeft= {}//清空model  
            },
            checkboxClick(row, rowIndex, $event){
              console.log(row)
              console.log(rowIndex)
              console.log($event)
            }
            
      
    },
  };
</script>

<style scoped lang="less">
  .switch-list {
    margin: 20px 0;
    list-style: none;
    overflow: hidden;
  }
  .switch-item {
    margin: 20px;
    float: left;
  }
  .primary{
    margin-right: 5px;
  }
  #organ{
    background: #fff;

  }
  .succ{
        color: #090;
    background-color: #F2FFEA;
    border-color: #C7DDB9;
        padding: 6px 12px;
    line-height: 18px;
    margin-bottom: 6px;
    border-radius: 0px;
    width: 98%;
    margin-left: 1%;
        margin-top: 16px !important;
  }
  .ivu-card:hover {
     box-shadow:none; 
     border-color: #000000 none; 
}

.ivu-card-bordered {
     border: none; 
    border-color: #e9eaec;
}
</style>