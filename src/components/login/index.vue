<template>
  <div class="login">
    <div class="container">
      <input type="text" v-model="message">
      <button type="button"
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">Copy!</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'fuck you'
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function () {
      alert('Failed to copy texts')
    }
  }
}
</script>
<style lang="less" scoped>

</style>

