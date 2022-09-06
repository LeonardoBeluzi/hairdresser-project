<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="navbar bg-primary">
    <div class="navbar-start">
      <div class="dropdown">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="btn-primary inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-primary text-sm font-medium hover:bg-neutral focus:outline-none focus:ring-5 focus:ring-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
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
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-left absolute left mt-2 w-56 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[
                      active ? 'bg-accent text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    ]"
                    to="/"
                    tag="button"
                    >Home</router-link
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[
                      active ? 'bg-accent text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    ]"
                    to="/ClientRegister"
                    tag="button"
                    >Cadastro</router-link
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-primary normal-case text-xl">Agenda</a>
    </div>
    <div class="navbar-end"></div>
  </div>
  <div class="overflow-x-auto"></div>
</template>
