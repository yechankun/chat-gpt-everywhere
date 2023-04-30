import App from './App.svelte';
import tailwind from '~/assets/app.scss?inline';
// 새 엘리먼트 생성
const everywhere = document.createElement(import.meta.env.VITE_APP_TAG);
// html에 추가

document.documentElement.appendChild(everywhere);

const shadowRoot = everywhere.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `<style>${tailwind}</style>`;

const app = new App({
  target: shadowRoot,
});

export default app;
