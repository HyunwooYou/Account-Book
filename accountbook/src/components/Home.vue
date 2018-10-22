<template>
  <div class="home">
    <img class="logo" src="../assets/img/github-octocat.png">
    <div class="content">
      <div class="totalArea">
        {{ total }}
      </div>

      <div class="inputArea">
        <input class="price" placeholder="price" type="number" v-model.number="price" />
        <input class="desc" placeholder="comment" type="text" v-model.number="comment" />
      </div>

      <div class="btnArea">
        <button class="btn" @click="addToTotal(price, comment)">ADD</button>
        <button class="btn" @click="minusToTotal(price, comment)">Minus</button>
        <button class="btn" @click="clearTotal()">Clear</button>
      </div>

      <div class="listBtnArea">
        <button class="listBtn" @click="showList()">Consumption List</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        total: 0,
        price: 10000,
        comment: 'food',

        book: null, // Json Type book which includes words.
      }
    },
    created() {
      this.initLocalstorage();
      // localStorage.clear();
    },
    computed: {

    },
    methods: {
      /********************* localstorage  *********************/
      initLocalstorage() {
        // book
        if(localStorage.getItem('book')) {
          this.book = Object.values(JSON.parse(localStorage.getItem('book')));
          console.log('--------------Bring book from localstorage.--------------');
        } else {
          this.book = new Array();
          localStorage.setItem('book', JSON.stringify(this.book));
          console.log('--------------Make new book.--------------');
        }

        // total
        if(localStorage.getItem('total')) {
          this.total = JSON.parse(localStorage.getItem('total'));
          console.log('--------------Bring total from localstorage.--------------');
        } else {
          this.total = 0;
          localStorage.setItem('total', JSON.stringify(this.total));
          console.log('--------------Make new total.--------------');
        }
      },

      refreshLocalstorage() {
        localStorage.setItem('total', JSON.stringify(this.total));
        localStorage.setItem('book', JSON.stringify(this.book));

        console.log('refresh localstorage.');
      },


      /********************* calculator function  *********************/
      addToTotal(price, comment) {
        if(this.price > 0) {
          const d = new Date();
          this.total = this.total + price;
          this.book.push({
            'type': 'add',
            'year': d.getFullYear(), 'month': d.getMonth(), 'date': d.getDate(),
            'price': price, 'comment': comment
          });
          this.refreshLocalstorage();
        }
        this.refreshInputForm();
      },

      minusToTotal(price, comment) {
        if(this.price > 0) {
          const d = new Date();
          this.total = this.total - price;
          this.book.push({
            'type': 'minus', 'year': d.getFullYear(), 'month': d.getMonth() + 1 , 'date': d.getDate(),
            'price': price, 'comment': comment
          });
          this.refreshLocalstorage();
        }
        this.refreshInputForm();
      },

      showList() {
        let msg = '';

        this.book.forEach(function print(x) {
          msg += (x.year + '/' + x.month + '/' + x.date + '_' + x.price + '_' + x.comment + '_[' + x.type + ']' + '\n');
        });
        alert(msg);
      },

      clearTotal() {
        this.total = 0;
      },

      refreshInputForm() {
        this.price = null;
        this.comment = null;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
    color: #2c3e50;
    margin: 60px 0;

    .logo { width: 90%; height: 450px; }

    .content {
      margin: 0 auto;
      width: 50%;

      .totalArea {
        font-size: 140px;
        text-align: center;
        overflow: scroll;
      }

      .inputArea {
        margin: 40px auto;

        .price {
          width: 70%;
          font-size: 60px;
          outline-color: lightgreen;
          border-radius: 12px;
          border: 5px solid #2c3e50;
        }

        .desc {
          width: 70%;
          font-size: 60px;
          outline-color: lightgreen;
          border-radius: 12px;
          border: 5px solid #2c3e50;
        }
      }

      .btnArea {
        .btn {
          width: 140px;
          margin-right: 5px;
          padding: 16px;
          font-size: 32px;
          background-color: seagreen;
          color: white;
          font-weight: bold;
          border-radius: 12px;
        }
      }

      .listBtnArea {
        margin: 50px 0;

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
    }
  }
</style>
