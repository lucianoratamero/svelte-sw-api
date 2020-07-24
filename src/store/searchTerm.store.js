import { writable } from 'svelte/store';

function createSearchTermStore(){
  const { subscribe, update, set } = writable('');

  const updateTerm = searchTerm => update(state => state = searchTerm)

  return {
    subscribe,
    update: updateTerm,
  };
}

const store = createSearchTermStore()

export default store;
