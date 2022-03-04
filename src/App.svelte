<script>
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

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

  $: count = feedback.length;
  $: average = feedback.reduce((a, { rating }) => a + rating, 0) / count;

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id != itemId);
  };
</script>

<main class="container">
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
