<template>
  <div class="progressbar-container">
    <div class="progressbar">
      <div :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number;
}>();
</script>

<style scoped>
.progressbar {
  margin: auto;
  width: 30%;
  border: 1px solid gray;
  /* border-radius: 7px; */
  /* (height of inner div) / 2 + padding */
  /* padding: 1px; */
}

.progressbar div {
  /* border-radius: 5px; */
  height: 10px;
  background-color: var(--chess-color);
  transition: width 400ms ease;
}

.progressbar-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
