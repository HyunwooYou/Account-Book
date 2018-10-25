<template>
    <div class="list">
      <router-link to="/">
        <button class="btn">Go Back</button>
      </router-link>

      <table>
        <thead>
          <tr>
            <th class="time show">time</th>
            <th class="price show">Price</th>
            <th class="usage show">Usage</th>
            <th class="type show">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in list.slice(len - 17, len).reverse()">
            <td class="show">{{ item.month }}/{{ item.date }}</td>
            <td class="show">{{ item.price }}</td>
            <td class="show">{{ item.comment }}</td>
            <td class="show">{{ item.type }}</td>
          </tr>
        </tbody>
      </table>
      <!--<button class="listBtn" @click="showList()">Show List</button>-->
    </div>
</template>

<script>
import VueRouter from 'vue-router'
import eventBus from '../eventBus'

export default {
  name: "list",
  VueRouter,
  props: [ 'book' ],
  data() {
    return {
      list: this.book
    }
  },
  computed: {
    len() {
      return  this.list.length;
    }
  },
  methods: {
    showList() {
      eventBus.$emit('showList');
    }

  }
}
</script>

<style lang="scss" scoped>
  .list {
    padding: 200px 90px 90px 90px;
    /*padding: 90px;*/
    color: darkslategrey;
    font-size: 38px;

    table {
      thead {
        font-size: 42px;
        tr {
          .time { width: 20%; }
          .price { width: 35%; }
          .usage { width: 35%; }
          .type { width: 10%; }
        }
      }

      tbody {

        tr {
          td {
            text-align: center;
            height: 60px;
          }
        }
      }
    }

    .btn {
      width: 100%;
      padding: 16px;
      margin-bottom: 50px;
      border: 1px solid palevioletred;
      font-size: 46px;
      background-color: palevioletred;
      color: white;
      font-weight: bold;
      border-radius: 18px;
    }
  }
</style>
