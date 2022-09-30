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
  width: 30%;
  border: 1px solid gray;
  /* border-radius: 7px; */
  /* (height of inner div) / 2 + padding */
  /* padding: 1px; */
}

.progressbar div {
  /* border-radius: 5px; */
  height: 10px;
  background-color: #32a885;
  transition: width 400ms ease;
}

.progressbar-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
