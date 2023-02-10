<script setup lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
</script>

<template>
    <div class="flex justify-center mt-4">
        <div class="btn-group shadow-lg">
            <button class="btn btn-secondary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                
            </button>
            <button class="btn btn-secondary text-lg text-white"></button>
            <button class="btn btn-secondary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </button>
        </div>
    </div>
    <div class="grid grid-cols-7 gap-8 m-5">
        <div class="bg-secondary text-center text-white font-bold shadow-lg rounded-lg p-3"></div>
    </div>
    <div class="grid grid-cols-7 gap-8 m-5">
        <div class="bg-neutral text-end text-primary font-bold shadow-lg rounded-lg h-75 pb-24 pt-2 pr-2">
        </div>
    </div>
</template>