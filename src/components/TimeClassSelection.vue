<template>
  <div class="timeclasses">
    <label for="rapid">Rapid</label>
    <input type="checkbox" id="rapid" @change="debounceTimeClasses" :value="ETimeClass.RAPID" checked />
    <label for="blitz">Blitz</label>
    <input type="checkbox" id="blitz" @change="debounceTimeClasses" :value="ETimeClass.BLITZ" checked />
    <label for="bullet">Bullet</label>
    <input type="checkbox" id="bullet" @change="debounceTimeClasses" :value="ETimeClass.BULLET" checked />
  </div>
</template>

<script setup lang="ts">
import { ETimeClass } from '@/model/dto/game-dto.types';

const emit = defineEmits<{
  (e: 'classAdded', timeclass: ETimeClass): void;
  (e: 'classRemoved', timeclass: ETimeClass): void;
}>();

let debounce: ReturnType<typeof setTimeout> = setTimeout(() => '', 200);
const debounceTimeClasses = (event: Event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      emit('classAdded', target.value as ETimeClass);
    } else {
      emit('classRemoved', target.value as ETimeClass);
    }
  }, 200);
};
</script>

<style scoped></style>
