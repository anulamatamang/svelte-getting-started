import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 2,
    text: 'lorem ipsum dolor sit amet consectetur adipiscing elit. consequuntur vel vitae commidi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    text: 'lorem ipsum dolor sit amet consectetur adipiscing elit. consequuntur vel vitae commidi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'lorem ipsum dolor sit amet consectetur adipiscing elit. consequuntur vel vitae commidi alias voluptatem est voluptatum ipsa quae.',
  },
]);
