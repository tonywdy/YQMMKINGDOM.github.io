/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","4623bca25b2e2d3c5d7de6613fccae47"],["/KWGAME/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/KWGAME/index.html","13af59066b9267761a9dd88cb36a288c"],["/My-secret-base/css/cnm.sb_bg.css","105dc5eb986e8d5f1ad4dec62c1a8f36"],["/My-secret-base/css/cnm.sb_load.css","3c6dcc637a376b033161b1b7ef3e9d31"],["/My-secret-base/css/cnm.sb_mp.css","ee4f281824f29b309e2fba954146c9ef"],["/My-secret-base/css/cnm.sb_pc.css","0e68ec256edc4ff916de120e6314ac9c"],["/My-secret-base/font/cnm.sb.ttf","8cdde8c3561834bbed575532294b706a"],["/My-secret-base/font/cnmsb01.png","bf41d5d7c1b79bee6a2622d33fada794"],["/My-secret-base/font/cnmsb02.png","21334fc3dc963c237495e9e9740c3dd7"],["/My-secret-base/font/cnmsb03.png","9d21104777b732948e31fc8e0adc5731"],["/My-secret-base/font/cnmsb04.png","d45f70683f07fd2451f218007659649a"],["/My-secret-base/font/cnmsb05.png","d7bfe0331e78d256e53604daeaff3cd0"],["/My-secret-base/font/cnmsb06.png","7585b1b6a71957793a3b575672633b3e"],["/My-secret-base/font/cnmsb07.png","86f83d73e69d2f4df0516f976653b014"],["/My-secret-base/img/benzhanyuanma.jpg","3b1c4946ae7bedfcd7396737ba93cf35"],["/My-secret-base/img/cnm.sb.svg","defb2e89adad0c7c7a3668c4d229c0e6"],["/My-secret-base/img/cnm.sb_logo.svg","0cbd985c0c8f0dc8e688572d377789fc"],["/My-secret-base/img/cnmteam01.png","6215be6073e5523319961d34f5b19834"],["/My-secret-base/img/cnmteam02.png","bc6a8420ce172cce6ed46f58a93afbee"],["/My-secret-base/img/cnmteam03.png","ea81fb6490791402838f8f64b19f1608"],["/My-secret-base/img/cnmteam04.png","f356a1cbadf0315b30d4582a8e7618c8"],["/My-secret-base/img/cnmteam05.png","4f28192a33c928dfb43e3f9acb756c43"],["/My-secret-base/img/cnmtlbg.jpg","0537ef66a80dd8408eb9c0e5fd1ed74e"],["/My-secret-base/img/guanyuzhanzhang.jpg","081d714b992221a2e89f48108482e868"],["/My-secret-base/img/huashui.jpg","33dcfcb5a29ec82f9ffba5c45d3d5f96"],["/My-secret-base/img/jing.png","a8c00894e29a6edaa1142eb8ff1341f2"],["/My-secret-base/img/jingtaiziyuan.jpg","95f47647a5dc4c27fdb235076e18b945"],["/My-secret-base/img/nav05_fj.png","9f11331ccec22a671573f0d4ac64f0c9"],["/My-secret-base/img/nav05_zp01.jpg","efdf95bf6de5bbbbaf4f1dfbae5e2a0a"],["/My-secret-base/img/nav05_zp02.jpg","22cdb2fb22b3502eabde3dcd71154fb9"],["/My-secret-base/img/nav05_zp03.jpg","d5f98868a88433dff03c9019cfdf0ba8"],["/My-secret-base/img/nav05_zp04.jpg","2700cc3bd3547fae47db44827c3cca56"],["/My-secret-base/img/nav05_zp05.jpg","829a54b29dc0734ef6bd592cab997d4a"],["/My-secret-base/img/qywx.png","57d9f7ad05ab8e809fe2429faec869e6"],["/My-secret-base/img/shangyehezuo.png","841a7f7cafae0cb6f101373d493efabc"],["/My-secret-base/img/shouye.jpg","f0c7805c60e8fac1495b2e69dd427130"],["/My-secret-base/img/start.jpg","6e2e00e7ba1c02482c20f1378f1a3236"],["/My-secret-base/img/tx.jpg","d77bbcb8d49b8616b264dd6bd0e5f92d"],["/My-secret-base/img/yuhangyuan.png","feb5c79d216b27b0d933ec35b26605e8"],["/My-secret-base/img/zhandian.jpg","bd05b7d22a8486b3700416e6ddaac4b3"],["/My-secret-base/index.html","952b11f5cfbeebff567cc9d90e620313"],["/My-secret-base/js/cnm.sb_bg.js","b7642aa658a5c5b9ae090673061fd4fe"],["/My-secret-base/js/cnm.sb_copy.js","8602c74cb3bfaf756461b2a3799e80c7"],["/My-secret-base/js/cnm.sb_judge.js","f330b9787039c59858aa79f8c0a01d94"],["/My-secret-base/js/cnm.sb_mp.js","7faae29f36c16d6fceb4eeb8a9857cea"],["/My-secret-base/js/cnm.sb_pc.js","dabc1973f647864a28dd011453e24948"],["/My-secret-base/js/jquery-3.2.1.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/about/index.html","44fe034e9bec80197da48afe7ddfa9d8"],["/archives/2019/08/index.html","01929f0d4f5608b1e0afb43018ffe3dd"],["/archives/2019/index.html","2d0fa3114fd18b2185f229dfab37fc9e"],["/archives/2020/02/index.html","fffa626a371947c4037b19bac0183743"],["/archives/2020/index.html","dc392734fa506534c61211725b1fc3f4"],["/archives/2021/06/index.html","d035d37d8c550cf04396031e95d125a4"],["/archives/2021/index.html","8b1817387c4b06b6c259480f03a94615"],["/archives/2022/05/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/05/page/2/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/05/page/3/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/05/page/4/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/05/page/5/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/05/page/6/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/05/page/7/index.html","805ba3f8ffa798e0fcdb65f57246d0de"],["/archives/2022/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/2022/page/2/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/2022/page/3/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/2022/page/4/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/2022/page/5/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/2022/page/6/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/2022/page/7/index.html","0cd452dd9941bf4d99ac42a67890c4d9"],["/archives/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/2/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/3/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/4/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/5/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/6/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/7/index.html","0436e6b4c967b1d011efc200c6d46254"],["/archives/page/8/index.html","0436e6b4c967b1d011efc200c6d46254"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","0ff4df65a42c10deb2714648b7257364"],["/box/1/configs.js","7939f47a3619876b666e996f25ada7cf"],["/box/1/documents/assets/1.png","0c94ed16cf24ce1528ffcf9af7631184"],["/box/1/documents/assets/2.png","f0f16f2795ddaf8b7f89507c10c20c42"],["/box/1/documents/assets/3.png","d5770733591cf5a0d0abcc080bc59280"],["/box/1/documents/assets/4.png","70a40e24ce868aac94bd26e52b693f1c"],["/box/1/documents/assets/5.png","0fab93872508932afdec662d89b51667"],["/box/1/documents/assets/6.png","467e91c75dded0118d15010db5d83d92"],["/box/1/documents/assets/7.png","16412af75814b6f503aaa40d29596244"],["/box/1/documents/assets/8.png","1bfc57e3215b0d1392f9fd50e3829d14"],["/box/1/index.html","4f2d0d40fa726cf05946922ce63b75be"],["/box/1/onLoad.js","3fef2bc53efec7a08f3ff8a939df1123"],["/box/1/res/apps/app-store/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/apps/app-store/index.html","d784b85577bde57bea8b0d50500c95ed"],["/box/1/res/apps/app-store/preview.jpg","09e51965739a26c73b3644d504286fc6"],["/box/1/res/apps/app-store/script.js","0747ebd509f5cda2ceb96ebbecc616e9"],["/box/1/res/apps/app-store/style.css","957461d7a9cfb5a3599fde6662e33de0"],["/box/1/res/apps/app-store/tpl-setup.html","f0d654f98fbc613b7a2d75e5f960ff03"],["/box/1/res/apps/browser/index.css","4cbca48bd4945f1cf2605afe3a6c9815"],["/box/1/res/apps/browser/index.html","a4753392c7beba4ae25b92e9c5936041"],["/box/1/res/apps/colorPicker/colorPicker.html","34a130f2e0fc54b003a0c372986ccbac"],["/box/1/res/apps/element-ui/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/box/1/res/apps/element-ui/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/box/1/res/apps/element-ui/index.css","c048efcb00f2d5bf9c514d4ef1a60e1a"],["/box/1/res/apps/element-ui/index.js","f6398839e5674f9ef46a728938a49082"],["/box/1/res/apps/server/import.html","cd20cf5f57da60efd8381d4049bd1ca4"],["/box/1/res/apps/server/index.html","aae611ddb4ed8de0f29a7f85c962c609"],["/box/1/res/apps/yl-system/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/apps/yl-system/index.html","db81063dc0726cc06b59b5cec819247b"],["/box/1/res/apps/yl-system/index.js","730bf4346f2f74f6d37d1686114b289b"],["/box/1/res/apps/yl-system/style.css","6956981ba08268b80810a0cd73f3cdf5"],["/box/1/res/components/animate.css","07f146141537e04ee282a965d8053198"],["/box/1/res/components/calendar/script.js","7deb1ea55685d1d65a41e24c42a82a1d"],["/box/1/res/components/calendar/style.css","889d07ffaea6e80b59778f86c2841b50"],["/box/1/res/components/clipboard-polyfill.js","43c47e6f9a265440b6d6d5c042c1abc2"],["/box/1/res/components/color-picker/color-picker.css","a13ab1ee68fc00fe975eade37d99459e"],["/box/1/res/components/color-picker/color-picker.js","090bdc46e53dba4bd8cbe45733a633f1"],["/box/1/res/components/contextMenu/contextMenu.css","ae22314e52256977b12617e6106ef13d"],["/box/1/res/components/contextMenu/contextMenu.js","3200bb8c4c3804ec329d6fd9845aaa23"],["/box/1/res/components/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/box/1/res/components/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/box/1/res/components/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/box/1/res/components/jquery.nicescroll.min.js","d247c9568e051b91d27ba6901447e8b0"],["/box/1/res/components/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/box/1/res/components/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/box/1/res/components/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/box/1/res/components/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/box/1/res/components/vue-grid-layout-2.1.11.min.js","1871f71290243d0d7171c0d1a0658502"],["/box/1/res/components/vue.min.js","24063abba2ad45c26b7329e89be49d8d"],["/box/1/res/css/grid.css","4e60778d5d194f1d61e60c773ef71f1e"],["/box/1/res/css/loading.css","efb0adcae18636c7ee6d07dde4b617d9"],["/box/1/res/css/main.css","62be0e07a3497dfa89518d5d2b3d6314"],["/box/1/res/css/tiles.css","0979d1d8dda0229e159dbc182e1a2d0a"],["/box/1/res/css/yl-layer-skin.css","66da08271805c80346365f415730abc6"],["/box/1/res/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/box/1/res/img/donation.png","cfcd102cefe411740a1942c4b1101348"],["/box/1/res/img/favicon.png","10211db9350a68716100fd7388607507"],["/box/1/res/img/icon/close.svg","c5449b9ab12de31be87bd78457ead906"],["/box/1/res/img/icon/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/img/icon/maximize.svg","5ec8b0ca1f75ef84473c9427bda6a899"],["/box/1/res/img/icon/message.svg","8990eb1399ec6e43c4ee9438214d4695"],["/box/1/res/img/icon/minimize.svg","62149b882a325456940eff4eb1022936"],["/box/1/res/img/icon/restore.svg","03e35aef920cfdfac1f296f25c4be6b6"],["/box/1/res/img/splashscreen.png","cb619aaa3f7bc8b3f378116dade2507d"],["/box/1/res/img/wallpapers/bg1.jpg","cea0a23f072704cb0f0b41b4e4f66bb1"],["/box/1/res/img/wallpapers/bg10.jpg","6acbcd4cf862d24aaf49c61405a02a38"],["/box/1/res/img/wallpapers/bg10_1.jpg","1e53b55fb02187fd885757a755c68984"],["/box/1/res/img/wallpapers/bg11.jpg","bec82a612e3b52ba1a2820bd0e4d5b8c"],["/box/1/res/img/wallpapers/bg11_1.jpg","b6c175c0e2c97a761a6095e343529f16"],["/box/1/res/img/wallpapers/bg12.jpg","d2ca5202eb10f3689b842ae13b6caba5"],["/box/1/res/img/wallpapers/bg12_1.jpg","14c7f250b712e06d23bbe023fb889fd9"],["/box/1/res/img/wallpapers/bg13.jpg","1ec917e5682446735ca4d09ac84f928a"],["/box/1/res/img/wallpapers/bg13_1.jpg","1a46279896c688078c6220eaed07e585"],["/box/1/res/img/wallpapers/bg14.jpg","ba9874899616b7518abbd7341ac706a1"],["/box/1/res/img/wallpapers/bg14_1.jpg","fd89342c254552176af42894dfeca98e"],["/box/1/res/img/wallpapers/bg15.jpg","cea663b1846e1d9b9f8bf45271cc0372"],["/box/1/res/img/wallpapers/bg15_1.jpg","fef28b8dce7dfff5e5b66e70050123fe"],["/box/1/res/img/wallpapers/bg1_1.jpg","77267082c29f03e7ced5334c4c2cd6fb"],["/box/1/res/img/wallpapers/bg2.jpg","1e1b1435df09314556fa64a58207786f"],["/box/1/res/img/wallpapers/bg2_1.jpg","87a8f4d3d921465ea49efd17511e065f"],["/box/1/res/img/wallpapers/bg3.jpg","6f385fafa91a9d04edc147b5739701ec"],["/box/1/res/img/wallpapers/bg3_1.jpg","2cfaef13a35041ce80029d9642ff6e62"],["/box/1/res/img/wallpapers/bg4.jpg","c8ddd59ea29991a12cf2bbb32cd1f13c"],["/box/1/res/img/wallpapers/bg4_1.jpg","8b59566dd6042c2d8248be8b38be5238"],["/box/1/res/img/wallpapers/bg5.jpg","0c3e0c25734eb7ac9aecba0a54c9c370"],["/box/1/res/img/wallpapers/bg5_1.jpg","ce6241ebb979fa8f3a408dff6d4ab7f3"],["/box/1/res/img/wallpapers/bg6.jpg","9a1776b26aa188e6917a45cb723b54ec"],["/box/1/res/img/wallpapers/bg6_1.jpg","9f60177af7e692f9471c7ab8dd210044"],["/box/1/res/img/wallpapers/bg7.jpg","ab9983a8b4d908a7222e63fa0424c2f2"],["/box/1/res/img/wallpapers/bg7_1.jpg","8e00b2f155b0334709a9daad9e7ccf23"],["/box/1/res/img/wallpapers/bg8.jpg","49060b22ed69da83d0d1c512a26cdcf9"],["/box/1/res/img/wallpapers/bg8_1.jpg","f4e17b8106527915f20d47c02993bb8a"],["/box/1/res/img/wallpapers/bg9.jpg","a9d0daee47a24863e62cac0e6e7bc4f5"],["/box/1/res/img/wallpapers/bg9_1.jpg","866b853772e237fde4d6bd1121ad3c70"],["/box/1/res/img/wallpapers/uploadbg.png","40fd031ef5bda8f0fd6d93327e32e8a9"],["/box/1/res/js/Yuri2.js","ae175ca0a7934b03806b8424a809d19e"],["/box/1/res/js/yl-io.js","d69d4ad8bc59c6124d7b231cd1aa1d9f"],["/box/1/res/js/yl-render.js","da81ec2de006339144ef7045881cc210"],["/box/1/res/js/yl-vue-component-icon.js","0b73923ce415f0e6f7c13d543adca5be"],["/box/1/res/js/yl-vue-components.js","5e03ddb4fadbf61a35daf8a72f14aa48"],["/box/1/res/yl.app.js","5b78359c6df86b292fc5574508bd9909"],["/box/1/res/yl.js","1afa32b9dfd74aed7001bd823734d0ba"],["/categories/index.html","8fc4647b1f13f1a51cbc1a919583daa7"],["/categories/技术-Markdown语法教程/index.html","8595701519b5cbd0cc717b80874405c3"],["/categories/技术/index.html","26e3a701ce2d50e1710966b2cbcd12d0"],["/categories/技术/page/2/index.html","6befbe6200ec2de283cb3eb9a3685009"],["/categories/生活/index.html","6cad2e5124beea9a9752a4b4542f5ee0"],["/categories/资源/index.html","47119fb52fbe527bccfb8852749bac5b"],["/categories/转载/index.html","6c027486fb281cf850e3b08518a01bc7"],["/categories/转载/page/2/index.html","97e2a17d4d484b5221ab30e52cd8a295"],["/categories/转载/page/3/index.html","8d276eaaa70f9a6b89473317fdd54ca8"],["/categories/转载/page/4/index.html","a65852ab7ca38feaf0daf99a20f1ecf9"],["/categories/随想/index.html","a018235e52b15d782d6d3adebd786d40"],["/categories/随笔/index.html","187ab21c5c70b4191d9c6cac036c6f00"],["/cd/AutoPiano/autopiano_build_demo/click_me.html","7137d5d685900b45bb738ce88488214a"],["/cd/AutoPiano/autopiano_build_demo/favicon.png","f3fd66ec16c0f9195617f1b7a652a49b"],["/cd/AutoPiano/autopiano_build_demo/index.html","b179a1773c24f2bd33fe64069cac158d"],["/cd/AutoPiano/autopiano_build_demo/static/css/app.218482323009eabe26ecb9ee84758303.css","b822345d254a95b017454652174eaeed"],["/cd/AutoPiano/autopiano_build_demo/static/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/cd/AutoPiano/autopiano_build_demo/static/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/cd/AutoPiano/autopiano_build_demo/static/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/cd/AutoPiano/autopiano_build_demo/static/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/cd/AutoPiano/autopiano_build_demo/static/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/cd/AutoPiano/autopiano_build_demo/static/images/bg_default.jpg","a8f86e1594cd5f98fe2d95f4ec49c08e"],["/cd/AutoPiano/autopiano_build_demo/static/images/bg_eiffel.jpg","81dfb8130c291a6a1aff190ba4d67bb6"],["/cd/AutoPiano/autopiano_build_demo/static/images/bg_girl.jpg","4a505f86264b0ef09bbcae210dfd8389"],["/cd/AutoPiano/autopiano_build_demo/static/img/aliqr.7bf1e6c.png","7bf1e6cac54d4485ba78cf43e54f200c"],["/cd/AutoPiano/autopiano_build_demo/static/img/sprite.3c2f760.png","3c2f7600b2ac23bc2fd6355eaae6ec31"],["/cd/AutoPiano/autopiano_build_demo/static/img/wxqr.543cb70.png","543cb70a4c64ce27c4ad3c77e93fe05e"],["/cd/AutoPiano/autopiano_build_demo/static/js/0.1cbf6389b05bb6ae4bcd.js","8161b53074185f8bf5ae82c1aec596d0"],["/cd/AutoPiano/autopiano_build_demo/static/js/1.9b99d4bff5d97b95f50c.js","067c568a0b5c88143fd2b9f1bcefa143"],["/cd/AutoPiano/autopiano_build_demo/static/js/app.e3c39d8877814613f970.js","dae4b1b599c875814ab392f213a6bfd1"],["/cd/AutoPiano/autopiano_build_demo/static/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/cd/AutoPiano/autopiano_build_demo/static/js/jquery3.min.js","4b57cf46dc8cb95c4cca54afc85e9540"],["/cd/AutoPiano/autopiano_build_demo/static/js/livere.min.js","43edff45a82eedb6dedc88756627b6fc"],["/cd/AutoPiano/autopiano_build_demo/static/js/manifest.994e26c28bfed4e4a405.js","0c99875198f7659459ee9f88179e1191"],["/cd/AutoPiano/autopiano_build_demo/static/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/cd/AutoPiano/autopiano_build_demo/static/js/vendor.85fc02c8f2fd20a787d9.js","d94f6011a558e30e3b4fbdb7d51b289b"],["/cd/AutoPiano/build/build.js","7e496d39aa7aa3656e826d4df95f324a"],["/cd/AutoPiano/build/check-versions.js","08272f8bc3f8e0b852fa24d992f08f5b"],["/cd/AutoPiano/build/dev-client.js","0cbe45f182733f3927cc24495ebcba60"],["/cd/AutoPiano/build/dev-server.js","e2a134b2660def403e7c4e82b45af54e"],["/cd/AutoPiano/build/utils.js","b6dd3c2cace2373c428b99e3fd21e76f"],["/cd/AutoPiano/build/vue-loader.conf.js","fdd95d02f5716d204997ab1b644ab5da"],["/cd/AutoPiano/build/webpack.base.conf.js","2b99709818d1474b3bad51f201601467"],["/cd/AutoPiano/build/webpack.dev.conf.js","3b25165a8f19269a851f79db50d50a8c"],["/cd/AutoPiano/build/webpack.prod.conf.js","65364758f841e1a6d91e2726f221fc74"],["/cd/AutoPiano/config/dev.env.js","ef9b012bcccefd98be61a123cd81242a"],["/cd/AutoPiano/config/index.js","55eb054a64c6c1a7df76deb6617fa117"],["/cd/AutoPiano/config/prod.env.js","8cd6cd03c8614c0976c05d334fc933ed"],["/cd/AutoPiano/favicon.png","f3fd66ec16c0f9195617f1b7a652a49b"],["/cd/AutoPiano/index.html","7ddc59b0147805cd0b918ebc8624efc9"],["/cd/AutoPiano/src/assets/images/aliqr.png","7bf1e6cac54d4485ba78cf43e54f200c"],["/cd/AutoPiano/src/assets/images/band.png","23d045e1e02c73ae6de520eebed9de5e"],["/cd/AutoPiano/src/assets/images/icon/icon-alipay.png","283649dbd0c956447439a03f4bc8ada8"],["/cd/AutoPiano/src/assets/images/icon/icon-cherry.png","dced33ce0dda0c66a24ea846f312e339"],["/cd/AutoPiano/src/assets/images/icon/icon-heartbeat.png","fcc5dd4dce32aeae87b9ce18ea6d1fff"],["/cd/AutoPiano/src/assets/images/icon/icon-hot.png","a7d7b558183562139f26dbe1651fcc7b"],["/cd/AutoPiano/src/assets/images/icon/icon-pause.png","e9bc17116a031baaaf931811128b7a10"],["/cd/AutoPiano/src/assets/images/icon/icon-piano.png","f3fd66ec16c0f9195617f1b7a652a49b"],["/cd/AutoPiano/src/assets/images/icon/icon-star.png","c351847773a316a13c0b472dc6fd25e7"],["/cd/AutoPiano/src/assets/images/icon/icon-wxpay.png","632daaa0c36a4c8c52e843042af34640"],["/cd/AutoPiano/src/assets/images/lab.png","b3c96a57eb224b29dd1b086c50f54682"],["/cd/AutoPiano/src/assets/images/midi.png","db9650e25af5b2fced6a72dfa6c561bb"],["/cd/AutoPiano/src/assets/images/music_cd.png","89c5e9d9e38fa990a3cb05c6e01d22d6"],["/cd/AutoPiano/src/assets/images/sprite.png","3c2f7600b2ac23bc2fd6355eaae6ec31"],["/cd/AutoPiano/src/assets/images/wxqr.png","543cb70a4c64ce27c4ad3c77e93fe05e"],["/cd/AutoPiano/src/assets/style/icon.css","39ba44717e74cda38333c2e36313593c"],["/cd/AutoPiano/src/assets/style/normalize.css","1b96eb1ed573195723a04fc8cca39f89"],["/cd/AutoPiano/src/config/goods.js","b6e9762e4978f871a428ab75035da22d"],["/cd/AutoPiano/src/config/index.js","f6295839e78f18eb1c7a236daf7d48f3"],["/cd/AutoPiano/src/config/links.js","7b6664a64dd209ae923c39415b0b4f27"],["/cd/AutoPiano/src/config/lyrics.js","773401948d76c506eda9fd09215847a1"],["/cd/AutoPiano/src/config/notes.js","a4ebd2169cd3210159824f401d8d5b8e"],["/cd/AutoPiano/src/config/scoremanual.js","e350c59488e0d6f00e6ad5544b07aa95"],["/cd/AutoPiano/src/config/scoremidi.js","85b4dc7830323dbb02283ac54958a01a"],["/cd/AutoPiano/src/config/scorenum.js","d35e5baba15753ab3462f091fe3cef15"],["/cd/AutoPiano/src/config/scorexml.js","614f43587864befdb9e451d90d9c0652"],["/cd/AutoPiano/src/config/wallpaper.js","481d2b99ee8e52eca5a37c9056ff8682"],["/cd/AutoPiano/src/lib/Tonejs-Instruments.js","cb156843afa7a296292936a63c74612a"],["/cd/AutoPiano/src/lib/wutils.js","6dea0b0b4bf6de6a9ecfe08943472143"],["/cd/AutoPiano/src/main.js","cb99da9009ddd87e828095dd23a9d2af"],["/cd/AutoPiano/src/mixins/midiAutoPlayMixin.js","3db8a35419c018946a9ecb1733d76a56"],["/cd/AutoPiano/src/mixins/pianoAutoPlayMixin.js","f5add57032b7d5e90059ee15bebff504"],["/cd/AutoPiano/src/mixins/xmlAutoPlayMixin.js","b260c7ad5eb21046a1b54d4f589b9cd1"],["/cd/AutoPiano/src/router/index.js","5ef42e4b4664374748cdf9f65bd04889"],["/cd/AutoPiano/src/store/index.js","e2c2abc8c976f82505364eec3d94b48a"],["/cd/AutoPiano/src/store/modules/autopiano.js","95721337cd862be6801ee2648335364a"],["/cd/AutoPiano/src/utils/index.js","d97939b56734d69b5297cef22aed2a7e"],["/cd/AutoPiano/src/utils/observe.js","5d2a3cdb647ae6737a6461ae027a73f8"],["/cd/AutoPiano/static/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/cd/AutoPiano/static/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/cd/AutoPiano/static/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/cd/AutoPiano/static/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/cd/AutoPiano/static/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/cd/AutoPiano/static/goodsImgs/05d7da9f7a83f31b.jpg","e9ed5079236551e00391f7507786d45b"],["/cd/AutoPiano/static/goodsImgs/28026c18dc573bd5.jpg","6596977ccad869724656d796f4984d75"],["/cd/AutoPiano/static/goodsImgs/2817ecd689819de3.jpg","7c1f43b8d95ae7702a76dba602701608"],["/cd/AutoPiano/static/goodsImgs/3c59fe8440c05e15.jpg","757069b5b5a8dddb95c2b47329647ba8"],["/cd/AutoPiano/static/goodsImgs/5aa22eceN5c6ce109.jpg","eafcde4d3a30ab789326e011d57b9dbc"],["/cd/AutoPiano/static/goodsImgs/5b3b338fNad1559cd.jpg","cb9898a5d7991c7a2f9130ed2b0eed8d"],["/cd/AutoPiano/static/goodsImgs/5d4808c716acb007.jpg","9f8b60aee74e82d0c9154e9d7720b175"],["/cd/AutoPiano/static/goodsImgs/b8b5a95542c993d2.jpg","3fc0404cfdf6b209d28483c8d8791ca6"],["/cd/AutoPiano/static/goodsImgs/bc56ea5a17a35998.jpg","fb4ef854641bf66dd0086abb18cbc9f7"],["/cd/AutoPiano/static/goodsImgs/ebfbb3b6ba6b7e3f.jpg","2783f0ce9470586ee95017ba5445d217"],["/cd/AutoPiano/static/images/bg_default.jpg","a8f86e1594cd5f98fe2d95f4ec49c08e"],["/cd/AutoPiano/static/images/bg_eiffel.jpg","81dfb8130c291a6a1aff190ba4d67bb6"],["/cd/AutoPiano/static/images/bg_girl.jpg","4a505f86264b0ef09bbcae210dfd8389"],["/cd/AutoPiano/static/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/cd/AutoPiano/static/js/jquery3.min.js","4b57cf46dc8cb95c4cca54afc85e9540"],["/cd/AutoPiano/static/js/livere.min.js","43edff45a82eedb6dedc88756627b6fc"],["/cd/AutoPiano/static/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/cd/JS_KeyPiano/images/d.gif","ae9a6cf4775efc12db2b0d844098778e"],["/cd/JS_KeyPiano/images/g.gif","fa3bd57fd91aae7e98893c373f9cacc9"],["/cd/JS_KeyPiano/images/i.gif","79efdddfa854577009f33b8315f15370"],["/cd/JS_KeyPiano/images/left.png","5e730b96b54fa80d95aa10f74a81912a"],["/cd/JS_KeyPiano/images/loading.gif","30fef6ace99752411ca2307fb230be34"],["/cd/JS_KeyPiano/images/logo.gif","c5e6f330fb32e590e31549c3a785a685"],["/cd/JS_KeyPiano/images/mainPlayer.gif","32856b4c1be04b760abcfbea628a4f0e"],["/cd/JS_KeyPiano/images/mainPlaying.gif","69bc4679a66e5a73e589687808233f0f"],["/cd/JS_KeyPiano/images/n.gif","af49dbad2804df1efd9f28b29c58bf7f"],["/cd/JS_KeyPiano/images/right.gif","6e4c01d3cacbc513c9256c3e2040f875"],["/cd/JS_KeyPiano/images/rightbg.gif","ebe76a101fb236cb1e924ef5a6feead7"],["/cd/JS_KeyPiano/images/start.jpg","7d6d5c6e490bcf1fb548351cc91a3942"],["/cd/JS_KeyPiano/images/stop.jpg","0cdfda065cb990dafd402521d32fef00"],["/cd/JS_KeyPiano/images/textbg.jpg","c719cd79a12b566c7045a82a7a81039e"],["/cd/JS_KeyPiano/images/u.gif","5f8bcc11243cc68800ab14de2dc3ddb3"],["/cd/JS_KeyPiano/images/x.gif","642fce26a1d33cd4b17c002e9f8ef6b2"],["/cd/JS_KeyPiano/index.html","61447fdba39450cba0a2448b54da09a2"],["/cd/JS_KeyPiano/js/jquery-1.4.4.min.js","73a9c334c5ca71d70d092b42064f6476"],["/cd/JS_KeyPiano/js/jquery.circulate.js","6a5ee689a4e7886604f94292063735a6"],["/cd/JS_KeyPiano/js/jquery.easing.1.2.js","6c0edab4dbbc8ab1b4dcd05cc2b26a09"],["/cd/JS_KeyPiano/js/script.js","d9ad2ceaad7b4a66d03b623b87bc1638"],["/cd/JS_KeyPiano/style.css","e699445ce24d713c3e67cd1eb5be2008"],["/census/index.html","53d182e2c1c17dca95fd873b8bd313e8"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","7a86d2cb9f1cc625728be82ba7af78f9"],["/census/未命名文件夹/index的副本.html","f105f354ccf68677dbc865c4ce36b65f"],["/charts/index.html","bb59608ef09a22fcc7339e780e98f415"],["/client/index.html","1a4406837f724387e5d1085e52b99723"],["/comment/index.html","633a8f6db948809ade8032a2f7d8398d"],["/contact/index.html","4fa595a8551b5560852df1f7479027b5"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","39f2e50862b8bd3f292cc3d398fd8d0f"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","14c8014363b2a2481710295856ef7aae"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","d76a84f416ea52044e7f8e2c58a4c00a"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","513a57831ea816662c1525f399b0d621"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","111f50c5c1275a3747a2bd39e83c4615"],["/journal/index.html","fb6af052eb1eb0efa9abdbfc734b748b"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/visit_calendar.js","2fbb4e98e0bc0192e0607403a3339c4c"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","b546d48e67ff20bcbe6e6bf9a61bf194"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","42bb5f242a06ef958c0e9c2a54b336bf"],["/map/index.html","9c63aa41f24c5d944745179b2414f111"],["/more/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/more/142.css","f789c89273b7d0c96dbd25495b0e8265"],["/more/142.js","3f57338405e48568efb83ac3994f2b83"],["/more/2wmzxsb/index.html","fe997eac2eca0df3bbde4af3f6b6a055"],["/more/2wmzxsb/preview.png","d36b95823a701b62475612f75357756c"],["/more/2wmzxsb/script.js","988d034539edefef6f4800f3cbc88900"],["/more/2wmzxsb/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/more/404.html","6f3e0e9d936b7e6ec9a49e38b2836eb4"],["/more/4042.html","e9405344be517ad4cf8cab26745a9e08"],["/more/bvtoav/index.html","916357ff98ad44ab6fb74fa406ed2d14"],["/more/clock/clock1/index.html","9a3b88249d3a935d4b011a3c416f7c85"],["/more/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/more/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/more/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/more/clock/clock2/index.html","c9350bc37f4ba2064cc8e22378f2d961"],["/more/css/FiraCode.css","5721e9035217ed14ca819e025db6bc74"],["/more/css/flesx.css","c883b907e029239a4adbdcfb33d62990"],["/more/elsfk/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/more/elsfk/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/more/elsfk/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/more/elsfk/index.html","4a258bbdb8f314760b1688b86e66bbf9"],["/more/elsfk/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/more/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/more/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/more/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/more/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/more/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/more/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/more/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/more/index.html","f2948ce4f7712c6a508689db9143b382"],["/more/yq/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/more/yq/146.js","a4f1af1154a2a18f423b078c00470bad"],["/more/yq/index.html","a3e71e674a8559414b767d84115103e6"],["/music/index.html","d3887c1e0332351bf531b02fb06e7cd4"],["/musics/index.html","ce132154420605e11f2710e96fe9a39b"],["/page/2/index.html","a6c299d83d232f0459b0f41358a52178"],["/page/3/index.html","dae39e65d3d7652cf1f9e9fca02a5a93"],["/photos/index.html","66c6e21ec431947fbcbece2cf7d89424"],["/posts/11908.html","623f4c9d6ae3c396665e40d4546085a2"],["/posts/19324.html","15bf69764c67a00adf1f2329b10122e2"],["/posts/19d2a4e6.html","74f0b9634b19d8ad451c3dc9208e4265"],["/posts/20692.html","c565917fc1faa9430d322ddd22a03885"],["/posts/22294.html","b76fafcc6ba23f67fd473587befd7fa9"],["/posts/22338.html","9b1b75effd9b88ce9053f194df2b11df"],["/posts/25167.html","44af54ce329e16b2d0c4d909d67b407d"],["/posts/25381.html","7ac98d4ad07fd9d842c5d0b68f108ba1"],["/posts/25797.html","d9e0b2034a754be1409813638528c981"],["/posts/27498.html","17cea23330127d609285e03e7572447b"],["/posts/27604.html","fd73307aa190cbffc24541e3ddc8fc36"],["/posts/28347.html","701fe03192071c14676b44933747bbbc"],["/posts/29462.html","8d70fec5930ac339ca3c51a1c0d65feb"],["/posts/30884.html","1b81dbf46e819480cc1d9ca59905750d"],["/posts/38332.html","50fb6a2c234afbdf2da6a79a66bef972"],["/posts/38811.html","eaee6a92a1c135bb3a85fc8fbe56c00f"],["/posts/48198.html","31649f8e1cb77b5594aea9a04f900729"],["/posts/48201.html","6bd671e914d8ae2310404d9121982e3e"],["/posts/4901.html","4c6ae1b610282b90a9db659f2026a77b"],["/posts/4b3510a4.html","ab70b5ce95c2b7452f9be214ca19cdd8"],["/posts/50391.html","6e7b27e2bbcabfc0542c900299384f3a"],["/posts/51618.html","ae30894bab981a9bba6c36d9a38d2403"],["/posts/5560.html","5422f4ba27d5d8fc46d6a717865cc7cb"],["/posts/60349.html","534a9b75e2060b7d2a1d8511017782bc"],["/posts/62019.html","9523eabbf7a3f21540cfbbf83a004fd2"],["/posts/64683.html","dcac8333ef15791708c082864931a8a2"],["/posts/7a46f93c.html","02d55237fc322334169a401c187cadf9"],["/posts/d74d8b76.html","c69dad9e596d631aa373cc1d37473df7"],["/posts/e3e08109.html","4a048051f9f705f03c0401077c1b1744"],["/shuoshuo/index.html","db6ce25f16d979b9bfbe4fb2f19609c0"],["/tags/API图片/index.html","0027403cdc39f926ee88b69d5148f075"],["/tags/Billie-Eilish/index.html","94164f9bc138a0976f7196efd7e83d67"],["/tags/Fontawesome-图标/index.html","d9407f5fa2a8f75c5170a5129db512cb"],["/tags/GitHub图床/index.html","f86f50e4fa52cd844052e517723aa8e9"],["/tags/Github/index.html","da20436a01ae87eacf50120ab0ce1e23"],["/tags/LPL/index.html","fa5e299dfbc6c253f0590176a836c285"],["/tags/Markdown/index.html","3b0a22f09b239a7e18f8fbec91590b95"],["/tags/PicGo/index.html","23e1257a62adfd04d541869c92ec050e"],["/tags/WEBP/index.html","0e3d5e1298e97de8155a91abfba8c68c"],["/tags/YLUI/index.html","62e20fae986be1956d74042c5d9c52dd"],["/tags/YLUI/page/2/index.html","23ead42ffb119403ca0569b047245147"],["/tags/YLUI/page/3/index.html","29859c015184aa2d9a2f7089923b29c4"],["/tags/ajax/index.html","d236ebd34f218388e0d1c0d19c1ddbe8"],["/tags/blog/index.html","281bf38c7531f2c0c16fe3061b245834"],["/tags/css/index.html","b1abc3e8b67713c17cf63cb5916d454e"],["/tags/echarts/index.html","290d3f536904b1b6893ccb95458f2149"],["/tags/flask/index.html","5393e15f8687e7a9268b79ce9de22d77"],["/tags/hexo-blog-lucky/index.html","7682951bdbb86fbe234e1f678a12ac1a"],["/tags/hexo/index.html","239d0df5248b7a4f8559b1bc297fc4c7"],["/tags/html/index.html","2c76cd14411811bd60996fd92ee5ae59"],["/tags/index.html","3cfd518f777cf382eaa6459ba986bb5d"],["/tags/jQuery-CSS3/index.html","e68d8aa81202026c55d2b908338649e7"],["/tags/jQuery/index.html","4b8b717da3bf45ff167578b992c074c0"],["/tags/javascript/index.html","c09a4c49d87419ef482ff32a5083c724"],["/tags/json/index.html","071cc6b7acebb93966f15b5fc98d1c91"],["/tags/mysql/index.html","1ca089587183d1a56d925bab87ec0a6d"],["/tags/note标签/index.html","d6198e51afbcee02ab3ef7fa97568a9e"],["/tags/npm/index.html","c86e21a40954d446f3f550103d3b2f08"],["/tags/numpy/index.html","901459583ae00f04b61e6fbf0b07bf57"],["/tags/pymysql/index.html","5dae84af81685b50309e19ff1a86cda5"],["/tags/python/index.html","d1210b1d17daf3f541eed42961159161"],["/tags/requests/index.html","b170fdf2e15df35551bfd564393c31e3"],["/tags/web/index.html","daa642e5864cdb4b4e6ae7768f41f95f"],["/tags/代码分享/index.html","acc8ae9795ff183dc6e9aae2ce9832cb"],["/tags/代码压缩/index.html","470ee422ada88881c4b182f80f47db28"],["/tags/加速器/index.html","78d018cc1eb0ac4411d58384a7c8dde2"],["/tags/博客/index.html","1445afb67064e28569ac8993882eda2e"],["/tags/博客优化/index.html","dc7332f1a5950c7af4eb0342d9a441cd"],["/tags/博客搭建教程/index.html","b0d866d94eaa89977085c0bcf6936838"],["/tags/图像处理/index.html","52bac245b02cb8c7025f1eaa36988443"],["/tags/图集/index.html","3cfd518f777cf382eaa6459ba986bb5d"],["/tags/声明/index.html","5a4022c19c1ac99a73b1db81ea9e4feb"],["/tags/好物推荐/index.html","1b5b9bb9b0783627866ecd90359f3b30"],["/tags/工具箱/index.html","67d69feb14b1d9045b18d2cae785fd86"],["/tags/应用分享/index.html","b5d7735db80fa9ef5b21cadb2abaa337"],["/tags/思维导图/index.html","72790e8ceaa90560bd763811352ae36a"],["/tags/悦读/index.html","0ae783b3e4d95c6d43be73cbac14b368"],["/tags/插件/index.html","047bc80d829517d29de5cb862fd41fa8"],["/tags/教程/index.html","a0511ab20e15082deac1c96c47003615"],["/tags/数据可视化/index.html","e54cf2998d151c33b3768677af068a5a"],["/tags/文章加密/index.html","5b1503915352a256e258ebad9ef70347"],["/tags/汉化/index.html","205d2bfa201b6ca58f513764b4ab84fe"],["/tags/流行音乐/index.html","2cda1e1cd320c781ac40504ff0393b74"],["/tags/渲染绕过/index.html","2a2d17573c3f0b828ffece8c6de32615"],["/tags/游戏板块/index.html","d332236e70a33834e6e6c1c866364209"],["/tags/生物/index.html","6e82d36c708a3c886f57b388701129e9"],["/tags/百科/index.html","f27969306b1a0370fe574f15e5b35e46"],["/tags/粒子特效/index.html","a52a5b5d0cf3ab267e0de39a101a2385"],["/tags/网站分享/index.html","9a21cfe3be1eb408c1494eabb3bad8ef"],["/tags/蚊子/index.html","95e93d65ff8952f0566495212dc01d18"],["/tags/评价/index.html","d070a95b60455ecb7fd656f39e58e67d"],["/tags/转换/index.html","f487837670e336e343af5affc8fbe983"],["/tags/转载/index.html","1026af1de634e0423a1bdcb2942d0be3"],["/tags/阿里云/index.html","702501c0d824d422ab2857096b014953"],["/tags/音乐/index.html","372306cb944352753fb132fb996b2ab2"],["/theme-sakura/index.html","0b8e1b4073205e8c89d2496f9f83c24d"],["/videos/index.html","ee640be621306652637698afe13960a2"],["/warn.html","9fd8ffc31f3cd41bef2b17482f346bff"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
