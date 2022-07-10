<script lang="ts">
  // These props get filled in from the page's front matter
  export let title: string;
  export let coverImageUrl: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:image" content={coverImageUrl} />
</svelte:head>

<article>
  <h1>{title}</h1>
  <img src={coverImageUrl} alt={title} />
  <slot />
  <a href="/">Back to posts</a>
</article>
