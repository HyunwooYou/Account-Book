<template>
  <div class="hwHeader">
    <div class="content">
      <router-link to="/">
        <img class="logo" src="../assets/img/rabbit.gif">
      </router-link>

      <div class="total">
        {{_addCommaToStr(total)}}
      </div>

      <div class="save">
        <button class="btn greenBtn" @click="moveToSaveBox()">저금통</button>

        <div class="money">
          {{_addCommaToStr(saveMoney)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mixin from './Mixin';

  const defaultBtnText = '+ money';

  export default {
    name: 'hw-header',
    mixins: [Mixin],
    props: {
      total: Number,
      saveMoney: Number,
    },
    data() {
      return {
        btnText: defaultBtnText,
      }
    },
    methods: {
      moveToSaveBox() {
        this.$router.push('/save');
      }
    }
  }
</script>

<style lang="scss" scoped>

  .hwHeader {
    padding: 0 20px;
    background-color: white;
    border-bottom: 5px solid lightgray;

    .content {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;

        .logo {
          width: 190px;
          height: 200px;
        }
      }

      .total {
        max-width: 550px;
        overflow-x: auto;
        font-size: 120px;
      }

      .save {
        color: cadetblue;
        text-align: center;
        display: flex;
        flex-direction: column;

        .btn {
          min-width: 150px;
          padding: 8px;
        }

        .money {
          max-width: 190px;
          height: 60px;
          font-size: 50px;
          overflow: auto;
        }
      }
    }
  }
</style>
