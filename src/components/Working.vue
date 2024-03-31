<script lang="ts">

export default {
  name: 'Working',
  setup() {
    const firstName = 'John';
    return {
      firstName
    }
  }
}


</script>

<template>
    <div>Working with {{ firstName }}</div>
</template>