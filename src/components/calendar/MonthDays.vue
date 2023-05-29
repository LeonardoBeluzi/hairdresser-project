<template>
  
</template>

<script lang="ts" setup>
  import { ref, watch, toRefs } from "vue";
  import { fullMonth } from "./dates";
  import { monthNumber, monthName } from "typescript-calendar-date";
  import type { Directive } from 'vue';
  import type { WeekFirstDay, Month } from "./dates";

  type activeDay = {
    month: number;
    year: number;
    date: number;
  };

  const props = defineProps<{
    startDay: WeekFirstDay;
    month: number;
    year: number;
    activeDay?: activeDay;
    events: {
      date: number;
      month: number;
      year: number;
    }[];
  }>()

  const vEvents: Directive = {
    mounted: (el: HTMLElement, binding: any) => {
      const eventCount = ref("");
      props.events.forEach((ev) => {
        if (ev.date === binding.value.date && monthName(ev.month) === binding.value.month && ev.year === binding.value.year){
          eventCount.value = eventCount.value + "<i class='w-[5px] h-[5px] rounded-full bg-secondary mx-[1px]'></i>";
        }
      });
      el.innerHTML = eventCount.value;
    }
  };

</script>