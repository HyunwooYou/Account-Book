<template>
  <div class="list">
    <button
      class="pinkBtn"
      v-if="renderDetailInfo"
      @click="closeDetailInfo()"
    >
      닫기
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
  import CardInfo from './CardInfo.vue';
  import DetailInfo from './DetailInfo.vue';

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
        return this.book.reduce((res, obj) => {
          const _key = `${obj['year']}_${obj['month']}_${obj['date']}`;
          (res[_key] = res[_key] || []).push(obj);
          return res;
        }, {});
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

    .pinkBtn {
      position: absolute;
      top: 220px;
      right: 100px;
      height: 80px;
      padding: 8px;
    }

    .btnArea {
      width: 450px;
      margin-bottom: 50px;
    }

    .cardTable {
      margin-top: 20px;
      padding-left: 30px;
      height: 1235px;
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
    }
  }
</style>

