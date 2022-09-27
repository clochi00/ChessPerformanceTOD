<template>
  <div class="yearselection">
    <label for="year">Year</label>
    <input @input="debounceYear" type="number" id="year" :value="props.startYear" min="2007" :max="props.startYear" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  startYear: number;
}>();

const emit = defineEmits<{
  (e: 'yearChanged', year: number): void;
}>();

let debounce: ReturnType<typeof setTimeout> = setTimeout(() => '', 600);
const debounceYear = (event: Event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const target = event.target as HTMLInputElement;
    emit('yearChanged', Number(target.value) ?? props.startYear);
  }, 1000);
};
</script>

<style scoped></style>
