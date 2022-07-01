module.exports = {
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/qiao.jpeg',
        // 你可以通过 themeConfig.nav 增加一些顶部导航栏链接:
        // navbar: false,//设置为false的时候，导航栏不存在
        nav: [
            { text: 'Home', link: '/' },
            { text: 'main', link: '/main' },
            { text: 'about', link: '/about' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
            // { text: '打开谷歌', link: 'https://google.com' },
            // 外部链接 <a> 标签的特性将默认包含target="_blank" rel="noopener noreferrer"，你可以提供 target 与 rel，它们将被作为特性被增加到 <a> 标签上
            // { text: '本页打开谷歌', link: 'https://google.com', target: '_self', rel: '' },
            // { text: 'Guide', link: '/guide/', target: '_blank' }
        ],
        // 侧边栏 指  首页 侧边栏 或者配置 具体页面

    },
    // sidebar: [
    //     '/',
    // ]
}