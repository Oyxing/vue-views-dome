<template>
    <Slider v-model="value" range class="slider"></Slider>
</template>
<script>

    export default {
      name:"slider",
        data () {
            return {
                value: [20, 50]
            }
        },
        created(){
          this.Value()
        },
        mounted(){
         
        },
        updated(){
        
        },
        methods:{
          Value(){
            console.log(this.value)
          }
        },
        watch:{
          'value':'Value',
        }
    }
</script>