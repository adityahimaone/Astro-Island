<script setup>
// Same as for React but this time from @nanostores/vue we import useStore for reactivity
import { useStore } from "@nanostores/vue";
import { counter, subtractFromCounter, addToCounter } from "../stores/Counter";

// the Same here we simply put our counter into useStore
const count = useStore(counter);
</script>

<template>
    <div>
        <h1 class="bold text-xxl">Vue...</h1>
        <div class="counter">
            <button @click="subtractFromCounter">-</button>
            <pre>{{ count }}</pre>
            <button @click="addToCounter">+</button>
        </div>
        <div class="message">
            <slot />
        </div>
    </div>
</template>
