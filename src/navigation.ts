import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
  ],
};

export const footerData = {
  links: [
    {
      title: 'About Us',
      links: [
        { text: 'About', href: '/about' },
        { text: 'WebSite', href: 'https://www.nuovotaka.com' },
        { text: 'Blog', href: 'https://blog.nuovotaka.com' },
        { text: 'DIY Keyboard Shop', href: 'https://nuovotaka-kbd.stores.jp' },
        { text: 'Leather Craft Shop', href: 'https://nuovotaka-leather.stores.jp' },
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/nuovotaka' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@nuovotakatv' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/takahiro_723/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nuovotaka' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://www.nuovotaka.com/">nuovotaka</a> · All rights reserved.
  `,
};