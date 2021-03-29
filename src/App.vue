<template>
  <div class="container">
    <hw-header
      :total="total"
      :save-money="saveMoney"
    />

    <router-view
      :total="total"
      :book="book"
      :save-money="saveMoney"
    ></router-view>
  </div>
</template>

<script>
  import EventBus from './EventBus.js'
  import HwHeader from './components/HwHeader.vue';
  import dmy from './dmy';

  export default {
    name: 'app',
    components: {
      HwHeader,
    },
    data() {
      return {
        total: 0,
        saveMoney: 0,
        book: [] // Json Type book which includes words.
      }
    },
    created() {
      this.$router.push('/').catch(() => {}); // index page
      // localStorage.clear();
      this.initLocalStorage();
    },
    mounted() {
      EventBus.$on('pushToBook', (obj) => {
        this.book.push(obj);
        this.refreshLocalStorage();
      });
      EventBus.$on('updateTotal', (value) => {
        this.total = value;
        this.refreshLocalStorage();
      });
      EventBus.$on('updateSaveMoney', (value) => {
        this.saveMoney = value;
        this.refreshLocalStorage();
      });
    },
    methods: {
      /** * * * * * * * * * localstorage  * * * * * * * * * **/
      initLocalStorage() {
        if (localStorage.getItem('book')) {
          this.book = Object.values(JSON.parse(localStorage.getItem('book')));
          // this.book = dmy;
          console.log('-------------- Bring Book --------------');
        } else {
          this.book = new Array();
          localStorage.setItem('book', JSON.stringify(this.book));
          console.log('--------------- New Book ---------------');
        }

        if (localStorage.getItem('total')) {
          this.total = JSON.parse(localStorage.getItem('total'));
          console.log('-------------- Bring Total --------------');
        } else {
          this.total = 0;
          localStorage.setItem('total', JSON.stringify(this.total));
          console.log('--------------- New Total ---------------');
        }

        if (localStorage.getItem('saveMoney')) {
          this.saveMoney = JSON.parse(localStorage.getItem('saveMoney'));
          console.log('-------------- Bring saveMoney --------------');
        } else {
          this.saveMoney = 0;
          localStorage.setItem('saveMoney', JSON.stringify(this.saveMoney));
          console.log('--------------- New saveMoney ---------------');
        }
      },
      refreshLocalStorage() {
        localStorage.setItem('total', JSON.stringify(this.total));
        localStorage.setItem('saveMoney', JSON.stringify(this.saveMoney));
        localStorage.setItem('book', JSON.stringify(this.book));
        this.book = this.book.reverse();
        console.log('refresh localStorage.');
      },

    }
  }
</script>

<style lang="scss">

  html {
    background-image: url("assets/img/background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1200px 1850px;
    min-height: 1800px;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: #2c3e50;
    font-weight: bold;
  }

  button {
    min-width: 150px;
    padding: 20px;
    font-size: 40px;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }

  input {
    font-size: 50px;
    outline-color: white;
    border-radius: 5px;
    padding: 20px;
    border: 3px solid lightgray;
  }
  input::placeholder {
    opacity : 0.7;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .show {
    border: 1px solid black;
  }

  .greenBtn {
    font-size: 40px;
    background-color: cadetblue;
    border-bottom: 6px solid darkslategray;
    border-right: 4px solid darkslategray;
  }
  .greenBtn:active {
    opacity: 0.6;
  }

  .pinkBtn {
    font-size: 40px;
    background-color: lightcoral;
    border-bottom: 6px solid indianred;
    border-right: 4px solid indianred;
  }
  .pinkBtn:active {
    opacity: 0.6;
  }
</style>
