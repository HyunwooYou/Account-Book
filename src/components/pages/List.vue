<template>
  <div class="list">
    <button
      class="greenBtn"
      v-if="renderDetailInfo"
      @click="closeDetailInfo()"
    >
      ^
    </button>

    <detail-info
      v-if="renderDetailInfo"
      :key="key"
      :selected-group="selectedGroup"
    />

    <div class="cardTable" :style="{height: tableHeight}">
      <card-info
        v-for="group in getGroupedList"
        @click-card="clickCardHandler"
        :key="`${group[0].year}_${group[0].month}_${group[0].date}`"
        :detail-info="group"
      />
    </div>
  </div>
</template>

<script>
  import CardInfo from '../CardInfo.vue';
  import DetailInfo from '../DetailInfo.vue';

  export default {
    name: 'list',
    components: {
      CardInfo,
      DetailInfo,
    },
    props: {
      book: {type: Array, default: () => []},
    },
    data() {
      return {
        list: this.book,
        selectedGroup: [],
        key: 0,
      }
    },
    computed: {
      getGroupedList() {
        const rawObj = this.book.reduce((res, obj) => {
          const _year = obj['year'] * 10000;
          const _month = obj['month'] * 100;
          const _date = obj['date'];
          const _key = _year + _month + _date;

          (res[_key] = res[_key] || []).push(obj);
          return res;
        }, {});

        const orderedObj = {};
        Object.keys(rawObj).reverse().forEach((index, key) => {
          orderedObj[key] = rawObj[index];
        });

        return orderedObj;
      },
      renderDetailInfo() {
        return this.selectedGroup.length !== 0;
      },
      tableHeight() {
        if (this.renderDetailInfo) {
          return '610px';
        }
      }
    },
    methods: {
      clickCardHandler(selectedGroup) {
        this.key ++;
        this.selectedGroup = selectedGroup;
      },
      closeDetailInfo() {
        this.selectedGroup = [];
      }
    }
  }
</script>

<style lang="scss" scoped>

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 50px 50px 50px;
    font-size: 40px;

    .greenBtn {
      position: absolute;
      min-width: 90px;
      min-height: 80px;
      top: 800px;
      right: 100px;
      height: 80px;
      padding: 8px;
      font-size: 80px;
    }

    .btnArea {
      width: 450px;
      margin-bottom: 50px;
    }

    .cardTable {
      margin-top: 35px;
      padding-left: 30px;
      height: 1235px;
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
    }
  }
</style>

