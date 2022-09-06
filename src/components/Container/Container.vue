<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
</script>

<template>
  <div class="flex justify-center">
    <div
      class="container w-2/5 mx-auto bg-base-100 flex-col grid justify-items-center my-36 rounded-lg shadow-lg"
    >
      <slot class="w-full max-w-xs self-center"></slot>
    </div>
  </div>
</template>
