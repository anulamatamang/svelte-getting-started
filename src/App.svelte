<script>
  import FeedbackList from './components/FeedbackList.svelte';

  let feedback = [
    {
      id: 1,
      rating: 10,
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
  ];
</script>

<main class="container">
  <FeedbackList {feedback} />
</main>
