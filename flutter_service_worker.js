'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "df3b015a5104db1fc6c70fe039fbf6dd",
"index.html": "ddc620a27c41a1d5ebfbfe1162f3594d",
"/": "ddc620a27c41a1d5ebfbfe1162f3594d",
"main.dart.js": "d3350bd1a071c7b6fed5012c7b7c770d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cf96ae41dcfe08d6edbdc91ffe451446",
".git/ORIG_HEAD": "a3fecc04210ae3fd8a23d01cef89fa1d",
".git/config": "878dddb343824478cedfceaa68945b28",
".git/objects/0d/15db9e4de4eb0137efc48ebb49013cc8053898": "20e695557c8a7fd8d49ac8323de35ddc",
".git/objects/0d/6bfbd9d21f32d7364a4f53204ab6a27a743b77": "8f165991030c0a400414ca8533a09d44",
".git/objects/92/dc7e13ac736aa420eba50394944e8de261a9ab": "b884246a6683799ab41c0af185516b84",
".git/objects/3b/55711ffbacfb4674b333e2ea5564dec1c40844": "e444b88bc49aff3b679fc40c3dcb7e9e",
".git/objects/9b/4171d7220256f631a3b9986b4d922c48f6fd07": "040b9d6bedac583bb7c7b062dc442865",
".git/objects/04/1f6bba9c80b8f90c304adea0b15b15d44e5761": "801d9bc6ddc94637a1da5ed2a183fd18",
".git/objects/04/99d80957ba3f4550f665520216ee97d975929b": "813c6493f66a0bca1749a5402d828800",
".git/objects/6a/71fb62c2af4e6ce1b228dbd7f176366cde6cdb": "56aaf0fda87fd2f17b28b1e96d638c29",
".git/objects/69/5250c6f878dbbc55655a90e72068beb5b3725d": "62d3e74f77dfd85d20669cecbe9d9908",
".git/objects/58/da166a3d8bd14a3e60bb7eab73a5c08ec350da": "fc62aa4f05c190998878ec18691ad735",
".git/objects/67/92271be3184f43ab6f9e94af3f2a4ad8a25ff8": "93d7cdb6a5e402ab59127da8086b8a60",
".git/objects/0b/cda3de297d992c313066c3f85987b5ef205bcb": "eca95a1af74e37e34452cf362105b5f9",
".git/objects/93/bbf3b879e816e7e7dc1e043aeaeb9a4e181cf9": "d067676cd96f3f20724e12b862380d2e",
".git/objects/0e/1e1cf19cf67748a35710abf636f824223ba4c9": "f4b4267d6431aabff6eaacd2b5799d2d",
".git/objects/33/94520cd59571d22496adc07c924138fc002e5f": "20236f7b219a919259483842fd744d10",
".git/objects/05/e26f48c164754f47e0d8e8a5205aae0058e8f2": "c4f518e40a4e9ef3daf123304697ce24",
".git/objects/9c/6c2741517e653875acbc088fa08b8f2554b23c": "e99edad3e47e359d1132320bae02a6b6",
".git/objects/d0/2fb16ef2b4f4fe18774e0be6cc33c4d38be8f6": "d799021dad28d39d463b2c9749ea3804",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/b3/5372c1abd0d902eb5a66c58173e294ebdaa96e": "379d5e14706e5a1aa827d534e65e4e51",
".git/objects/a5/d24c4e3b746f921219e296bc8b8d2b0cfda9b1": "0e44d69e3281719d4c8ceeaf1d5207ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/72557c1faeed9b10d1165ae163f6d77f5ef672": "6973a48aae0b44ce0c8d8d12449ec708",
".git/objects/e2/64d68a203159cc6578ba806972e0c661a8782a": "e472aeb49c8a2efc03f31cdbe2602b8c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/a8dfccbd42e9ad2de4635e352320a2570aeeba": "11e9d6e2d91996fbec8a6d5b3cdfb3ba",
".git/objects/fd/fbc3c3a59b4ae24b7757318e2b02613eb19b1d": "8a693610325d959a4676a961ca1ab840",
".git/objects/ca/477ef38b7e83448ad6c68d05a9998ab6597702": "f8c34640aa7430a1795a13ef7aaf6f58",
".git/objects/fe/cd20b7961081fc9ec12ae33d2a822eb314e0ac": "2e5db0547ecf8173914687c343952006",
".git/objects/fb/de0fb88c4c5c8a7c1bd8a2f6fd4f9d342c3c60": "cd601785e723e3119019630de7d26f0e",
".git/objects/c1/ee81420ff1afc952e48fefb88ac6dee978d156": "471b9df227932396531a590d64ba42c8",
".git/objects/c1/f5dedd35623fc987161310bb3fdaa83b529f34": "2e5e5bfdab99aeb36e22581681867849",
".git/objects/4e/d86a96c5c12e44add281a6dd0b521821d323e4": "05fe027ebeb63007dd0063a03b53a034",
".git/objects/20/04772be8612c092560e58ecb2dd1bf8c89f3a2": "30ddc67b8e874c62f0f5e5270bebc92d",
".git/objects/18/0b01f6103a048838cd4f272d0e5625c1a4502d": "495a4fde9c7c77e4c264cb8b011d75cb",
".git/objects/18/bba4ac7d6d12f8ab8008dddd1c13aa269bae5d": "9745de6a3e4d7086279f0338075cd11b",
".git/objects/4b/9891a80ae81b9bf006b14b593eb1286c2bbd61": "edc297f1c452615cc7ea8e71b8b18329",
".git/objects/pack/pack-abc6286ff23a9d02256d6544ca4d52334eaf8a62.pack": "43a3a15c03f156b00fbea1d08a6ad711",
".git/objects/pack/pack-abc6286ff23a9d02256d6544ca4d52334eaf8a62.idx": "12b14a311b8559561df704696693d7d5",
".git/objects/11/7c8fab65dc50a15951c70a47cf01860519de02": "9b5c556cb92792e993f114fd266e6382",
".git/objects/29/883e676312c8ff4bcaf4980dab454bc54ae98f": "3f1bd2f37f5256fe0f17919a629f7abd",
".git/objects/42/2a99d5538cabbb3bf0105440e2656885fbe3a8": "06e58230379d87b740065d95c74c3fca",
".git/objects/73/8edc66d68d7adcac1cf36a1bac77c2da111a58": "b9fd4bc81270edd8fa2ae54d6d120677",
".git/objects/28/0e69fe9c114496e6e60ba2efe7a3c89c9a759a": "bd47d01917f442da60aeba3acef3204b",
".git/objects/17/fc8f1b82d16f27ffe6d451bf68f94976ee8017": "ca5b2b9a2ee0b8610e7730ea1d6c6cfd",
".git/objects/7e/32f335bbf1423e23940be0e19973a7846c6d37": "8dcd18234c2aba74f13f67a97333879a",
".git/objects/26/881557545edeb85267085aabc6cdab66bcd9b3": "5fc2f90025e512d688ef9b895d2acfc4",
".git/objects/21/9237094947bf263d70d9e6427def37bec65a55": "557595abb3120d00485f39315577947e",
".git/objects/75/5b9b4504bac45249eb80cf16ea53b911361411": "64a8af5405543d22db5e8b96c5a1df75",
".git/objects/75/909e094cf6bdc69698d1c93533d64472dce799": "f668baaa6e8b15f42340355068300f53",
".git/objects/2a/42db632acde805dfc9a3f3682c2c36dacc9acc": "beb8fe8e60a8044bba4bc351e66d5b71",
".git/objects/2a/349eed7f73ed398a7afc24c58e99b93af16a0c": "5ebccc614eaeb395f8d85a57eb9b27f2",
".git/objects/6b/30af48a3698030776f4d7925496f47cc041083": "348bb0e0b6f64ad70f3c11652b98aa4b",
".git/objects/09/da04b814a449ccc3e31bc315bcfd91f1131922": "c3bef806193a3e30de338c5ee2b2fe0f",
".git/objects/5d/4d6c1dda761f844c515d2e5aa0159cfe8eac35": "2daf2813d10ba0edb43d928daba44d19",
".git/objects/65/fb0794d14b3dcd346211e34337ea5f328804cc": "fa0deaf5df75570cbbbd38f9351ad1b9",
".git/objects/96/9cb35fb81566db355335eb09510332008956f5": "0acca663e4cd0da14a8739bb6bbf8888",
".git/objects/96/6346fa259773ff4983986982e490288e1fba47": "a52a3852bd958794699795e3f75ce5c5",
".git/objects/54/fd3913777ed9029e9bbaa127c713ad7d22462d": "511d773639bdc7e571f9ace62d8dd8f4",
".git/objects/98/8e6578c91c25de2327584fbef9ae869927ad79": "f73a9d8d34eed21b3a6008e6a9da5ecb",
".git/objects/53/1f9928f3551884c8ee3aaab5bbef4158a278a7": "966293ebc035415c770cb67836650960",
".git/objects/08/557b4defe5c49cf29bdb9bd17472c038f4783f": "9eb133e13817256374f31309789aec3a",
".git/objects/08/e0f62c1bb34dad1f3029bc9b1241b78e015429": "33bcab7c9ddc680c6ac239d75a3482d0",
".git/objects/06/cd2a2e5e88567f978e3d1e2830c0b4d143e7a4": "c1577f0f4c1e306689327e96405fefb9",
".git/objects/39/5e6b1e91cc37c71811944e7b76cd55abf78da2": "c2a87e3179a2822e668370afbfa7e665",
".git/objects/52/109ff72e07f4e1057775b5ecdca86a085f532b": "8e83a3ccc50f62e21404a119f8c4b9ab",
".git/objects/55/b32d7e0eaf48447d4de493b43f945f67c07f36": "ebee6faead0ea2b9219404fafd72fd4c",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/63/ddf38d5766ea56ecf2f06efe7e832d69b868b2": "3d28f1a2a2423f2bc8b9d382b5057dea",
".git/objects/d3/57e129b0f4b3a117cee540e2c15669bff65de0": "5aeffa8633bcf28e498ed84eb27d7924",
".git/objects/ba/41a86f7419456cbd3aa4ea2385c1fb9cbd435a": "b3e48afabf873b6fe25778fbe4bada29",
".git/objects/a7/78eee6b2d571246dd6bbd87f07332e4d86550c": "d52c24783beaf0e30dbbcf92067a3290",
".git/objects/dd/0f90a200081d4761945366f54cf0618703bccf": "e91545ab13ef42bcc5b9394abc8a44d1",
".git/objects/aa/27b8dcc9205f874c003d2da7ff4aa6c3a480b7": "444ed8600c2ec1c7a5f08246c482c96a",
".git/objects/b7/7ffbdc11a8085ea898b5e57e62152e145d89cc": "0894ac3dcfd704b382c020d04e0cce5d",
".git/objects/db/8a1aa452dd0cbc08ffcfa5b08b03e634621d0e": "462306b7793ed4c710c8e10f9c958e6b",
".git/objects/a8/cc365e47fd1e4181312234ad75310e8345e146": "42917a0980f2992886922fc9243d34c6",
".git/objects/de/1dd76f777935492dd4239fb2a2c8416f551375": "49412e57a60212efdb03938948f25a66",
".git/objects/b0/fbdcc083712581288a5005eb330d6a538bee96": "5a22927a02f4c04ddaf67a1abbf89ee0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5f0da5395c975fd5fd838ace390afd8a60e625": "18a711a51e35d351e0b74414e105eb6f",
".git/objects/c2/5a2ad094b4b71e9167120c36f6fd529e1e4a58": "09b78f0f3dc33e96cf93e6c986958fb5",
".git/objects/f6/99895b64ddad1bb132a8d1a3d2fa64fcc335fe": "355b09ca8374b06f1a1557b77263b1ca",
".git/objects/f6/2a1817a34cf8cdbef2652476d0bf7d55dc66c3": "59c13ddc64201c1ddeeebd8db8eed984",
".git/objects/e9/a766887ac8c805570cf70e8ae7e98d416fb342": "570cdcda7eb66a0b47e989c74ff56807",
".git/objects/e7/d1d2719c7e3073c60d9f53269f7bb2e58ace2d": "9022d8e656f291ebb21e329ea66bd477",
".git/objects/cb/48697bef3e63429d7cd8a216a0beebe17ee074": "8a2d4e22b78a1914ae34ee46020045af",
".git/objects/ce/e406854a025051668ece9f7dad1f899485d499": "e2b5237d6f7df5d9684f5bde52103330",
".git/objects/e0/12f7333368494d427eb23b879ecd77d08a0d86": "eb87d913bda891d7e8e73b0cb670a00c",
".git/objects/79/ab632e4274ae0e29ef9783cedbeb7c03dea139": "39c44a2befc0b05f831efea1ffe0a183",
".git/objects/41/83dfe144fd1f6a3a242591f00a7c7952028b3e": "6b164c200d2d36daebc8f196e783a615",
".git/objects/77/a9e8e2cd21c5a54ee872f2052cff3d2e360dc9": "a052814730022bbe09872bad805e34c6",
".git/objects/4f/046ad0c4370075c606a82b1a1691142fcb4ceb": "e6af66b4ee22f483971a8655de0c044e",
".git/objects/4f/8413a0f3ca59c7c0d95df1728a8b1cc8aeb68c": "bfd6cf248f7d1e543cced20d00446cfc",
".git/objects/12/ced3367996d77c0fa192a41dd57e9d320dfe52": "b49c439166bfdaf77f2cd0d950df9aff",
".git/objects/85/ddb0338932d0e4a20f451b4ef56036fa8cd231": "8c65aed025118c5cd675e87750b86bb2",
".git/objects/71/c5bc5ef9bbb830b22439dbea7633bb34c886c9": "8a0b773ecbcb31fd81b7c7a78b6a6ecc",
".git/objects/71/69a899ed3589917f39a0c692eb271fd92dc0f6": "53b9d77977f321d6a2046a767605a6c0",
".git/objects/76/2134c5cb443788f06fc75d4be6a807c374d412": "0a642c73c604bddac5ff1d5dc750c2d2",
".git/objects/40/d802bc008d0da7b9b822aaa1315708724e3b28": "23dff9ff6b954632341a2e4fd330bdc8",
".git/objects/14/df2d33fb40345abdb2866c6782b276ef16a8dd": "1e15cd26cf7622e0ad70938a30c34404",
".git/objects/8e/f175ad77c5bf8f2ac2dd176c227770820d15f2": "62d08562cee4560dabc7bb87a75660fb",
".git/objects/8e/e962e7dd455a0fb41b69d61ec5ac23543e1d19": "f5283368c2e3abdf91d807077fe100a9",
".git/objects/22/e3fe826d672723cc3d181f6df50ae307bba969": "2f6b65c5b96ebeb0c38edd68da0a9fc0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "967a8ea5b33cf9ed5bd33e4079385084",
".git/logs/refs/heads/master": "f2d0d9599b55912bfe4e5bd5c2dd9840",
".git/logs/refs/remotes/origin/HEAD": "d12db96cfa8ea72195bef35a59fd25b0",
".git/logs/refs/remotes/origin/master": "489d1c78755287d75ee69ee10fd6c7ee",
".git/logs/refs/stash": "6656f98bc69dd3a7173e898393606269",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "b24dbd4e74cc405d3a27433fb4a5b115",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b24dbd4e74cc405d3a27433fb4a5b115",
".git/refs/stash": "a76863f779fa7b6af5f0a8982ba4455b",
".git/index": "d919ef3404f880bb6a3a24c94d322ac2",
".git/packed-refs": "153bd77f8832d19b1adc8899e384e7df",
".git/COMMIT_EDITMSG": "26fa3c6d7f92234c9c1dbd7611ed41de",
".git/FETCH_HEAD": "12f33fe753b85b1c509e18f912a008a2",
".git/sourcetreeconfig": "552bb90c669bcbd18c8a231f7b5ccabb",
"assets/AssetManifest.json": "870708ab04edcfa81912b14e15d053ab",
"assets/NOTICES": "f11df59e7dba68ef5f46e7a2509f00f9",
"assets/FontManifest.json": "f9a8e9705034642a25f3d007f810af78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/svg/ic_time.svg": "a350d8138368d7e53cc64bb0f674e1bf",
"assets/assets/images/svg/ic_profile_avatar.svg": "5e946c20186e33b608fbb3388fff6ff5",
"assets/assets/images/svg/ob_circle.svg": "6141e7ee67578e4e5b67ffdec69133a9",
"assets/assets/images/svg/ic_empty_state.svg": "aa25f7fc10691e161dffcc45a8491cb4",
"assets/assets/images/svg/ic_user.svg": "a9e7a3eb0c49c4c00e63f631bec3e7a5",
"assets/assets/images/svg/ic_setting.svg": "858160676571116542718c5f46fc6260",
"assets/assets/images/svg/ic_message.svg": "f11e4d3556f17cc11e2e9c2e0da226d1",
"assets/assets/images/svg/ob_rectangle.svg": "3883191cab3ab89da06e2423b7aab4e8",
"assets/assets/images/svg/ic_action.svg": "632161d08f2d4924d636df7fe62b503b",
"assets/assets/images/svg/ic_arrow_down.svg": "400e5d63b0712b20385c7e86cec8b721",
"assets/assets/images/svg/ic_play.svg": "01939e598e905e64bffe34b055ff5c58",
"assets/assets/images/svg/ic_down_right.svg": "64b2feab375918d0c5087a32db4fe37a",
"assets/assets/images/svg/ob_line.svg": "45eb5ab3aba10024f72674b7e69ffefb",
"assets/assets/images/av_jax.png": "f2a318fd90d0fd7a44f00b73d82d96ea",
"assets/assets/images/split_cover.png": "ddae7347d30786c82fabe4900513202f",
"assets/assets/images/bitmap/ic_discord_avatar.png": "f27cb0cd86708162b747c561da760493",
"assets/assets/images/bitmap/ic_message.png": "637a5c745f62ab4c666d671f051feeb1",
"assets/assets/images/bitmap/ic_users.png": "eed499438ad6a5cf239891bcf0793687",
"assets/assets/images/bitmap/ic_facebook.png": "2c7cb52fdf005b672c2510b8e796299e",
"assets/assets/images/bitmap/ic_discord.png": "9eca0da3e6039bab1d55aa1cacf66a82",
"assets/assets/images/bitmap/ic_settings.png": "2543393aa5f0fa9a4f3a59c988f19964",
"assets/assets/images/bitmap/bg_app.png": "2f0a3427271cf894727ea5aa7d4067bb",
"assets/assets/images/bitmap/ic_play.png": "a34b2c546ccba34e54c1669c03a7e058",
"assets/assets/images/bitmap/playbook_lol_cover.png": "cfc87c755daefb3da88f99270b7b634f",
"assets/assets/images/bitmap/avatar_nancy.jpg": "97afe0462b6bf8d2e1a5b7b86a95fbf0",
"assets/assets/images/bitmap/ic_coming_soon.png": "4572be95f23dbcc4df899b8f41fa9976",
"assets/assets/images/summoners_rift_map.jpeg": "8b0de66328a4297a434b3b2ba7a8680e",
"assets/assets/images/av_seraphine.png": "2794ccd03b0f3375ca3a044f7523b66f",
"assets/assets/images/ic_avatar_1.jpeg": "1f7bd52431ab02792aa52afcfd3930b4",
"assets/assets/images/av_sylas.png": "3612d6c1813e6eef1981620671fc224b",
"assets/assets/images/blind_cover.png": "739b7da3f8d057708ad48bd494b6ed75",
"assets/assets/images/counter_strike_cover_1.png": "8134551666840c108490b59b82817b42",
"assets/assets/images/counter_strike_cover_2.png": "7963e0813a16124866507ff27360dcc5",
"assets/assets/images/ic_time_pointer.png": "e5ac9bad87f027e059c8718f1af997e0",
"assets/assets/images/counter_strike_cover.png": "7be763ef96c1be3079baa69e7e42eae8",
"assets/assets/images/haven_cover.png": "83e15067277051811f19b037c30e80ae",
"assets/assets/images/lol_cover.png": "5440454b6bf8e44e196ae21d16e4fb0e",
"assets/assets/fonts/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
