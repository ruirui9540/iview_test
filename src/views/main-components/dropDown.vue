<template>
    <div class='dropdown'>
     <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <ul>
                <li v-for="(item,index) in data" :key="index">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in data" :key="index">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in data" :key="index">{{item}}</li>
            </ul>
            <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
            </div>
        </DropdownMenu>
    </Dropdown>
    </div>
</template>

<script>
export default {
    name: 'dropDown',
    data(){
        return{
           visible: false,
           data:['服务1','服务2','服务3','服务4','服务5','服务6','服务7',]
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
