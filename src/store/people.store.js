import { derived } from 'svelte/store';

import searchTerm from './searchTerm.store';

export default derived(
  searchTerm,
  $searchTerm => {
    if ($searchTerm.length){
      return fetch(`https://swapi.dev/api/people/?search=${$searchTerm}`)
        .then(response => response.json())
        .then(data => data.results);
    } else {
      return Promise.resolve([]);
    }
  }
);
