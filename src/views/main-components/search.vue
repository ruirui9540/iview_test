<template>
    <div class="search-btn-con">
        <Col :md="12" :xs="0" :sm="0" :lg="24">
            <Input v-model="value" icon="ios-search" @on-focus="onfocus" @on-blur="blur" placeholder="Enter something..." :style="{'width': width}"></Input>
        </Col>
       
    </div>
</template>

<script>
export default {
    name: 'search',
    data(){
        return{
            value:'',
            width:'200px'
        }
    },
    computed: {
     
    },
    methods: {
      onfocus(){
          this.width='300px'
      },
      blur(){
          this.width='200px'
      }
    },
    created () {}
};
</script>
