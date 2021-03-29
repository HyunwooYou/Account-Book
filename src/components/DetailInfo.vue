<template>
  <div class="detailInfo">
    <div class="date">
      {{_getCurrentDate(selectedGroup)}} 상세 정보
    </div>

    <div class="list">
      <div class="item" v-for="item in selectedGroup" :key="">
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
  }
</script>

<style lang="scss" scoped>

  .detailInfo {
    width: 88%;

    .date {
      font-size: 50px;
    }

    .list {
      height: 515px;
      margin-top: 20px;
      overflow-y: auto;
      border-top: 2px solid lightslategray;
      border-bottom: 2px solid lightslategray;
      padding: 10px 0;

      .item {
        display: flex;
        margin-top: 10px;

        .price {
          display: flex;
          width: 330px;
          text-overflow: ellipsis;
          overflow-x: auto;
          margin-right: 30px;
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
