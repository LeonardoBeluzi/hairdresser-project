<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="navbar bg-primary">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-primary btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Agenda</a></li>
          <li><a>Cadastrar cliente</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-primary normal-case text-xl">Agenda</a>
    </div>
    <div class="navbar-end"></div>
  </div>
  <div class="overflow-x-auto"></div>
</template>
