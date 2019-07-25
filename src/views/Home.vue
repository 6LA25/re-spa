<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button disabled>默认按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {
  mockFetch
} from '@services/demo-service.js';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    mockFetch().then(({data}) => {
      console.log(data.articles)
    })
      .catch(error => {
        console.log(error);
      })
  }
};
</script>
