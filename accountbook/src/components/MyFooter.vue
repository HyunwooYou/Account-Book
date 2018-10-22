<template>
    <div class="footer">
      <a href="https://github.com/HyunwooYou/Change-Calculator">Go Github</a>
      <div>Email : hyun-woo.yoo@hp.com</div>
    </div>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    width: 100%;
    height: 130px;
    line-height: 130px;
    bottom: 0;
    text-align: center;
    background-color: mediumseagreen;
    color: white;

    a {

      text-decoration: none ;
      color: white;
    }
    a:visited {
      text-decoration: none;
      color: white;
    }
  }
</style>
