<template>
    <div class="list">
      <p>This is list.</p>
      <p>This is list.</p>
      <p>This is list.</p>

      <router-link to="/">
        <button class="listBtn">Go Home</button>
      </router-link>
    </div>
</template>

<script>
import VueRouter from 'vue-router'

export default {
  name: "list",
  VueRouter,
  data() {
    return {
      list: null
    }
  },
  created() {
    
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .list {
    padding: 50px;

    .listBtn {
      width: 100%;
      margin-right: 5px;
      padding: 16px;
      font-size: 46px;
      background-color: mediumseagreen;
      color: white;
      font-weight: bold;
      border-radius: 12px;
    }
  }
</style>
