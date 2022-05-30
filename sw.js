/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/404.html","4623bca25b2e2d3c5d7de6613fccae47"],["/KWGAME/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/KWGAME/index.html","13af59066b9267761a9dd88cb36a288c"],["/about/index.html","c253fcd3d3488730bcc8988f7ff3c986"],["/archives/2019/08/index.html","c30a5bcd5503dcc240c55e869852fc1b"],["/archives/2019/index.html","acd35e6dd4c9369fe2ce0abaf5512537"],["/archives/2020/02/index.html","18417a7214e4d7923ec265c9a31693eb"],["/archives/2020/index.html","a59a03c042bfb7f3eb00c26cdc910897"],["/archives/2021/06/index.html","745d5f59bab817d2de3d2702084769eb"],["/archives/2021/index.html","f76ec2b0e8fd4bfdcc7993b14efb7363"],["/archives/2022/05/index.html","afbcdb536787ba66cd74cc57778d37f1"],["/archives/2022/05/page/2/index.html","afbcdb536787ba66cd74cc57778d37f1"],["/archives/2022/05/page/3/index.html","afbcdb536787ba66cd74cc57778d37f1"],["/archives/2022/05/page/4/index.html","afbcdb536787ba66cd74cc57778d37f1"],["/archives/2022/index.html","b51aadefad3d39d3379eb850e6d17f67"],["/archives/2022/page/2/index.html","b51aadefad3d39d3379eb850e6d17f67"],["/archives/2022/page/3/index.html","b51aadefad3d39d3379eb850e6d17f67"],["/archives/2022/page/4/index.html","b51aadefad3d39d3379eb850e6d17f67"],["/archives/index.html","8062fa2a5686865c5103655012edd3e3"],["/archives/page/2/index.html","8062fa2a5686865c5103655012edd3e3"],["/archives/page/3/index.html","8062fa2a5686865c5103655012edd3e3"],["/archives/page/4/index.html","8062fa2a5686865c5103655012edd3e3"],["/archives/page/5/index.html","8062fa2a5686865c5103655012edd3e3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumi/index.html","8c6dd33d75f7924ea30ed36b05e2c840"],["/box/about/index.html","35728c893b0649ec0b38463e0cf6787a"],["/box/assets/css/bootstrap.css","725ad7c0dd95693660a92bea0eb73e5a"],["/box/assets/css/fonts/elusive/css/animation.css","5efb6f925470166045ba28c25131f79a"],["/box/assets/css/fonts/elusive/css/elusive-codes.css","a003fad2713fdb9f7fa418efa19c62ba"],["/box/assets/css/fonts/elusive/css/elusive-embedded.css","d39ea771a48daa19588971e7b2d9eaf1"],["/box/assets/css/fonts/elusive/css/elusive-ie7-codes.css","f7b95263b2af4b493a1a6404f303ddf2"],["/box/assets/css/fonts/elusive/css/elusive-ie7.css","314f0c7df8aa7fae725aaf9776ba8935"],["/box/assets/css/fonts/elusive/css/elusive.css","e353b4cf5ea15bcb107f02a43f2658c8"],["/box/assets/css/fonts/elusive/font/elusive.eot","9d9adfba6d9f93c6b9e8dcbc61f7c450"],["/box/assets/css/fonts/elusive/font/elusive.svg","b3f49df7b18d8cf6ebed1fda03da114d"],["/box/assets/css/fonts/elusive/font/elusive.ttf","340052c3951ec8d24e679577f4535267"],["/box/assets/css/fonts/elusive/font/elusive.woff","9342afdf7b7d2ccab779f94194b5854d"],["/box/assets/css/fonts/fontawesome/css/font-awesome.css","c5ecb8931d16e59684e4a42e49a83646"],["/box/assets/css/fonts/fontawesome/css/font-awesome.min.css","feda974a77ea5783b8be673f142b7c88"],["/box/assets/css/fonts/fontawesome/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["/box/assets/css/fonts/fontawesome/fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["/box/assets/css/fonts/fontawesome/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["/box/assets/css/fonts/fontawesome/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["/box/assets/css/fonts/glyphicons/glyphicons-halflings-regular.eot","7ad17c6085dee9a33787bac28fb23d46"],["/box/assets/css/fonts/glyphicons/glyphicons-halflings-regular.svg","32941d6330044744c02493835b799e90"],["/box/assets/css/fonts/glyphicons/glyphicons-halflings-regular.ttf","e49d52e74b7689a0727def99da31f3eb"],["/box/assets/css/fonts/glyphicons/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["/box/assets/css/fonts/linecons/css/animation.css","5efb6f925470166045ba28c25131f79a"],["/box/assets/css/fonts/linecons/css/linecons-codes.css","71e3c4cb86ec1bbd36d65c33a692b2ce"],["/box/assets/css/fonts/linecons/css/linecons-embedded.css","c0e89fb3f71d0a1001cc2d7b3efbeb34"],["/box/assets/css/fonts/linecons/css/linecons-ie7-codes.css","b0187b7583a581b6c82501ab4769f95f"],["/box/assets/css/fonts/linecons/css/linecons-ie7.css","72f0c9a6deebca201da8a881fd92744f"],["/box/assets/css/fonts/linecons/css/linecons.css","c9cd7f1c626bef690d751e89eb31d804"],["/box/assets/css/fonts/linecons/font/linecons.eot","4bf49170be78e2d00c14713c6e8c6129"],["/box/assets/css/fonts/linecons/font/linecons.svg","34af242ca498bf94203e488bf4479e38"],["/box/assets/css/fonts/linecons/font/linecons.ttf","1238c93be90d200cede56f6ccb374c67"],["/box/assets/css/fonts/linecons/font/linecons.woff","9c45ff1c4d1c170f1a4025de9be5e111"],["/box/assets/css/fonts/meteocons/css/animation.css","5efb6f925470166045ba28c25131f79a"],["/box/assets/css/fonts/meteocons/css/meteocons-codes.css","23949db370fec29cd33e944539c6dbb1"],["/box/assets/css/fonts/meteocons/css/meteocons-embedded.css","df7851f7b4a364edec165300577299dc"],["/box/assets/css/fonts/meteocons/css/meteocons-ie7-codes.css","544da9aa217323ec76f17f84c3a88216"],["/box/assets/css/fonts/meteocons/css/meteocons-ie7.css","49ade681603652f143f00acef91b0873"],["/box/assets/css/fonts/meteocons/css/meteocons.css","ccf33e3c359908c1b777755eaff6d77a"],["/box/assets/css/fonts/meteocons/font/meteocons.eot","1953e4f87218100d85a1c150d9bbd5a5"],["/box/assets/css/fonts/meteocons/font/meteocons.svg","deba3d0656562915c02248c72493dcbf"],["/box/assets/css/fonts/meteocons/font/meteocons.ttf","c8b173d53315603657d47ef652a2383b"],["/box/assets/css/fonts/meteocons/font/meteocons.woff","09cb2597c2cf2140b3e4a76ee9a00e81"],["/box/assets/css/nav.css","6f247b36b3f58c82fbdb0e7b29235cea"],["/box/assets/css/xenon-components.css","fbfec808fd90e5aa8f041160340a0e90"],["/box/assets/css/xenon-core.css","780383ff64f2fc157e2a980c00ddcc27"],["/box/assets/css/xenon-forms.css","3d5eb8c9ce52c12e611934812a86e6b5"],["/box/assets/css/xenon-skins.css","6645836a80549f9723a9903edd7844a2"],["/box/assets/css/xenon.css","5d2ce53d9906e5a674931b020dd19a15"],["/box/assets/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/box/assets/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/box/assets/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/box/assets/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/box/assets/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/box/assets/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/box/assets/images/logos/365PSD.png","d9d53149b85000346bd8d156fa435dd0"],["/box/assets/images/logos/36kr.png","340d2a2f05cae8edf09932848dc7137e"],["/box/assets/images/logos/3dsmax.png","d4237b71223df593523782239ff84756"],["/box/assets/images/logos/500d.png","1f2950aac91eaf54f5c7560d0a7443c9"],["/box/assets/images/logos/55mm.png","774d016aa323535f9e5cd2d439747d06"],["/box/assets/images/logos/90sheji.png","e1c4e5b9e428b2375f7ff73ff92e866b"],["/box/assets/images/logos/ADOBEXDCC.png","b80de1252685c9b0ce60cf3a32ce0b11"],["/box/assets/images/logos/AdobeAfterEffectsCC.png","beaec030a79341ca8d3121cfd8695be4"],["/box/assets/images/logos/AdobeColorCC.png","8aa8435f6952638a20635f22ed20b8ab"],["/box/assets/images/logos/AffinityDesigner.png","c157363c960b4b07aaae3bc1c33d4ab3"],["/box/assets/images/logos/AirbnbDesign.png","a77e93bcfc5c0493d3de1f0f9928f459"],["/box/assets/images/logos/Android9patch.png","f80db02ec94ff68b95d205149f340efc"],["/box/assets/images/logos/AndroidNiceties.png","995bcbf31332ce12586a7cac2244e887"],["/box/assets/images/logos/AwesomeSketchPlugins.png","47eb1802e223e821ec62bf40c4340feb"],["/box/assets/images/logos/BWG.png","59db8de95f700abf8fafb24e131ed83e"],["/box/assets/images/logos/CSSDesignAwards.png","0853f07c16e25ebb73f1f9391b833dab"],["/box/assets/images/logos/CollectUI.png","49ef836898fabcc69ae7f50d4e7c3869"],["/box/assets/images/logos/Coolest.png","d882785b103ad1d25527573469ef4dbc"],["/box/assets/images/logos/Designmodo.png","6e3f81e4983001bc308c5d88dd2d17c4"],["/box/assets/images/logos/Dunnnk.png","dd21c0126eb8f4feac8af5b3644ccc73"],["/box/assets/images/logos/Ecommercefolio.png","c11ca6449222ad5d0f7f4afd4a457a39"],["/box/assets/images/logos/Ezgif.png","2a5ef4f3aad418b3399cb2a138aa526c"],["/box/assets/images/logos/FacebookDesign.png","b71725e7ae98b71f355607d7b6988256"],["/box/assets/images/logos/FindIcons.png","ea99587911f8ec97380bfadc10fab526"],["/box/assets/images/logos/Fondertype.png","28d2cba26dbc52e624c52d60d5f72c88"],["/box/assets/images/logos/FontM.png","f5f4fc1d809e9865e9041bd689a62fac"],["/box/assets/images/logos/Fribbble.png","f3456a6e9ccb46d44eeb8dc8d450e321"],["/box/assets/images/logos/GoogleDesign.png","517a6c48faa1c84b2a3d1c94e2de1142"],["/box/assets/images/logos/INDESIGN .png","f204ebc002486c2a7f6c01681ac211b1"],["/box/assets/images/logos/IcoMoonApp.png","8662939fac85e4ecdafd3cdaa34f8338"],["/box/assets/images/logos/Iconfinder.png","669ee300b7632491aca605c38fa5d1cc"],["/box/assets/images/logos/Illustrator.png","c4a912e3c909cac5b2fcb68196a72981"],["/box/assets/images/logos/InstantLogoSearch.png","8bc37d4f13b01fe66c21c8c29c10f890"],["/box/assets/images/logos/JDC.png","e9fba581427ea4a228160f652e1de8e1"],["/box/assets/images/logos/Lapa.png","b7fdba7cab30f7f0bcc1629b60e6792e"],["/box/assets/images/logos/Material_Design.png","7f70979989cd1db6e3843cbe3303039c"],["/box/assets/images/logos/Materialicons.png","2d5ef7314a0ba2601d2f1891cf47477b"],["/box/assets/images/logos/Medialoot.png","9e450fcf8599830c58694e06909cde72"],["/box/assets/images/logos/MockupZone.png","cf395b35052f4970dd83f9a8156c723a"],["/box/assets/images/logos/MuseCC.png","8c336fc95ee6e089b567b6c0a2dccf9b"],["/box/assets/images/logos/MyFonts.png","be8f8c44ba94e4c75bae46565f0111ae"],["/box/assets/images/logos/NEXT.png","e662ab4faf69f3799671f555f240ec17"],["/box/assets/images/logos/OnlineWebFonts.png","ab2bd50e4adb671299c11e8afc9ed1c7"],["/box/assets/images/logos/PhotoshopLady.png","7f43bed0020bcb9cfa2dfd0a01d6e5f1"],["/box/assets/images/logos/PrincipleRepo.png","dffded4613df64722fd786006ad20d6b"],["/box/assets/images/logos/Pttrns.png","756896156be71b80e7fbd94d9e6a7db4"],["/box/assets/images/logos/ReallyGoodUX.png","6416aefc58e4878de774ce7e4541b9cc"],["/box/assets/images/logos/SiteSee.png","6ef9f6a1af3660420719818ced2f420a"],["/box/assets/images/logos/Sketch.png","856f3195ff4c53bb6d6271b2792e7635"],["/box/assets/images/logos/SketchMeasure.png","7ee1683a3fe2b04a5d3b5411a2a0a26c"],["/box/assets/images/logos/SplitShire.png","14d206fa66c2f823b42b67a2f8f71c6d"],["/box/assets/images/logos/StockSnap.png","7a273bc71d681e8bbd89eb96e1b6da30"],["/box/assets/images/logos/UICloud.png","7f70e5ec00d5a82dfd01622b876a8fad"],["/box/assets/images/logos/UrbanFonts.png","dd0d4e3bf796a1a547468db165650407"],["/box/assets/images/logos/WebInspiration.png","c82377cc5b8147f822c185d8471b55c0"],["/box/assets/images/logos/abstractfonts.png","17d0dcc871d3aaeaab38e189b37635b2"],["/box/assets/images/logos/albumarium.png","0b2fdf477e4cf501e96722442d742104"],["/box/assets/images/logos/aliued.png","6be7d5242ddf71a56bbf350f2a6a06f2"],["/box/assets/images/logos/aliuedcn.png","c8ca240b147995037349f7b922f5431b"],["/box/assets/images/logos/aliyun.png","f8339c6c714e30c4cce88895c8e4e9ad"],["/box/assets/images/logos/anyway.png","b9230d7557d2c5cfc50f39b54c718e1c"],["/box/assets/images/logos/appinn.png","1f96b01391719d3181b0ace60a0f22b5"],["/box/assets/images/logos/awesome_design_systems.png","88c8964aad0129e0861c5d1cdb8d1a7d"],["/box/assets/images/logos/awwwards.png","3969757223dffa580267eb401e061cd9"],["/box/assets/images/logos/behance.png","3f9c79062ac9a35b667765a0b0d93402"],["/box/assets/images/logos/blender.png","37478d14d4106ea258edfa387a30cec7"],["/box/assets/images/logos/boxesandarrows.png","872447f8da0c6776dc4e3ed347a6308a"],["/box/assets/images/logos/cdc.png","b30877b46e0b7c162755d937808bb2ba"],["/box/assets/images/logos/chanpin100.png","dfc95d61390e4d6090c211af527943fd"],["/box/assets/images/logos/cinema4d.png","65fe997dd6513a64549a29e69ce353b6"],["/box/assets/images/logos/colorhunt.png","c764d9f4fb700ea0deca5c012396d58f"],["/box/assets/images/logos/coolors.png","44f2f59c7108531ac95089f365b3793c"],["/box/assets/images/logos/csspeeper.png","20a7b4ade8c025e0dcd259e1a2683ef2"],["/box/assets/images/logos/ctrip.png","b0aa0a8fd007c3790d3c438dc25628eb"],["/box/assets/images/logos/dafont.png","445f86abf0603cd02e4c37016858e134"],["/box/assets/images/logos/default.png","43bb36e01dbe4e2936fbbe4e28deff1d"],["/box/assets/images/logos/designguidelines.png","e0d9786bd129f9b9b139db05c7c90d4e"],["/box/assets/images/logos/designmunk.png","e12e63a9031816b6fbaa146a1e09570d"],["/box/assets/images/logos/digitaling.png","7b5ada0f5535adc5bbaa587e86b2e132"],["/box/assets/images/logos/doyoudo.png","7e91f897a89754658a949e2bb18f3cb1"],["/box/assets/images/logos/dribbble.png","f027e8fe954a06b8236bcf95518400af"],["/box/assets/images/logos/easyicon.png","b39a223f8f9d91da5f9b07882a6b571b"],["/box/assets/images/logos/eico.png","8822341bb3bfa131342747baa25ed060"],["/box/assets/images/logos/eleduck.png","7fed42248fc72cb3797d1989d5083433"],["/box/assets/images/logos/euxbaidu.png","9f8c22fad49fe95f2d8ada1bde35671f"],["/box/assets/images/logos/figma.png","3aa98b06c3f3ac660dc0dd92c053e6b3"],["/box/assets/images/logos/flaticon.png","f977c877ee2c7336485da7a2f9635768"],["/box/assets/images/logos/flatuicolorpicker.png","f05481fec0935057c5d0bb298705a435"],["/box/assets/images/logos/flatuicolors.png","7bd8a604f25b06bf430bd643835c6d97"],["/box/assets/images/logos/flinto.png","e6fbeae15f8c03ce8c7ea27c39579af4"],["/box/assets/images/logos/fontawesomeicon.png","be04f19925c08c8e0509f9b5cfae2670"],["/box/assets/images/logos/fontex.png","b305934e3a07c2890b7ee1defd04e668"],["/box/assets/images/logos/fonts2u.png","dd56858bf43ce013a10616a790e97cf5"],["/box/assets/images/logos/fontsquirrel.png","2e11b72fbbffc16459a2c7d15e42ee70"],["/box/assets/images/logos/forgraphictm.png","689ff3b3b8ca39fa8473fe8694b2195d"],["/box/assets/images/logos/framer.png","6e4071a3a2ada637875d13b968cebd5a"],["/box/assets/images/logos/freebiesbug.png","db8fd985c09eab4199a8c944ec4448c5"],["/box/assets/images/logos/freebiesupply.png","e9553bcd3ed0a45ca3ce214114714640"],["/box/assets/images/logos/freenaturestock.png","547c41e9570df338c09a29ced7f4c7b4"],["/box/assets/images/logos/freepik.png","9a33284c907375cc6283f59d1cbcf503"],["/box/assets/images/logos/fwa.png","db2c187a1b314a60538d6e79bcdf206c"],["/box/assets/images/logos/gaoding.png","59b3cb21f84b72e9f7dc1cb500297b54"],["/box/assets/images/logos/google.png","cf0a01bc0cc29f710447799207bc8e02"],["/box/assets/images/logos/googlefont.png","ef1aceabdbf10505000e9873c0967b15"],["/box/assets/images/logos/goqr.png","388a297741d8cb93791a37457f81566f"],["/box/assets/images/logos/grabient.png","97b6717113be5e599139b59e7ab040b4"],["/box/assets/images/logos/gradients.png","ff6f7801a6fb152deaf80e90ce23dcdb"],["/box/assets/images/logos/graphberry.png","2482d0d63fb5774bc33e093d514a5944"],["/box/assets/images/logos/gratisography.png","1b8ee8b4dc0c82a24a31cfc1cdd1f991"],["/box/assets/images/logos/gtn9.png","8abd0a6f9296e30c6017e02aec1d1ee5"],["/box/assets/images/logos/gulusucai.png","0e94c777ec90a599e697111c6ec1489d"],["/box/assets/images/logos/hdwallpapers.png","27bb32408697de6eb2ba32cbef650d7f"],["/box/assets/images/logos/huaban.png","5fcd40a7e6c940e3b964dacd91409e99"],["/box/assets/images/logos/human_interface_guidelines.png","2a10c84b3e2126039fa8b43c6cfa905b"],["/box/assets/images/logos/iconarchive.png","cffcc21f093c77407fa086a6369cfa07"],["/box/assets/images/logos/iconfont.png","a7f26e30cb8e25c9d3d7dfca56aa1a78"],["/box/assets/images/logos/iconmonstr.png","f67ca4076af533e5e095a4d92d8056d4"],["/box/assets/images/logos/iconsfeed.png","010eae01c3626340c158fba68e21e884"],["/box/assets/images/logos/imcreator.png","aa20d377fd4816fd032815caa1ecbdc6"],["/box/assets/images/logos/imooc.png","8c706c9df9227b1dd3460a98d33fa8a3"],["/box/assets/images/logos/insight.png","a1f8f5107ef6e47ad6ca3ec6445190f6"],["/box/assets/images/logos/invisionapp.png","fec882b2646260cb3da142282ed4ef01"],["/box/assets/images/logos/ionicons.png","4606e69648b25ae6b0f0e5eaa4b21fdb"],["/box/assets/images/logos/iosicongallery.png","c4456d56fe25878cf6707e9fb134cc43"],["/box/assets/images/logos/isorepublic.png","1a207f8b07e6e477009e390b8f269a6c"],["/box/assets/images/logos/isux.png","22a2b6519b4bfae5e756d57dfc471b31"],["/box/assets/images/logos/iyunying.png","11e2e53c43b970aababf8006f52f2b92"],["/box/assets/images/logos/jeshoots.png","627a02b9152cf978f2ba118c2b00b7eb"],["/box/assets/images/logos/khroma.png","f90f9fcc161cfeff75380f960da4b5df"],["/box/assets/images/logos/klart.png","d875baf309f39286b31bb9ed5b1854a2"],["/box/assets/images/logos/lanrentuku.png","445adab89db840ba5d62cba1c3a499c3"],["/box/assets/images/logos/leiphone.png","0c7512c8bd6e525d61c527972aa444cb"],["/box/assets/images/logos/librestock.png","95124e7d56f018376c0a01e83d35aea8"],["/box/assets/images/logos/lieyunwang.png","ee5351a32ada78a275d1eaa31e976cf8"],["/box/assets/images/logos/lifeofpix.png","2bc7f622759bb060026f5e9a6987bf6b"],["/box/assets/images/logos/liqi.png","dd7c3dcc5f293a5a7b11329794f5ea02"],["/box/assets/images/logos/littlebigdetails.png","207e661729658ecf80b3a71092c9f808"],["/box/assets/images/logos/losttype.png","a1c7bc7e9cc460bd3c09ae0a71487bf1"],["/box/assets/images/logos/lstore.png","a84793212d62ff93d732c7bc235f8aa1"],["/box/assets/images/logos/magdeleine.png","ccab99abcad46a37a3e9d1d95e486e59"],["/box/assets/images/logos/marvelapp.png","9a527bcd98b2ab9edb2698d3ef245a1c"],["/box/assets/images/logos/medium.png","309b1194aa98502a26bdfcf2dd1a0a00"],["/box/assets/images/logos/mmtstock.png","2dd4e65442099cd630c861c2a1cd73d5"],["/box/assets/images/logos/mockupworld.png","76af97a392a67d1f120151ac03fefaa5"],["/box/assets/images/logos/mustsee.png","ba950f24731352b5350339d5a8912fa7"],["/box/assets/images/logos/mxd.png","595614e6bdc822c6e1526be52df84ef1"],["/box/assets/images/logos/myphotopack.png","f46e4970509e95f03f8a39fa59060a58"],["/box/assets/images/logos/navnav.png","fdf314c63fe02a2335c734bbfd54298c"],["/box/assets/images/logos/negativespace.png","0f5ab70460b36ce9e12b8bc3db8c0fd4"],["/box/assets/images/logos/niaogebiji.png","73a5d11933fc45630287954bf28db00c"],["/box/assets/images/logos/niceui.png","b24f4cfcc3b83b424d7ab55f80040240"],["/box/assets/images/logos/nipic.png","dcb5b1baff8172509d71fe8f40b37709"],["/box/assets/images/logos/nngroup.png","33bf02b04105db4a4a577278be5c9d00"],["/box/assets/images/logos/notaselfie.png","ee9d0f3d7ce5fc5ff6de7b41dc4c5261"],["/box/assets/images/logos/officeplus.png","c6cc1ff7727ca3ea377b0514b265574e"],["/box/assets/images/logos/pages.png","716f09f4e6fa8b2bb474259218790350"],["/box/assets/images/logos/papers.png","2277355cff9499b63d81119142ed7442"],["/box/assets/images/logos/photoshop.png","6d437d1143f948a5d53a8efe6a71b6e4"],["/box/assets/images/logos/photoshopetiquette.png","c02763bf4f9eb95e28bb5aea8c3a6a2d"],["/box/assets/images/logos/pinterest.png","fb33382f01b96999a54a3dcb1ac33dae"],["/box/assets/images/logos/pixabay.png","a3098a7c1805cc4a9004ae0e67ea7728"],["/box/assets/images/logos/pixeden.png","de35819ce647ab8584b1062fd100adbc"],["/box/assets/images/logos/pmcaff.png","8052b75bede2b169a20ae1eac6a89374"],["/box/assets/images/logos/pptmind.png","55396b12db5c447b8acebe7369a460c1"],["/box/assets/images/logos/pptplus.png","d754b8e5ec67257ba835c5a6edb4840b"],["/box/assets/images/logos/principle.png","d84ea86ae7a7c714e14f5bb4903f8d2e"],["/box/assets/images/logos/producthunt.png","a6d8eb0613bfc7a035f84b05b8edbaeb"],["/box/assets/images/logos/protopie.png","d3c1c57da75e864fd61729c315911790"],["/box/assets/images/logos/psefan.png","8ed3790ad303fd774cf4c6216cbde65a"],["/box/assets/images/logos/publicdomainarchive.png","c32556fb3ff6204cc066da8e0024ab0d"],["/box/assets/images/logos/qianku.png","f7aa23857c3a9ab45f910e5b7f020f1a"],["/box/assets/images/logos/qiantu.png","55cea4e00d23d8859c64095267d2d5f5"],["/box/assets/images/logos/reeoo.png","1249b507aa81d40eb82accb43d8061a6"],["/box/assets/images/logos/sccnn.png","02e253a414c41369a7b076f07f5a7013"],["/box/assets/images/logos/screensizes.png","55cf043925d7616cd1a921f779a539b7"],["/box/assets/images/logos/shejizhoukan.png","3dd925c5b06cd4de43d13aa83d4af735"],["/box/assets/images/logos/sicangziti.png","55a3a3903dd506124392d781a8e9350a"],["/box/assets/images/logos/simplelineicons.png","70067c57dfbb22b2d80d1081a21f722f"],["/box/assets/images/logos/siteInspire.png","8a102fac37721d3fb2a6306f9a7a550d"],["/box/assets/images/logos/sizzy.png","9a03dfc32b5f8e1f0680b046bb709b7a"],["/box/assets/images/logos/sketchIm.png","d0d9bc3f81e3eb8b8fb0dab8074c7e04"],["/box/assets/images/logos/sketchapp.png","c4ae5e31e741016d93d4b1437d7bd62c"],["/box/assets/images/logos/sketchappsources.png","7142e45e580f42a2e385a25b05bf719d"],["/box/assets/images/logos/sketchcasts.png","16a3d4b615b6410c50015aaba0e81c96"],["/box/assets/images/logos/sketchcn.png","f9f3a49c620e5587d4eece587feff7ed"],["/box/assets/images/logos/sketchhunt.png","d5976301ed75a0673d88f20050d9e02e"],["/box/assets/images/logos/skitterphoto.png","7eff56f6fec9fc3a5ef4de59716cfc2a"],["/box/assets/images/logos/smashingmagazine.png","a5d20167e602230718c913562cf6a8ef"],["/box/assets/images/logos/sousucai.png","4c8c6260683bb272b84164cd6fd7784f"],["/box/assets/images/logos/ss-kexueshangwang.png","c002bfd1ebfaf8bbc062f8533577eaaa"],["/box/assets/images/logos/sspai.png","d3afbd3aed57b059fb83cc6cd25419db"],["/box/assets/images/logos/stokpic.png","7fe1cfe5773a77609f1db36a6516934a"],["/box/assets/images/logos/svgomg.png","e1194542c2aba39a000715000e354cee"],["/box/assets/images/logos/tgideas.png","de4ad2f0e1829aa9c20c99997d27083d"],["/box/assets/images/logos/thedayscolor.png","bc4cf4c1a22d5a47827377d13ae00c80"],["/box/assets/images/logos/thestocks.png","d286b5cfcc3c7001de90b13b57b52986"],["/box/assets/images/logos/threed.png","673ef1f60fa4f399e792ac70d5443ac5"],["/box/assets/images/logos/tinypng.png","b9697ac2a80d6f8872c3489d2fe0ba3a"],["/box/assets/images/logos/today.png","ca29dba0b0e3758df8b23c1ed4a66d90"],["/box/assets/images/logos/tretars.png","40d5ba4017b5b5123859ef93dd33881c"],["/box/assets/images/logos/trianglify.png","4b4aff6bb4591578382558b5922a4d41"],["/box/assets/images/logos/typekit.png","11cd95c568a17e44474f67356bafa2f0"],["/box/assets/images/logos/uedbaidu.png","f08c4fe91947e6b34bec0264a4c9c17c"],["/box/assets/images/logos/uedc.png","b32e87f071e942e29e2b435f2bba2a1d"],["/box/assets/images/logos/ui8.png","56aa30ced82985bf50b7e51f06791790"],["/box/assets/images/logos/uicn.png","40d2b68d8429eb35dcee30168f768f35"],["/box/assets/images/logos/uigradients.png","e05798c82ab18bc4a68407a8da443a2f"],["/box/assets/images/logos/uigreat.png","3b4e709c643d82975edf19a2e6f4a1cd"],["/box/assets/images/logos/uikitme.png","19b572737c20ece3b419376dbbe43c7a"],["/box/assets/images/logos/uisdc.png","98518ef33654231dbb031ad872491e18"],["/box/assets/images/logos/uiuigreat.png","19e04221ee5936f85219c60ac4c1aa30"],["/box/assets/images/logos/unsplash.png","ee4fd92d03131fc62b145d96129905e0"],["/box/assets/images/logos/uplabs.png","ac8a866415c772f927e9a8a896a2a14c"],["/box/assets/images/logos/usepanda.png","92241c0a5392feaee3d303845b205723"],["/box/assets/images/logos/uxcoffee.png","f5fae84963178439d246861619fea803"],["/box/assets/images/logos/uxdesignweekly.png","6fcaab269a9bb38f8ffbd9ccce2f9d72"],["/box/assets/images/logos/uxren.png","26e06c7c1406e71032287852e2a25c33"],["/box/assets/images/logos/vanschneider.png","7a1d032ed850bfdfd5f33a1e37da19d6"],["/box/assets/images/logos/viggoz.png","fb34d20b43b23980836874b18af33d89"],["/box/assets/images/logos/visualhunt.png","7a8daa4db8d4b918db9ce98fba9e6d59"],["/box/assets/images/logos/wallhalla.png","0d59f74c95ae464ef4b3f733dbc9d51a"],["/box/assets/images/logos/wappalyzer.png","3cd7f32f4572a787d79117e9d5a183a2"],["/box/assets/images/logos/web_ui_tutorial.png","792cfeff9d09b2274324a626e6a67a9b"],["/box/assets/images/logos/webdesignledger.png","2441dab5ebc051914b337150f5e4a6df"],["/box/assets/images/logos/webgradients.png","0e0d9394594ddc23460a44c4675958fb"],["/box/assets/images/logos/worldvectorlogo.png","58083f4ce440e3530bc4cd3715dc17af"],["/box/assets/images/logos/woshipm.png","236677a9f0cdc11567f29a59eb648a2d"],["/box/assets/images/logos/wotu.png","d566f5fbe369d46c999e3dda8652a6fa"],["/box/assets/images/logos/xituqu.png","1bc5d7ff4837f176d8d1cd46161d4ed7"],["/box/assets/images/logos/xiyou.png","78f71640e15398f779d2c34bc82d97e0"],["/box/assets/images/logos/yineng.png","2b5358cd775ab79db9810c5901241c87"],["/box/assets/images/logos/youtube.png","e976482e81dc2a370bdcd0c1049a4433"],["/box/assets/images/logos/ypppt.png","962029b6aaa669a6258eb58ead0339c2"],["/box/assets/images/logos/yrucd.png","cc81e7ee7c45ef03f789ce0bf4d27a95"],["/box/assets/images/logos/zaodula.png","5be563dc2a5cf8bf168cd0458b3d7c63"],["/box/assets/images/logos/zcool.png","d59439121d45dc2e6185907f44b1077a"],["/box/assets/images/logos/zheshu.png","4e1c146b479512a40f7336f578423c82"],["/box/assets/images/logos/ziticangku.png","5a15ab0a06b4d8b183c150bbc730d221"],["/box/assets/images/logos/ziticq.png","2095885e69d7a131816f75ac0a995168"],["/box/assets/images/preview.gif","ba1e6d67a8ed866750665416352f8645"],["/box/assets/images/qqgroup_webstack.jpg","50e2967a5f3172fce6a3dd67cf463875"],["/box/assets/images/qqgroup_webstack2.jpg","8060f339e95740f1a328a69ef91edea0"],["/box/assets/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/box/assets/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/box/assets/js/TweenMax.min.js","66983609e962b2c2cad05c9313a52698"],["/box/assets/js/bootstrap.min.js","c29f095fbfcfe525181b8b03e1c16dd3"],["/box/assets/js/joinable.js","0a92da519b032a99d687908ec1739555"],["/box/assets/js/jquery-1.11.1.min.js","8101d596b2b8fa35fe3a634ea342d7c3"],["/box/assets/js/lozad.js","35c5670af97f3d27726223249f133129"],["/box/assets/js/resizeable.js","9df2bd66e7e7b427f3a5db0a30162232"],["/box/assets/js/xenon-api.js","df8095705a1ee95c6724660de57a9e6d"],["/box/assets/js/xenon-custom.js","9d00a4e32be19a10fb779a2b9197d965"],["/box/assets/js/xenon-toggles.js","50fbd6ced21c092038fd987a455ef8e3"],["/box/cn/about.html","964d7dc98ba613ce6a67374f671ad2c3"],["/box/cn/index.html","890fa332491f734bb2ea0f8b69fd0880"],["/box/en/about.html","b9de12f2a61dfe32cc27ab8e4fde6060"],["/box/en/index.html","c405c0573b2d05848f52385cb5cc9bf9"],["/box/index.html","5e541a8af65b909dd1ad9aba5d5d1c2c"],["/categories/index.html","4f11bbfff9018f7c20347a0e2ca8cee1"],["/categories/技术-Markdown语法教程/index.html","5739b3bcdb296811d3c433195863d897"],["/categories/技术/index.html","fb1b07d52a3e5d190c2641dfb485a96b"],["/categories/技术/page/2/index.html","e94e17d8fcecab5f95139ea5bb51bf6b"],["/categories/生活/index.html","6e22156db6e27a2da3399f15863a2379"],["/categories/资源/index.html","f1aaad2f9497c552b7493be7ea33794c"],["/categories/转载/index.html","9a1410cf41d75488102bee340cf27f16"],["/categories/随想/index.html","422af62ad8252298eb1d382139003604"],["/categories/随笔/index.html","f1133e24a89873e870469807fb92fab3"],["/census/index.html","9979ab355fce83efcb04ae210c5fcdc8"],["/census/未命名文件夹/1.css","1aee38452de1c470bf8617bc06f726b7"],["/census/未命名文件夹/index.html","878c9d0b1ad7a0369e7149bfbb25488e"],["/census/未命名文件夹/index的副本.html","14d92f462d1be1865f2b958fadb2f49f"],["/charts/index.html","68b4225e9d56602790b503b790633113"],["/client/index.html","637f642ee36152d92eb59372cac24dee"],["/comment/index.html","f224c5a10383fe89309ff7c5c16e8d65"],["/contact/index.html","3aadd734d9e517bfddf337e1c54931ef"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/donate.css","e1782023f40a5908725451e11cb7466b"],["/css/font.css","9be96ed46b355a88ecf65a440f2027ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["/css/style.css","2fec1b3b5c98220f5b0e36b66dc7a497"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","38c18444ce0d019bebf700d5c0172db0"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/friends/index.html","fd53a0639e24fda3b6d8d8439f448132"],["/gallery/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/index.html","c0137be742286a40456a541953852aff"],["/gallery/itsNeko博主的绘画作品/images/1.jpg","361bad66ef1da0aba8728d0c19875516"],["/gallery/itsNeko博主的绘画作品/images/10.jpg","ad68960c7633a01649e51ca296508cf2"],["/gallery/itsNeko博主的绘画作品/images/11.jpg","87d09b4ade32dac6b72eb113e38c2156"],["/gallery/itsNeko博主的绘画作品/images/12.jpg","e38470e01f337a352331ab2851d6afd2"],["/gallery/itsNeko博主的绘画作品/images/2.jpg","37a9526ed281cb9c65c729385f5396b2"],["/gallery/itsNeko博主的绘画作品/images/3.jpg","8b30bfbc29af785c4e904e5214cc580d"],["/gallery/itsNeko博主的绘画作品/images/4.jpg","fc7f2c322228516f766ef3a0a48f682c"],["/gallery/itsNeko博主的绘画作品/images/5.jpg","4f23fc88e25022b8958e27aff60d2fd4"],["/gallery/itsNeko博主的绘画作品/images/6.jpg","1919b8bdc5fdf7ff7e4be806e4048e0e"],["/gallery/itsNeko博主的绘画作品/images/7.jpg","c7b9f4efe49f73c2855ec537f5eca61e"],["/gallery/itsNeko博主的绘画作品/images/8.jpg","711c50e1401e11be4203d86df1d5b484"],["/gallery/itsNeko博主的绘画作品/images/9.jpg","e2d9a0c04117b056836caed5d39b3a9c"],["/gallery/itsNeko博主的绘画作品/index.html","80cdc4bd6c019c900897392c0a9e1b60"],["/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/index.html","ef1c0c329e1b36815b449e0de70e1099"],["/journal/index.html","72b8e76b160698a2eddff0c100542522"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","fda377021e0920bfa1a0031d6ed8e721"],["/js/census.js","b207f65f580d7b463470f7b5561fd9ac"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","3b96f48555f80be8a38b64fa28052bdd"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/kwptuku/22birthadycake/index.html","17577a33b3e1960b877f5ccb3f6d8f59"],["/kwptuku/22birthadycake/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi/index.html","6c9aff2c21ffe6293290c4e63a006bf6"],["/kwptuku/dongmanbizhi/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本2/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本2/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本4/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本4/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本5/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本5/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/dongmanbizhi的副本6/index.html","f4507b6b3b60eeda96ffddfd3e12ba3e"],["/kwptuku/dongmanbizhi的副本6/style.css","a67de24660306638de71d7a640b9ce94"],["/kwptuku/image/b.jpg","35cd45bb65256999fff8b09449bddb3c"],["/kwptuku/image/c.jpg","02c15dd2acbe0bb5238bc5244da881d5"],["/kwptuku/image/d.jpg","84214bdd2ed9aa9227a80d1d3dd0d1d2"],["/kwptuku/image/e.jpg","63896fe2a4b1840aa057a44b266ac472"],["/kwptuku/image/f.jpg","25bfb09a80884ea58a3ca15e167d2aa6"],["/kwptuku/image/g.jpg","7dc57fff81bac323da9a84aba9aafce6"],["/kwptuku/image/h.jpg","456ca17d3da6afaa4270bd4eb8e5b81e"],["/kwptuku/index.css","d7e89367358e3f5e37c3bdbd8892e0ba"],["/kwptuku/index.html","217c71bdc536b65d19d045a1287b332f"],["/lab/index.html","5835b11b94ff414c26618ecca8fe42fa"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","89324650eac05c9da545b7a6d51ece00"],["/map/index.html","774ef9115403b33417966ff5a859f678"],["/more/1.html","6c1db4287139f5ca3377fcd330b4e5a8"],["/more/142.css","f789c89273b7d0c96dbd25495b0e8265"],["/more/142.js","3f57338405e48568efb83ac3994f2b83"],["/more/2wmzxsb/index.html","fe997eac2eca0df3bbde4af3f6b6a055"],["/more/2wmzxsb/preview.png","d36b95823a701b62475612f75357756c"],["/more/2wmzxsb/script.js","988d034539edefef6f4800f3cbc88900"],["/more/2wmzxsb/style.css","fae3620bbe3c5fa890393c7a0ee661ca"],["/more/404.html","6f3e0e9d936b7e6ec9a49e38b2836eb4"],["/more/4042.html","e9405344be517ad4cf8cab26745a9e08"],["/more/bvtoav/index.html","916357ff98ad44ab6fb74fa406ed2d14"],["/more/clock/clock1/index.html","9a3b88249d3a935d4b011a3c416f7c85"],["/more/clock/clock1/style.css","f111f09a72df53aa422b00d846fb3c6d"],["/more/clock/clock2/132.css","05f518310c2b56c8f1aa3e6a15a2bb5c"],["/more/clock/clock2/132.js","91750e2957454dde58c879739e81afc8"],["/more/clock/clock2/index.html","c9350bc37f4ba2064cc8e22378f2d961"],["/more/css/FiraCode.css","5721e9035217ed14ca819e025db6bc74"],["/more/css/flesx.css","c883b907e029239a4adbdcfb33d62990"],["/more/elsfk/css/css-1.0.1.css","d649bf0211e9e1f2c32a6b6f18a809ef"],["/more/elsfk/css/loader.css","7adeb24d698780e3b0b009421cdb0ea6"],["/more/elsfk/img/TB1qq7kNXXXXXacXFXXXXXXXXXX-400-186.png","6daf304356cc010c1d23585c44041143"],["/more/elsfk/index.html","4a258bbdb8f314760b1688b86e66bbf9"],["/more/elsfk/js/app-1.0.1.js","3da96d48dfd85bfd43bbaa97f3822ae1"],["/more/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/more/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/more/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/more/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/more/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/more/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/more/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/more/index.html","f2948ce4f7712c6a508689db9143b382"],["/more/yq/146.css","bc0a77be03acb02849fda7a0c17ce908"],["/more/yq/146.js","a4f1af1154a2a18f423b078c00470bad"],["/more/yq/index.html","a3e71e674a8559414b767d84115103e6"],["/music/index.html","390cc2ef1d0fbbfc1a7bb1874f4bf6bd"],["/musics/index.html","8cfe523fab719ea06e748ecdce4de1bf"],["/page/2/index.html","8e0a00df429763101c8ddf75c7fe7042"],["/photos/index.html","ade3f372c8fbf1ba1f8d5f93ce7d07b9"],["/posts/11908.html","b2e6982690d9bd740c283622a6ffeb88"],["/posts/19324.html","bd29fdcc7867b71521b2d578fd982297"],["/posts/19d2a4e6.html","da7fbb0900615b05c4ffc1230b0354d6"],["/posts/20692.html","6fa85abbaacf73789a4c17e296c38072"],["/posts/22294.html","74a6f748c4709e8174780c52b50489df"],["/posts/22338.html","84dc4b6c7d8c0b5f8be5853dd31a3d9d"],["/posts/25167.html","0b30b41436efea36ddd381e41c2a3935"],["/posts/25381.html","ff4a936cd88e4d96c494c2a96be46409"],["/posts/25797.html","64364287010aa7ae3d15a810e3be2989"],["/posts/27498.html","083908312beee04448cae28ed7140d8f"],["/posts/27604.html","3eefb7cd10a3d4d06c7145be5a6f47da"],["/posts/28347.html","912c5f9baaf27f47cc8dcef1a4415e95"],["/posts/29462.html","4e6780869945a2b2f3b3feb676284f74"],["/posts/38332.html","9f3ec94de987eb6760056b637eb8f368"],["/posts/38811.html","5d60f548a542e16a563158afad9023e1"],["/posts/4901.html","56d4d9b782e9dcb8e8b0fbf7cbcf704f"],["/posts/4b3510a4.html","dcbeb426411bf23e3b3ba46087724757"],["/posts/50391.html","8b5ac30f2ad0913b1df0557e27dd19a7"],["/posts/51618.html","2613feba0950b3a20d10592f14ef195b"],["/posts/5560.html","59548e74a6541709674638483db8c953"],["/posts/62019.html","69a6647ebfe6515dc0c63dbd66156e90"],["/posts/64683.html","8edc5f13d24f0666d88db47e5003ed75"],["/posts/7a46f93c.html","3c55b0df6275fb815d4f62bbcf1e25e7"],["/posts/d74d8b76.html","f6495f178da901e1f95d9351d7525a01"],["/posts/e3e08109.html","91616e285cadeefc86fbf5abcd86632b"],["/shuoshuo/index.html","5698f80e375ff8b235486a7434a73cb5"],["/sw-register.js","560fd53a87af2838ef73fc1368a7649e"],["/tags/API图片/index.html","a6ab40903a8c4209863057624db36cae"],["/tags/Billie-Eilish/index.html","a09c90b4af766b40b2ec58ec793a041f"],["/tags/Fontawesome-图标/index.html","72436c935ebcb81b51a18c6ec9ea35f6"],["/tags/GitHub图床/index.html","6a126fd6fcb3d16682210951539fb4ce"],["/tags/Github/index.html","73db2e7f313f3489aef7a3eddb6a56fc"],["/tags/Hexo/index.html","afb68850b55f9b3eda1cf42c0d5a0527"],["/tags/LPL/index.html","08909390e15e4449933085059907650c"],["/tags/Markdown/index.html","d379d72670fa1c6f553af73e58b38857"],["/tags/PicGo/index.html","1635198fa389ce2ed2020763c1bc6fe9"],["/tags/WEBP/index.html","a540efaf238649a7ae5a34d85f137d09"],["/tags/ajax/index.html","5401533fce62ddd571682d35d43df2e2"],["/tags/blog/index.html","f6f8c822fb88ce77a7d3fc41c766982a"],["/tags/css/index.html","434cfa7f4acde4d0e7b2f89bb9cf2728"],["/tags/echarts/index.html","b73baa5d52f18c1140943db759a632de"],["/tags/flask/index.html","d4b06b8d0a1235813b5da901ee0caae5"],["/tags/hexo-blog-lucky/index.html","64851f3003b8e8909461b3383090a81f"],["/tags/html/index.html","1ecf8cf8bf40947f21a837f0a418a537"],["/tags/index.html","463459e645865c0aac7481bb34a4b555"],["/tags/jQuery-CSS3/index.html","a314a391582adf60192d6c96ea2f2dc0"],["/tags/jQuery/index.html","989ff16db26cff1f6cb1f47f740a7c1b"],["/tags/javascript/index.html","96f2ca9cb4e6cff8119ccf9cce6d92aa"],["/tags/json/index.html","f69c5f7b4625636cbe75ec474c1c6a68"],["/tags/mysql/index.html","8db184756b455af529e5b6aae0d58da9"],["/tags/note标签/index.html","d3e2ecaa3ef291a3b9a434df00cbc3d2"],["/tags/npm/index.html","6a618815b2219a1b061bcc2448cff9be"],["/tags/numpy/index.html","4eab6db38417b0b1fb46b148be03269b"],["/tags/pymysql/index.html","1f6f9746b36d19792ce581b4fc855cb9"],["/tags/python/index.html","bcac12fa03839b91aedd4a81ec656799"],["/tags/requests/index.html","d12a9bde6446214bfd44015a300c1589"],["/tags/web/index.html","cb2b3366404d4604b1f4354abfc0902c"],["/tags/代码分享/index.html","cb43e3f50df05695410e52f95cc071f6"],["/tags/代码压缩/index.html","0bf7ac9dd847674a6ab15442018a7868"],["/tags/加速器/index.html","55b50a4100f0de9d201cec2619abc485"],["/tags/博客/index.html","efa603f8c66949cb92c37cc8cf1883e5"],["/tags/博客优化/index.html","53f3c28eb2480de92f14cdb17f5cead1"],["/tags/博客搭建教程/index.html","38a2bffd40974a22d519945630f6f495"],["/tags/图像处理/index.html","78ed6cabae4c41f8b1e1a4fbaa1e4f34"],["/tags/图集/index.html","463459e645865c0aac7481bb34a4b555"],["/tags/声明/index.html","bf32d2b76cdc98647b2654aa39679c8a"],["/tags/好物推荐/index.html","92e81d13217b688911c5c60f011616ef"],["/tags/工具箱/index.html","675ac9ff6084322ec171682ec858d6a9"],["/tags/应用分享/index.html","2dbd788c6548702f65c4185dff64a7da"],["/tags/思维导图/index.html","9dbbac802f7789ba0d8231c6e6160043"],["/tags/悦读/index.html","2ae23eab7bb2fc3baeebef9dd91efdd7"],["/tags/插件/index.html","6e2b1786b84668f89c9a953c867a6700"],["/tags/教程/index.html","9d904a979ee2f93bbcfd3cb96b4990d7"],["/tags/数据可视化/index.html","5483086f4bfe5ebbfd45fe25a21c9687"],["/tags/文章加密/index.html","133c215256d54f4424fa200f19d35108"],["/tags/汉化/index.html","8c0186e263eaecc32da278607c1035e1"],["/tags/流行音乐/index.html","d9397a2c76e37ba3769f2ce7e3e4ae0c"],["/tags/渲染绕过/index.html","fe6e8b424139945df71c9240219d570d"],["/tags/游戏板块/index.html","2c0e3a96572bac50b59dc76714ba62e7"],["/tags/生物/index.html","337588560b2388ce008a594c53059748"],["/tags/百科/index.html","5ad7596af9a78caaf2a53e6e319a50a6"],["/tags/粒子特效/index.html","d515767542759d7d5a4f1582606bef2e"],["/tags/网站分享/index.html","39f1522c55f3809d4d9a49fd24d18a32"],["/tags/蚊子/index.html","ec04653155cebd60f5c74ec54e067b5e"],["/tags/评价/index.html","27cba3704796121c0991d3b29af30aad"],["/tags/转换/index.html","8575d6e034e77e887776f59674b39573"],["/tags/转载/index.html","09ab26e5a668db350c8616cca60ce26a"],["/tags/阿里云/index.html","3c819d6cbecb54efc16618ab5b759523"],["/tags/音乐/index.html","c14a8476c2b040c7749609de94a4c7f9"],["/theme-sakura/index.html","f6682c7806cfe36b8349bff6433fb4bc"],["/videos/index.html","394329ccea84ee8f828460960a2f7707"],["/warn.html","9fd8ffc31f3cd41bef2b17482f346bff"]];
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
