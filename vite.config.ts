import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 서버 없이 브라우저에서만 실행되는 정적 SPA (사양 6절 제품 계약)
// GitHub Pages 배포: https://<user>.github.io/sentence-purpose-transform/ 경로에 맞춰 base 설정.
// 로컬 개발(dev)에서는 base 없이 루트로 동작.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesBase = repositoryName ? `/${repositoryName}/` : '/sentence-purpose-transform/';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? pagesBase : '/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
});
