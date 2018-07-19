<style lang="less">
    @import './editable-table.less';
</style>
<template>
    <div>
          <div class='tableTop'>
                <div>
                    <Button type="primary"  @click="exportData"><Icon type="ios-download-outline"></Icon> 导出</Button>
                    <Dropdown trigger="click"  placement='right-start'  @on-click="dropdown">
                        <a href="javascript:void(0)" >
                           <Button><Icon type="ios-gear-outline" size='18'></Icon></Button>
                        </a>
                        <DropdownMenu slot="list" >
                             <DropdownItem name='exportImage'>导出表格为图片</DropdownItem>
                            <DropdownItem name='true' >全选</DropdownItem>
                            <DropdownItem name='false'>取消全选</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                </div>
                <div class='right'>
                    <Input v-model="searchConName" placeholder="请输入姓名搜搜..." style="width: 200px" />
                        <span @click="handleSearch" style="margin: 0 10px;"><Button type="primary"  icon="search">搜索</Button></span>
                </div>
            </div>
        <Table 
            ref="dragable" 
            :columns="columnsList" 
            :data="thisTableData" 
            highlight-row 
            border
            stripe
            size="small"
        ></Table>
    </div>
</template>

<script>
import Sortable from 'sortablejs';
import html2canvas from 'html2canvas';
const editButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            // type: currentRow.editting ? 'success' : 'primary',
            type:'text',
            loading: currentRow.saving,
            size:'small'
        },
        style: {
            margin: '0 5px',
                color:'#2d8cf0'
        },
        on: {
            'click': () => {
                console.log(currentRow.edittingCell)
                if (!currentRow.editting) {//false
                    if (currentRow.edittingCell) {//是否可编辑
                        for (let name in currentRow.edittingCell) {
                            currentRow.edittingCell[name] = false;
                            vm.edittingStore[index].edittingCell[name] = false;
                        }
                    }
                    vm.edittingStore[index].editting = true;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                } else {
                    vm.edittingStore[index].saving = true;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                    let edittingRow = vm.edittingStore[index];
                    edittingRow.editting = false;
                    edittingRow.saving = false;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                    vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                    vm.$emit('on-change', vm.handleBackdata(vm.thisTableData), index);
                }
            }
        }
    }, currentRow.editting ? '保存' : '编辑');
};
const deleteButton = (vm, h, currentRow, index) => {
    return h('Poptip', {
        props: {
            confirm: true,
            title: '您确定要删除这条数据吗?',
            transfer: true
        },
        on: {
            'on-ok': () => {
                //删除函数
                console.log(index)
                vm.thisTableData.splice(index, 1);
                vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                vm.$emit('on-delete', vm.handleBackdata(vm.thisTableData), index);
            }
        }
    }, [
        h('Button', {
            style: {
                margin: '0 5px',
                color:'#2d8cf0'
            },
            props: {
                // type: 'error',
                type:'text',
                placement: 'top',
                size:'small'
            }
        }, '删除')
    ]);
};
const incellEditBtn = (vm, h, param) => {
    if (vm.hoverShow) {
        return h('div', {
            'class': {
                'show-edit-btn': vm.hoverShow
            }
        }, [
            h('Button', {
                props: {
                    type: 'text',
                    icon: 'edit'
                },
                on: {
                    click: (event) => {
                        vm.edittingStore[param.index].edittingCell[param.column.key] = true;
                        vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                    }
                }
            })
        ]);
    } else {
        return h('Button', {
            props: {
                type: 'text',
                icon: 'edit'
            },
            on: {
                click: (event) => {
                    vm.edittingStore[param.index].edittingCell[param.column.key] = true;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                }
            }
        });
    }
};
const saveIncellEditBtn = (vm, h, param) => {
    return h('Button', {
        props: {
            type: 'text',
            icon: 'checkmark'
        },
        on: {
            click: (event) => {
                vm.edittingStore[param.index].edittingCell[param.column.key] = false;
                vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                vm.$emit('on-cell-change', vm.handleBackdata(vm.thisTableData), param.index, param.column.key);
            }
        }
    });
};
const cellInput = (vm, h, param, item) => {
    return h('Input', {
        props: {
            type: 'text',
            value: vm.edittingStore[param.index][item.key]
        },
        on: {
            'on-change' (event) {
                let key = item.key;
                vm.edittingStore[param.index][key] = event.target.value;
            }
        }
    });
};
const enable=(vm,h,param,item)=>{
       return h('Button', {
        props: {
            type: 'text',
            icon: 'checkmark'
        },
        on: {
            click: (event) => {
                alert(1)
                //  this.show(params.index)
            }
        }
    });
}
const add=(vm,h,param,item)=>{
       return h('Button', {
        props: {
            type: 'text',
            icon: 'android-person-add'
        },
        on: {
            click: (event) => {
                // 添加部门用户<Icon type=""></Icon>
                vm.addPerson()
                vm.$emit('on-add', vm.addPerson(param), item) 
            }
        }
    });
}
const see=(vm,h,param,item)=>{
       return h('div', {
        props: {
            type: 'text',
            // icon: 'android-person-add'
        },
        style: {
                margin: '0 5px',
                color:'#2d8cf0',
                cursor:'pointer'
            },
        on: {
            click: (event) => {
               vm.$emit('on-see',vm.see(param),item)
            }
        }
    },'查看');
}
export default {
    name: 'DragableTable',
    props: {
        refs: String,
        columnsList: Array,
        value: Array,
        url: String,
        editIncell: {
            type: Boolean,
            default: false
        },
        hoverShow: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            columns: [],
            thisTableData: [],
            edittingStore: [],
            searchConName:'',
        };
    },
    methods: {
        startFunc (e) {
            this.$emit('on-start', e.oldIndex);
        },
        endFunc (e) {
            let movedRow = this.value[e.oldIndex];
            this.value.splice(e.oldIndex, 1);
            this.value.splice(e.newIndex, 0, movedRow);
            this.$emit('on-end', {
                value: this.value,
                from: e.oldIndex,
                to: e.newIndex
            });
        },
        chooseFunc (e) {
            this.$emit('on-choose', e.oldIndex);
        },
        init () {
            let vm = this;
            let editableCell = this.columnsList.filter(item => {
                if (item.editable) {
                    if (item.editable === true) {
                        return item;
                    }
                }
            });
            let cloneData = JSON.parse(JSON.stringify(this.value));
            let res = [];
            res = cloneData.map((item, index) => {
                let isEditting = false;
                if (this.thisTableData[index]) {
                    if (this.thisTableData[index].editting) {
                        isEditting = true;
                    } else {
                        for (const cell in this.thisTableData[index].edittingCell) {
                            if (this.thisTableData[index].edittingCell[cell] === true) {
                                isEditting = true;
                            }
                        }
                    }
                }
                if (isEditting) {
                    return this.thisTableData[index];
                } else {
                    this.$set(item, 'editting', false);
                    let edittingCell = {};
                    editableCell.forEach(item => {
                        edittingCell[item.key] = false;
                    });
                    this.$set(item, 'edittingCell', edittingCell);
                    return item;
                }
            });
            this.thisTableData = res;
            this.edittingStore = JSON.parse(JSON.stringify(this.thisTableData));
            this.columnsList.forEach(item => {
                if (item.editable) {
                    item.render = (h, param) => {
                        let currentRow = this.thisTableData[param.index];
                        if (!currentRow.editting) {
                            if (this.editIncell) {
                                return h('Row', {
                                    props: {
                                        type: 'flex',
                                        align: 'middle',
                                        justify: 'center'
                                    }
                                }, [
                                    h('Col', {
                                        props: {
                                            span: '22'
                                        }
                                    }, [
                                        !currentRow.edittingCell[param.column.key] ? h('span', currentRow[item.key]) : cellInput(this, h, param, item)
                                    ]),
                                    h('Col', {
                                        props: {
                                            span: '2'
                                        }
                                    }, [
                                        currentRow.edittingCell[param.column.key] ? saveIncellEditBtn(this, h, param) : incellEditBtn(this, h, param)
                                    ])
                                ]);
                            } else {
                                return h('span', currentRow[item.key]);
                            }
                        } else {
                            return h('Input', {
                                props: {
                                    type: 'text',
                                    value: currentRow[item.key]
                                },
                                on: {
                                    'on-change' (event) {
                                        let key = param.column.key;
                                        vm.edittingStore[param.index][key] = event.target.value;
                                    }
                                }
                            });
                        }
                    };
                }
                if (item.handle) {
                    item.render = (h, param) => {
                        let currentRowData = this.thisTableData[param.index];
                        let children = [];
                        item.handle.forEach(item => {
                            if (item === 'edit') {
                                children.push(editButton(this, h, currentRowData, param.index));
                            } else if (item === 'delete') {
                                children.push(deleteButton(this, h, currentRowData, param.index));
                            }else if(item==='enable'){
                                children.push(enable(this,h,currentRowData,param.index))
                            }else if(item==='add'){
                                children.push(add(this,h,currentRowData,param.index))
                            }else if(item==='see'){
                                children.push(see(this,h,currentRowData,param.index))
                            }
                        });
                        return h('div', children);
                    };
                }
            });
        },
        handleBackdata (data) {
            let clonedData = JSON.parse(JSON.stringify(data));
            clonedData.forEach(item => {
                delete item.editting;
                delete item.edittingCell;
                delete item.saving;
            });
             console.log(clonedData)
            return clonedData;
        },
        // 导出
        exportData () {
            console.log(this.$refs.dragable)
            this.$refs.dragable.exportCsv({
                    filename: '原始数据'
                });
        },
        // 查询
         handleSearch(){
            alert(0)
        },
        // 全选
         handleSelectAll (status) {
                this.$refs.dragable.selectAll(status);
            },
        // 表格导出图片
        exportImage () {
            let vm = this;
            let table = this.$refs.dragable.$el;
            /* 这部分代码用来解决生成的图片不清晰的问题 */
            // let tableWidth = table.offsetWidth;
            // let tableHeight = table.offsetHeight;
            // let canvas = document.createElement('canvas');
            // canvas.width = tableWidth * 2;
            // canvas.height = tableHeight * 2;
            // canvas.style.width = tableWidth + 'px';
            // canvas.style.height = tableHeight + 'px';
            // document.body.appendChild(canvas);
            // var context = canvas.getContext('2d');
            // context.scale(2, 2);
            /* 这部分代码用来解决生成的图片不清晰的问题 */
            html2canvas(table, {
                // canvas: canvas,
                onrendered (image) {
                    var url = image.toDataURL();
                    // document.getElementById('exportedImage').src = url;//赋值给元素，暂时先注释
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = vm.imageName ? vm.imageName : '未命名';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    // document.body.removeChild(canvas);
                }
            });
        },
        dropdown(name){
            if(name==='exportImage'){
                this.exportImage()
            }else if(name==='true'){
                this.handleSelectAll(true)
            }else{
                this.handleSelectAll(false)
            }
            },
            // 添加部门用户 穿梭框
            addPerson(data){
               return data
            },
            // 查看部门用户
            see(data){
                return data
            }
            
    },
    mounted () {
        var el = this.$refs.dragable.$children[1].$el.children[1];
        let vm = this;
        Sortable.create(el, {
            onStart: vm.startFunc,
            onEnd: vm.endFunc,
            onChoose: vm.chooseFunc
        });
    },
     watch: {
        value (data) {
            this.init();
        }
    },
      created () {
        this.init();
    },
};
</script>

