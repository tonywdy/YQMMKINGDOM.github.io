/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","93bf04265e6aa040d9e2416cf9b0c768"],["/KWGAME/1.html","7ed095dc4d2af9a8749a378129dec948"],["/KWGAME/index.html","bab2b058e6dbc05da26d14e0905b19f4"],["/My-secret-base/css/cnm.sb_bg.css","105dc5eb986e8d5f1ad4dec62c1a8f36"],["/My-secret-base/css/cnm.sb_load.css","3c6dcc637a376b033161b1b7ef3e9d31"],["/My-secret-base/css/cnm.sb_mp.css","ee4f281824f29b309e2fba954146c9ef"],["/My-secret-base/css/cnm.sb_pc.css","0e68ec256edc4ff916de120e6314ac9c"],["/My-secret-base/font/cnm.sb.ttf","8cdde8c3561834bbed575532294b706a"],["/My-secret-base/font/cnmsb01.png","bf41d5d7c1b79bee6a2622d33fada794"],["/My-secret-base/font/cnmsb02.png","21334fc3dc963c237495e9e9740c3dd7"],["/My-secret-base/font/cnmsb03.png","9d21104777b732948e31fc8e0adc5731"],["/My-secret-base/font/cnmsb04.png","d45f70683f07fd2451f218007659649a"],["/My-secret-base/font/cnmsb05.png","d7bfe0331e78d256e53604daeaff3cd0"],["/My-secret-base/font/cnmsb06.png","7585b1b6a71957793a3b575672633b3e"],["/My-secret-base/font/cnmsb07.png","86f83d73e69d2f4df0516f976653b014"],["/My-secret-base/img/benzhanyuanma.jpg","3b1c4946ae7bedfcd7396737ba93cf35"],["/My-secret-base/img/cnm.sb.svg","defb2e89adad0c7c7a3668c4d229c0e6"],["/My-secret-base/img/cnm.sb_logo.svg","0cbd985c0c8f0dc8e688572d377789fc"],["/My-secret-base/img/cnmteam01.png","6215be6073e5523319961d34f5b19834"],["/My-secret-base/img/cnmteam02.png","bc6a8420ce172cce6ed46f58a93afbee"],["/My-secret-base/img/cnmteam03.png","ea81fb6490791402838f8f64b19f1608"],["/My-secret-base/img/cnmteam04.png","f356a1cbadf0315b30d4582a8e7618c8"],["/My-secret-base/img/cnmteam05.png","4f28192a33c928dfb43e3f9acb756c43"],["/My-secret-base/img/cnmtlbg.jpg","0537ef66a80dd8408eb9c0e5fd1ed74e"],["/My-secret-base/img/guanyuzhanzhang.jpg","081d714b992221a2e89f48108482e868"],["/My-secret-base/img/huashui.jpg","33dcfcb5a29ec82f9ffba5c45d3d5f96"],["/My-secret-base/img/jing.png","a8c00894e29a6edaa1142eb8ff1341f2"],["/My-secret-base/img/jingtaiziyuan.jpg","95f47647a5dc4c27fdb235076e18b945"],["/My-secret-base/img/nav05_fj.png","9f11331ccec22a671573f0d4ac64f0c9"],["/My-secret-base/img/nav05_zp01.jpg","efdf95bf6de5bbbbaf4f1dfbae5e2a0a"],["/My-secret-base/img/nav05_zp02.jpg","22cdb2fb22b3502eabde3dcd71154fb9"],["/My-secret-base/img/nav05_zp03.jpg","d5f98868a88433dff03c9019cfdf0ba8"],["/My-secret-base/img/nav05_zp04.jpg","2700cc3bd3547fae47db44827c3cca56"],["/My-secret-base/img/nav05_zp05.jpg","829a54b29dc0734ef6bd592cab997d4a"],["/My-secret-base/img/qywx.png","57d9f7ad05ab8e809fe2429faec869e6"],["/My-secret-base/img/shangyehezuo.png","841a7f7cafae0cb6f101373d493efabc"],["/My-secret-base/img/shouye.jpg","f0c7805c60e8fac1495b2e69dd427130"],["/My-secret-base/img/start.jpg","6e2e00e7ba1c02482c20f1378f1a3236"],["/My-secret-base/img/tx.jpg","d77bbcb8d49b8616b264dd6bd0e5f92d"],["/My-secret-base/img/yuhangyuan.png","feb5c79d216b27b0d933ec35b26605e8"],["/My-secret-base/img/zhandian.jpg","bd05b7d22a8486b3700416e6ddaac4b3"],["/My-secret-base/index.html","7462e453b4b14069c99b1b78b6b4625a"],["/My-secret-base/js/cnm.sb_bg.js","b7642aa658a5c5b9ae090673061fd4fe"],["/My-secret-base/js/cnm.sb_copy.js","8602c74cb3bfaf756461b2a3799e80c7"],["/My-secret-base/js/cnm.sb_judge.js","f330b9787039c59858aa79f8c0a01d94"],["/My-secret-base/js/cnm.sb_mp.js","7faae29f36c16d6fceb4eeb8a9857cea"],["/My-secret-base/js/cnm.sb_pc.js","dabc1973f647864a28dd011453e24948"],["/My-secret-base/js/jquery-3.2.1.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/about/index.html","01f8de2af569bfbc2bfea1091346301d"],["/archives/2019/08/index.html","b492a99386cc924f2527611bd2acecbb"],["/archives/2019/index.html","e3e6d96919361a558f8dcf3a10c31079"],["/archives/2020/02/index.html","3b83939d5d112e6aa48582630bf16e24"],["/archives/2020/index.html","3baf5e63df97abc489d0cdd1c0eb914c"],["/archives/2021/06/index.html","afc2a47c418dda66d4cd04fbc5e2eec8"],["/archives/2021/index.html","6cd04d3b943b724cce4b3204e94392ec"],["/archives/2022/05/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/05/page/2/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/05/page/3/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/05/page/4/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/05/page/5/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/05/page/6/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/05/page/7/index.html","1fda67429f010bb6c5f50f917c106122"],["/archives/2022/06/index.html","030655fb7fce8d22b71369c70377445d"],["/archives/2022/06/page/2/index.html","030655fb7fce8d22b71369c70377445d"],["/archives/2022/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/2/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/3/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/4/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/5/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/6/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/7/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/8/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/2022/page/9/index.html","fd66239c3dd7b3c5abeaee6d1f09b167"],["/archives/index.html","893664038448b1a980d934748e996481"],["/archives/page/10/index.html","893664038448b1a980d934748e996481"],["/archives/page/2/index.html","893664038448b1a980d934748e996481"],["/archives/page/3/index.html","893664038448b1a980d934748e996481"],["/archives/page/4/index.html","893664038448b1a980d934748e996481"],["/archives/page/5/index.html","893664038448b1a980d934748e996481"],["/archives/page/6/index.html","893664038448b1a980d934748e996481"],["/archives/page/7/index.html","893664038448b1a980d934748e996481"],["/archives/page/8/index.html","893664038448b1a980d934748e996481"],["/archives/page/9/index.html","893664038448b1a980d934748e996481"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","797b546d147c47949de03977b6fe3192"],["/bvtoav/index.html","025f572dc792d4b0d52041109ccf1f25"],["/categories/index.html","d60069d8762db2aefb9cc65f231d3e8e"],["/categories/技术-Markdown语法教程/index.html","4fe499060791271181037265349ef22e"],["/categories/技术/index.html","723c13bd01843d5e194600415afdeb09"],["/categories/技术/page/2/index.html","5b7f47f21e705bbe52a7e11a296fe7f5"],["/categories/技术/page/3/index.html","554fba967e195bd1302d896b01149b84"],["/categories/技术/page/4/index.html","4756be0ffdf5f984fb28d23886cb40e2"],["/categories/生活/index.html","91e0b84fb526d98ad1a4f87305f578e9"],["/categories/资源/index.html","70430d67d5ccabc40b0be0c4125345cd"],["/categories/转载/index.html","26469ff6f7200e64b1ed0728c8535a74"],["/categories/转载/page/2/index.html","3a2f4c24a03b5d789981bac7a576529c"],["/categories/转载/page/3/index.html","15f02d6757227ddc5d068dc895c97d3e"],["/categories/转载/page/4/index.html","e78f3c57bf6d44ab20734f79d8e5b726"],["/categories/随想/index.html","721d727a2a757ebc8ad29c930a06a300"],["/categories/随笔/index.html","7b70795f4e3ff561c27163a1cb60dd96"],["/cd/404.html","f4659694a45d76f7a9849b1df94151e9"],["/cd/QR-code-scanning/index.html","8542a7a03a8afbfa816cfa9efcd83fd2"],["/cd/QR-code-scanning/preview.png","d36b95823a701b62475612f75357756c"],["/cd/QR-code-scanning/script.js","988d034539edefef6f4800f3cbc88900"],["/cd/QR-code-scanning/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/cd/Tetris/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/cd/Tetris/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/cd/Tetris/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/cd/Tetris/index.html","09187c99403fe79bb0036c0788b358b4"],["/cd/Tetris/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/cd/WINUI/configs.js","7939f47a3619876b666e996f25ada7cf"],["/cd/WINUI/documents/assets/1.png","0c94ed16cf24ce1528ffcf9af7631184"],["/cd/WINUI/documents/assets/2.png","f0f16f2795ddaf8b7f89507c10c20c42"],["/cd/WINUI/documents/assets/3.png","d5770733591cf5a0d0abcc080bc59280"],["/cd/WINUI/documents/assets/4.png","70a40e24ce868aac94bd26e52b693f1c"],["/cd/WINUI/documents/assets/5.png","0fab93872508932afdec662d89b51667"],["/cd/WINUI/documents/assets/6.png","467e91c75dded0118d15010db5d83d92"],["/cd/WINUI/documents/assets/7.png","16412af75814b6f503aaa40d29596244"],["/cd/WINUI/documents/assets/8.png","1bfc57e3215b0d1392f9fd50e3829d14"],["/cd/WINUI/index.html","72e21c7b0fbb723ac00c2a27cd7a8cff"],["/cd/WINUI/onLoad.js","3fef2bc53efec7a08f3ff8a939df1123"],["/cd/WINUI/res/apps/app-store/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/apps/app-store/index.html","9874132adb834b5c4833fbdcfa5a5caa"],["/cd/WINUI/res/apps/app-store/preview.jpg","09e51965739a26c73b3644d504286fc6"],["/cd/WINUI/res/apps/app-store/script.js","0747ebd509f5cda2ceb96ebbecc616e9"],["/cd/WINUI/res/apps/app-store/style.css","957461d7a9cfb5a3599fde6662e33de0"],["/cd/WINUI/res/apps/app-store/tpl-setup.html","573dc50edb48f5bc80cf7bdac1cdf247"],["/cd/WINUI/res/apps/browser/index.css","4cbca48bd4945f1cf2605afe3a6c9815"],["/cd/WINUI/res/apps/browser/index.html","e0ade66424d212cfc83e8504bf4430b5"],["/cd/WINUI/res/apps/colorPicker/colorPicker.html","06e9eddb7fd345ef5b6f8b948d4d48c2"],["/cd/WINUI/res/apps/element-ui/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/cd/WINUI/res/apps/element-ui/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/cd/WINUI/res/apps/element-ui/index.css","c048efcb00f2d5bf9c514d4ef1a60e1a"],["/cd/WINUI/res/apps/element-ui/index.js","f6398839e5674f9ef46a728938a49082"],["/cd/WINUI/res/apps/server/import.html","71d42ef2d51cd81d922a991effaf6661"],["/cd/WINUI/res/apps/server/index.html","a71fc31618ad066fae0f87bd8ef04ba5"],["/cd/WINUI/res/apps/yl-system/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/apps/yl-system/index.html","3f17964f63bc07901c326aa9620904ab"],["/cd/WINUI/res/apps/yl-system/index.js","730bf4346f2f74f6d37d1686114b289b"],["/cd/WINUI/res/apps/yl-system/style.css","6956981ba08268b80810a0cd73f3cdf5"],["/cd/WINUI/res/components/animate.css","07f146141537e04ee282a965d8053198"],["/cd/WINUI/res/components/calendar/script.js","7deb1ea55685d1d65a41e24c42a82a1d"],["/cd/WINUI/res/components/calendar/style.css","889d07ffaea6e80b59778f86c2841b50"],["/cd/WINUI/res/components/clipboard-polyfill.js","43c47e6f9a265440b6d6d5c042c1abc2"],["/cd/WINUI/res/components/color-picker/color-picker.css","a13ab1ee68fc00fe975eade37d99459e"],["/cd/WINUI/res/components/color-picker/color-picker.js","090bdc46e53dba4bd8cbe45733a633f1"],["/cd/WINUI/res/components/contextMenu/contextMenu.css","ae22314e52256977b12617e6106ef13d"],["/cd/WINUI/res/components/contextMenu/contextMenu.js","3200bb8c4c3804ec329d6fd9845aaa23"],["/cd/WINUI/res/components/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/cd/WINUI/res/components/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/cd/WINUI/res/components/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/cd/WINUI/res/components/jquery.nicescroll.min.js","d247c9568e051b91d27ba6901447e8b0"],["/cd/WINUI/res/components/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/cd/WINUI/res/components/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/cd/WINUI/res/components/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/cd/WINUI/res/components/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/cd/WINUI/res/components/vue-grid-layout-2.1.11.min.js","1871f71290243d0d7171c0d1a0658502"],["/cd/WINUI/res/components/vue.min.js","24063abba2ad45c26b7329e89be49d8d"],["/cd/WINUI/res/css/grid.css","4e60778d5d194f1d61e60c773ef71f1e"],["/cd/WINUI/res/css/loading.css","efb0adcae18636c7ee6d07dde4b617d9"],["/cd/WINUI/res/css/main.css","62be0e07a3497dfa89518d5d2b3d6314"],["/cd/WINUI/res/css/tiles.css","0979d1d8dda0229e159dbc182e1a2d0a"],["/cd/WINUI/res/css/yl-layer-skin.css","66da08271805c80346365f415730abc6"],["/cd/WINUI/res/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/cd/WINUI/res/img/donation.png","cfcd102cefe411740a1942c4b1101348"],["/cd/WINUI/res/img/favicon.png","10211db9350a68716100fd7388607507"],["/cd/WINUI/res/img/icon/close.svg","c5449b9ab12de31be87bd78457ead906"],["/cd/WINUI/res/img/icon/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/img/icon/maximize.svg","5ec8b0ca1f75ef84473c9427bda6a899"],["/cd/WINUI/res/img/icon/message.svg","8990eb1399ec6e43c4ee9438214d4695"],["/cd/WINUI/res/img/icon/minimize.svg","62149b882a325456940eff4eb1022936"],["/cd/WINUI/res/img/icon/restore.svg","03e35aef920cfdfac1f296f25c4be6b6"],["/cd/WINUI/res/img/splashscreen.png","cb619aaa3f7bc8b3f378116dade2507d"],["/cd/WINUI/res/img/wallpapers/bg1.jpg","cea0a23f072704cb0f0b41b4e4f66bb1"],["/cd/WINUI/res/img/wallpapers/bg10.jpg","6acbcd4cf862d24aaf49c61405a02a38"],["/cd/WINUI/res/img/wallpapers/bg10_1.jpg","1e53b55fb02187fd885757a755c68984"],["/cd/WINUI/res/img/wallpapers/bg11.jpg","bec82a612e3b52ba1a2820bd0e4d5b8c"],["/cd/WINUI/res/img/wallpapers/bg11_1.jpg","b6c175c0e2c97a761a6095e343529f16"],["/cd/WINUI/res/img/wallpapers/bg12.jpg","d2ca5202eb10f3689b842ae13b6caba5"],["/cd/WINUI/res/img/wallpapers/bg12_1.jpg","14c7f250b712e06d23bbe023fb889fd9"],["/cd/WINUI/res/img/wallpapers/bg13.jpg","1ec917e5682446735ca4d09ac84f928a"],["/cd/WINUI/res/img/wallpapers/bg13_1.jpg","1a46279896c688078c6220eaed07e585"],["/cd/WINUI/res/img/wallpapers/bg14.jpg","ba9874899616b7518abbd7341ac706a1"],["/cd/WINUI/res/img/wallpapers/bg14_1.jpg","fd89342c254552176af42894dfeca98e"],["/cd/WINUI/res/img/wallpapers/bg15.jpg","cea663b1846e1d9b9f8bf45271cc0372"],["/cd/WINUI/res/img/wallpapers/bg15_1.jpg","fef28b8dce7dfff5e5b66e70050123fe"],["/cd/WINUI/res/img/wallpapers/bg1_1.jpg","77267082c29f03e7ced5334c4c2cd6fb"],["/cd/WINUI/res/img/wallpapers/bg2.jpg","1e1b1435df09314556fa64a58207786f"],["/cd/WINUI/res/img/wallpapers/bg2_1.jpg","87a8f4d3d921465ea49efd17511e065f"],["/cd/WINUI/res/img/wallpapers/bg3.jpg","6f385fafa91a9d04edc147b5739701ec"],["/cd/WINUI/res/img/wallpapers/bg3_1.jpg","2cfaef13a35041ce80029d9642ff6e62"],["/cd/WINUI/res/img/wallpapers/bg4.jpg","c8ddd59ea29991a12cf2bbb32cd1f13c"],["/cd/WINUI/res/img/wallpapers/bg4_1.jpg","8b59566dd6042c2d8248be8b38be5238"],["/cd/WINUI/res/img/wallpapers/bg5.jpg","0c3e0c25734eb7ac9aecba0a54c9c370"],["/cd/WINUI/res/img/wallpapers/bg5_1.jpg","ce6241ebb979fa8f3a408dff6d4ab7f3"],["/cd/WINUI/res/img/wallpapers/bg6.jpg","9a1776b26aa188e6917a45cb723b54ec"],["/cd/WINUI/res/img/wallpapers/bg6_1.jpg","9f60177af7e692f9471c7ab8dd210044"],["/cd/WINUI/res/img/wallpapers/bg7.jpg","ab9983a8b4d908a7222e63fa0424c2f2"],["/cd/WINUI/res/img/wallpapers/bg7_1.jpg","8e00b2f155b0334709a9daad9e7ccf23"],["/cd/WINUI/res/img/wallpapers/bg8.jpg","49060b22ed69da83d0d1c512a26cdcf9"],["/cd/WINUI/res/img/wallpapers/bg8_1.jpg","f4e17b8106527915f20d47c02993bb8a"],["/cd/WINUI/res/img/wallpapers/bg9.jpg","a9d0daee47a24863e62cac0e6e7bc4f5"],["/cd/WINUI/res/img/wallpapers/bg9_1.jpg","866b853772e237fde4d6bd1121ad3c70"],["/cd/WINUI/res/img/wallpapers/uploadbg.png","40fd031ef5bda8f0fd6d93327e32e8a9"],["/cd/WINUI/res/js/Yuri2.js","ae175ca0a7934b03806b8424a809d19e"],["/cd/WINUI/res/js/yl-io.js","d69d4ad8bc59c6124d7b231cd1aa1d9f"],["/cd/WINUI/res/js/yl-render.js","da81ec2de006339144ef7045881cc210"],["/cd/WINUI/res/js/yl-vue-component-icon.js","0b73923ce415f0e6f7c13d543adca5be"],["/cd/WINUI/res/js/yl-vue-components.js","5e03ddb4fadbf61a35daf8a72f14aa48"],["/cd/WINUI/res/yl.app.js","5b78359c6df86b292fc5574508bd9909"],["/cd/WINUI/res/yl.js","1afa32b9dfd74aed7001bd823734d0ba"],["/cd/clock/clock1/index.html","7245ebbbad8b7479392fd367b2301cb2"],["/cd/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/cd/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/cd/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/cd/clock/clock2/index.html","6eff0b40751b883a73accb0f3fbede4e"],["/cd/cloudtags/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/cd/cloudtags/146.js","a4f1af1154a2a18f423b078c00470bad"],["/cd/cloudtags/index.html","f22eddb9526af27bd40fd672369c393e"],["/cd/drawn/index.html","e0249b4ed7e3c394abe7980e6b20d677"],["/cd/drawn/main.1bf80c22.js","0709ae9713ceea4500a700ee82e1578a"],["/cd/drawn/style.6d49ecfe.css","0e82adf69d7079d6557e73e3c6434c29"],["/cd/status/assets/StatusPage.9c0b333d.css","1ff687081f9db727e526db4569484e53"],["/cd/status/assets/StatusPage.c8309b95.js","e901d7c3dbdbb6ef28e83ded9c6a1363"],["/cd/status/assets/index.8e9891ec.css","c49d1d7ebb5b72701a4c5be201a54e5a"],["/cd/status/assets/index.97e0fa98.js","248b0b578d0b6cdaf7ebe5547388e302"],["/cd/status/assets/vendor.66254805.js","c083f62800e074d5b303d37a5e8fc49e"],["/cd/status/index.html","b9a1605fbf3e9249ff3a07faaec2a775"],["/cd/status/upload/logo.png","6512c633e7ea5fed529c5382498123c6"],["/census/index.html","ca99f428483efe328a213270d178aa10"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","ee16065bc90bf958c24ed971f544b25c"],["/census/未命名文件夹/index的副本.html","fa138d7c76a9974d062fa5893a942f7d"],["/charts/index.html","1a6cc99fc88466a5cd104e0acc7aa4d7"],["/client/index.html","b0ee5574f0d5a6b354bf8d9fe05e0a47"],["/comment/index.html","91d849952e8c9dd5971c6c1b310ebb18"],["/contact/index.html","b7fc377c9df78f44f9e32b44daf8cecb"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.8e9891ec.css","e3ff43d9c9edce43c6b55e3e326bdc1d"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","c9066ca9d977856efd129737ceb1685c"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","ffd54515deb825760c9b8778cbe73141"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","55e0bddafba4ca309326f5af229b8874"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","9ff91aba942b6d870a3a333163757cd9"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","537cf7cefd8162948e1581ba75a83955"],["/journal/index.html","fcac171a1d5faee2eed06a1c8103613b"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/visit_calendar.js","2fbb4e98e0bc0192e0607403a3339c4c"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","6730f393615b5102d0c4a151cdbe9557"],["/laboratory/index.html","be8c3c5834246ae474423b962758850b"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","286a96e17de459fe737643d23862b8f1"],["/map/index.html","c4797d7c2cc2011ba4d90eabaf445ce4"],["/music/index.html","83ec0279664543ce7e37c82c30784879"],["/musics/index.html","f6eade5a4a81aa5402bc1d6aeace5698"],["/page/2/index.html","c01cf7328b5a556bb7a6530828aa5c72"],["/page/3/index.html","54ce77bc65428dc551f5822b675234b9"],["/page/4/index.html","c879910add9ef06367a92d7471282950"],["/photos/index.html","534cf264d7da82fd28c1f414eff5243c"],["/posts/11908.html","01d075dd07d0985476771d3e19e269c8"],["/posts/1355.html","ff3ce6e75ec86b0f539ec981d7c92adc"],["/posts/1421.html","5793a7e521ac99e250db1ecf7f5ca85f"],["/posts/15097.html","b04eee5cca0a714fc292ad54e427b573"],["/posts/16107.html","0985c38b5430a808f7a4741c8e0a216f"],["/posts/1905.html","cfac3a7a30d808a55f5568e39f60d471"],["/posts/19324.html","6f70c61a0e48d556cc2740ba865bd8eb"],["/posts/19d2a4e6.html","b8c2a9318c2e5ac2a9a6de204a205835"],["/posts/20692.html","308d4213133894af45dce893d51555a6"],["/posts/22294.html","45c67c6493908b26ad98841da064737a"],["/posts/22338.html","432074d8afc266fb74626e8bd25c11d6"],["/posts/22596.html","bcde00fd668b7ef303b719c53f52dcb7"],["/posts/23280.html","81adc6e8d40802eddec627bf72c123ad"],["/posts/25167.html","6f3a338f5f116ea25dcfba96268e517c"],["/posts/25381.html","2c95ec43cec5a6d12e9e157ce8c3d791"],["/posts/25797.html","506fc223aef9a9f76caede3632b5bcf7"],["/posts/27498.html","2e8c7884e1c6d9d376b052d50203193f"],["/posts/27604.html","1f1b3ecf54074bdb5bab651ed38e09b1"],["/posts/28347.html","b36220ed0542b8099e297ea680787578"],["/posts/29462.html","2d5f2c6ad4cdbcf95f985b443ccc5d7f"],["/posts/30656.html","acc5dc8fadaf62d3f43db74d081ea6f7"],["/posts/30875.html","1bdc22e5711c308aef649e4cff7f2803"],["/posts/30884.html","cff12d70ce0b220151b99f2a1c8b7d5c"],["/posts/37094.html","f0dee6439a85f26a37fa84c04586851c"],["/posts/38332.html","8e0d97c9b5787e853d06dfa10e25e334"],["/posts/38811.html","bc766f1622b29fd86494c075c647575f"],["/posts/46307.html","2cd172bd26c26bbe460266682a590322"],["/posts/47904.html","6551419576798fe215d21b3bc82f21bd"],["/posts/48198.html","dcbe34e70a029c753dae573577cafc24"],["/posts/48201.html","3c1316a71cc139ce58f0527912d0484f"],["/posts/4901.html","0c813274ca076611ef1ab4d12b55f6cd"],["/posts/4b3510a4.html","b85611aecb86aa61e6d8b569cbf221bb"],["/posts/50391.html","34968de00d190664cb355a6990d32224"],["/posts/51618.html","9696ff3f6393546b14c47f6398deb06f"],["/posts/5560.html","699132fe6724095d7477dc105334af94"],["/posts/60349.html","4f784e6d34e2014169d10b03f6bf4c2d"],["/posts/62019.html","d518a0247bcfb021d64f1d07a9273785"],["/posts/64683.html","dd758593f08061aa852381f9d42d50d4"],["/posts/7a46f93c.html","c9f0d2c3e8e5cfded93511499f260859"],["/posts/d74d8b76.html","f3477a3dbd6ff3a30d923c31b2a34906"],["/posts/e3e08109.html","9caf90945e09c07cf7316a83fd18b1dd"],["/random.html","91c7ffe73d351a865422564b443db169"],["/shuoshuo/index.html","cb7c4589b11f7ab83b27eeb04ec86aaf"],["/sw-register.js","39b8207e6d348113390d0b7b50e30a80"],["/tags/API图片/index.html","a0c697ecb03149ab9ea99eaa9cb8a508"],["/tags/Billie-Eilish/index.html","98ccb00be2919a91d0132886f4aa7605"],["/tags/Fontawesome-图标/index.html","e65120efe9fea4081f8efe40d07ff5a0"],["/tags/GitHub图床/index.html","f579f935986223abc90d31aa60210ba9"],["/tags/Github/index.html","2f76f7f9632c7e43c317901c2a06f306"],["/tags/Hexo/index.html","e8376cd80904e3f75eefa7e87e2486a0"],["/tags/LPL/index.html","992e3f0d67dec5790cd2571c266abef6"],["/tags/Markdown/index.html","f46ebd03b3b9d5628467fa118c606047"],["/tags/PPT/index.html","bff558c5f4f65c0689d09efa72d7973e"],["/tags/PicGo/index.html","46d912c0e6dca0478708b97906a38c18"],["/tags/Sakura/index.html","ebd2e4f0599352b07e2dcee261557629"],["/tags/WEBP/index.html","4b2c586d2ef613e8186e04ca9a0e6899"],["/tags/YLUI/index.html","efe9d9fb873178fc10fea1ef334215f1"],["/tags/YLUI/page/2/index.html","b038e038f6fec117a24dc635de865363"],["/tags/YLUI/page/3/index.html","7181efa0c6b7145085fafcd825b763e7"],["/tags/ajax/index.html","84bfe57e2e53dfef1b15340685cd94c0"],["/tags/blog/index.html","a1c214ea4e83514417c2b6e5a9fd0001"],["/tags/css/index.html","044cceb27a5b8010c6c9ea61ce383085"],["/tags/echarts/index.html","f89e8c49459d51a1c04c1c85885d2853"],["/tags/fancybox/index.html","ab79e502af2ee8c9e1d9efc15501d996"],["/tags/flask/index.html","a2f0bebd1ccb15e1aab21ae4ceb20608"],["/tags/hexo-blog-lucky/index.html","ad8cbe844210549cd0526ceb86f7aeb1"],["/tags/hexo-sakura/index.html","4bde3b2cf8e320cbe4c2349b819ea794"],["/tags/hexo-端口/index.html","54270ea1a5067fcecc918a10d4dc78fa"],["/tags/html/index.html","9c090f2a0ac15322caa6c4da28fcbd70"],["/tags/index.html","6abf955747c9be3a5b5766f755fb920c"],["/tags/jQuery-CSS3/index.html","27961115af2f2b19e42f4ede6208b566"],["/tags/jQuery/index.html","88915f74355508927f49afae54cc4a49"],["/tags/javascript-html/index.html","137359cb641d35b67417d30ae0adf26e"],["/tags/javascript/index.html","875166a817525f669b1d1e58c929f699"],["/tags/js/index.html","a35fbfbe9d6127f72542608cf42ec7dd"],["/tags/json/index.html","201be38359404e00726f9f62f21f0322"],["/tags/logo/index.html","c53d47e76e23e56a8ca93624f2542298"],["/tags/mysql/index.html","1e3100599b26605d85349c20cc453b51"],["/tags/note标签/index.html","6a814593220eac35698b49d7f9b8d91e"],["/tags/npm/index.html","e19c087525e2a514692932fd9907b151"],["/tags/numpy/index.html","4192116b8cc2ad51a02e3416ed9a8bb8"],["/tags/pymysql/index.html","467275087fd9e3f816052e96a11915ea"],["/tags/python/index.html","92083afb4055c2921caa30706f28fcbd"],["/tags/requests/index.html","52903f2bab583a95614d3dd23ccd5ea6"],["/tags/web/index.html","a00dbf519f8618ab6e075e2b95b1a8bc"],["/tags/wordpress/index.html","23e3e4e825470d2ae2947ae704126f1f"],["/tags/今日诗词/index.html","18624a4f63d6a9e847cd5b9d2b73473c"],["/tags/代码分享/index.html","b7a94b47006f9583e01ea1f00bc72da0"],["/tags/代码压缩/index.html","e520da8d154db5deba1908a4f3138bd0"],["/tags/全职高手/index.html","b23f9f98ab528bb766c2b0f61faea699"],["/tags/加速器/index.html","0ccb4f537ac37b0a58f3523ed855bccc"],["/tags/动态logo/index.html","adac82e7c3df8417c62575933911ca93"],["/tags/动态背景动画/index.html","486bfae46fa848fd9c84ea893efbe815"],["/tags/动漫/index.html","25ae4ae811521a4b4ba88f0e1e6f1c9c"],["/tags/博客/index.html","55e98c1a9332455172f4a4cab7798a30"],["/tags/博客优化/index.html","0ffd8503c17662cd2b9a699e939c4bab"],["/tags/博客搭建教程/index.html","340985acdfa3ebad98117d94a5042332"],["/tags/可爱字体/index.html","e36ebc21c1eb79e70238308c975a2929"],["/tags/图像处理/index.html","63cec49055ceadb0758f56fd1cef7b27"],["/tags/图集/index.html","6abf955747c9be3a5b5766f755fb920c"],["/tags/壁纸修改/index.html","724d283b108e6bda83d125985dcfa3d8"],["/tags/声明/index.html","59ba01220d0dc6b027cd0d32baf46bf2"],["/tags/好物推荐/index.html","168998a1eaf5b3f484bbdfd7bd49b360"],["/tags/工具箱/index.html","443700bcb30a394183b6a1bd8cb8e950"],["/tags/应用分享/index.html","0dde58d130b05657c9f3d063522dd42d"],["/tags/思维导图/index.html","6e0ddf5521184b392abe1a93ccbc83b8"],["/tags/悦读/index.html","5f53d0007154206ae9872a6115b7867d"],["/tags/插件/index.html","456beca95ff2e9f6bcba8cdee929b191"],["/tags/搜索/index.html","caad6faae8f2d942a7e1e0f2a508189f"],["/tags/教程/index.html","682592e6e0602e3354bad00a8baab751"],["/tags/数据可视化/index.html","b8b9471cb9ce7c4611b05e54b128ef4a"],["/tags/文章加密/index.html","dd5cf8168653f0da0f544e85ca1416c6"],["/tags/日历图/index.html","93ee84318c315d888105242671705e1e"],["/tags/每日一言/index.html","69fc709ef42bf2bbb562740d01a8cc02"],["/tags/汉化/index.html","625f49eb7fdc1f06d1b81421d0b21d52"],["/tags/流行音乐/index.html","6af2dd1ec0ec259b64214f406e233d96"],["/tags/渲染绕过/index.html","9fd77a1eb96ba565f03f033f4a0fe142"],["/tags/游戏板块/index.html","b141877a955c52cfcd33724f1877bd51"],["/tags/环境部署/index.html","92b615fa428e9d8f5bb9b2f6ee997d37"],["/tags/生物/index.html","b0d042b3c3a4b0d4836ef3bef2b2d92b"],["/tags/百科/index.html","a45468d1b6c6b1bc84404f569c44266e"],["/tags/粒子特效/index.html","5b4d453d2d431a4954a2c26f921d3d2d"],["/tags/网站分享/index.html","71983d074b271010486927d316195643"],["/tags/自定义ttf/index.html","ae3990f011cacfc3f1d3479c5d3669d0"],["/tags/蚊子/index.html","b8ffdc883fb41d6dd7a375dbdc02a47d"],["/tags/评价/index.html","fb2f23e96f308410edcab33684f1340a"],["/tags/评论/index.html","5d70df60da2146d204fc1f1feb09492a"],["/tags/转换/index.html","d9f868038765d686fed993f316deb0b9"],["/tags/转载/index.html","3250bc591c87d0d426f31cdf2aea8733"],["/tags/通讯栏/index.html","aaf669b142b96786f65ad084d8d016c4"],["/tags/阿里云/index.html","ddc824afe097cf5f66c221186a1f3886"],["/tags/音乐/index.html","20ff94614c62df3b74dc71aace7c43ef"],["/theme-sakura/index.html","c6b44be908040c3c6b43fdcffbf6bc54"],["/ticktack/index.html","4d2a0e682c2963a60efc5721dbe007fc"],["/videos/index.html","ccd5a3f628e9f26ef0ea5942e3e8a0bc"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"]];
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
