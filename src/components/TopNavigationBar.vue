<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
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
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
        >
          <li><a>Home</a></li>
          <li><a>Cadastro</a></li>
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
