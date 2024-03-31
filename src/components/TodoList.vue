<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  data: any[]
}>()

</script>

<template>
  <div v-for="item in data" :key="item.id">
    <div>{{ item.title }}</div>
  </div>
</template>
