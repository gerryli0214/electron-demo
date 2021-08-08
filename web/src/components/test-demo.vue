<template>
  <div class='full'>
    <button @click="add">按钮</button>
  </div>
</template>

<script>
export default{
  name: 'testDemo',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    summary: {
      get () {
        return this.count
      },
      set (val) {
        this.count = val
      }
    }
  },
  methods: {
    add () {
      this.summary++
    }
  }
}
</script>
