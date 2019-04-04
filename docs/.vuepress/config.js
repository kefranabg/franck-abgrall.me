module.exports = {
  title: 'Franck Abgrall',
  description: '💻 Fullstack developer',
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    logo: '/assets/img/franck.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/overview/' },
      { text: 'Twitter', link: 'https://twitter.com/FranckAbgrall' },
      { text: 'Github', link: 'https://github.com/kefranabg' },
      { text: 'Linkedin', link: 'https://www.linkedin.com/in/franckabgrall' },
     
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          ['/overview/', 'Overview']
        ]
      }
    ]
  }
}