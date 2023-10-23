<template>
    <div>
        <form>
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <label for="period">Period:</label><br>
            <input type="number" id="period" name="period">
            <label for="lwatered">Last watered:</label><br>
            <input type="date" id="lwatered" name="lwatered">
        </form> 
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewFlower',
  props: {
    msg: String
  },
  saveNewFlower() {
    axios.get('http://172.17.86.246:30555/api/unwatered-flowers')
      .then(resp => console.log(resp))
  },
  components: {
}
}
</script>