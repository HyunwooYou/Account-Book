<template>
  <div class="saveBox">
    <div class="content">
      <div>저금통 관리</div>

      <div class="save">
        <button class="greenBtn" @click="updateSaveMoney('add')">
          남은 돈 넣기
        </button>
      </div>

      <div class="consume">
        <input
          type="number"
          :placeholder="`최대 금액 : ${_addCommaToStr(saveMoney)}`"
          v-model.number="price"
        />
        <button class="pinkBtn" @click="updateSaveMoney('minus')">
          꺼내기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from '../../EventBus';
  import Mixin from '../Mixin';

  export default {
    name: 'save-box',
    mixins: [Mixin],
    props: {
      saveMoney: Number,
      total: Number,
    },
    data() {
      return {
        price: null,
      }
    },
    watch: {
      price(prevVal, newVal) {
        if (prevVal > this.saveMoney) {
          console.log(prevVal);
          this.price = null;
        }
      }
    },
    methods: {
      updateSaveMoney(type) {
        if (type === 'add' && this.total > 0) {
          EventBus.$emit('updateSaveMoney', this.saveMoney + this.total);
          EventBus.$emit('updateTotal', 0);
        } else if (type === 'minus' && this.saveMoney > 0 && this.price !== null) {
          EventBus.$emit('updateSaveMoney', this.saveMoney - this.price);
          EventBus.$emit('updateTotal', this.total + this.price);
        }
        this.price = null;
      },
    }
  }
</script>

<style lang="scss" scoped>

  .saveBox {
    padding: 50px 100px;

    .content {
      margin: 0 auto;
      font-size: 60px;

      .save {
        margin: 30px 0;
      }

      .consume {
        margin: 30px 0;
        display: flex;

        input {
          width: 500px;
          margin-right: 30px;
        }
      }
    }
  }
</style>
