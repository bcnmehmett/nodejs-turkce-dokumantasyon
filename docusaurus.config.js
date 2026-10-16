// GitHub Actions GITHUB_REPOSITORY degiskenini otomatik verir. Yerelde varsayilan adres kullanilir.
const repository = process.env.GITHUB_REPOSITORY || '';
const [owner, repo] = repository.split('/');
const isPagesRoot = repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const pagesBaseUrl = isPagesRoot ? '/' : `/${repo || 'nodejs-turkce-dokumantasyon'}/`;
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const config = {
  title: 'Node.js Türkçe Teknik Dokümantasyon',
  tagline: 'Türkçe, açık ve örnekli Node.js öğrenme arşivi',
  favicon: 'img/favicon.svg',
  url: isGithubActions && owner ? `https://${owner}.github.io` : 'http://localhost:3000',
  baseUrl: isGithubActions ? pagesBaseUrl : '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'tr', locales: ['tr']},
  presets: [[
    'classic',
    {
      docs: {routeBasePath: '/', sidebarPath: './sidebars.js', editUrl: undefined},
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    },
  ]],
  themeConfig: {
    navbar: {title: 'Node.js Türkçe', items: [{to: '/',label: 'Dokümantasyon',position: 'left'}]},
    footer: {style:'dark',copyright: `Bağımsız Türkçe teknik eğitim arşivi · ${new Date().getFullYear()}`},
    prism: {additionalLanguages:['bash','javascript','json']},
  },
};
module.exports = config;
