import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest({
  manifest_version: 3,
  name: '__MSG_appName__',
  description: '__MSG_appDesc__',
  default_locale: 'en',
  version: '1.0.0',
  icons: {
    '16': 'img/logo-16.png',
    '32': 'img/logo-34.png',
    '48': 'img/logo-48.png',
    '128': 'img/logo-128.png',
  },
  action: {
    default_popup: 'src/popup/popup.html',
    default_icon: 'img/logo-48.png',
  },
  options_page: 'src/options/options.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  host_permissions: [
    'https://*.bing.com/',
    'https://*.openai.com/',
    'https://bard.google.com/',
  ],
  permissions: ['storage', 'unlimitedStorage', 'activeTab', 'tabs'],
  content_scripts: [
    {
      matches: ['<all_urls>', '*://*/*'],
      js: ['src/content-script/index.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'img/logo-16.png',
        'img/logo-34.png',
        'img/logo-48.png',
        'img/logo-128.png',
      ],
      matches: [],
    },
  ],
});
