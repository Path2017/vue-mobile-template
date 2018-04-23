<template>
  <div class="hello">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="flex-content">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
    <div @click="addBtn">点击一下</div>
    <div id="addBox"></div>
    <div>语言包测试</div>
    <div>{{$t('menu.home')}}</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      console.log(this.reqpath.url.url)
    },
    methods: {
      addBtn() {
        $('#addBox').html('通过jquery添加的内容')
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .flex-content {
    display: flex;
    background-color: #F0f0f0;
    justify-content: space-between;
  }

  .flex-content .flex-item {
    padding: 20px;
    background-color: #B1FF84;
  }

  .flex-content .flex-item:first-child {
    background-color: #F5DE25;
  }

  .flex-content .flex-item:last-child {
    background-color: #90D9F7;
  }

</style>
