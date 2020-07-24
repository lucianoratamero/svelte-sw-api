<script lang="ts">
  import people from '../store/people.store';
</script>

{#await $people}
  <p>Searching...</p>
{:then $people}
  {#each $people as person}
    <h1>Name: {person.name}</h1>
  {/each}
{/await}
