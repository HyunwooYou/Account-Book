<template>
  <div class="cardInfo" @click="handleClickCard()">
    <div class="date">{{_getCurrentDate(detailInfo)}}</div>

    <div class="consume ellipsis">
      {{_addCommaToStr(getTotal('minus'))}}
    </div>

    <div class="add ellipsis">
      {{_addCommaToStr(getTotal('add'))}}
    </div>
  </div>
</template>

<script>
  import Mixin from './Mixin';

  export default {
    name: 'card-info',
    mixins: [Mixin],
    props: {
      detailInfo: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      getTotal(type) {
        const _list = this.detailInfo.filter(e => e.type === type).map(e => e.price);
        const _sum = _list.reduce((a, b) => a + b, 0);

        if (_sum === 0) {
          return '';
        } else {
          const operator = (type === 'add') ? '+' : '-';
          return `${operator}${_sum}`;
        }
      },
      handleClickCard() {
        this.$emit('click-card', this.detailInfo);
      }
    }
  }
</script>

<style lang="scss" scoped>

  .cardInfo {
    width: 320px;
    height: 220px;
    margin: 20px;
    padding: 20px;
    background-color: whitesmoke;
    border-top: 2px solid lightslategray;
    border-left: 3px solid lightslategray;
    border-right: 4px solid lightslategray;
    border-bottom: 6px solid lightslategray;
    border-radius: 10px;
    font-size: 50px;

    .date {
      font-size: 40px;
      color: darkslategray;
    }

    .ellipsis {
      width: 300px;
      text-overflow: ellipsis;
      overflow-x: hidden;
    }

    .consume {
      margin-top: 10px;
      color: chocolate;
    }

    .add {
      margin-top: 10px;
      color: cadetblue;
    }
  }
  .cardInfo:active {
    border: 3px solid lightcoral;
  }
</style>
