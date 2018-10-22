<template>
  <div class="container">
    <my-header></my-header>
    <home></home>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import Home from './components/Home'
import MyFooter from './components/MyFooter'

export default {
  name: 'app',
  components: {
    MyHeader, Home, MyFooter
  }
}
</script>

<style lang="scss">
  .container {
    margin: auto;
    font-size: 60px;
    font-weight: bold;
  }

  body { margin: 0; padding: 0; }

  .show {
    border: 1px solid black;
  }
</style>
