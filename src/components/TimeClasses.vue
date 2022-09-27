<template>
  <div class="timeclasses">
    <label for="rapid">Rapid</label>
    <input type="checkbox" id="rapid" @change="debounceTimeClasses" :value="ETimeClass.RAPID" checked />
    <label for="blitz">Blitz</label>
    <input type="checkbox" id="blitz" @change="debounceTimeClasses" :value="ETimeClass.BLITZ" checked />
    <label for="bullet">Bullet</label>
    <input type="checkbox" id="bullet" @change="debounceTimeClasses" :value="ETimeClass.BULLET" checked />
  </div>
  <p>{{ selectedClasses }}</p>
</template>

<script setup lang="ts">
import { useStats } from '@/composables/stats';
import { ETimeClass } from '@/model/dto/game-dto.types';

const { selectedClasses } = useStats();

let debounce: ReturnType<typeof setTimeout> = setTimeout(() => '', 600);
const debounceTimeClasses = (event: Event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      selectedClasses.value.add(target.value as ETimeClass);
    } else {
      selectedClasses.value.delete(target.value as ETimeClass);
    }
  }, 1000);
};
</script>

<style scoped></style>
