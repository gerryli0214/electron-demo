<template>
  <div class='full'>
    <button @click="add">按钮</button>
  </div>
</template>

<script>
export default{
  name: 'testDemo',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add () {
      this.count++
    }
  }
}
</script>
