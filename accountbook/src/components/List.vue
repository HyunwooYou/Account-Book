<template>
    <div class="list">
      <div class="btnArea">
        <router-link to="/">
          <button class="btn">Go Home</button>
        </router-link>
      </div>

      <table>
        <thead>
          <tr>
            <th class="time">time</th>
            <th class="price">Price</th>
            <th class="usage">Usage</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in list.slice(first, second).reverse()">
            <td>{{ item.month }}&#47;{{ item.date }}</td>

            <td v-if="item.type == 'add'" class="add">&#43;{{ item.price }}</td>
            <td v-else class="minus">&#45; {{ item.price }}</td>

            <td>{{ item.comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import VueRouter from 'vue-router'

export default {
  name: "list",
  VueRouter,
  props: [ 'book' ],
  data() {
    return {
      list: this.book,
      item: null,

      myClass: {
        backgroundColor: 'black',
        color: 'white'
      }
    }
  },
  computed: {
    first() {
      if(this.list.length > 17) return (this.list.length - 17);
      else return 0;
    },

    second() {
      return this.list.length;
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    padding: 150px 90px 90px 90px;
    color: darkslategray;
    font-size: 40px;

    .btnArea {
      width: 450px;
      margin: 0 auto;

      .btn {
        width: 100%;
        padding: 16px;
        margin-bottom: 80px;
        border: 1px solid palevioletred;
        font-size: 46px;
        background-color: palevioletred;
        color: white;
        font-weight: bold;
        border-radius: 18px;
      }
    }

    table {
      /*width: 800px;*/

      thead {
        font-size: 42px;

        tr {
          th {
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 10px;
            background-color: lightcoral;
            color: white;
          }
          .time { width: 200px; }
          .price { width: 300px; }
          .usage { width: 300px; }
        }
      }

      tbody {

        tr:nth-child(even) {
          background-color: floralwhite;
        }

        tr {
          td {
            text-align: center;
            height: 60px;
          }

          .add {
            color: lightcoral;
            font-weight: bold;
          }

          .minus {
            color: cadetblue;
          }
        }
      }
    }
  }
</style>

