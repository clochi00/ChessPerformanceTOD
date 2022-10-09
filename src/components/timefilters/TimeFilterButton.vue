<template>
  <button :class="getBtnClass" @click="setTimeFilter(days)" :disabled="loading">{{ title }}</button>
</template>

<script setup lang="ts">
import { useTimeFilter } from '@/composables/timefilter';
import { computed } from 'vue';
const props = defineProps<{ title: String; days: number, loading: boolean }>();
const { daysBack, setTimeFilter } = useTimeFilter();
const getBtnClass = computed((): string => {
  return daysBack.value == props.days ? 'active-time-filter' : '';
});
</script>

<style scoped>
button {
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0.5em;
  font-size: larger;
}

.active-time-filter {
  color: var(--chess-color);
}
</style>
