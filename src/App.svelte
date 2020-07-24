<script lang="ts">
	import SearchInput from './components/SearchInput.svelte';
	import SearchResults from './components/SearchResults.svelte';
</script>

<main>
	<h1>Star Wars API</h1>
	<SearchInput />
	<SearchResults />
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
