<template>
    <div class='user'>
        <RadioGroup v-model="vertical" vertical>
            <Radio label="apple">
                <Icon type="person"></Icon>
                <span>用户</span>
            </Radio>
            <Radio label="android">
                <Icon type="person-stalker"></Icon>
                <span>用户组</span>
            </Radio>
            <Radio label="windows">
                <Icon type="home"></Icon>
                <span>用户部门</span>
            </Radio>
              <Radio label="origin">
                <Icon type="ios-flag"></Icon>
                <span>机构</span>
            </Radio>
        </RadioGroup>
    </div>
</template>

<script>
export default {
    name: 'user',
    data(){
        return{
           vertical: 'apple'
        }
    },
    computed: {
     
    },
    methods: {

    },
    created () {}
};
</script>

