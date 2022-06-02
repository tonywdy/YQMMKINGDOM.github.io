/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","93bf04265e6aa040d9e2416cf9b0c768"],["/KWGAME/1.html","7ed095dc4d2af9a8749a378129dec948"],["/KWGAME/index.html","bab2b058e6dbc05da26d14e0905b19f4"],["/My-secret-base/css/cnm.sb_bg.css","105dc5eb986e8d5f1ad4dec62c1a8f36"],["/My-secret-base/css/cnm.sb_load.css","3c6dcc637a376b033161b1b7ef3e9d31"],["/My-secret-base/css/cnm.sb_mp.css","ee4f281824f29b309e2fba954146c9ef"],["/My-secret-base/css/cnm.sb_pc.css","0e68ec256edc4ff916de120e6314ac9c"],["/My-secret-base/font/cnm.sb.ttf","8cdde8c3561834bbed575532294b706a"],["/My-secret-base/font/cnmsb01.png","bf41d5d7c1b79bee6a2622d33fada794"],["/My-secret-base/font/cnmsb02.png","21334fc3dc963c237495e9e9740c3dd7"],["/My-secret-base/font/cnmsb03.png","9d21104777b732948e31fc8e0adc5731"],["/My-secret-base/font/cnmsb04.png","d45f70683f07fd2451f218007659649a"],["/My-secret-base/font/cnmsb05.png","d7bfe0331e78d256e53604daeaff3cd0"],["/My-secret-base/font/cnmsb06.png","7585b1b6a71957793a3b575672633b3e"],["/My-secret-base/font/cnmsb07.png","86f83d73e69d2f4df0516f976653b014"],["/My-secret-base/img/benzhanyuanma.jpg","3b1c4946ae7bedfcd7396737ba93cf35"],["/My-secret-base/img/cnm.sb.svg","defb2e89adad0c7c7a3668c4d229c0e6"],["/My-secret-base/img/cnm.sb_logo.svg","0cbd985c0c8f0dc8e688572d377789fc"],["/My-secret-base/img/cnmteam01.png","6215be6073e5523319961d34f5b19834"],["/My-secret-base/img/cnmteam02.png","bc6a8420ce172cce6ed46f58a93afbee"],["/My-secret-base/img/cnmteam03.png","ea81fb6490791402838f8f64b19f1608"],["/My-secret-base/img/cnmteam04.png","f356a1cbadf0315b30d4582a8e7618c8"],["/My-secret-base/img/cnmteam05.png","4f28192a33c928dfb43e3f9acb756c43"],["/My-secret-base/img/cnmtlbg.jpg","0537ef66a80dd8408eb9c0e5fd1ed74e"],["/My-secret-base/img/guanyuzhanzhang.jpg","081d714b992221a2e89f48108482e868"],["/My-secret-base/img/huashui.jpg","33dcfcb5a29ec82f9ffba5c45d3d5f96"],["/My-secret-base/img/jing.png","a8c00894e29a6edaa1142eb8ff1341f2"],["/My-secret-base/img/jingtaiziyuan.jpg","95f47647a5dc4c27fdb235076e18b945"],["/My-secret-base/img/nav05_fj.png","9f11331ccec22a671573f0d4ac64f0c9"],["/My-secret-base/img/nav05_zp01.jpg","efdf95bf6de5bbbbaf4f1dfbae5e2a0a"],["/My-secret-base/img/nav05_zp02.jpg","22cdb2fb22b3502eabde3dcd71154fb9"],["/My-secret-base/img/nav05_zp03.jpg","d5f98868a88433dff03c9019cfdf0ba8"],["/My-secret-base/img/nav05_zp04.jpg","2700cc3bd3547fae47db44827c3cca56"],["/My-secret-base/img/nav05_zp05.jpg","829a54b29dc0734ef6bd592cab997d4a"],["/My-secret-base/img/qywx.png","57d9f7ad05ab8e809fe2429faec869e6"],["/My-secret-base/img/shangyehezuo.png","841a7f7cafae0cb6f101373d493efabc"],["/My-secret-base/img/shouye.jpg","f0c7805c60e8fac1495b2e69dd427130"],["/My-secret-base/img/start.jpg","6e2e00e7ba1c02482c20f1378f1a3236"],["/My-secret-base/img/tx.jpg","d77bbcb8d49b8616b264dd6bd0e5f92d"],["/My-secret-base/img/yuhangyuan.png","feb5c79d216b27b0d933ec35b26605e8"],["/My-secret-base/img/zhandian.jpg","bd05b7d22a8486b3700416e6ddaac4b3"],["/My-secret-base/index.html","7462e453b4b14069c99b1b78b6b4625a"],["/My-secret-base/js/cnm.sb_bg.js","b7642aa658a5c5b9ae090673061fd4fe"],["/My-secret-base/js/cnm.sb_copy.js","8602c74cb3bfaf756461b2a3799e80c7"],["/My-secret-base/js/cnm.sb_judge.js","f330b9787039c59858aa79f8c0a01d94"],["/My-secret-base/js/cnm.sb_mp.js","7faae29f36c16d6fceb4eeb8a9857cea"],["/My-secret-base/js/cnm.sb_pc.js","dabc1973f647864a28dd011453e24948"],["/My-secret-base/js/jquery-3.2.1.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/about/index.html","83a0d61896f12c9d9b2182d26e08519c"],["/archives/2019/08/index.html","fb57cb18279956e70e09e01191ecd608"],["/archives/2019/index.html","340e6e5070dcfeae52334151534781c2"],["/archives/2020/02/index.html","13d0e92daf455a4afb5f08aa50aba6db"],["/archives/2020/index.html","55334f986a8279fc80df9c304f093f37"],["/archives/2021/06/index.html","988255dc150a73a10c30ab4e3cbb7a40"],["/archives/2021/index.html","f4107191cf31841911d991fc15c6f9c9"],["/archives/2022/05/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/05/page/2/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/05/page/3/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/05/page/4/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/05/page/5/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/05/page/6/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/05/page/7/index.html","4dccb8b1e24cc14157c52080c80f3edc"],["/archives/2022/06/index.html","1b8e813a1c4a3fc07eb89206b973ebcc"],["/archives/2022/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/2022/page/2/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/2022/page/3/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/2022/page/4/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/2022/page/5/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/2022/page/6/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/2022/page/7/index.html","638f28d0b5be4f47bb3159c597b0221f"],["/archives/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/2/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/3/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/4/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/5/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/6/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/7/index.html","e21c2da9626ad2a477e451e981652a99"],["/archives/page/8/index.html","e21c2da9626ad2a477e451e981652a99"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","53cdddf4e28b30bbfa80dc5156f2dbab"],["/bvtoav/index.html","05b934dd17a683b7707854837aefc444"],["/categories/index.html","c91c66b0cf7c296659d0abbcffc41b92"],["/categories/技术-Markdown语法教程/index.html","44605c8fad9a37ce9ecf59e0c7088edd"],["/categories/技术/index.html","c3128b63a615e46435c7d783f3ad97cb"],["/categories/技术/page/2/index.html","06e0cee92868da6bb96d49584f9aeffb"],["/categories/生活/index.html","082f154969b4812e2e99fbc36f4df4e3"],["/categories/资源/index.html","fd0f605ec32fd135bd54ef270b4f3bd1"],["/categories/转载/index.html","ede0126dcd61fd14ca020d8eefcd5417"],["/categories/转载/page/2/index.html","62127db6f4838e9f1cebaf6a5d24e509"],["/categories/转载/page/3/index.html","6cd9462ecf1e05fd0eb0e6b41e03ba71"],["/categories/转载/page/4/index.html","9098ddc9e117fa9b900b94f7dd7fd155"],["/categories/随想/index.html","26989cab716b616a6a7ef3e3e89cb333"],["/categories/随笔/index.html","017c976685d562bb2c2d61e41e2454c7"],["/cd/404.html","f4659694a45d76f7a9849b1df94151e9"],["/cd/QR-code-scanning/index.html","8542a7a03a8afbfa816cfa9efcd83fd2"],["/cd/QR-code-scanning/preview.png","d36b95823a701b62475612f75357756c"],["/cd/QR-code-scanning/script.js","988d034539edefef6f4800f3cbc88900"],["/cd/QR-code-scanning/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/cd/Tetris/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/cd/Tetris/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/cd/Tetris/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/cd/Tetris/index.html","09187c99403fe79bb0036c0788b358b4"],["/cd/Tetris/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/cd/WINUI/configs.js","7939f47a3619876b666e996f25ada7cf"],["/cd/WINUI/documents/assets/1.png","0c94ed16cf24ce1528ffcf9af7631184"],["/cd/WINUI/documents/assets/2.png","f0f16f2795ddaf8b7f89507c10c20c42"],["/cd/WINUI/documents/assets/3.png","d5770733591cf5a0d0abcc080bc59280"],["/cd/WINUI/documents/assets/4.png","70a40e24ce868aac94bd26e52b693f1c"],["/cd/WINUI/documents/assets/5.png","0fab93872508932afdec662d89b51667"],["/cd/WINUI/documents/assets/6.png","467e91c75dded0118d15010db5d83d92"],["/cd/WINUI/documents/assets/7.png","16412af75814b6f503aaa40d29596244"],["/cd/WINUI/documents/assets/8.png","1bfc57e3215b0d1392f9fd50e3829d14"],["/cd/WINUI/index.html","72e21c7b0fbb723ac00c2a27cd7a8cff"],["/cd/WINUI/onLoad.js","3fef2bc53efec7a08f3ff8a939df1123"],["/cd/WINUI/res/apps/app-store/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/apps/app-store/index.html","9874132adb834b5c4833fbdcfa5a5caa"],["/cd/WINUI/res/apps/app-store/preview.jpg","09e51965739a26c73b3644d504286fc6"],["/cd/WINUI/res/apps/app-store/script.js","0747ebd509f5cda2ceb96ebbecc616e9"],["/cd/WINUI/res/apps/app-store/style.css","957461d7a9cfb5a3599fde6662e33de0"],["/cd/WINUI/res/apps/app-store/tpl-setup.html","573dc50edb48f5bc80cf7bdac1cdf247"],["/cd/WINUI/res/apps/browser/index.css","4cbca48bd4945f1cf2605afe3a6c9815"],["/cd/WINUI/res/apps/browser/index.html","e0ade66424d212cfc83e8504bf4430b5"],["/cd/WINUI/res/apps/colorPicker/colorPicker.html","06e9eddb7fd345ef5b6f8b948d4d48c2"],["/cd/WINUI/res/apps/element-ui/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/cd/WINUI/res/apps/element-ui/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/cd/WINUI/res/apps/element-ui/index.css","c048efcb00f2d5bf9c514d4ef1a60e1a"],["/cd/WINUI/res/apps/element-ui/index.js","f6398839e5674f9ef46a728938a49082"],["/cd/WINUI/res/apps/server/import.html","71d42ef2d51cd81d922a991effaf6661"],["/cd/WINUI/res/apps/server/index.html","a71fc31618ad066fae0f87bd8ef04ba5"],["/cd/WINUI/res/apps/yl-system/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/apps/yl-system/index.html","3f17964f63bc07901c326aa9620904ab"],["/cd/WINUI/res/apps/yl-system/index.js","730bf4346f2f74f6d37d1686114b289b"],["/cd/WINUI/res/apps/yl-system/style.css","6956981ba08268b80810a0cd73f3cdf5"],["/cd/WINUI/res/components/animate.css","07f146141537e04ee282a965d8053198"],["/cd/WINUI/res/components/calendar/script.js","7deb1ea55685d1d65a41e24c42a82a1d"],["/cd/WINUI/res/components/calendar/style.css","889d07ffaea6e80b59778f86c2841b50"],["/cd/WINUI/res/components/clipboard-polyfill.js","43c47e6f9a265440b6d6d5c042c1abc2"],["/cd/WINUI/res/components/color-picker/color-picker.css","a13ab1ee68fc00fe975eade37d99459e"],["/cd/WINUI/res/components/color-picker/color-picker.js","090bdc46e53dba4bd8cbe45733a633f1"],["/cd/WINUI/res/components/contextMenu/contextMenu.css","ae22314e52256977b12617e6106ef13d"],["/cd/WINUI/res/components/contextMenu/contextMenu.js","3200bb8c4c3804ec329d6fd9845aaa23"],["/cd/WINUI/res/components/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/cd/WINUI/res/components/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/cd/WINUI/res/components/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/cd/WINUI/res/components/jquery.nicescroll.min.js","d247c9568e051b91d27ba6901447e8b0"],["/cd/WINUI/res/components/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/cd/WINUI/res/components/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/cd/WINUI/res/components/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/cd/WINUI/res/components/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/cd/WINUI/res/components/vue-grid-layout-2.1.11.min.js","1871f71290243d0d7171c0d1a0658502"],["/cd/WINUI/res/components/vue.min.js","24063abba2ad45c26b7329e89be49d8d"],["/cd/WINUI/res/css/grid.css","4e60778d5d194f1d61e60c773ef71f1e"],["/cd/WINUI/res/css/loading.css","efb0adcae18636c7ee6d07dde4b617d9"],["/cd/WINUI/res/css/main.css","62be0e07a3497dfa89518d5d2b3d6314"],["/cd/WINUI/res/css/tiles.css","0979d1d8dda0229e159dbc182e1a2d0a"],["/cd/WINUI/res/css/yl-layer-skin.css","66da08271805c80346365f415730abc6"],["/cd/WINUI/res/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/cd/WINUI/res/img/donation.png","cfcd102cefe411740a1942c4b1101348"],["/cd/WINUI/res/img/favicon.png","10211db9350a68716100fd7388607507"],["/cd/WINUI/res/img/icon/close.svg","c5449b9ab12de31be87bd78457ead906"],["/cd/WINUI/res/img/icon/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/img/icon/maximize.svg","5ec8b0ca1f75ef84473c9427bda6a899"],["/cd/WINUI/res/img/icon/message.svg","8990eb1399ec6e43c4ee9438214d4695"],["/cd/WINUI/res/img/icon/minimize.svg","62149b882a325456940eff4eb1022936"],["/cd/WINUI/res/img/icon/restore.svg","03e35aef920cfdfac1f296f25c4be6b6"],["/cd/WINUI/res/img/splashscreen.png","cb619aaa3f7bc8b3f378116dade2507d"],["/cd/WINUI/res/img/wallpapers/bg1.jpg","cea0a23f072704cb0f0b41b4e4f66bb1"],["/cd/WINUI/res/img/wallpapers/bg10.jpg","6acbcd4cf862d24aaf49c61405a02a38"],["/cd/WINUI/res/img/wallpapers/bg10_1.jpg","1e53b55fb02187fd885757a755c68984"],["/cd/WINUI/res/img/wallpapers/bg11.jpg","bec82a612e3b52ba1a2820bd0e4d5b8c"],["/cd/WINUI/res/img/wallpapers/bg11_1.jpg","b6c175c0e2c97a761a6095e343529f16"],["/cd/WINUI/res/img/wallpapers/bg12.jpg","d2ca5202eb10f3689b842ae13b6caba5"],["/cd/WINUI/res/img/wallpapers/bg12_1.jpg","14c7f250b712e06d23bbe023fb889fd9"],["/cd/WINUI/res/img/wallpapers/bg13.jpg","1ec917e5682446735ca4d09ac84f928a"],["/cd/WINUI/res/img/wallpapers/bg13_1.jpg","1a46279896c688078c6220eaed07e585"],["/cd/WINUI/res/img/wallpapers/bg14.jpg","ba9874899616b7518abbd7341ac706a1"],["/cd/WINUI/res/img/wallpapers/bg14_1.jpg","fd89342c254552176af42894dfeca98e"],["/cd/WINUI/res/img/wallpapers/bg15.jpg","cea663b1846e1d9b9f8bf45271cc0372"],["/cd/WINUI/res/img/wallpapers/bg15_1.jpg","fef28b8dce7dfff5e5b66e70050123fe"],["/cd/WINUI/res/img/wallpapers/bg1_1.jpg","77267082c29f03e7ced5334c4c2cd6fb"],["/cd/WINUI/res/img/wallpapers/bg2.jpg","1e1b1435df09314556fa64a58207786f"],["/cd/WINUI/res/img/wallpapers/bg2_1.jpg","87a8f4d3d921465ea49efd17511e065f"],["/cd/WINUI/res/img/wallpapers/bg3.jpg","6f385fafa91a9d04edc147b5739701ec"],["/cd/WINUI/res/img/wallpapers/bg3_1.jpg","2cfaef13a35041ce80029d9642ff6e62"],["/cd/WINUI/res/img/wallpapers/bg4.jpg","c8ddd59ea29991a12cf2bbb32cd1f13c"],["/cd/WINUI/res/img/wallpapers/bg4_1.jpg","8b59566dd6042c2d8248be8b38be5238"],["/cd/WINUI/res/img/wallpapers/bg5.jpg","0c3e0c25734eb7ac9aecba0a54c9c370"],["/cd/WINUI/res/img/wallpapers/bg5_1.jpg","ce6241ebb979fa8f3a408dff6d4ab7f3"],["/cd/WINUI/res/img/wallpapers/bg6.jpg","9a1776b26aa188e6917a45cb723b54ec"],["/cd/WINUI/res/img/wallpapers/bg6_1.jpg","9f60177af7e692f9471c7ab8dd210044"],["/cd/WINUI/res/img/wallpapers/bg7.jpg","ab9983a8b4d908a7222e63fa0424c2f2"],["/cd/WINUI/res/img/wallpapers/bg7_1.jpg","8e00b2f155b0334709a9daad9e7ccf23"],["/cd/WINUI/res/img/wallpapers/bg8.jpg","49060b22ed69da83d0d1c512a26cdcf9"],["/cd/WINUI/res/img/wallpapers/bg8_1.jpg","f4e17b8106527915f20d47c02993bb8a"],["/cd/WINUI/res/img/wallpapers/bg9.jpg","a9d0daee47a24863e62cac0e6e7bc4f5"],["/cd/WINUI/res/img/wallpapers/bg9_1.jpg","866b853772e237fde4d6bd1121ad3c70"],["/cd/WINUI/res/img/wallpapers/uploadbg.png","40fd031ef5bda8f0fd6d93327e32e8a9"],["/cd/WINUI/res/js/Yuri2.js","ae175ca0a7934b03806b8424a809d19e"],["/cd/WINUI/res/js/yl-io.js","d69d4ad8bc59c6124d7b231cd1aa1d9f"],["/cd/WINUI/res/js/yl-render.js","da81ec2de006339144ef7045881cc210"],["/cd/WINUI/res/js/yl-vue-component-icon.js","0b73923ce415f0e6f7c13d543adca5be"],["/cd/WINUI/res/js/yl-vue-components.js","5e03ddb4fadbf61a35daf8a72f14aa48"],["/cd/WINUI/res/yl.app.js","5b78359c6df86b292fc5574508bd9909"],["/cd/WINUI/res/yl.js","1afa32b9dfd74aed7001bd823734d0ba"],["/cd/clock/clock1/index.html","7245ebbbad8b7479392fd367b2301cb2"],["/cd/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/cd/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/cd/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/cd/clock/clock2/index.html","6eff0b40751b883a73accb0f3fbede4e"],["/cd/cloudtags/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/cd/cloudtags/146.js","a4f1af1154a2a18f423b078c00470bad"],["/cd/cloudtags/index.html","f22eddb9526af27bd40fd672369c393e"],["/census/index.html","b1fbcf82a78167348705e806bca194b7"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","5a33df6ba772fd4d0f429808ca4fdd4e"],["/census/未命名文件夹/index的副本.html","395fa0936b95ed78a57b2f470637db76"],["/charts/index.html","6aaec9edb53bbc29c06376062fb921cb"],["/client/index.html","d36bad1b137bd91cadb079f1593b023d"],["/comment/index.html","04c203e61cb3e0c3a889a20057237124"],["/contact/index.html","539a47418523daf3bc21b8265b3480ff"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","014af03615d612cae4f1aa8a7f7f8f03"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","4e603d7edaa4d3e3986e06ff541eade5"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","bdc12d6c72fd03ae04fe9e9f5d25e24d"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","5f88ec34c9d8f1238b6218ffca4016a0"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","9e110b517bb0d5b7f1ff2ef78fbf2bc4"],["/journal/index.html","2e2815cdd3026aa5c15856544ee6f90e"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/visit_calendar.js","2fbb4e98e0bc0192e0607403a3339c4c"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","56941800085ce6698ffe62546584de6c"],["/laboratory/index.html","81c56609a1a5839b9b8c69ca3067f368"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","f43ccb5294cdf08983c211eb79b489d3"],["/map/index.html","eac026366e6695d7a7b74bb256fa3697"],["/music/index.html","da570cb15fe19dd2784764b2076fa1cc"],["/musics/index.html","9419db85a527557e76e848db1c0b795f"],["/page/2/index.html","70c16fe6ad07e2996d67a2db40210aa2"],["/page/3/index.html","4df466d8ea44675fae21ec2ebc3559df"],["/photos/index.html","9a5e0c35a4ee0f56b4f5727d9b248e89"],["/posts/11908.html","ecf3bf9a0e55ca20763f9b13eb4cb230"],["/posts/1355.html","649254a29de368e4af4c032f7fe49fcf"],["/posts/19324.html","a45ebc88121db47eedc07876d6e77ff6"],["/posts/19d2a4e6.html","81d38224c84606deabc3552bb38bdbcb"],["/posts/20692.html","ba0ea1abb9deaef61307af7557fee367"],["/posts/22294.html","d8349aaaf0bc993996bf507e7f2beef3"],["/posts/22338.html","6349a1e09a23b8c7a3c61a2be8d622f8"],["/posts/25167.html","b9951f2ef86f70b76cb2f4df013503d5"],["/posts/25381.html","5ffc4b37480155c65ee01ebc17d12032"],["/posts/25797.html","8d0b83211b699002b08d1facfaea90d6"],["/posts/27498.html","99167052d737fc4865d8411cf74b25c5"],["/posts/27604.html","75cae8fd82675cd89420b9b7ef46243c"],["/posts/28347.html","7c42c7fb08d25ed061180761756238df"],["/posts/29462.html","c307b5edba1255165cf65c3c9fe6518d"],["/posts/30884.html","6cb880110bcec059402c5a07c38639c6"],["/posts/38332.html","eaddc9c5f7c77cf0bc6e8505d43100ae"],["/posts/38811.html","4d6931bd60279cd50be8a0d685f3c0ee"],["/posts/48198.html","563bcaeb952518b21809b712c8ab66e8"],["/posts/48201.html","d53eb901092502a5c66adb4103c81c5c"],["/posts/4901.html","538f9d363412308337582c8f37225c2e"],["/posts/4b3510a4.html","c954e802508473c788545ff5d6ca0ad7"],["/posts/50391.html","f4f0941da4aede70cacdd99f6709d0f6"],["/posts/51618.html","f52d9ffe3ebd9bb4124757851560b3be"],["/posts/5560.html","91c94ab3ffbf585fd9197b03b81612bf"],["/posts/60349.html","1b1f87e14b1c492bee0ed9eecb4f596e"],["/posts/62019.html","75aa8246fd140da1342c72f21316ca04"],["/posts/64683.html","f9b8996839ab1a8e81c7c919393856a8"],["/posts/7a46f93c.html","250c547d9bb4c6bafb4a6d05139675f3"],["/posts/d74d8b76.html","3541f8621761041c34a3f90e0fa3d523"],["/posts/e3e08109.html","269f706b475664ce07485b51d8d26330"],["/shuoshuo/index.html","eb2f0aea16bb91dac96fd7aae3b072a8"],["/sw-register.js","fefd25f5ce905304b2b39a194e404dd2"],["/tags/API图片/index.html","a7b1f84fb0878c3bfc3291a2e5cedaa1"],["/tags/Billie-Eilish/index.html","4649a531ec846ed8968f4660c05d8ce4"],["/tags/Fontawesome-图标/index.html","9c473f50ada5cd99e778b5868eb8fdc5"],["/tags/GitHub图床/index.html","ff4f9f7095ccf8477011177f542d06cf"],["/tags/Github/index.html","ffefe39bd7366804cbdb28029a50eaf6"],["/tags/Hexo/index.html","dee4f994179c59cefb959aed9ff1f32c"],["/tags/LPL/index.html","69bd6423ae8548715ca35bbc5243d6e0"],["/tags/Markdown/index.html","2be43493744d91003714388db2f4036c"],["/tags/PicGo/index.html","bd02f15e5171b85fcab14bc66a3686bb"],["/tags/WEBP/index.html","f8f200bb3a71bdef864182cd4f7071a3"],["/tags/YLUI/index.html","6c4c48800c907fc01767299d5b043f0d"],["/tags/YLUI/page/2/index.html","62ea61028fa487315b4afea5987cd63a"],["/tags/YLUI/page/3/index.html","b96f27e4a1709cf6515e33de653e92bd"],["/tags/ajax/index.html","aed101d5ec2749f8a4336e33601f9b73"],["/tags/blog/index.html","016225586d074b048f2080b796320b4c"],["/tags/css/index.html","848042ecd9b3bd832078cc84f932c88f"],["/tags/echarts/index.html","d711fcf7a8d43fad9ee9b5158c8acfab"],["/tags/flask/index.html","c38b953ae18484cfd1674b6b5d9eb198"],["/tags/hexo-blog-lucky/index.html","023309ed41b1cb8e2528d745a20a86ea"],["/tags/html/index.html","7d4fbe263a0a9e9e45364c3fe076ca94"],["/tags/index.html","6156fd3f4a9653764cda936f7a3a6bb7"],["/tags/jQuery-CSS3/index.html","fbbcd7f23b758e90690a81192e215396"],["/tags/jQuery/index.html","e4e56a9be9053cdaf2152470b9af059e"],["/tags/javascript/index.html","e7afca3449235d7f9d0af8b857712862"],["/tags/json/index.html","4a1887177baeb42811c24ff63d417399"],["/tags/mysql/index.html","0e84748c08caae547c91e494bf266ff4"],["/tags/note标签/index.html","7e0838e205ff6a0f00c006cfa9f9d1e1"],["/tags/npm/index.html","30c586d6eac776c02cca27d0a1e2c7ec"],["/tags/numpy/index.html","67e26e1691c1ff3c06bce6283916c501"],["/tags/pymysql/index.html","a497846e20ef8c1ce91108f08a193f54"],["/tags/python/index.html","6ecdbcf6991614f61f5e1dbe3ccf2bb0"],["/tags/requests/index.html","06ca860eff0c202c09abe1637b4e9d79"],["/tags/web/index.html","8541af207c1d3de9f387c567c5be1050"],["/tags/代码分享/index.html","de1b533bfb52159bb5ad0fe3734e18fe"],["/tags/代码压缩/index.html","17b6525a609b1349cb2c294cc0cdfe4c"],["/tags/全职高手/index.html","d6f875434520f3cb5b76fc9f4158aabe"],["/tags/加速器/index.html","13253b9c470130d90ab7ebb6193d2ad7"],["/tags/动漫/index.html","75e26fc5e84b453742cb21e503d45f35"],["/tags/博客/index.html","62a349b518bb6f6d48ee1ec7f5f67f01"],["/tags/博客优化/index.html","bc1afb70ab89b0a005d255accf18331e"],["/tags/博客搭建教程/index.html","6b46a89bd6c8e86c555f78904729e531"],["/tags/图像处理/index.html","ca0c307ec46254dc5479294d6c10b046"],["/tags/图集/index.html","6156fd3f4a9653764cda936f7a3a6bb7"],["/tags/声明/index.html","4ec2e0b3d913c6fd45d79b5f4068858e"],["/tags/好物推荐/index.html","cee302109c55b3748e3a898426c4d20e"],["/tags/工具箱/index.html","c7f953b72ef30fc78d07f5a04ee461bb"],["/tags/应用分享/index.html","610bddd53b5e69d13bcfe9eec72eec37"],["/tags/思维导图/index.html","6312f0545de1f02edb43800ed01bf2f1"],["/tags/悦读/index.html","f49275f28fd0634bbf924a6fa35059fc"],["/tags/插件/index.html","2c5420d3cd9698c3cccfd0baf52bbf2e"],["/tags/教程/index.html","f8b4f36143fc8d2273f42b4a276befd7"],["/tags/数据可视化/index.html","0f9353be8434ad9d4b85e943c9bf139b"],["/tags/文章加密/index.html","0a1ffe58384406b84d8f231a62312d1b"],["/tags/汉化/index.html","67757dbe83895cbf8e24d01de5cab0ce"],["/tags/流行音乐/index.html","2285ada23c2e9daa426441869c645202"],["/tags/渲染绕过/index.html","271cc0420bed26830905696b2afba39a"],["/tags/游戏板块/index.html","b9bc76234079b5eaa84af02580458071"],["/tags/生物/index.html","6a64db455cbf4ba33fe36f0ec7cb2824"],["/tags/百科/index.html","eabe0409a9df243d8b49f997ae930f88"],["/tags/粒子特效/index.html","7037947226601be6a441f14b530aa0ef"],["/tags/网站分享/index.html","22728afdc6c109065171966ee71b0cb1"],["/tags/蚊子/index.html","c7dc1b41d72fcdb0e8afac154d0e8a3e"],["/tags/评价/index.html","de54ac6da178dae7e1a63e74d96abae4"],["/tags/转换/index.html","d5d5aa8914a773ae5b17e7d72fd25e92"],["/tags/转载/index.html","98497a3565b6cd6b6eed3493b6e699fc"],["/tags/阿里云/index.html","eb9fc699c6a54efea9573fb8dc011147"],["/tags/音乐/index.html","f7836ba173294ae8fc1ad55db59d3c83"],["/theme-sakura/index.html","5fab5dc805e2616634a1a7eb47416f02"],["/ticktack/index.html","2bd25d8a8e2080333fd186faec78d66d"],["/videos/index.html","3bf65d04d92e129b5115a4fe051c5d24"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"]];
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
