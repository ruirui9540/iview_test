<style lang="less">
    @import '../../styles/common.less';
    @import './access.less';
</style>

<template>
    <div class="access">
        <Row>
            <Col span='24'>
                  <Tabs>
                    <TabPane label="菜单权限"><menuPermissions></menuPermissions></TabPane>
                    <TabPane label="机构权限"><menuPermissions></menuPermissions></TabPane>
                    <TabPane label="栏目权限"><menuPermissions></menuPermissions></TabPane>
                    <TabPane label="用户范围"><user></user></TabPane>

    </Tabs>
            </Col>
        </Row>
    </div>
</template>

<script>
import menuPermissions from './components/menu.vue'
import user from './components/user.vue'
import Cookies  from 'js-cookie'
export default {
    name: 'access_index',
    data () {
        return {
            accessCode: parseInt(Cookies.get('access')),
            switchValue: parseInt(Cookies.get('access')) === 1
        };
    },
    components:{
        menuPermissions,
        user
    },
    computed: {
        avatorPath () {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        changeAccess (res) {
            if (res) {
                this.accessCode = 1;
                Cookies.set('access', 1);
            } else {
                this.accessCode = 0;
                Cookies.set('access', 0);
            }
            this.$store.commit('updateMenulist');
        }
    }
};
</script>

<style>

</style>
