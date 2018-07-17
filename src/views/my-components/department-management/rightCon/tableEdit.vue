<template>
    <div class=''>
        <Card>
             <p slot="title">
               <Icon type="android-contact"></Icon>
              部门管理
             </p>
            <div class="access-user-con access-change-access-con">
               <can-edit-table refs="table1" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
             </div>
        </Card>
    </div>
</template>

<script>
import canEditTable from '../../../tables/components/canEditTable.vue';
export default {
    name: 'tableEdit',
    components: {
        canEditTable,
    },
    props: {
        editInlineData: {
            type: Array,
            default: false
        },
         editInlineColumns: {
            type: Array,
            default: false
        },
    },
    data(){
        return{
          
        }
    },
    computed: {
     
    },
    methods: {
     
    },
    created () {}
};
</script>
