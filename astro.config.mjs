// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    css: {
      lightningcss: {
        targets: {
          safari: (15 << 16) | (4 << 8),
          chrome: 90 << 16,
          firefox: 90 << 16,
        }
      }
    }
  }
});
