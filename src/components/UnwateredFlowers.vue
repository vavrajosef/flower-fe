<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UnwateredFlowers',
  mounted() {
    axios.get('http://172.17.86.246:30555/api/unwatered-flowers')
      .then(resp => console.log(resp))
  },
  data() {
    return {
      flowers: []
    }
  },
  components: {
  }
}
</script>