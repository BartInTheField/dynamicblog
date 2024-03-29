import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md', '.svx'],
      layout: {
        post: './src/routes/posts/layout.svelte'
      }
    })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;
