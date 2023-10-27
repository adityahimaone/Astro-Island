<script>
  import {counter, subtractFromCounter, addToCounter} from "../stores/Counter"
  // thanks to sveltes $ declaration of reactive variables we do not need to import some useStore function
  // We can use $counter directly in our template.
</script>

<svelte:head>
  <meta name="injected" content="true" />
</svelte:head>

<div>
  <h1 class="bold text-xxl">Svelte...</h1>
  <div class="counter">
    <button on:click={subtractFromCounter}>-</button>
    <pre>{ $counter }</pre>
    <button on:click={addToCounter}>+</button>
  </div>
  <div class="message">
    <slot />
  </div>
</div>