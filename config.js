'use strict';

module.exports = {
  url: 'https://whybein.github.io',
  pathPrefix: '/',
  title: 'whybein blog',
  subtitle: 'Back-End 개발자입니다.',
  copyright: 'whybein © All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Taylor Youngbo Shim',
    photo: '/photo.jpg',
    bio: 'Back-End 개발자',
    contacts: {
      email: 'swhybeing@gmail.com',
      github: 'https://github.com/whybein'
    }
  }
};
