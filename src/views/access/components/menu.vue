<template>
    <div class='menu'>
        <Tree :data="data4" show-checkbox multiple></Tree>
    </div>
</template>

<script>
export default {
    name: 'menu-permissions',
    data(){
        return{
           value:'',
            data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        disabled: true
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
                                        title: 'leaf 1-2-1',
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
        }
    },
    computed: {
     
    },
    methods: {

    },
    created () {}
};
</script>

