module.exports = {
    title: 'lz-tool',
    themeConfig: {
        // logo: '/assets/img/logo.png', // logo
        lastUpdated: 'Last Updated', // string | boolean 时间戳
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: '中文', link: '/language/chinese/' },
                  { text: 'English', link: '/language/english/' }
                ]
            },
            // { text: 'GitHub', link: 'https://github.com/zjy365/lz-tool' },
        ],
        sidebar: [
          // {
          //   title: '简介',
          //   collapsable: false,
          //   children: [
          //     'views/guide/install.md',
          //   ]
          // },
          {
            title: '自定义实现',
            collapsable: false,
            children: [
              'views/01_函数相关',
              'views/02_数组相关',
              'views/03_对象相关',
              'views/04_字符串相关',
              'views/05_手写带委托的事件监听',
              'views/06_手写ajax请求函数',
              'views/07_手写事件总线',
              'views/08_手写消息订阅与发布',
            ]
          },
        ]
    }
}