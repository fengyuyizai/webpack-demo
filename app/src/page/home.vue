<template>
  <div class="page">
      home
      <div class="main">
        {{number}}
      </div>
      <button @click="add">+</button>
  </div>
</template>

<script>
    import {last, join, pull} from 'lodash-es'
export default {
  data() {
    return {
      number: 1
    }
  },
  components: {

  },
  mounted() {
    console.log(last, join, pull)
  },
  methods: {
    add() {
      this.number ++
    }
  }
}
</script>

<style>
@import "../css/css2.css";
@import "../css/css1.less";
</style>
