export const table1Columns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        key: 'order',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const table1Data = [
    {
        name: 'Aresn',
        sex: '男',
        order: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        order: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        order: '程序员鼓励师'
    }
];

export const editInlineColumns = [
    {
        title: '多选',
        type: 'selection',
        width: 60
    },
    {
        title: 'ID',
        // type: 'index',
        width: 60,
        align: 'center',
        key: 'ID'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 90,
        editable: true
    },
    {
        title: '简称',
        align: 'center',
        key: 'shortName',
        width: 90
    },
    {
        title: '所属机构',
        align: 'center',
        key: 'danwei',
        width: 120,
        editable: true
    },
    {
        title: '顺序',
        align: 'center',
        key: 'order',
        width: 150,
        editable: true
    },
    {
        title: '启用',
        align: 'center',
        width: 90,
        key: 'enable',
        handle: ['enable']
    },
    {
        title: '部门用户',
        align: 'center',
        key: 'add',
        width: '120',
        handle: ['add']

    },
    {
        title: '拖拽',
        key: 'drag',
        width: 90,
        align: 'center',
        render: (h) => {
            return h(
                'Icon',
                {
                    props: {
                        type: 'arrow-move',
                        size: 24
                    }
                }
            );
        }
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineData = [
    {
        name: '合肥市税务局',
        shortName: '小张',
        order: '前端开发',
        // enable: '15045678969',
        danwei: '国家税务总局合肥市税务局',
        ID: '0'
    },
    {
        name: '合肥市税务局',
        shortName: '小天',
        order: '前端开发',
        // enable: '15045678968',
        danwei: '国家税务总局合肥市税务局',
        ID: '1'
    },
    {
        name: '合肥市税务局',
        shortName: '小于',
        order: '程序员鼓励师',
        enable: '15045678965',
        danwei: '国家税务总局合肥市税务局',
        ID: '2'
    },
    {
        name: '合肥市税务局',
        shortName: '小张',
        order: '前端开发',
        enable: '15045678969',
        danwei: '国家税务总局合肥市税务局',
        ID: '3'
    },
    {
        name: '合肥市税务局',
        shortName: '小天',
        order: '前端开发',
        enable: '15045678968',
        danwei: '国家税务总局合肥市税务局',
        ID: '4'
    },
    {
        name: '合肥市税务局',
        shortName: '小于',
        order: '程序员鼓励师',
        enable: '15045678965',
        danwei: '国家税务总局合肥市税务局',
        ID: '5'
    },
    {
        name: '合肥市税务局',
        shortName: '小张',
        order: '前端开发',
        enable: '15045678969',
        danwei: '国家税务总局合肥市税务局',
        ID: '6'
    },
    {
        name: '合肥市税务局',
        shortName: '小天',
        order: '前端开发',
        enable: '15045678968',
        danwei: '国家税务总局合肥市税务局',
        ID: '7'
    },
    {
        name: '合肥市税务局',
        shortName: '小于',
        order: '程序员鼓励师',
        enable: '15045678965',
        danwei: '国家税务总局合肥市税务局',
        ID: '8'
    },
    {
        name: '合肥市税务局',
        shortName: '小张',
        order: '前端开发',
        enable: '15045678969',
        danwei: '国家税务总局合肥市税务局',
        ID: '9'
    }

];
// 用户管理页面数据
export const useColumns = [
    {
        title: '多选',
        type: 'selection',
        width: 60
    },
    {
        title: 'ID',
        // type: 'index',
        width: 60,
        align: 'center',
        key: 'ID'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 90,
        editable: true
    },
    {
        title: '登录名',
        align: 'center',
        key: 'loginname',
        width: 90
    },
    {
        title: '部门用户',
        align: 'center',
        key: 'user',
        width: 120,
        handle: ['see']
    },
    {
        title: '手机号',
        align: 'center',
        key: 'phone',
        width: 150,
        editable: true
    },
    {
        title: '用户组',
        align: 'center',
        width: 90,
        key: 'zu',
        handle: ['add']
    },
    {
        title: '启用',
        align: 'center',
        width: 90,
        key: 'enable',
        handle: ['enable']
    },
    {
        title: '拖拽',
        key: 'drag',
        width: 90,
        align: 'center',
        render: (h) => {
            return h(
                'Icon',
                {
                    props: {
                        type: 'arrow-move',
                        size: 24
                    }
                }
            );
        }
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];
export const userData = [
    {
        ID: 0,
        name: '桃桃',
        loginname: '小桃',
        phone: '15036049025'
    }
];
export const editIncellColumns = [
    {
        title: 'ID',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 120,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 160,
        key: 'order',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const editIncellData = [
    {
        name: 'Aresn',
        sex: '男',
        order: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        order: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        order: '程序员鼓励师'
    }
];

export const editInlineAndCellColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 300,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 300,
        key: 'order',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 200,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineAndCellData = [
    {
        name: 'Aresn',
        sex: '男',
        order: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        order: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        order: '程序员鼓励师'
    }
];

export const showCurrentColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 100,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex',
        width: 100
    },
    {
        title: '岗位',
        align: 'center',
        width: 100,
        key: 'order',
        editable: true
    }
];

const tableData = {
    table1Columns: table1Columns,
    table1Data: table1Data,
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData,
    editIncellColumns: editIncellColumns,
    editIncellData: editIncellData,
    editInlineAndCellColumn: editInlineAndCellColumn,
    editInlineAndCellData: editInlineAndCellData,
    showCurrentColumns: showCurrentColumns,
    useColumns: useColumns,
    userData: userData
};

export default tableData;
