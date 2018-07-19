<template>
    <div class='dropdown'>
     <!-- <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div class='seach'>
                <input type="text" placeholder='请输入关键字' v-model='value' class='inp'>
                <Icon type="android-search" size='25' class='sea_icon'></Icon>
            </div>
            <div class='content'>
                <div v-for="(data1,index) in data" :key="index">
                    <dl v-for="(data2,index) in data1.dd" :key='index'>
                    <dt>{{data2.title}}</dt>
                  <dd v-for="(item,index) in data2.name" :key="index">{{item}}</dd>
                </dl>
                </div>
            </div>
            <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
            </div>
        </DropdownMenu>
    </Dropdown> -->

        <div >
            <p>常用于各种自定义下拉内容的场景。</p>
            <div class='seach'>
                <input type="text" placeholder='请输入关键字' v-model='value' class='inp'>
                <Icon type="android-search" size='25' class='sea_icon'></Icon>
            </div>
            <div class='content'>
                <div v-for="(data1,index) in data" :key="index">
                    <dl v-for="(data2,index) in data1.dd" :key='index'>
                    <dt>{{data2.title}}</dt>
                  <dd v-for="(item,index) in data2.name" :key="index">{{item}}</dd>
                </dl>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'dropDown',
    data(){
        return{
           visible: false,
           data:[
               {dd:[{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7'],title:'第一个'},{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7'],title:'第一个'}]},
               {dd:[{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7',],title:'第2个'}]},
                 {dd:[{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7',],title:'第3个'}]},
                 {dd:[{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7',],title:'第4个'}]},
                 {dd:[{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7',],title:'第5个'}]},
                 {dd:[{name:['服务1','服务2','服务3','服务4','服务5','服务6','服务7',],title:'第6个'}]},
           ],
           value:''
        }
    },
    computed: {
     
    },
    methods: {
         handleOpen () {
                this.visible = !this.visible;
            },
            handleClose () {
                this.visible = false;
            }
    },
    created () {}
};
</script>
<style scope lang='less'>
   .dropdown{
                width: 100%;
                font-size: 14px;
                position: absolute;
                top: 60px;
                z-index: 999999999;
                background-color: #fff;
                padding: 24px 16px;

                a{
                    color: #495060;
                    transition: color .2s ease-in-out;
                    font-size: 14px;
                }
                .content{
                    width: 100%;
                    display: flex
                }
                 .content>div{
                    flex:1;
                    display: inline-block;
                    margin-right:1%;
                    dl{
                    margin-bottom: 8px;
                        dt{
                            line-height: 28px;
                            color: #999;
                            background-color: #f0f0f0;
                            padding: 0 8px;
                            font-weight: 400;
                        }
                        dd{
                            display: block;
                            padding: 0 8px;
                            line-height: 28px;
                            height: 28px;
                            background: #f5f5f6;
                            color: #373d41;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            letter-spacing: .02em;
                            font-size: 12px;
                        }
                    }
                }
                .content>div:last-child{
                    margin-right: 0
                }
                .ivu-select-dropdown{
                    top:56px!important;
                    min-height: 240px;
                    background: #fff;
                    -webkit-transition: all .15s,.15s;
                    transition: all .15s,.15s;
                    // -webkit-box-shadow: 0 0 10px rgba(0,0,0,.1);
                    // box-shadow: 0 0 10px rgba(0,0,0,.1);
                    min-width: 600px;

                }
                .seach{
                    width: 600px;
                    margin: 20px auto ;
                    position: relative;
                }
                .inp{
                    width: 90%;
                    padding-left: 10px;
                    padding-right: 28px;
                    padding-bottom: 7px;
                    border: none;
                    font-size: 18px;
                    opacity: .3;
                    color: #666;
                    border-bottom: 2px solid #e3e6e9;
                    background-color: transparent;
                }
                .sea_icon{
                    position: absolute;
                    right:56px;
                    top: 3px;
                }
                
            }
</style>

