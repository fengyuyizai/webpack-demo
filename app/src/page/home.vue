<template>
  <div class="page">
      home
      <div>
        {{number}}
      </div>
      <button @click="add">+</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      number: 1
    }
  },
  components: {

  },
  methods: {
    add() {
      this.number ++
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
