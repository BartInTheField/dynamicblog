<script lang="ts">
  import Index from './index.svelte';

  const fetchPosts = (async () => {
    const response = await fetch('/posts/list.json');
    return await response.json();
  })();
</script>

<article>
  <h1>Posts</h1>
  {#await fetchPosts}
    Loading...
  {:then posts}
    {JSON.stringify(posts)}
  {/await}
</article>
