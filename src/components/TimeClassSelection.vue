<template>
  <div class="timeclasses">
    <div class="cb-and-label">
      <label for="rapid">Rapid</label>
      <input type="checkbox" id="rapid" @change="debounceTimeClasses" :value="ETimeClass.RAPID" checked />
    </div>
    <div class="cb-and-label">
      <label for="blitz">Blitz</label>
      <input type="checkbox" id="blitz" @change="debounceTimeClasses" :value="ETimeClass.BLITZ" checked />
    </div>
    <div class="cb-and-label">
      <label for="bullet">Bullet</label>
      <input type="checkbox" id="bullet" @change="debounceTimeClasses" :value="ETimeClass.BULLET" checked />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ETimeClass } from '@/model/dto/game/game-dto.types';

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

<style scoped>
input {
  accent-color: green;
}
.timeclasses {
  display: flex;
}

.cb-and-label {
  display: flex;
  align-items: center;
  padding: 1em;
}

.cb-and-label label {
  margin-right: 5px;
}
</style>
