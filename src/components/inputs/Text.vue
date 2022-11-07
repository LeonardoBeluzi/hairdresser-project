<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
</script>

<template>
  <div class="form-control w-full max-w-xs py-6">
    <label class="label">

    </label>
    <input
      type="text"
      placeholder="Nome do Cliente"
      class="input input-lg input-bordered input-primary w-full max-w-xs"
    />
  </div>

  <div class="form-control w-full max-w-xs py-6">
    <label class="label">

    </label>
    <input
      type="text"
      placeholder="Endereço"
      class="input input-lg input-bordered input-primary w-full max-w-xs"
    />
  </div>

  <div class="form-control w-full max-w-xs py-6">
    <label class="label">

    </label>
    <input
      type="text"
      placeholder="Número de Telefone"
      class="input input-lg input-bordered input-primary w-full max-w-xs"
    />
  </div>
</template>
