<template>
    <MenuComp/>
    <div>

    </div>
</template>

<script>
import axios from 'axios';
import MenuComp from './MenuComp.vue';

export default {
    name: 'FlowerDetail',
    components: {
        MenuComp
    },
      mounted() {
    axios.get('http://172.17.86.246:30555/api/unwatered-flowers')
      .then(resp => console.log(resp))
  },
  data() {
    return {
      flowers: []
    }
  },
}
</script>