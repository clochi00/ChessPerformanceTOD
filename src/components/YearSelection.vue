<template>
  <div class="yearselection">
    <label for="year">Year</label>
    <div class="year-inputs">
      <button class="year-btn" @click="debounceYearDown">-</button>
      <input
        class="the-actual-input"
        @input="debounceYearDirectInput"
        type="number"
        id="year"
        :value="selectedYear"
        min="2007"
        :max="currentYear"
      />
      <button class="year-btn" @click="debounceYearUp" :disabled="plusDisabled">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getYear } from 'date-fns';
import { ref, computed } from 'vue';

const props = defineProps<{
  startYear: number;
}>();
const selectedYear = ref(props.startYear);
const currentYear = getYear(new Date());

const plusDisabled = computed(() => {
  return currentYear == selectedYear.value;
});

const emit = defineEmits<{
  (e: 'yearChanged', year: number): void;
}>();

const debounceYearUp = () => {
  ++selectedYear.value;
  changeYearDebounced();
};

const debounceYearDown = () => {
  --selectedYear.value;
  changeYearDebounced();
};

let debounce: ReturnType<typeof setTimeout> = setTimeout(() => '', 800);
const debounceYearDirectInput = (event: Event) => {
  selectedYear.value = Number((event.target as HTMLInputElement).value) ?? selectedYear.value;
  changeYearDebounced();
};

const changeYearDebounced = () => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    emit('yearChanged', selectedYear.value);
  }, 800);
};
</script>

<style scoped>
.year-btn {
  width: 2em;
}
.yearselection {
  display: flex;
  align-items: center;
}

.year-inputs {
  display: flex;
  padding-left: 1em;
}

.the-actual-input {
  padding-left: 1em;
  padding-right: 1em;
}

.the-actual-input::-webkit-outer-spin-button,
.the-actual-input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.the-actual-input {
  -moz-appearance: textfield; /* Firefox */
  appearance: none;
}
</style>
