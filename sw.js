/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","93bf04265e6aa040d9e2416cf9b0c768"],["/KWGAME/1.html","7ed095dc4d2af9a8749a378129dec948"],["/KWGAME/index.html","bab2b058e6dbc05da26d14e0905b19f4"],["/My-secret-base/css/cnm.sb_bg.css","105dc5eb986e8d5f1ad4dec62c1a8f36"],["/My-secret-base/css/cnm.sb_load.css","3c6dcc637a376b033161b1b7ef3e9d31"],["/My-secret-base/css/cnm.sb_mp.css","ee4f281824f29b309e2fba954146c9ef"],["/My-secret-base/css/cnm.sb_pc.css","0e68ec256edc4ff916de120e6314ac9c"],["/My-secret-base/font/cnm.sb.ttf","8cdde8c3561834bbed575532294b706a"],["/My-secret-base/font/cnmsb01.png","bf41d5d7c1b79bee6a2622d33fada794"],["/My-secret-base/font/cnmsb02.png","21334fc3dc963c237495e9e9740c3dd7"],["/My-secret-base/font/cnmsb03.png","9d21104777b732948e31fc8e0adc5731"],["/My-secret-base/font/cnmsb04.png","d45f70683f07fd2451f218007659649a"],["/My-secret-base/font/cnmsb05.png","d7bfe0331e78d256e53604daeaff3cd0"],["/My-secret-base/font/cnmsb06.png","7585b1b6a71957793a3b575672633b3e"],["/My-secret-base/font/cnmsb07.png","86f83d73e69d2f4df0516f976653b014"],["/My-secret-base/img/benzhanyuanma.jpg","3b1c4946ae7bedfcd7396737ba93cf35"],["/My-secret-base/img/cnm.sb.svg","defb2e89adad0c7c7a3668c4d229c0e6"],["/My-secret-base/img/cnm.sb_logo.svg","0cbd985c0c8f0dc8e688572d377789fc"],["/My-secret-base/img/cnmteam01.png","6215be6073e5523319961d34f5b19834"],["/My-secret-base/img/cnmteam02.png","bc6a8420ce172cce6ed46f58a93afbee"],["/My-secret-base/img/cnmteam03.png","ea81fb6490791402838f8f64b19f1608"],["/My-secret-base/img/cnmteam04.png","f356a1cbadf0315b30d4582a8e7618c8"],["/My-secret-base/img/cnmteam05.png","4f28192a33c928dfb43e3f9acb756c43"],["/My-secret-base/img/cnmtlbg.jpg","0537ef66a80dd8408eb9c0e5fd1ed74e"],["/My-secret-base/img/guanyuzhanzhang.jpg","081d714b992221a2e89f48108482e868"],["/My-secret-base/img/huashui.jpg","33dcfcb5a29ec82f9ffba5c45d3d5f96"],["/My-secret-base/img/jing.png","a8c00894e29a6edaa1142eb8ff1341f2"],["/My-secret-base/img/jingtaiziyuan.jpg","95f47647a5dc4c27fdb235076e18b945"],["/My-secret-base/img/nav05_fj.png","9f11331ccec22a671573f0d4ac64f0c9"],["/My-secret-base/img/nav05_zp01.jpg","efdf95bf6de5bbbbaf4f1dfbae5e2a0a"],["/My-secret-base/img/nav05_zp02.jpg","22cdb2fb22b3502eabde3dcd71154fb9"],["/My-secret-base/img/nav05_zp03.jpg","d5f98868a88433dff03c9019cfdf0ba8"],["/My-secret-base/img/nav05_zp04.jpg","2700cc3bd3547fae47db44827c3cca56"],["/My-secret-base/img/nav05_zp05.jpg","829a54b29dc0734ef6bd592cab997d4a"],["/My-secret-base/img/qywx.png","57d9f7ad05ab8e809fe2429faec869e6"],["/My-secret-base/img/shangyehezuo.png","841a7f7cafae0cb6f101373d493efabc"],["/My-secret-base/img/shouye.jpg","f0c7805c60e8fac1495b2e69dd427130"],["/My-secret-base/img/start.jpg","6e2e00e7ba1c02482c20f1378f1a3236"],["/My-secret-base/img/tx.jpg","d77bbcb8d49b8616b264dd6bd0e5f92d"],["/My-secret-base/img/yuhangyuan.png","feb5c79d216b27b0d933ec35b26605e8"],["/My-secret-base/img/zhandian.jpg","bd05b7d22a8486b3700416e6ddaac4b3"],["/My-secret-base/index.html","7462e453b4b14069c99b1b78b6b4625a"],["/My-secret-base/js/cnm.sb_bg.js","b7642aa658a5c5b9ae090673061fd4fe"],["/My-secret-base/js/cnm.sb_copy.js","8602c74cb3bfaf756461b2a3799e80c7"],["/My-secret-base/js/cnm.sb_judge.js","f330b9787039c59858aa79f8c0a01d94"],["/My-secret-base/js/cnm.sb_mp.js","7faae29f36c16d6fceb4eeb8a9857cea"],["/My-secret-base/js/cnm.sb_pc.js","dabc1973f647864a28dd011453e24948"],["/My-secret-base/js/jquery-3.2.1.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/about/index.html","524f78fadf6bef960eb4e76e33773c2f"],["/archives/2019/08/index.html","8873330e752ab2d9f7b51f4d087a2753"],["/archives/2019/index.html","68900efad5e0d05d59736e9a1e7c0111"],["/archives/2020/02/index.html","c3a0d84b92fbf74a559182204dc4d453"],["/archives/2020/index.html","8cc292bfe25b8cb3c935a8068c034002"],["/archives/2021/06/index.html","41435d9010f28e99a8b9e86e96cc97c0"],["/archives/2021/index.html","a5462c8dfe9b80426dc22bcc433b7735"],["/archives/2022/05/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/05/page/2/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/05/page/3/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/05/page/4/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/05/page/5/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/05/page/6/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/05/page/7/index.html","040c8cf2ba5c3a653b923544d4eeebd0"],["/archives/2022/06/index.html","10e94eb7bf87d79b923a5a22e6d40552"],["/archives/2022/06/page/2/index.html","10e94eb7bf87d79b923a5a22e6d40552"],["/archives/2022/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/2/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/3/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/4/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/5/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/6/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/7/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/8/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/2022/page/9/index.html","84673c46ccce55f75f0e2dd7bc0ec1ce"],["/archives/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/10/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/2/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/3/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/4/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/5/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/6/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/7/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/8/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/archives/page/9/index.html","d7b4d9e9a636f4fe04451265ddc33d22"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","be9e5d853e5467351ea9a9c5ee0b390c"],["/bvtoav/index.html","ed0fef634a1c97ef21493774665b8647"],["/categories/index.html","62f74f73bb8d2e23dcffbd2be42bfc5f"],["/categories/技术-Markdown语法教程/index.html","6898ad26d25971f9cfb6ecddbf2848d2"],["/categories/技术/index.html","2b389334f4d1468f0a05f222cff7ceca"],["/categories/技术/page/2/index.html","f6ab127570f2dc256764506996fd552b"],["/categories/技术/page/3/index.html","3849f197c1fe8220fdc0f1985380bb13"],["/categories/技术/page/4/index.html","a1b62d7e0a7fdc56b4a45a3f620d179b"],["/categories/生活/index.html","8cc3ac423ed46eb90e1248551085ff63"],["/categories/资源/index.html","79c07cb8fe0931dddc2f62aba2d3b1f0"],["/categories/转载/index.html","1a8a1415a05a11a376322202a0711d7a"],["/categories/转载/page/2/index.html","bd7c64d2ac654e92bab930a7fc9a7332"],["/categories/转载/page/3/index.html","9d476775e91b17b339742284c98d0016"],["/categories/转载/page/4/index.html","0c1355319787196a32d7c84197920339"],["/categories/随想/index.html","6df313c34a40db07676daf25df97eae2"],["/categories/随笔/index.html","35bc9feece7e16a8407b8b599a0a9c98"],["/cd/404.html","f4659694a45d76f7a9849b1df94151e9"],["/cd/QR-code-scanning/index.html","8542a7a03a8afbfa816cfa9efcd83fd2"],["/cd/QR-code-scanning/preview.png","d36b95823a701b62475612f75357756c"],["/cd/QR-code-scanning/script.js","988d034539edefef6f4800f3cbc88900"],["/cd/QR-code-scanning/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/cd/Tetris/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/cd/Tetris/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/cd/Tetris/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/cd/Tetris/index.html","09187c99403fe79bb0036c0788b358b4"],["/cd/Tetris/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/cd/WINUI/configs.js","7939f47a3619876b666e996f25ada7cf"],["/cd/WINUI/documents/assets/1.png","0c94ed16cf24ce1528ffcf9af7631184"],["/cd/WINUI/documents/assets/2.png","f0f16f2795ddaf8b7f89507c10c20c42"],["/cd/WINUI/documents/assets/3.png","d5770733591cf5a0d0abcc080bc59280"],["/cd/WINUI/documents/assets/4.png","70a40e24ce868aac94bd26e52b693f1c"],["/cd/WINUI/documents/assets/5.png","0fab93872508932afdec662d89b51667"],["/cd/WINUI/documents/assets/6.png","467e91c75dded0118d15010db5d83d92"],["/cd/WINUI/documents/assets/7.png","16412af75814b6f503aaa40d29596244"],["/cd/WINUI/documents/assets/8.png","1bfc57e3215b0d1392f9fd50e3829d14"],["/cd/WINUI/index.html","72e21c7b0fbb723ac00c2a27cd7a8cff"],["/cd/WINUI/onLoad.js","3fef2bc53efec7a08f3ff8a939df1123"],["/cd/WINUI/res/apps/app-store/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/apps/app-store/index.html","9874132adb834b5c4833fbdcfa5a5caa"],["/cd/WINUI/res/apps/app-store/preview.jpg","09e51965739a26c73b3644d504286fc6"],["/cd/WINUI/res/apps/app-store/script.js","0747ebd509f5cda2ceb96ebbecc616e9"],["/cd/WINUI/res/apps/app-store/style.css","957461d7a9cfb5a3599fde6662e33de0"],["/cd/WINUI/res/apps/app-store/tpl-setup.html","573dc50edb48f5bc80cf7bdac1cdf247"],["/cd/WINUI/res/apps/browser/index.css","4cbca48bd4945f1cf2605afe3a6c9815"],["/cd/WINUI/res/apps/browser/index.html","e0ade66424d212cfc83e8504bf4430b5"],["/cd/WINUI/res/apps/colorPicker/colorPicker.html","06e9eddb7fd345ef5b6f8b948d4d48c2"],["/cd/WINUI/res/apps/element-ui/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/cd/WINUI/res/apps/element-ui/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/cd/WINUI/res/apps/element-ui/index.css","c048efcb00f2d5bf9c514d4ef1a60e1a"],["/cd/WINUI/res/apps/element-ui/index.js","f6398839e5674f9ef46a728938a49082"],["/cd/WINUI/res/apps/server/import.html","71d42ef2d51cd81d922a991effaf6661"],["/cd/WINUI/res/apps/server/index.html","a71fc31618ad066fae0f87bd8ef04ba5"],["/cd/WINUI/res/apps/yl-system/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/apps/yl-system/index.html","3f17964f63bc07901c326aa9620904ab"],["/cd/WINUI/res/apps/yl-system/index.js","730bf4346f2f74f6d37d1686114b289b"],["/cd/WINUI/res/apps/yl-system/style.css","6956981ba08268b80810a0cd73f3cdf5"],["/cd/WINUI/res/components/animate.css","07f146141537e04ee282a965d8053198"],["/cd/WINUI/res/components/calendar/script.js","7deb1ea55685d1d65a41e24c42a82a1d"],["/cd/WINUI/res/components/calendar/style.css","889d07ffaea6e80b59778f86c2841b50"],["/cd/WINUI/res/components/clipboard-polyfill.js","43c47e6f9a265440b6d6d5c042c1abc2"],["/cd/WINUI/res/components/color-picker/color-picker.css","a13ab1ee68fc00fe975eade37d99459e"],["/cd/WINUI/res/components/color-picker/color-picker.js","090bdc46e53dba4bd8cbe45733a633f1"],["/cd/WINUI/res/components/contextMenu/contextMenu.css","ae22314e52256977b12617e6106ef13d"],["/cd/WINUI/res/components/contextMenu/contextMenu.js","3200bb8c4c3804ec329d6fd9845aaa23"],["/cd/WINUI/res/components/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/cd/WINUI/res/components/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/cd/WINUI/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/cd/WINUI/res/components/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/cd/WINUI/res/components/jquery.nicescroll.min.js","d247c9568e051b91d27ba6901447e8b0"],["/cd/WINUI/res/components/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/cd/WINUI/res/components/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/cd/WINUI/res/components/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/cd/WINUI/res/components/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/cd/WINUI/res/components/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/cd/WINUI/res/components/vue-grid-layout-2.1.11.min.js","1871f71290243d0d7171c0d1a0658502"],["/cd/WINUI/res/components/vue.min.js","24063abba2ad45c26b7329e89be49d8d"],["/cd/WINUI/res/css/grid.css","4e60778d5d194f1d61e60c773ef71f1e"],["/cd/WINUI/res/css/loading.css","efb0adcae18636c7ee6d07dde4b617d9"],["/cd/WINUI/res/css/main.css","62be0e07a3497dfa89518d5d2b3d6314"],["/cd/WINUI/res/css/tiles.css","0979d1d8dda0229e159dbc182e1a2d0a"],["/cd/WINUI/res/css/yl-layer-skin.css","66da08271805c80346365f415730abc6"],["/cd/WINUI/res/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/cd/WINUI/res/img/donation.png","cfcd102cefe411740a1942c4b1101348"],["/cd/WINUI/res/img/favicon.png","10211db9350a68716100fd7388607507"],["/cd/WINUI/res/img/icon/close.svg","c5449b9ab12de31be87bd78457ead906"],["/cd/WINUI/res/img/icon/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/cd/WINUI/res/img/icon/maximize.svg","5ec8b0ca1f75ef84473c9427bda6a899"],["/cd/WINUI/res/img/icon/message.svg","8990eb1399ec6e43c4ee9438214d4695"],["/cd/WINUI/res/img/icon/minimize.svg","62149b882a325456940eff4eb1022936"],["/cd/WINUI/res/img/icon/restore.svg","03e35aef920cfdfac1f296f25c4be6b6"],["/cd/WINUI/res/img/splashscreen.png","cb619aaa3f7bc8b3f378116dade2507d"],["/cd/WINUI/res/img/wallpapers/bg1.jpg","cea0a23f072704cb0f0b41b4e4f66bb1"],["/cd/WINUI/res/img/wallpapers/bg10.jpg","6acbcd4cf862d24aaf49c61405a02a38"],["/cd/WINUI/res/img/wallpapers/bg10_1.jpg","1e53b55fb02187fd885757a755c68984"],["/cd/WINUI/res/img/wallpapers/bg11.jpg","bec82a612e3b52ba1a2820bd0e4d5b8c"],["/cd/WINUI/res/img/wallpapers/bg11_1.jpg","b6c175c0e2c97a761a6095e343529f16"],["/cd/WINUI/res/img/wallpapers/bg12.jpg","d2ca5202eb10f3689b842ae13b6caba5"],["/cd/WINUI/res/img/wallpapers/bg12_1.jpg","14c7f250b712e06d23bbe023fb889fd9"],["/cd/WINUI/res/img/wallpapers/bg13.jpg","1ec917e5682446735ca4d09ac84f928a"],["/cd/WINUI/res/img/wallpapers/bg13_1.jpg","1a46279896c688078c6220eaed07e585"],["/cd/WINUI/res/img/wallpapers/bg14.jpg","ba9874899616b7518abbd7341ac706a1"],["/cd/WINUI/res/img/wallpapers/bg14_1.jpg","fd89342c254552176af42894dfeca98e"],["/cd/WINUI/res/img/wallpapers/bg15.jpg","cea663b1846e1d9b9f8bf45271cc0372"],["/cd/WINUI/res/img/wallpapers/bg15_1.jpg","fef28b8dce7dfff5e5b66e70050123fe"],["/cd/WINUI/res/img/wallpapers/bg1_1.jpg","77267082c29f03e7ced5334c4c2cd6fb"],["/cd/WINUI/res/img/wallpapers/bg2.jpg","1e1b1435df09314556fa64a58207786f"],["/cd/WINUI/res/img/wallpapers/bg2_1.jpg","87a8f4d3d921465ea49efd17511e065f"],["/cd/WINUI/res/img/wallpapers/bg3.jpg","6f385fafa91a9d04edc147b5739701ec"],["/cd/WINUI/res/img/wallpapers/bg3_1.jpg","2cfaef13a35041ce80029d9642ff6e62"],["/cd/WINUI/res/img/wallpapers/bg4.jpg","c8ddd59ea29991a12cf2bbb32cd1f13c"],["/cd/WINUI/res/img/wallpapers/bg4_1.jpg","8b59566dd6042c2d8248be8b38be5238"],["/cd/WINUI/res/img/wallpapers/bg5.jpg","0c3e0c25734eb7ac9aecba0a54c9c370"],["/cd/WINUI/res/img/wallpapers/bg5_1.jpg","ce6241ebb979fa8f3a408dff6d4ab7f3"],["/cd/WINUI/res/img/wallpapers/bg6.jpg","9a1776b26aa188e6917a45cb723b54ec"],["/cd/WINUI/res/img/wallpapers/bg6_1.jpg","9f60177af7e692f9471c7ab8dd210044"],["/cd/WINUI/res/img/wallpapers/bg7.jpg","ab9983a8b4d908a7222e63fa0424c2f2"],["/cd/WINUI/res/img/wallpapers/bg7_1.jpg","8e00b2f155b0334709a9daad9e7ccf23"],["/cd/WINUI/res/img/wallpapers/bg8.jpg","49060b22ed69da83d0d1c512a26cdcf9"],["/cd/WINUI/res/img/wallpapers/bg8_1.jpg","f4e17b8106527915f20d47c02993bb8a"],["/cd/WINUI/res/img/wallpapers/bg9.jpg","a9d0daee47a24863e62cac0e6e7bc4f5"],["/cd/WINUI/res/img/wallpapers/bg9_1.jpg","866b853772e237fde4d6bd1121ad3c70"],["/cd/WINUI/res/img/wallpapers/uploadbg.png","40fd031ef5bda8f0fd6d93327e32e8a9"],["/cd/WINUI/res/js/Yuri2.js","ae175ca0a7934b03806b8424a809d19e"],["/cd/WINUI/res/js/yl-io.js","d69d4ad8bc59c6124d7b231cd1aa1d9f"],["/cd/WINUI/res/js/yl-render.js","da81ec2de006339144ef7045881cc210"],["/cd/WINUI/res/js/yl-vue-component-icon.js","0b73923ce415f0e6f7c13d543adca5be"],["/cd/WINUI/res/js/yl-vue-components.js","5e03ddb4fadbf61a35daf8a72f14aa48"],["/cd/WINUI/res/yl.app.js","5b78359c6df86b292fc5574508bd9909"],["/cd/WINUI/res/yl.js","1afa32b9dfd74aed7001bd823734d0ba"],["/cd/clock/clock1/index.html","7245ebbbad8b7479392fd367b2301cb2"],["/cd/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/cd/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/cd/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/cd/clock/clock2/index.html","6eff0b40751b883a73accb0f3fbede4e"],["/cd/cloudtags/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/cd/cloudtags/146.js","a4f1af1154a2a18f423b078c00470bad"],["/cd/cloudtags/index.html","f22eddb9526af27bd40fd672369c393e"],["/cd/drawn/index.html","e0249b4ed7e3c394abe7980e6b20d677"],["/cd/drawn/main.1bf80c22.js","0709ae9713ceea4500a700ee82e1578a"],["/cd/drawn/style.6d49ecfe.css","0e82adf69d7079d6557e73e3c6434c29"],["/cd/status/assets/StatusPage.9c0b333d.css","1ff687081f9db727e526db4569484e53"],["/cd/status/assets/StatusPage.c8309b95.js","e901d7c3dbdbb6ef28e83ded9c6a1363"],["/cd/status/assets/index.8e9891ec.css","c49d1d7ebb5b72701a4c5be201a54e5a"],["/cd/status/assets/index.97e0fa98.js","248b0b578d0b6cdaf7ebe5547388e302"],["/cd/status/assets/vendor.66254805.js","c083f62800e074d5b303d37a5e8fc49e"],["/cd/status/index.html","b9a1605fbf3e9249ff3a07faaec2a775"],["/cd/status/upload/logo.png","6512c633e7ea5fed529c5382498123c6"],["/census/index.html","575cfb0820127ed6a97b548c4a5ab7ab"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","ae427059dd6c4e82cff4902c42407c50"],["/census/未命名文件夹/index的副本.html","5be3657017977c4401db672c16436b9e"],["/charts/index.html","1ffaa6b94385d98f1d9aa364ba1d8a97"],["/client/index.html","ff5b268f5ac7ac73f6a02b5088abfd0b"],["/comment/index.html","91f7c1936ddd7525d24c2a047516b776"],["/contact/index.html","08731cc1ae74171a6a0d6b2c4f0ab140"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.8e9891ec.css","e3ff43d9c9edce43c6b55e3e326bdc1d"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","df33c6310a6269b45595b04c125272ab"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","bbde4a3b87e8c82981a6229de082b758"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","9cb9afba7cf5c8f5e7b033a6cf29241f"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","94f63f9cea5b5e0fd54098b2380bb134"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","5bde78b7f7e7a612221a3789c8e47c64"],["/journal/index.html","b4d692cb259f5afe555c06e33d551ef7"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/visit_calendar.js","2fbb4e98e0bc0192e0607403a3339c4c"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","7b21a04fd63cf2e6840cb771dc16775b"],["/laboratory/index.html","3f1fa1ce35796d4acdd23f0503468593"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","38268479a4245386be186fd1918cec15"],["/map/index.html","24040e802b2a05e6d7b08e831d3d54c6"],["/music/index.html","671c4b2f9fd56f8ff029267ce6eec24d"],["/musics/index.html","d28368d9c71780f46d599f88963c01ca"],["/page/2/index.html","aa43ff9a570a285fddb9f7aeff4600c0"],["/page/3/index.html","5e007a48ffddffa455fbf5dd5e9b11ba"],["/page/4/index.html","cec2fc904f925dacd5f03c69ff297bba"],["/photos/index.html","e14815058ffeeba8a48944af538b6caf"],["/posts/11908.html","3ced2a667fb9550332368b77adcb972c"],["/posts/1355.html","aa6881dc2fb60e8273753b5798b5a42d"],["/posts/1421.html","859019e06d91a6e3c416fab2d044ca7d"],["/posts/15097.html","f200f36d1725dda0529a6e720d8390a5"],["/posts/16107.html","4dbcb291708f42b7ea10976d316de93e"],["/posts/1905.html","ce02acb23fd617b94e40acf07c53dff8"],["/posts/19324.html","e4bf9c78c8bb08c25c1f647e43aad174"],["/posts/19d2a4e6.html","f91bbdf12c6a5f5b9ff698666c45e930"],["/posts/20692.html","d735542dc01911fd1b4fcc0f654bd3a6"],["/posts/22294.html","e07e6f848bd1a3e2503087e0625c0fc2"],["/posts/22338.html","650fdc1630b0cfbc34f410cfeb8a09d3"],["/posts/22596.html","971addb4da403177b0a3dd7b3a6914f9"],["/posts/23280.html","3cba1b6e116391e8208613e180da1ded"],["/posts/25167.html","25520bdaa4161b220a3a61adc91b97e7"],["/posts/25381.html","9a8c60ccd04409444dee1b45c36638af"],["/posts/25797.html","914e258e374535b1c79237137e1413db"],["/posts/27498.html","72b464a5ec49b373fb6b0c0cb033761b"],["/posts/27604.html","20c4fb0564b36a6de1cb250b96987c65"],["/posts/28347.html","ce6a3f7f8115f7b9b394b36eb3df8e60"],["/posts/29462.html","e50f01a2142f0c319c8894f9895b28b5"],["/posts/30656.html","15c095b3d04883887402f681444af2f8"],["/posts/30875.html","0dca34ff94a3f3da1d07617a19ff8afd"],["/posts/30884.html","298d6723e0b77007a3d01a28e20244a7"],["/posts/37094.html","447f0e3f32167b9640c424ae3ac659c6"],["/posts/38332.html","2211dc63bc78792e853a25e58ed2b06f"],["/posts/38811.html","9ef860b88b242ff8cd641e3bd9a062e0"],["/posts/46307.html","90e2a1b21c9dfea9e70398d4fa714807"],["/posts/47904.html","4c4d1cb1f700a825dc2547d85825c100"],["/posts/48198.html","27ffe4ff443125668e7f02038485e615"],["/posts/48201.html","4677d1806fc7b43350220a1aecce8edc"],["/posts/4901.html","408834c0cea425f289c203f19d296511"],["/posts/4b3510a4.html","b133e258b51c939d5758eb26c3fdf2eb"],["/posts/50391.html","03b1f3e14adf9416028b4a37e5c31855"],["/posts/51618.html","d42fb9c4046c03c7cc1a4553563672b6"],["/posts/5560.html","198e754f1a97ebac7ae94896cc9709b3"],["/posts/60349.html","da98235b718b600ace1a287277085b3a"],["/posts/62019.html","fe2f8773449d8fd528cd913255ea9b84"],["/posts/64683.html","93c63c3c96e5bfe17d222d631c938e3d"],["/posts/7a46f93c.html","4c17ced24f7fcd7d7e025f43558e2c91"],["/posts/d74d8b76.html","189bed29873ddca8923c0fe4acdc8aae"],["/posts/e3e08109.html","ca3b03a6b030a77ad4ced90363e97db6"],["/random.html","e92ed3063aac1174b8b8b1ff8a38f2ed"],["/shuoshuo/index.html","0fbde62a3bed49d11c16b7855110def5"],["/sw-register.js","1ad684db4d19cddc119531821a6fe8d6"],["/tags/API图片/index.html","2ce32867455460f0728ff372471e644c"],["/tags/Billie-Eilish/index.html","2fd11082320dcd50429beaf175664a10"],["/tags/Fontawesome-图标/index.html","c693466b45ad54c5fa0178e4a8b380d4"],["/tags/GitHub图床/index.html","abfb8073cf6c52470bf2e5f716c19fac"],["/tags/Github/index.html","d16fc4fad3d5ce4e4fdac56efa2c8cff"],["/tags/LPL/index.html","f949ba91d429c7ed9c38619612355677"],["/tags/Markdown/index.html","ac7b34423b7d7ebc2e6cd92b112357f1"],["/tags/PPT/index.html","aa8c2b0c880a4c14afc863b08464d2c1"],["/tags/PicGo/index.html","937af5bf94d837084a530f5daa019e29"],["/tags/WEBP/index.html","4cba82f59059cc8943c2e520d230cea0"],["/tags/YLUI/index.html","e61aeb675a7333df63ec43ba433629e9"],["/tags/YLUI/page/2/index.html","b3afc18d3f2d618e66df037f9acff62c"],["/tags/YLUI/page/3/index.html","f058c346445f8ac318449c86af190e97"],["/tags/ajax/index.html","74ae13e351f170518db70bd0c544c0fb"],["/tags/blog/index.html","884678fe9e56ebce64c519c64613dc15"],["/tags/css/index.html","d9af2c59f745c334bf22b0748c3ea879"],["/tags/echarts/index.html","11f87190983275b413f04c2eff6b2bf5"],["/tags/fancybox/index.html","ca9908331cd61c84ca4ed5b0271bcc99"],["/tags/flask/index.html","5f24684a80e6f79ac9cd22c2f686f44b"],["/tags/hexo-blog-lucky/index.html","c2b07b9f021439e7cb6164b89acca4d4"],["/tags/hexo-sakura/index.html","1a90c3962ce917838b33fe25da2310c6"],["/tags/hexo-端口/index.html","911e4c91e0c16bc51c63469af41b88e3"],["/tags/hexo/index.html","df8ec7aa6bce87dd963ad7af0976c07d"],["/tags/html/index.html","c18e03cec813fc01eec2a16fe3e716a7"],["/tags/index.html","c48aff0af1ec0bb26c97002fc135561d"],["/tags/jQuery-CSS3/index.html","847f4dddca7f100e6525138e0fb24c99"],["/tags/jQuery/index.html","21c4d1955a0d63baf0c482175d143e42"],["/tags/javascript-html/index.html","aaf3d4ce7a04ed75296bfd0c6b5fd693"],["/tags/javascript/index.html","4172bef4eabc98c2510e60c56b772793"],["/tags/js/index.html","6fc8f794242093c62e6dbfa3860e5fa1"],["/tags/json/index.html","dec14c44856dd8f1e5bce213dc6c3256"],["/tags/logo/index.html","2ebcdcfda7c6c0d1edc98be8d3f45fec"],["/tags/mysql/index.html","345e6c285548e1d1265f9c1ce588dfa0"],["/tags/note标签/index.html","af89263396d9d5d0f37fce4bb983a5a3"],["/tags/npm/index.html","e29c31a979de1e3f852e7d6746528d97"],["/tags/numpy/index.html","53b988f453c42fe650e1a46d226a528f"],["/tags/pymysql/index.html","e49b2e23d27ff6f1f86c9a80293bcef3"],["/tags/python/index.html","3beb7624bce2dc70ce7c909ffcb934da"],["/tags/requests/index.html","363d7413374d4ff99fc14b7c6d229419"],["/tags/sakura/index.html","7992c9f9c2a57fbf6b6ccb892a66f311"],["/tags/web/index.html","37fb6d573d3ac7398f128ccfde16ea70"],["/tags/wordpress/index.html","0ac6fbfe2c6f92c0ef298c3a356aea71"],["/tags/今日诗词/index.html","d4d774b3ea77f356428abd7f3fd87bd4"],["/tags/代码分享/index.html","6ec2f334e95b48ea3159affcfa259b72"],["/tags/代码压缩/index.html","40f0eace31a42ea0a229d84cd6e574c3"],["/tags/全职高手/index.html","de7196c4cb1052710730cfde3738018a"],["/tags/加速器/index.html","3c7b4ab0eec072bf089484434809c9b8"],["/tags/动态logo/index.html","db2b6554c4e44c1e7e2f4adc54d1eecf"],["/tags/动态背景动画/index.html","82ad3af66d74271a6bca2529f824480c"],["/tags/动漫/index.html","7689ce3120c7a6b9e68b028a4062a0e0"],["/tags/博客/index.html","6053ff18d643c37a3501a515631ec2e7"],["/tags/博客优化/index.html","7410111e63e889db212e89dad6b004c4"],["/tags/博客搭建教程/index.html","b3e72a9c92075c977ee05a77ca60e814"],["/tags/可爱字体/index.html","d26ce93283ef6fc3c308e4bd83e9007e"],["/tags/图像处理/index.html","ef90d563dc9100efa45a7bbb30425193"],["/tags/图集/index.html","c48aff0af1ec0bb26c97002fc135561d"],["/tags/壁纸修改/index.html","58317ff0fe5ae0fa7acea2fbcdd7c794"],["/tags/声明/index.html","54018407ecc7e1a145ed5735ea368fe2"],["/tags/好物推荐/index.html","b5d5674aafd3f0f64d72fd5c2f27db28"],["/tags/工具箱/index.html","28fb678a6efc218c45d0fbde67ebd494"],["/tags/应用分享/index.html","db88c8ea506b7c9f153e46fd805323e1"],["/tags/思维导图/index.html","fd4fa5dd01cc63806aed5d73a787d58e"],["/tags/悦读/index.html","310e6e1bf32c5450d5557b3e0625f8cc"],["/tags/插件/index.html","fc730103fd129d2154ae1e9fb096b17c"],["/tags/搜索/index.html","c0304c9a38610b56454f6659590097c6"],["/tags/教程/index.html","ba9af939ec3bc613e3cbb5cb05b658cf"],["/tags/数据可视化/index.html","6e2775c9a295aa0d0ec6142e4e000ca0"],["/tags/文章加密/index.html","d6c45cb07d272523231e84943cc96eff"],["/tags/日历图/index.html","d2e4d305337f7c26437c95eaf11c8ca4"],["/tags/每日一言/index.html","0341dd11e9d49993d4e8d253643092e9"],["/tags/汉化/index.html","e5ec8896acb14e15b639a8ffd64d4745"],["/tags/流行音乐/index.html","e70565b6f3aeb34d6b7995bdeaaa91d3"],["/tags/渲染绕过/index.html","0d027cc76748db40f19801caacf1a78c"],["/tags/游戏板块/index.html","725823954449829b052d2e506361df2c"],["/tags/环境部署/index.html","be0cb279b7ab808a4050b6a64daebded"],["/tags/生物/index.html","17eef03d6aafa8791b81c9183f75c1dc"],["/tags/百科/index.html","64a0cecef6dde44b43bf7071ea936c3d"],["/tags/粒子特效/index.html","496c667fa5753b919a83b45d0ded521c"],["/tags/网站分享/index.html","bbb550b5b2c48e777b8040a420c4c06e"],["/tags/自定义ttf/index.html","648582b510c81cd0b4ef45134b29c8aa"],["/tags/蚊子/index.html","053cc5e770b44b779ac2f13cf5240555"],["/tags/评价/index.html","7391e8f0b2758a5abba34e9baf6829e3"],["/tags/评论/index.html","86cd05e99d9edbd9108e564b7b883864"],["/tags/转换/index.html","befcc7472e1058eddb37aa9684775a3e"],["/tags/转载/index.html","876b81e8dfa96925fefbbc76ae49f789"],["/tags/通讯栏/index.html","4e32e3cbe92df5fd328779565be1581b"],["/tags/阿里云/index.html","f9fcbbb0a5ff17ad8b2ac70d7b7c98c8"],["/tags/音乐/index.html","5ab0b9ed6ccfd0bccfb9a809cc847aba"],["/theme-sakura/index.html","4d2970610ae13403279ad5d93bfd490b"],["/ticktack/index.html","dbcd90065e6b30a965e56b1b30ac207c"],["/videos/index.html","82b8746aac234182c52d36e146171cda"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"]];
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
