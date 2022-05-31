/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","4623bca25b2e2d3c5d7de6613fccae47"],["/KWGAME/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/KWGAME/index.html","13af59066b9267761a9dd88cb36a288c"],["/about/index.html","5041f154ebce56bd32046cbdc2282d54"],["/archives/2019/08/index.html","26d6f2212e23d01df33f1939ccfaf807"],["/archives/2019/index.html","550c08b41320847f67c62f2eebccc2b7"],["/archives/2020/02/index.html","1c848a88376f45456a2dfc01c09e2e89"],["/archives/2020/index.html","956b2971f509507f1e07905470610389"],["/archives/2021/06/index.html","6cf51db44fc1b3fbd5118364862759e2"],["/archives/2021/index.html","8d61675f3238b83fb9f415e2e3958b2e"],["/archives/2022/05/index.html","72a7acdd18b63534e4c127eebdc0c419"],["/archives/2022/05/page/2/index.html","72a7acdd18b63534e4c127eebdc0c419"],["/archives/2022/05/page/3/index.html","72a7acdd18b63534e4c127eebdc0c419"],["/archives/2022/05/page/4/index.html","72a7acdd18b63534e4c127eebdc0c419"],["/archives/2022/index.html","92048c1f1206f5039328621fedae632c"],["/archives/2022/page/2/index.html","92048c1f1206f5039328621fedae632c"],["/archives/2022/page/3/index.html","92048c1f1206f5039328621fedae632c"],["/archives/2022/page/4/index.html","92048c1f1206f5039328621fedae632c"],["/archives/index.html","1a8701343d5d46133e391e2781d188db"],["/archives/page/2/index.html","1a8701343d5d46133e391e2781d188db"],["/archives/page/3/index.html","1a8701343d5d46133e391e2781d188db"],["/archives/page/4/index.html","1a8701343d5d46133e391e2781d188db"],["/archives/page/5/index.html","1a8701343d5d46133e391e2781d188db"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","1a76c1733893d984250d6be1c304bb79"],["/box/1/configs.js","7939f47a3619876b666e996f25ada7cf"],["/box/1/documents/assets/1.png","0c94ed16cf24ce1528ffcf9af7631184"],["/box/1/documents/assets/2.png","f0f16f2795ddaf8b7f89507c10c20c42"],["/box/1/documents/assets/3.png","d5770733591cf5a0d0abcc080bc59280"],["/box/1/documents/assets/4.png","70a40e24ce868aac94bd26e52b693f1c"],["/box/1/documents/assets/5.png","0fab93872508932afdec662d89b51667"],["/box/1/documents/assets/6.png","467e91c75dded0118d15010db5d83d92"],["/box/1/documents/assets/7.png","16412af75814b6f503aaa40d29596244"],["/box/1/documents/assets/8.png","1bfc57e3215b0d1392f9fd50e3829d14"],["/box/1/index.html","4f2d0d40fa726cf05946922ce63b75be"],["/box/1/onLoad.js","3fef2bc53efec7a08f3ff8a939df1123"],["/box/1/res/apps/app-store/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/apps/app-store/index.html","d784b85577bde57bea8b0d50500c95ed"],["/box/1/res/apps/app-store/preview.jpg","09e51965739a26c73b3644d504286fc6"],["/box/1/res/apps/app-store/script.js","0747ebd509f5cda2ceb96ebbecc616e9"],["/box/1/res/apps/app-store/style.css","957461d7a9cfb5a3599fde6662e33de0"],["/box/1/res/apps/app-store/tpl-setup.html","f0d654f98fbc613b7a2d75e5f960ff03"],["/box/1/res/apps/browser/index.css","4cbca48bd4945f1cf2605afe3a6c9815"],["/box/1/res/apps/browser/index.html","a4753392c7beba4ae25b92e9c5936041"],["/box/1/res/apps/colorPicker/colorPicker.html","34a130f2e0fc54b003a0c372986ccbac"],["/box/1/res/apps/element-ui/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/box/1/res/apps/element-ui/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/box/1/res/apps/element-ui/index.css","c048efcb00f2d5bf9c514d4ef1a60e1a"],["/box/1/res/apps/element-ui/index.js","f6398839e5674f9ef46a728938a49082"],["/box/1/res/apps/server/import.html","cd20cf5f57da60efd8381d4049bd1ca4"],["/box/1/res/apps/server/index.html","aae611ddb4ed8de0f29a7f85c962c609"],["/box/1/res/apps/yl-system/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/apps/yl-system/index.html","db81063dc0726cc06b59b5cec819247b"],["/box/1/res/apps/yl-system/index.js","730bf4346f2f74f6d37d1686114b289b"],["/box/1/res/apps/yl-system/style.css","6956981ba08268b80810a0cd73f3cdf5"],["/box/1/res/components/animate.css","07f146141537e04ee282a965d8053198"],["/box/1/res/components/calendar/script.js","7deb1ea55685d1d65a41e24c42a82a1d"],["/box/1/res/components/calendar/style.css","889d07ffaea6e80b59778f86c2841b50"],["/box/1/res/components/clipboard-polyfill.js","43c47e6f9a265440b6d6d5c042c1abc2"],["/box/1/res/components/color-picker/color-picker.css","a13ab1ee68fc00fe975eade37d99459e"],["/box/1/res/components/color-picker/color-picker.js","090bdc46e53dba4bd8cbe45733a633f1"],["/box/1/res/components/contextMenu/contextMenu.css","ae22314e52256977b12617e6106ef13d"],["/box/1/res/components/contextMenu/contextMenu.js","3200bb8c4c3804ec329d6fd9845aaa23"],["/box/1/res/components/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/box/1/res/components/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/box/1/res/components/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/box/1/res/components/jquery-2.2.4.min.js","6118b1958dfcd17cc17c2c946ba32fc8"],["/box/1/res/components/jquery.nicescroll.min.js","d247c9568e051b91d27ba6901447e8b0"],["/box/1/res/components/layer-v3.0.3/layer/layer.full.js","dfda83ec7ae651a4d8c8e9cb9c123047"],["/box/1/res/components/layer-v3.0.3/layer/layer.js","d23ad298a090756ed9204bbca2a7c1e3"],["/box/1/res/components/layer-v3.0.3/layer/mobile/layer.js","2028e407c22ee7a12b05a35ee9c71882"],["/box/1/res/components/layer-v3.0.3/layer/mobile/need/layer.css","633915e62d14a714594b95b974ee0836"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/layer.css","c8cf4dfed2903e1a678e6cf52256e181"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/box/1/res/components/layer-v3.0.3/layer/skin/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/box/1/res/components/vue-grid-layout-2.1.11.min.js","1871f71290243d0d7171c0d1a0658502"],["/box/1/res/components/vue.min.js","24063abba2ad45c26b7329e89be49d8d"],["/box/1/res/css/grid.css","4e60778d5d194f1d61e60c773ef71f1e"],["/box/1/res/css/loading.css","efb0adcae18636c7ee6d07dde4b617d9"],["/box/1/res/css/main.css","62be0e07a3497dfa89518d5d2b3d6314"],["/box/1/res/css/tiles.css","0979d1d8dda0229e159dbc182e1a2d0a"],["/box/1/res/css/yl-layer-skin.css","66da08271805c80346365f415730abc6"],["/box/1/res/img/avatar.jpg","4311eca3f117edfc45ee68f55f326fbd"],["/box/1/res/img/donation.png","cfcd102cefe411740a1942c4b1101348"],["/box/1/res/img/favicon.png","10211db9350a68716100fd7388607507"],["/box/1/res/img/icon/close.svg","c5449b9ab12de31be87bd78457ead906"],["/box/1/res/img/icon/error.png","2657e18ba1e0ba90f1663a77ec5c5b58"],["/box/1/res/img/icon/maximize.svg","5ec8b0ca1f75ef84473c9427bda6a899"],["/box/1/res/img/icon/message.svg","8990eb1399ec6e43c4ee9438214d4695"],["/box/1/res/img/icon/minimize.svg","62149b882a325456940eff4eb1022936"],["/box/1/res/img/icon/restore.svg","03e35aef920cfdfac1f296f25c4be6b6"],["/box/1/res/img/splashscreen.png","cb619aaa3f7bc8b3f378116dade2507d"],["/box/1/res/img/wallpapers/bg1.jpg","cea0a23f072704cb0f0b41b4e4f66bb1"],["/box/1/res/img/wallpapers/bg10.jpg","6acbcd4cf862d24aaf49c61405a02a38"],["/box/1/res/img/wallpapers/bg10_1.jpg","1e53b55fb02187fd885757a755c68984"],["/box/1/res/img/wallpapers/bg11.jpg","bec82a612e3b52ba1a2820bd0e4d5b8c"],["/box/1/res/img/wallpapers/bg11_1.jpg","b6c175c0e2c97a761a6095e343529f16"],["/box/1/res/img/wallpapers/bg12.jpg","d2ca5202eb10f3689b842ae13b6caba5"],["/box/1/res/img/wallpapers/bg12_1.jpg","14c7f250b712e06d23bbe023fb889fd9"],["/box/1/res/img/wallpapers/bg13.jpg","1ec917e5682446735ca4d09ac84f928a"],["/box/1/res/img/wallpapers/bg13_1.jpg","1a46279896c688078c6220eaed07e585"],["/box/1/res/img/wallpapers/bg14.jpg","ba9874899616b7518abbd7341ac706a1"],["/box/1/res/img/wallpapers/bg14_1.jpg","fd89342c254552176af42894dfeca98e"],["/box/1/res/img/wallpapers/bg15.jpg","cea663b1846e1d9b9f8bf45271cc0372"],["/box/1/res/img/wallpapers/bg15_1.jpg","fef28b8dce7dfff5e5b66e70050123fe"],["/box/1/res/img/wallpapers/bg1_1.jpg","77267082c29f03e7ced5334c4c2cd6fb"],["/box/1/res/img/wallpapers/bg2.jpg","1e1b1435df09314556fa64a58207786f"],["/box/1/res/img/wallpapers/bg2_1.jpg","87a8f4d3d921465ea49efd17511e065f"],["/box/1/res/img/wallpapers/bg3.jpg","6f385fafa91a9d04edc147b5739701ec"],["/box/1/res/img/wallpapers/bg3_1.jpg","2cfaef13a35041ce80029d9642ff6e62"],["/box/1/res/img/wallpapers/bg4.jpg","c8ddd59ea29991a12cf2bbb32cd1f13c"],["/box/1/res/img/wallpapers/bg4_1.jpg","8b59566dd6042c2d8248be8b38be5238"],["/box/1/res/img/wallpapers/bg5.jpg","0c3e0c25734eb7ac9aecba0a54c9c370"],["/box/1/res/img/wallpapers/bg5_1.jpg","ce6241ebb979fa8f3a408dff6d4ab7f3"],["/box/1/res/img/wallpapers/bg6.jpg","9a1776b26aa188e6917a45cb723b54ec"],["/box/1/res/img/wallpapers/bg6_1.jpg","9f60177af7e692f9471c7ab8dd210044"],["/box/1/res/img/wallpapers/bg7.jpg","ab9983a8b4d908a7222e63fa0424c2f2"],["/box/1/res/img/wallpapers/bg7_1.jpg","8e00b2f155b0334709a9daad9e7ccf23"],["/box/1/res/img/wallpapers/bg8.jpg","49060b22ed69da83d0d1c512a26cdcf9"],["/box/1/res/img/wallpapers/bg8_1.jpg","f4e17b8106527915f20d47c02993bb8a"],["/box/1/res/img/wallpapers/bg9.jpg","a9d0daee47a24863e62cac0e6e7bc4f5"],["/box/1/res/img/wallpapers/bg9_1.jpg","866b853772e237fde4d6bd1121ad3c70"],["/box/1/res/img/wallpapers/uploadbg.png","40fd031ef5bda8f0fd6d93327e32e8a9"],["/box/1/res/js/Yuri2.js","ae175ca0a7934b03806b8424a809d19e"],["/box/1/res/js/yl-io.js","d69d4ad8bc59c6124d7b231cd1aa1d9f"],["/box/1/res/js/yl-render.js","da81ec2de006339144ef7045881cc210"],["/box/1/res/js/yl-vue-component-icon.js","0b73923ce415f0e6f7c13d543adca5be"],["/box/1/res/js/yl-vue-components.js","5e03ddb4fadbf61a35daf8a72f14aa48"],["/box/1/res/yl.app.js","5b78359c6df86b292fc5574508bd9909"],["/box/1/res/yl.js","1afa32b9dfd74aed7001bd823734d0ba"],["/categories/index.html","867963e127c7fe5dafabe0e902228967"],["/categories/技术-Markdown语法教程/index.html","5abc6b3005aecf55d1a2e7b66a00c6a9"],["/categories/技术/index.html","cb6bca6896ae5034c35d76f1b2819575"],["/categories/技术/page/2/index.html","319f19dc9849746feb8b92cbf662db7c"],["/categories/生活/index.html","9f091667025ca5833a3557bfb97df62e"],["/categories/资源/index.html","9381dc4fc5f450ea378e822bbb5f5967"],["/categories/转载/index.html","2af07c1f669056d2932ebf0eb8d6b35e"],["/categories/随想/index.html","9bae7792c1daca0f15c0607727f0caaa"],["/categories/随笔/index.html","ac5599db25462ca10febb84ade1a9814"],["/census/index.html","f3603705e8bc278103fe22788050c67e"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","d509b9cb37d487cc9cb19e3fd862ef39"],["/census/未命名文件夹/index的副本.html","3e5b504069f32aeb3658ea427b4ea888"],["/charts/index.html","b3695c87d42eb8202501b64ece3f9ae4"],["/client/index.html","e63333ae3584b29efee81a393b97f358"],["/comment/index.html","06298b9f07e5c28c7c1ed26042ddc636"],["/contact/index.html","09e31e0285346889d6fe693dbf3a5f31"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","d4e5b9cb4fe71b3314ea290cf77c48dd"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","30a3b451c74ddeed216a4095eed8e4fa"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","990e76b58ea8a4f088537ea0cd22a599"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","2272d8deed9bd5cb446ef2317b2c32f8"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","6ba0809b6354bd888549662efe3d0ee9"],["/journal/index.html","0094b0ee248b566763adbaa6ca35f638"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/visit_calendar.js","2fbb4e98e0bc0192e0607403a3339c4c"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/kwptuku/22birthadycake/index.html","17577a33b3e1960b877f5ccb3f6d8f59"],["/kwptuku/22birthadycake/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi/index.html","6c9aff2c21ffe6293290c4e63a006bf6"],["/kwptuku/dongmanbizhi/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本2/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本2/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本4/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本4/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本5/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本5/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本6/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本6/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/image/b.jpg","35cd45bb65256999fff8b09449bddb3c"],["/kwptuku/image/c.jpg","02c15dd2acbe0bb5238bc5244da881d5"],["/kwptuku/image/d.jpg","84214bdd2ed9aa9227a80d1d3dd0d1d2"],["/kwptuku/image/e.jpg","63896fe2a4b1840aa057a44b266ac472"],["/kwptuku/image/f.jpg","25bfb09a80884ea58a3ca15e167d2aa6"],["/kwptuku/image/g.jpg","7dc57fff81bac323da9a84aba9aafce6"],["/kwptuku/image/h.jpg","456ca17d3da6afaa4270bd4eb8e5b81e"],["/kwptuku/index.css","d7e89367358e3f5e37c3bdbd8892e0ba"],["/kwptuku/index.html","217c71bdc536b65d19d045a1287b332f"],["/lab/index.html","ebecd819f4078774aeaf240ad103fe79"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","62555a4bcf49b710054cf7d7f0f0a9ef"],["/map/index.html","d30bf24e18344f87ff6bfdc9f4182a18"],["/more/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/more/142.css","f789c89273b7d0c96dbd25495b0e8265"],["/more/142.js","3f57338405e48568efb83ac3994f2b83"],["/more/2wmzxsb/index.html","fe997eac2eca0df3bbde4af3f6b6a055"],["/more/2wmzxsb/preview.png","d36b95823a701b62475612f75357756c"],["/more/2wmzxsb/script.js","988d034539edefef6f4800f3cbc88900"],["/more/2wmzxsb/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/more/404.html","6f3e0e9d936b7e6ec9a49e38b2836eb4"],["/more/4042.html","e9405344be517ad4cf8cab26745a9e08"],["/more/bvtoav/index.html","916357ff98ad44ab6fb74fa406ed2d14"],["/more/clock/clock1/index.html","9a3b88249d3a935d4b011a3c416f7c85"],["/more/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/more/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/more/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/more/clock/clock2/index.html","c9350bc37f4ba2064cc8e22378f2d961"],["/more/css/FiraCode.css","5721e9035217ed14ca819e025db6bc74"],["/more/css/flesx.css","c883b907e029239a4adbdcfb33d62990"],["/more/elsfk/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/more/elsfk/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/more/elsfk/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/more/elsfk/index.html","4a258bbdb8f314760b1688b86e66bbf9"],["/more/elsfk/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/more/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/more/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/more/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/more/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/more/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/more/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/more/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/more/index.html","f2948ce4f7712c6a508689db9143b382"],["/more/yq/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/more/yq/146.js","a4f1af1154a2a18f423b078c00470bad"],["/more/yq/index.html","a3e71e674a8559414b767d84115103e6"],["/music/index.html","0a110a6003450a0aa5cf7f752ae3ba7c"],["/musics/index.html","fa5698b847290e20f9362d888a381687"],["/page/2/index.html","a3072104a6ca005314e27a02e25436e5"],["/photos/index.html","e6e2ee4d1f42320a49a00f33854e67aa"],["/posts/11908.html","94a76ff4130c56f05829f333e8e89796"],["/posts/19324.html","a02b118e77036122fe1593420f5b0d07"],["/posts/19d2a4e6.html","d846b8b138657f433d95747b288384bc"],["/posts/20692.html","3d5d631bc8046d51fd72946464c40a20"],["/posts/22294.html","8953dcc481be0ab3a14b425de63fbb52"],["/posts/22338.html","7808c69c958babe2299a842ff4307461"],["/posts/25167.html","7188cdf017c01f5312ceddca44e83787"],["/posts/25381.html","6cbce149bb319d0a438cf7b607414f4b"],["/posts/25797.html","e3cc22b60cfd12f9feb7de72e6c15a4a"],["/posts/27498.html","6d425eb075b9b65effe08bbf476ea651"],["/posts/27604.html","34ad95faa5130d76604ec8f1960c67df"],["/posts/28347.html","3c83a07e0f7d2caef4bda26b7a0a5e99"],["/posts/29462.html","e515bc049200d5727b014c0399ff24b2"],["/posts/30884.html","fa6abbd6ebcb303a41df925b6a9d002f"],["/posts/38332.html","32fde007836c19b17822d95baa038f0b"],["/posts/38811.html","ade746eb176c7baaf59b88248afae095"],["/posts/4901.html","a1bfbd580a35db9305337aa706e8dd05"],["/posts/4b3510a4.html","28864c9588f696156636d1bfaa10c938"],["/posts/50391.html","1cb4620449a47e0deca098cd800129ed"],["/posts/51618.html","b841addffb96c6cc9997455e025212b8"],["/posts/5560.html","a8c9b693ec398737ecc559ef2a296514"],["/posts/62019.html","08f6180e902a4cff2dc605fdf61e9dfc"],["/posts/64683.html","6bd27d4a2d4e911edf1e4e441ed0e243"],["/posts/7a46f93c.html","9a94eb2ab3a93b797251be5709dd30cc"],["/posts/d74d8b76.html","30d29d2afa89b5390e9cf57cc5f47fdf"],["/posts/e3e08109.html","577495db3b4951bed21f6242c8a5736d"],["/shuoshuo/index.html","ce1cc23d1f65c4070c8139f6a380ec49"],["/sw-register.js","bb48b564bde49b808edc2017108a15e7"],["/tags/API图片/index.html","da6f9c461c30af2a109dd812947dd5e7"],["/tags/Billie-Eilish/index.html","b7ca2c1003dc5cf6eb7d0eae9afcb0e1"],["/tags/Fontawesome-图标/index.html","74d4706a62b837a6049793ea732c809b"],["/tags/GitHub图床/index.html","10247aecb89c49de1d8cc82805e08665"],["/tags/Github/index.html","74ca3ec83880fa83c798abbfb7704b67"],["/tags/Hexo/index.html","2e424ffe0c5707ddedde5edd15a686a4"],["/tags/LPL/index.html","1b0a3b72973ddf9cfa2c82207323032d"],["/tags/Markdown/index.html","1801d470fbe90f2e9f8ffac04e8d8998"],["/tags/PicGo/index.html","66e5171c6fa254645c4bff86dc64b841"],["/tags/WEBP/index.html","e7058905e3a3cffe209a5c02a05b360a"],["/tags/ajax/index.html","1d3ce51fcf9ebddbc06c737414bf7b3d"],["/tags/blog/index.html","a96653847ce792bc526d0158b576931e"],["/tags/css/index.html","619d48d9fd6456589de94de1a6489e09"],["/tags/echarts/index.html","3b2dfa6c7cfe40983e69e3a039de419e"],["/tags/flask/index.html","35a421537713a8a3c41bae82265b16cb"],["/tags/hexo-blog-lucky/index.html","1fd03c1d3b984f7c4cbb175549daeea8"],["/tags/html/index.html","e69266d5a2318d09554d9f4e93cc2f79"],["/tags/index.html","9f9f9adb0cbc59363b1535711134e9de"],["/tags/jQuery-CSS3/index.html","d4d3e9fa10e8740de84a3bc62433625b"],["/tags/jQuery/index.html","0c2fd7634981a1e2457d776ace6cf74c"],["/tags/javascript/index.html","97d8ff626deb9d4f3bff53b0a727c14a"],["/tags/json/index.html","511bc18a27b8f7c4319f7a713e5b492c"],["/tags/mysql/index.html","a12a065f78cd46ffb6883fabad311388"],["/tags/note标签/index.html","c964d1d38feb2aece7cbb1a6c618ffa7"],["/tags/npm/index.html","301a144233a7472177e94522e88ba3b7"],["/tags/numpy/index.html","9ce3dd7839c93331043c1b2f6da047bb"],["/tags/pymysql/index.html","54ecb2ee112d216f9a756e198a46a645"],["/tags/python/index.html","45ce55620c8aff9975b55c3899a0a063"],["/tags/requests/index.html","89d53e51f8fd12b76241ca07024af251"],["/tags/web/index.html","1b1ce1fee45faaab2ca3a5d3eca34a15"],["/tags/代码分享/index.html","c9f635893a93eb9c8e40257b0d760835"],["/tags/代码压缩/index.html","745a6a949c47307a42f6f847c1d0099f"],["/tags/加速器/index.html","e5353a312748b1fe55f985bdc71732ea"],["/tags/博客/index.html","b400ec83018af6bbd82c4a5c4dd61c27"],["/tags/博客优化/index.html","bb5142ee336912c44e2379d2f8501734"],["/tags/博客搭建教程/index.html","09dd9ae244ff18103e47cb875e03fc62"],["/tags/图像处理/index.html","d0b99321acf1a0d4e33b4d2660f20d34"],["/tags/图集/index.html","9f9f9adb0cbc59363b1535711134e9de"],["/tags/声明/index.html","58a4d378efe87e13c3c83b14f2dcbc65"],["/tags/好物推荐/index.html","962d53a59e80ecfafd21fe9c54bac15b"],["/tags/工具箱/index.html","17b17b53c414d31e1963bb8b0c2322c9"],["/tags/应用分享/index.html","c11872a5141fd581a2fac0dc22dee0d0"],["/tags/思维导图/index.html","dc8626872ef1aeeec507799de3cd30fa"],["/tags/悦读/index.html","ec74ccf3ad6388e62e24a4cfde8004c3"],["/tags/插件/index.html","280f38f92add302c231fbd6a627b451d"],["/tags/教程/index.html","5004c1cd1239934b50b32c3e86f4b4dd"],["/tags/数据可视化/index.html","5db0dce44d0bb34507247d5a4e8cd349"],["/tags/文章加密/index.html","76d0f1ad0de59dcac217febbfc835757"],["/tags/汉化/index.html","052aa8ddec15645e8af51f9b406b05cf"],["/tags/流行音乐/index.html","2c77fb1eb00cfd82e381d285a1b7c460"],["/tags/渲染绕过/index.html","0474a34de4a90ec243cc7cf48820fa27"],["/tags/游戏板块/index.html","a728abbe4eea6caac34ce0c1944d26e3"],["/tags/生物/index.html","be169b878d95b43ada8bd893546ff910"],["/tags/百科/index.html","e2c171301e05cc540ecd8053a8bf0835"],["/tags/粒子特效/index.html","e50bd1cb8924278b6a494b1a78b6392e"],["/tags/网站分享/index.html","821ddfd1e21d4909664c522eb6a23f2b"],["/tags/蚊子/index.html","942241584f2db0ef2ed13e2b65bfa7cb"],["/tags/评价/index.html","8e2282aa354866478f9f70ec3a8fa5d5"],["/tags/转换/index.html","1d323ecbe6d9a399a871852467fb64d6"],["/tags/转载/index.html","5445787ee96d4291a79f487adfc2f2ff"],["/tags/阿里云/index.html","9a41a19a97bfde7d75da81bd72f512fc"],["/tags/音乐/index.html","6f6f4f236b9645029fee31baa14d5d3f"],["/theme-sakura/index.html","52c315df2efb8654d2e7af1988c867d5"],["/videos/index.html","bf24ec043cd73f7210e91162fcfcb831"],["/warn.html","9fd8ffc31f3cd41bef2b17482f346bff"]];
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
