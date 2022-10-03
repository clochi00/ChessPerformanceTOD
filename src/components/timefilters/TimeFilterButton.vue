<template>
  <button :class="getBtnClass" @click="setTimeFilter(days)">{{ title }}</button>
</template>

<script setup lang="ts">
import { useTimeFilter } from '@/composables/timefilter';
import { computed } from 'vue';
const props = defineProps<{ title: String; days: number }>();
const { daysBack, setTimeFilter } = useTimeFilter();
const getBtnClass = computed((): string => {
  console.log(daysBack.value);
  console.log(props.days);

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
