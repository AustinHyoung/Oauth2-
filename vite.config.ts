import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      build: {
        rollupOptions: {
          input: './src/index.tsx',
        },
      },
      server: {
        port: 3010,
      },
    };
  } else {
    return {
      // 프로덕션 빌드 설정
      build: {
        rollupOptions: {
          input: './src/index.tsx',
        },
      },
      publicDir: 'public',
    };
  }
});
