<script setup lang="ts">
import { defineComponent } from 'vue'
import TodoList from '@/components/TodoList.vue';
import Working from '@/components/Working.vue';

defineProps<{
  title: string,
  name: string
}>()

const TODO_DATA: any = [
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Learn TypeScript', completed: true },
  { id: 3, title: 'Learn Vite', completed: false },
  { id: 4, title: 'Build something awesome', completed: false },
]

defineComponent({
  name: 'App',
  components: {
    TodoList,
    Working
  },
})

</script>

<template>
  <TodoList :data="TODO_DATA" />
  <Working />
</template>

