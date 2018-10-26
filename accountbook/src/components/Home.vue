<template>
  <div class="home">
    <img class="logo" src="../assets/img/rabbit.gif">
    <div class="content">
      <div class="totalArea">
        {{ total }}
      </div>

      <div class="inputArea">
        <input class="price" placeholder="price" type="number" v-model.number="price" />
        <input class="desc" placeholder="comment" type="text" v-model.number="comment" maxlength="8" />
      </div>

      <div class="btnArea">
        <button class="btn" @click="addToTotal(price, comment)">ADD</button>
        <button class="btn" @click="minusToTotal(price, comment)">Minus</button>
      </div>

      <router-link to="/List">
        <div class="longBtnArea">
            <button class="longBtn">Show List</button>
        </div>
      </router-link>

      <!-- (Todo) Add clear localstorage btn -->
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus'

export default {
  name: "home",
  data () {
    return { price: null, comment: null }
  },
  props: [ 'total' ],
  methods: {
    addToTotal(price, comment) {
      if(this.price > 0) {
        const d = new Date();

        eventBus.$emit('addTotal', price);
        eventBus.$emit('pushToBook', {
          'type': 'add',
          'year': d.getFullYear(), 'month': d.getMonth() + 1, 'date': d.getDate(),
          'price': price, 'comment': comment
        });
        eventBus.$emit('refreshLocalStorage');
      }
      this.refreshInputForm();
    },

    minusToTotal(price, comment) {
      if(this.price > 0) {
        const d = new Date();

        eventBus.$emit('subTotal', price);
        eventBus.$emit('pushToBook', {
          'type': 'minus', 'year': d.getFullYear(), 'month': d.getMonth() + 1 , 'date': d.getDate(),
          'price': price, 'comment': comment
        });
        eventBus.$emit('refreshLocalStorage');
      }
      this.refreshInputForm();
    },

    refreshInputForm() { this.price = null; this.comment = null; },
  }
}
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
    color: #2c3e50;
    margin: 30px 60px 0 60px;
    font-weight: bold;

    .logo {
      width: 30%;
      height: 300px;
      margin-top: 50px;
    }

    .content {
      margin: 0 auto;

      .totalArea {
        font-size: 140px;
        text-align: center;
      }

      .inputArea {
        margin: 40px auto;
        width: 70%;

        .price {
          width: 70%;
          font-size: 60px;
          outline-color: white;
          border-radius: 12px;
          border: 5px solid #2c3e50;
        }

        .desc {
          margin-top: 30px;
          width: 70%;
          font-size: 60px;
          outline-color: white;
          border-radius: 12px;
          border: 5px solid #2c3e50;
        }
      }

      .btnArea {
        .btn {
          min-width: 150px;
          margin-right: 10px;
          padding: 20px;
          font-size: 40px;
          background-color: palevioletred;
          color: white;
          font-weight: bold;
          border-radius: 12px;
        }
      }

      .longBtnArea {
        margin: 50px 0;

        .longBtn {
          width: 50%;
          padding: 16px;
          font-size: 46px;
          background-color: lightcoral;
          color: white;
          font-weight: bold;
          border-radius: 20px;
        }
      }
    }
  }
</style>
