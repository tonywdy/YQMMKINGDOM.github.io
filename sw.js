/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","4623bca25b2e2d3c5d7de6613fccae47"],["/KWGAME/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/KWGAME/index.html","13af59066b9267761a9dd88cb36a288c"],["/about/index.html","927e600f9774930678195fcf6f83360a"],["/archives/2019/08/index.html","27a69b7ce8a00ff5245e4a590a9ccda2"],["/archives/2019/index.html","5be1d058d41aa58dd04a3b160b249945"],["/archives/2020/02/index.html","b7658872fdd486598f70683c080df804"],["/archives/2020/index.html","6bca6b44ad2faf93bee02e49ab0ad35b"],["/archives/2021/06/index.html","770b4041bed31e0e46d9bb55eb4a668c"],["/archives/2021/index.html","66501e21775bcf2e2f169e75ca2786ae"],["/archives/2022/05/index.html","9b5e93659bd8a4e66cf69fdd04489513"],["/archives/2022/05/page/2/index.html","9b5e93659bd8a4e66cf69fdd04489513"],["/archives/2022/05/page/3/index.html","9b5e93659bd8a4e66cf69fdd04489513"],["/archives/2022/05/page/4/index.html","9b5e93659bd8a4e66cf69fdd04489513"],["/archives/2022/index.html","56f33ee8ee20bdae2a569bdf79ef7556"],["/archives/2022/page/2/index.html","56f33ee8ee20bdae2a569bdf79ef7556"],["/archives/2022/page/3/index.html","56f33ee8ee20bdae2a569bdf79ef7556"],["/archives/2022/page/4/index.html","56f33ee8ee20bdae2a569bdf79ef7556"],["/archives/index.html","1648c14944b95b03dc9a01a32a3cc07f"],["/archives/page/2/index.html","1648c14944b95b03dc9a01a32a3cc07f"],["/archives/page/3/index.html","1648c14944b95b03dc9a01a32a3cc07f"],["/archives/page/4/index.html","1648c14944b95b03dc9a01a32a3cc07f"],["/archives/page/5/index.html","1648c14944b95b03dc9a01a32a3cc07f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","fd9c991f0f973e9199735ec9248ca6bd"],["/box/1/configs.js","7939f47a3619876b666e996f25ada7cf"],["/box/1/documents/assets/1.png","0c94ed16cf24ce1528ffcf9af7631184"],["/box/1/documents/assets/2.png","f0f16f2795ddaf8b7f89507c10c20c42"],["/box/1/documents/assets/3.png","d5770733591cf5a0d0abcc080bc59280"],["/box/1/documents/assets/4.png","70a40e24ce868aac94bd26e52b693f1c"],["/box/1/documents/assets/5.png","0fab93872508932afdec662d89b51667"],["/box/1/documents/assets/6.png","467e91c75dded0118d15010db5d83d92"],["/box/1/documents/assets/7.png","16412af75814b6f503aaa40d29596244"],["/box/1/documents/assets/8.png","1bfc57e3215b0d1392f9fd50e3829d14"],["/box/1/index.html","4f2d0d40fa726cf05946922ce63b75be"],["/box/1/onLoad.js","3fef2bc53efec7a08f3ff8a939df1123"],["/box/1/res/apps/app-store/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/apps/app-store/index.html","d784b85577bde57bea8b0d50500c95ed"],["/box/1/res/apps/app-store/preview.jpg","09e51965739a26c73b3644d504286fc6"],["/box/1/res/apps/app-store/script.js","0747ebd509f5cda2ceb96ebbecc616e9"],["/box/1/res/apps/app-store/style.css","957461d7a9cfb5a3599fde6662e33de0"],["/box/1/res/apps/app-store/tpl-setup.html","f0d654f98fbc613b7a2d75e5f960ff03"],["/box/1/res/apps/browser/index.css","4cbca48bd4945f1cf2605afe3a6c9815"],["/box/1/res/apps/browser/index.html","a4753392c7beba4ae25b92e9c5936041"],["/box/1/res/apps/colorPicker/colorPicker.html","34a130f2e0fc54b003a0c372986ccbac"],["/box/1/res/apps/element-ui/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/box/1/res/apps/element-ui/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/box/1/res/apps/element-ui/index.css","c048efcb00f2d5bf9c514d4ef1a60e1a"],["/box/1/res/apps/element-ui/index.js","f6398839e5674f9ef46a728938a49082"],["/box/1/res/apps/server/import.html","cd20cf5f57da60efd8381d4049bd1ca4"],["/box/1/res/apps/server/index.html","aae611ddb4ed8de0f29a7f85c962c609"],["/box/1/res/apps/yl-system/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/apps/yl-system/index.html","db81063dc0726cc06b59b5cec819247b"],["/box/1/res/apps/yl-system/index.js","730bf4346f2f74f6d37d1686114b289b"],["/box/1/res/apps/yl-system/style.css","6956981ba08268b80810a0cd73f3cdf5"],["/box/1/res/components/animate.css","07f146141537e04ee282a965d8053198"],["/box/1/res/components/calendar/script.js","7deb1ea55685d1d65a41e24c42a82a1d"],["/box/1/res/components/calendar/style.css","889d07ffaea6e80b59778f86c2841b50"],["/box/1/res/components/clipboard-polyfill.js","43c47e6f9a265440b6d6d5c042c1abc2"],["/box/1/res/components/color-picker/color-picker.css","a13ab1ee68fc00fe975eade37d99459e"],["/box/1/res/components/color-picker/color-picker.js","090bdc46e53dba4bd8cbe45733a633f1"],["/box/1/res/components/contextMenu/contextMenu.css","ae22314e52256977b12617e6106ef13d"],["/box/1/res/components/contextMenu/contextMenu.js","3200bb8c4c3804ec329d6fd9845aaa23"],["/box/1/res/components/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/box/1/res/components/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/box/1/res/components/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/box/1/res/components/jquery.nicescroll.min.js","d247c9568e051b91d27ba6901447e8b0"],["/box/1/res/components/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/box/1/res/components/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/box/1/res/components/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/box/1/res/components/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/box/1/res/components/vue-grid-layout-2.1.11.min.js","1871f71290243d0d7171c0d1a0658502"],["/box/1/res/components/vue.min.js","24063abba2ad45c26b7329e89be49d8d"],["/box/1/res/css/grid.css","4e60778d5d194f1d61e60c773ef71f1e"],["/box/1/res/css/loading.css","efb0adcae18636c7ee6d07dde4b617d9"],["/box/1/res/css/main.css","62be0e07a3497dfa89518d5d2b3d6314"],["/box/1/res/css/tiles.css","0979d1d8dda0229e159dbc182e1a2d0a"],["/box/1/res/css/yl-layer-skin.css","66da08271805c80346365f415730abc6"],["/box/1/res/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/box/1/res/img/donation.png","cfcd102cefe411740a1942c4b1101348"],["/box/1/res/img/favicon.png","10211db9350a68716100fd7388607507"],["/box/1/res/img/icon/close.svg","c5449b9ab12de31be87bd78457ead906"],["/box/1/res/img/icon/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/img/icon/maximize.svg","5ec8b0ca1f75ef84473c9427bda6a899"],["/box/1/res/img/icon/message.svg","8990eb1399ec6e43c4ee9438214d4695"],["/box/1/res/img/icon/minimize.svg","62149b882a325456940eff4eb1022936"],["/box/1/res/img/icon/restore.svg","03e35aef920cfdfac1f296f25c4be6b6"],["/box/1/res/img/splashscreen.png","cb619aaa3f7bc8b3f378116dade2507d"],["/box/1/res/img/wallpapers/bg1.jpg","cea0a23f072704cb0f0b41b4e4f66bb1"],["/box/1/res/img/wallpapers/bg10.jpg","6acbcd4cf862d24aaf49c61405a02a38"],["/box/1/res/img/wallpapers/bg10_1.jpg","1e53b55fb02187fd885757a755c68984"],["/box/1/res/img/wallpapers/bg11.jpg","bec82a612e3b52ba1a2820bd0e4d5b8c"],["/box/1/res/img/wallpapers/bg11_1.jpg","b6c175c0e2c97a761a6095e343529f16"],["/box/1/res/img/wallpapers/bg12.jpg","d2ca5202eb10f3689b842ae13b6caba5"],["/box/1/res/img/wallpapers/bg12_1.jpg","14c7f250b712e06d23bbe023fb889fd9"],["/box/1/res/img/wallpapers/bg13.jpg","1ec917e5682446735ca4d09ac84f928a"],["/box/1/res/img/wallpapers/bg13_1.jpg","1a46279896c688078c6220eaed07e585"],["/box/1/res/img/wallpapers/bg14.jpg","ba9874899616b7518abbd7341ac706a1"],["/box/1/res/img/wallpapers/bg14_1.jpg","fd89342c254552176af42894dfeca98e"],["/box/1/res/img/wallpapers/bg15.jpg","cea663b1846e1d9b9f8bf45271cc0372"],["/box/1/res/img/wallpapers/bg15_1.jpg","fef28b8dce7dfff5e5b66e70050123fe"],["/box/1/res/img/wallpapers/bg1_1.jpg","77267082c29f03e7ced5334c4c2cd6fb"],["/box/1/res/img/wallpapers/bg2.jpg","1e1b1435df09314556fa64a58207786f"],["/box/1/res/img/wallpapers/bg2_1.jpg","87a8f4d3d921465ea49efd17511e065f"],["/box/1/res/img/wallpapers/bg3.jpg","6f385fafa91a9d04edc147b5739701ec"],["/box/1/res/img/wallpapers/bg3_1.jpg","2cfaef13a35041ce80029d9642ff6e62"],["/box/1/res/img/wallpapers/bg4.jpg","c8ddd59ea29991a12cf2bbb32cd1f13c"],["/box/1/res/img/wallpapers/bg4_1.jpg","8b59566dd6042c2d8248be8b38be5238"],["/box/1/res/img/wallpapers/bg5.jpg","0c3e0c25734eb7ac9aecba0a54c9c370"],["/box/1/res/img/wallpapers/bg5_1.jpg","ce6241ebb979fa8f3a408dff6d4ab7f3"],["/box/1/res/img/wallpapers/bg6.jpg","9a1776b26aa188e6917a45cb723b54ec"],["/box/1/res/img/wallpapers/bg6_1.jpg","9f60177af7e692f9471c7ab8dd210044"],["/box/1/res/img/wallpapers/bg7.jpg","ab9983a8b4d908a7222e63fa0424c2f2"],["/box/1/res/img/wallpapers/bg7_1.jpg","8e00b2f155b0334709a9daad9e7ccf23"],["/box/1/res/img/wallpapers/bg8.jpg","49060b22ed69da83d0d1c512a26cdcf9"],["/box/1/res/img/wallpapers/bg8_1.jpg","f4e17b8106527915f20d47c02993bb8a"],["/box/1/res/img/wallpapers/bg9.jpg","a9d0daee47a24863e62cac0e6e7bc4f5"],["/box/1/res/img/wallpapers/bg9_1.jpg","866b853772e237fde4d6bd1121ad3c70"],["/box/1/res/img/wallpapers/uploadbg.png","40fd031ef5bda8f0fd6d93327e32e8a9"],["/box/1/res/js/Yuri2.js","ae175ca0a7934b03806b8424a809d19e"],["/box/1/res/js/yl-io.js","d69d4ad8bc59c6124d7b231cd1aa1d9f"],["/box/1/res/js/yl-render.js","da81ec2de006339144ef7045881cc210"],["/box/1/res/js/yl-vue-component-icon.js","0b73923ce415f0e6f7c13d543adca5be"],["/box/1/res/js/yl-vue-components.js","5e03ddb4fadbf61a35daf8a72f14aa48"],["/box/1/res/yl.app.js","5b78359c6df86b292fc5574508bd9909"],["/box/1/res/yl.js","1afa32b9dfd74aed7001bd823734d0ba"],["/categories/index.html","29b197ad8e3dcd2def4eb60d8695f7d2"],["/categories/技术-Markdown语法教程/index.html","23e27818692b6dabbf7afdafcb80dab8"],["/categories/技术/index.html","524dcaa2294ba16d337eb3c8cb66cf22"],["/categories/技术/page/2/index.html","80ce9cd3766ad98813b515a085271660"],["/categories/生活/index.html","15483bd06346e9a33d6e1a72be31f433"],["/categories/资源/index.html","1c0daaae1a6ac85953d154177ca7249c"],["/categories/转载/index.html","c46c0fcedda4837a9e225bab8c54c01f"],["/categories/随想/index.html","024c06c920ab53ff05d6152f5c3ea949"],["/categories/随笔/index.html","c45da3397399934ea211a6b57deda863"],["/census/index.html","0ca00819c612ce67a9afc0cb5ec286c8"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","b7cce22d1e55db7929f2289dd7a938fa"],["/census/未命名文件夹/index的副本.html","06d4fb267e064aa08df09325cc75db34"],["/charts/index.html","cf39d2bff44afbbdad1028201e5e2707"],["/client/index.html","c35e31ec2617b4b188f97847ba8805b1"],["/comment/index.html","ee487b9d4130bef6d83ba8a8590332e6"],["/contact/index.html","9012bfba75c59126a69470d21e606fb2"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","c344d8c374a960bf4893c880cae738d9"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","f63608c286301c15a6606e6da2bbad7d"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","7c0db7f851aaf91e770142e0348abd76"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","db6424d8831c86ade90b6b368973b085"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","307cbba656795793abba5e0e996fcf80"],["/journal/index.html","e33cbb9464a7fbb01b474c4e64890226"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/visit_calendar.js","2fbb4e98e0bc0192e0607403a3339c4c"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/kwptuku/22birthadycake/index.html","17577a33b3e1960b877f5ccb3f6d8f59"],["/kwptuku/22birthadycake/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi/index.html","6c9aff2c21ffe6293290c4e63a006bf6"],["/kwptuku/dongmanbizhi/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本2/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本2/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本4/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本4/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本5/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本5/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本6/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本6/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/image/b.jpg","35cd45bb65256999fff8b09449bddb3c"],["/kwptuku/image/c.jpg","02c15dd2acbe0bb5238bc5244da881d5"],["/kwptuku/image/d.jpg","84214bdd2ed9aa9227a80d1d3dd0d1d2"],["/kwptuku/image/e.jpg","63896fe2a4b1840aa057a44b266ac472"],["/kwptuku/image/f.jpg","25bfb09a80884ea58a3ca15e167d2aa6"],["/kwptuku/image/g.jpg","7dc57fff81bac323da9a84aba9aafce6"],["/kwptuku/image/h.jpg","456ca17d3da6afaa4270bd4eb8e5b81e"],["/kwptuku/index.css","d7e89367358e3f5e37c3bdbd8892e0ba"],["/kwptuku/index.html","217c71bdc536b65d19d045a1287b332f"],["/lab/index.html","8db37f3986c899963c73ea83b0dbcef6"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","44a583e293b1754ef052f1d71022a7c6"],["/map/index.html","33c4723e305decb1a5acd676c8b9d688"],["/more/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/more/142.css","f789c89273b7d0c96dbd25495b0e8265"],["/more/142.js","3f57338405e48568efb83ac3994f2b83"],["/more/2wmzxsb/index.html","fe997eac2eca0df3bbde4af3f6b6a055"],["/more/2wmzxsb/preview.png","d36b95823a701b62475612f75357756c"],["/more/2wmzxsb/script.js","988d034539edefef6f4800f3cbc88900"],["/more/2wmzxsb/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/more/404.html","6f3e0e9d936b7e6ec9a49e38b2836eb4"],["/more/4042.html","e9405344be517ad4cf8cab26745a9e08"],["/more/bvtoav/index.html","916357ff98ad44ab6fb74fa406ed2d14"],["/more/clock/clock1/index.html","9a3b88249d3a935d4b011a3c416f7c85"],["/more/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/more/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/more/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/more/clock/clock2/index.html","c9350bc37f4ba2064cc8e22378f2d961"],["/more/css/FiraCode.css","5721e9035217ed14ca819e025db6bc74"],["/more/css/flesx.css","c883b907e029239a4adbdcfb33d62990"],["/more/elsfk/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/more/elsfk/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/more/elsfk/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/more/elsfk/index.html","4a258bbdb8f314760b1688b86e66bbf9"],["/more/elsfk/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/more/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/more/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/more/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/more/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/more/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/more/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/more/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/more/index.html","f2948ce4f7712c6a508689db9143b382"],["/more/yq/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/more/yq/146.js","a4f1af1154a2a18f423b078c00470bad"],["/more/yq/index.html","a3e71e674a8559414b767d84115103e6"],["/music/index.html","9134dfb9d83e0d0c8078fbd640378d14"],["/musics/index.html","44962be74a0c82ae9fc945453e1c6dfb"],["/page/2/index.html","d0b0dc00d8f62f25bc9ad44b5f2f96e1"],["/photos/index.html","babc66bffaac7879e629251a2a9d3644"],["/posts/11908.html","bae03744ffc3368f2fbc9f5d183e5ee6"],["/posts/19324.html","8bfbd2393d88d89d155df311b3f02627"],["/posts/19d2a4e6.html","202543e3a2fb80b16ba35170c86d41e0"],["/posts/20692.html","4c83db96a375d60c4ca240e479053ca5"],["/posts/22294.html","e8c5e7893d493a261d1270a503ca9fa6"],["/posts/22338.html","d60eeaffa4d507b2de76b16f424e6692"],["/posts/25167.html","f183ce0e511e5b4ea7d662f3975b3257"],["/posts/25381.html","0187b76b269833c53900b29ea4edf0ea"],["/posts/25797.html","8e6d8e450f228f328f3e46c86a3c4d51"],["/posts/27498.html","76e26ce68a50cb9e7241293bc0f264a7"],["/posts/27604.html","afbdf96ed7b9802acdde9a13cde8b942"],["/posts/28347.html","7340204e1bed764da07ca50c9e8cfc47"],["/posts/29462.html","5ffa49abf6f2c87df5b6187fbf02bb8e"],["/posts/30884.html","6813ffb650b023fa28fe9d77aa337ff4"],["/posts/38332.html","33cf55b428e78ec623c9421cfcf08f81"],["/posts/38811.html","48f303e7a931254eb36be967490f1f35"],["/posts/4901.html","76c5e26f6a2660d5d40cb857517003d4"],["/posts/4b3510a4.html","fdaed5bd4231cfd238d6bc9312a1ff8c"],["/posts/50391.html","688222f5264857a9fea8e52603d29e1b"],["/posts/51618.html","7fab2b43b65b65ff683ff3f4eed2036f"],["/posts/5560.html","3d7434fd0ecb107758714c8d9bd9dd10"],["/posts/62019.html","98e73fe8cf96cb60b3d9442d0ee8af08"],["/posts/64683.html","218ddfbc9a65d5246884ef8d07ae0c2c"],["/posts/7a46f93c.html","3b788153df22c533d296c3fd52675f84"],["/posts/d74d8b76.html","9c9142b34f1bda741366a60634583f45"],["/posts/e3e08109.html","bfbd130e2d332e475129e1466e9f3387"],["/shuoshuo/index.html","315e6273256b15dbdd08dbc6849cf060"],["/sw-register.js","8a10ba440280c5244cff4c6a124105c5"],["/tags/API图片/index.html","afaaab8b70e4156da2542a801d7c7db9"],["/tags/Billie-Eilish/index.html","810358dcabd3786ecd3b987dea556918"],["/tags/Fontawesome-图标/index.html","98b7c1757efa20ab8531e34948455dc5"],["/tags/GitHub图床/index.html","ad9de1533ebdf93443e3bec74a46da66"],["/tags/Github/index.html","7da47939a2d658cab556048f937a363a"],["/tags/Hexo/index.html","603add49fff986b8d083dc5b062a9350"],["/tags/LPL/index.html","9bd75ff13a3e32d9bf416995a4460a81"],["/tags/Markdown/index.html","22df2af7a7b1f0a9af604fd90dd1f389"],["/tags/PicGo/index.html","08d8f8c4f0e6812db440f05402af12b4"],["/tags/WEBP/index.html","09ead097620af43f25664fba0a6fa4e6"],["/tags/ajax/index.html","0dce00b6c63076feaf98d2cc4aad15cd"],["/tags/blog/index.html","3ef16ed95077bca71fcda2f22b2079d3"],["/tags/css/index.html","c8decb7e2bc9f47fe76a11eac89ebbda"],["/tags/echarts/index.html","8371de3e3f627602a279d069100abb0d"],["/tags/flask/index.html","a0a2bae089afee71514af1eca3608c02"],["/tags/hexo-blog-lucky/index.html","fd993c2bbc8ae74d9ea096ea0bd32bdd"],["/tags/html/index.html","407e6add7f094a910f1981ec8af44773"],["/tags/index.html","15d1456b1e8fc8131db129d098ee03bc"],["/tags/jQuery-CSS3/index.html","c6a7b714a02b34719e726b12ea392d21"],["/tags/jQuery/index.html","75ccd370957aeb49b4be03d72958f679"],["/tags/javascript/index.html","9c87e00f964c796a71ab4768e943f5c2"],["/tags/json/index.html","23b97c3cf996c76ad93cbe4a18d8b9d5"],["/tags/mysql/index.html","5cdeeffb2435f13fbcee4fbb26598e6a"],["/tags/note标签/index.html","69cd0e6da8e7a41475c0b5998d6669ce"],["/tags/npm/index.html","6bd5b1fc0b51299294fe352754481f9c"],["/tags/numpy/index.html","842510139ae45d4c2be3785e396d2e7e"],["/tags/pymysql/index.html","62821b08e061613dcac06091d1f98f85"],["/tags/python/index.html","618d8cf43b5a91686bee876bacc9a606"],["/tags/requests/index.html","cb7792ea8f60a1e971ce232f2fbe1340"],["/tags/web/index.html","5de4fbcf0ba5d30d3613b9687e42838d"],["/tags/代码分享/index.html","b65d2b6b5cfbb9da8708cbdf18e7d966"],["/tags/代码压缩/index.html","3939b9c03a268ffa6770db3fd1d4b519"],["/tags/加速器/index.html","f702114506c6c6c421a68e4a0d99adb1"],["/tags/博客/index.html","fb26a41f2e8f36081dcfb37b714a0f64"],["/tags/博客优化/index.html","75d3dc529a28f8b485dfae576f9dc025"],["/tags/博客搭建教程/index.html","c356be0b659312238383075418bbfd42"],["/tags/图像处理/index.html","dc2e49491b2496d4b6bd82311b499390"],["/tags/图集/index.html","15d1456b1e8fc8131db129d098ee03bc"],["/tags/声明/index.html","c8763affc2ac7050f85ef0892460a56c"],["/tags/好物推荐/index.html","d72301b35a26711d26a681bed780ad49"],["/tags/工具箱/index.html","54ccedbea80b44566bdd9c11314e7540"],["/tags/应用分享/index.html","0dd7ba80125a6ebe2a37b34ebe96c001"],["/tags/思维导图/index.html","db560831deeb78a1681a0672f9433e09"],["/tags/悦读/index.html","028a2a2c429d31eae8c82f67357c2410"],["/tags/插件/index.html","b7e77dbe5f5eb4681253ff791b3401a1"],["/tags/教程/index.html","1435021cebc492ec6a1dd049657d0188"],["/tags/数据可视化/index.html","6db2be96e1bb7d2be9cb807f17d590e5"],["/tags/文章加密/index.html","37e9f28e178097a1187daeffd1556913"],["/tags/汉化/index.html","5c7333f84b3ceb1c7e65015e561ea10e"],["/tags/流行音乐/index.html","e629eb6af545b51fbde93e2ce116f7ef"],["/tags/渲染绕过/index.html","44150f3e3228e669bedfbea9b2c7072e"],["/tags/游戏板块/index.html","3f04e01727109740f2087cf430a3c8c9"],["/tags/生物/index.html","c8ded45dcd5e74758fd372bbedbd72a3"],["/tags/百科/index.html","b59e2037efc19ca1064e1f3d588f178a"],["/tags/粒子特效/index.html","182f098d2682b3945e3f73523a2e9c13"],["/tags/网站分享/index.html","af07e651b2adacf9c0d5874c412800b6"],["/tags/蚊子/index.html","14ca4aa6ad184c35bf69a9755222ae0c"],["/tags/评价/index.html","f7e045714db4af4cc21bdfa3c6b9ebdc"],["/tags/转换/index.html","2d8943c27f0b4f3e344e44db191d3ae5"],["/tags/转载/index.html","1e8ef2f14bdee8d0203fb26e3f9850c1"],["/tags/阿里云/index.html","d99cccc6dfe4f151e884f05b6c23cdf1"],["/tags/音乐/index.html","f2b987cc03b6b2cfd678a21b4abe377e"],["/theme-sakura/index.html","f23073e3f981898de0e56af6863bde00"],["/videos/index.html","a5e28cd98774042dec5a2479b0deedac"],["/warn.html","9fd8ffc31f3cd41bef2b17482f346bff"]];
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
