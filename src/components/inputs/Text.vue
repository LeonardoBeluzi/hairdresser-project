<script setup lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
</script>

<template>
  <div class="form-control w-full max-w-xs py-4 mt-8">
    <label class="label"> </label>
    <input
      type="text"
      placeholder="Nome do Cliente"
      class="input input-lg input-bordered w-full max-w-xs bg-neutral input-secondary placeholder-gray-700"
    />
  </div>

  <div class="form-control w-full max-w-xs py-4">
    <label class="label"> </label>
    <input
      type="text"
      placeholder="Endereço"
      class="input input-lg input-bordered w-full max-w-xs bg-neutral input-secondary placeholder-gray-700"
    />
  </div>

  <div class="form-control w-full max-w-xs py-4">
    <label class="label"> </label>
    <input
      type="text"
      placeholder="Número de Telefone"
      class="input input-lg input-bordered w-full max-w-xs bg-neutral input-secondary placeholder-gray-700"
    />
  </div>
</template>
