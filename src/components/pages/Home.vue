<template>
  <div class="home">
    <div class="content">
      <div class="inputArea">
        <input
          class="price" placeholder="금액" type="number" name="inputBox" ref="price"
          v-model.number="price"

        />
        <!--@keyup.enter="addToTotal(price, comment)"-->
        <input
          class="desc" type="text" maxlength="20"
          :placeholder="`${getCurrentDate} 메모`"
          v-model="comment"
        />
      </div>

      <button
        class="consumeBtn pinkBtn"
        @click="minusToTotal(price, comment)"
      >
        소비
      </button>

      <router-link to="/List">
        <button class="listBtn pinkBtn" :disabled="book.length === 0">
          장부 확인
        </button>
      </router-link>

      <div class="additionalBtn">
        <button
          class="btn greenBtn"
          @click="addToTotal(price, comment)"
        >
          추가
        </button>
        <button
          class="btn greenBtn"
          @click="resetTotal()"
        >
          {{toggle ? '계속 진행..' : '초기화'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from '../../EventBus'

  export default {
    name: 'home',
    props: {
      total: Number,
      book: {type: Array, default: () => []},
    },
    data() {
      return {
        price: '',
        comment: '',
        toggle: false,
      }
    },
    computed: {
      getCurrentDate() {
        const d = new Date();
        return `${d.getMonth() + 1}/${d.getDate()}`;
      }
    },
    watch: {
      price(prevVal, newVal) {
        if (prevVal > 999999) {
          this.price = '';
        }
      }
    },
    methods: {
      addToTotal(price, comment) {
        if (this.price > 0) {
          const d = new Date();

          EventBus.$emit('updateTotal', (this.total + price));
          EventBus.$emit('pushToBook', {
            type: 'add',
            year: d.getFullYear(), 'month': d.getMonth() + 1, 'date': d.getDate(),
            price: price, 'comment': comment
          });
        }
        this.$refs.price.focus();
        this.refreshInputForm();
      },
      minusToTotal(price, comment) {
        if (this.price > 0) {
          const d = new Date();

          EventBus.$emit('updateTotal', (this.total - price));
          EventBus.$emit('pushToBook', {
            type: 'minus',
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            date: d.getDate(),
            price: price,
            comment: comment
          });
        }
        this.refreshInputForm();
      },
      resetTotal() {
        if (this.toggle) {
          EventBus.$emit('updateTotal', 0);
        } else {
          setTimeout(() => this.toggle = false, 1000);
        }
        this.toggle = !(this.toggle);
      },
      refreshInputForm() {
        this.price = '';
        this.comment = '';
      },
    }
  }
</script>

<style lang="scss" scoped>

  .home {
    margin-top: 40px;

    .content {
      width: 600px;
      margin: 0 auto;

      .inputArea {
        margin: 20px auto 0 auto;

        input {
          width: 555px;
          margin-bottom: 30px;
        }
      }

      .consumeBtn {
        width: 100%;
        height: 100px;
      }

      .listBtn {
        width: 100%;
        height: 100px;
        margin-top: 40px;
      }
      .listBtn:disabled {
        opacity: 0.5;
      }

      .additionalBtn {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;

        button {
          width: 285px;
        }
      }
    }
  }
</style>
