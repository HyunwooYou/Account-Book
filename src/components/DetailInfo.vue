<template>
  <div class="detailInfo">
    <div class="date">
      {{_getCurrentDate(selectedGroup)}} 상세 정보
    </div>

    <div class="list">
      <div class="item" v-for="item in getReversedArray" :key="">
        <div v-if="item.type === 'add'" class="green price">
          <label>+</label>
          <label>{{_addCommaToStr(item.price)}}</label>
        </div>
        <div v-else class="orange price">
          <label>-</label>
          <label>{{_addCommaToStr(item.price)}}</label>
        </div>

        <div class="memo">
          {{item.comment}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mixin from './Mixin';

  export default {
    name: 'detail-info',
    mixins: [Mixin],
    props: {
      selectedGroup: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      getReversedArray() {
        return this.selectedGroup.reverse();
      }
    }
  }
</script>

<style lang="scss" scoped>

  .detailInfo {
    width: 88%;
    margin-top: 20px;

    .date {
      font-size: 50px;
    }

    .list {
      height: 455px;
      margin-top: 30px;
      overflow-y: auto;
      border-top: 4px solid lightslategray;
      border-bottom: 2px solid lightslategray;
      padding-top: 10px;
      padding-bottom: 30px;

      .item {
        display: flex;
        margin-top: 10px;

        .price {
          display: flex;
          width: 310px;
          text-overflow: ellipsis;
          overflow-x: auto;
          margin-right: 30px;
          padding-left: 20px;
        }

        .green {
          color: cadetblue;
        }

        .orange {
          color: chocolate;
        }

        .memo {
          width: 450px;
          overflow-x: auto;
        }
      }
    }
  }
</style>
