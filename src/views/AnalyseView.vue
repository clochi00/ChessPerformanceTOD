<template>
  <div>analyse {{ userName }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const userName = useRoute().query.username;
</script>

<style scoped></style>
