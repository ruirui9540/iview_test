<template>
    <div class="card">
         <div class="access-user-con access-change-access-con">
               <!-- <can-edit-table refs="table1" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table> -->
                <DragableTable 
                        ref='dragable'
                        v-model="editInlineData" 
                        :columns-list="editInlineColumns" 
                        @on-start="handleOnstart1" 
                        @on-end="handleOnend1" 
                        @on-add='addPerson'
                        @on-see='see'
                    ></DragableTable>
                    <Page :total="100" show-elevator size='small' class-name='page'></Page>
         </div>
        <Modal
        v-model="modal"
        title="Common Modal dialog box title"
        @on-ok="okAdd"
        @on-cancel="cancelAdd">
         <Transfer
        :data="data2"
        :target-keys="targetKeys2"
        filterable
        :filter-method="filterMethod"
        @on-change="handleChange2"></Transfer>
    </Modal>
    <Modal :width="900" v-model="showCurrentTableData" title="办公室" >
       <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table>
    </Modal>
    </div>
</template>

<script>
import canEditTable from '../../../tables/components/canEditTable.vue';
import tableData from '../../../tables/components/table_data.js';
import DragableTable from '../../../tables/components/dragableTable.vue';
import Sortable from 'sortablejs';
export default {
    name: 'tableEdit',
    components: {
        DragableTable,
        canEditTable
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
              modal:false,
              data2: this.getMockData(),
              targetKeys2: this.getTargetKeys(),//目标列索引集合，数组，每项为数据的 key 值，Transfer 会将含有这些 key 值的数据筛选到右边。
              showCurrentTableData:false,
               editInlineAndCellData: [],
               showCurrentColumns:[]
        }
    },
    computed: {
     
    },
    methods: {
       handleOnstart1 (from) {
            // this.table1.oldIndex = from;
            // this.table1.hasDragged = true;
            // this.table1.isDragging = true;
            console.log(from)
        },
        handleOnend1 (e) {
            // this.table1.isDragging = false;
            // this.table1.draggingRecord.unshift({
            //     from: e.from + 1,
            //     to: e.to + 1
            // });
        },
        getData () {
            this.editInlineAndCellData = tableData.editInlineAndCellData;
            this.showCurrentColumns = tableData.showCurrentColumns;
        },
         getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        // disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                // alert(newTargetKeys)//
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {//query是搜索框里面的值
                return data.label.indexOf(query) > -1;
            },
       addPerson(data,index){
           this.modal=true
       },
       okAdd(){},
       cancelAdd(){},
       see(data,index){
           this.showCurrentTableData = true;
       }


    },
    created () {
        this.getData();
    }
};
</script>
