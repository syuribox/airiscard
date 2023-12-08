function setup() {
  new Canvas(360, 480);
}
let img_title;
let img_temp = [];
let img_card = [];
let img_end;
let song;

function preload() {
  img_title = loadImage('./img/title.png');
  img_end = loadImage('./img/end.png');
  img_temp[1] = loadImage('./img/001_maria.png');
  img_temp[2] = loadImage('./img/002_enal.png');
  img_temp[3] = loadImage('./img/003_sarna.png');
  img_temp[4] = loadImage('./img/004_black_cat.png');
  img_temp[5] = loadImage('./img/005_white_cat.png');
  img_temp[6] = loadImage('./img/006_orange_cat.png');
  img_temp[7] = loadImage('./img/007_orange_dog.png');
  img_temp[8] = loadImage('./img/008_white_dog.png');
  img_temp[9] = loadImage('./img/009_alice.png');
  img_temp[10] = loadImage('./img/010_boy.png');
  img_temp[11] = loadImage('./img/011_girl.png');
  img_temp[12] = loadImage('./img/012_guy.png');
  img_temp[13] = loadImage('./img/013_scarecrow.png');
  img_temp[14] = loadImage('./img/014_target.png');
  img_temp[15] = loadImage('./img/015_miena.png');
  img_temp[16] = loadImage('./img/016_garbage.png');
  img_temp[17] = loadImage('./img/017_wooden_box.png');
  img_temp[18] = loadImage('./img/018_bottle.png');
  img_temp[40] = loadImage('./img/040_apple.png');
  img_temp[41] = loadImage('./img/041_golden_apple.png');
  img_temp[42] = loadImage('./img/042_present_box.png');
  img_temp[50] = loadImage('./img/050_grass.png');
  img_temp[51] = loadImage('./img/051_harb.png');
  img_temp[52] = loadImage('./img/052_portion.png');
  img_temp[53] = img_temp[52];
  img_temp[54] = img_temp[52];
  img_temp[55] = loadImage('./img/055_thunderbolt.png');
  img_temp[56] = loadImage('./img/056_ice_ball.png');
  img_temp[57] = loadImage('./img/057_fire_ball.png');
  img_temp[58] = loadImage('./img/058_clear_coin.png');
  img_temp[60] = loadImage('./img/060_green_orge.png');
  img_temp[61] = loadImage('./img/061_wolf.png');
  img_temp[62] = loadImage('./img/062_deer.png');
  img_temp[63] = loadImage('./img/063_bear.png');
  img_temp[64] = loadImage('./img/064_slime.png');
  img_temp[65] = loadImage('./img/065_rabbit.png');
  img_temp[66] = loadImage('./img/066_snake.png');
  img_temp[67] = loadImage('./img/067_ghost.png');
  img_temp[68] = loadImage('./img/068_jack_o_lantern.png');
  img_temp[69] = loadImage('./img/069_mummy.png');
  img_temp[70] = loadImage('./img/070_skeleton.png');
  img_temp[71] = loadImage('./img/071_santa.png');
  img_temp[72] = loadImage('./img/072_breadman.png');
  img_temp[73] = loadImage('./img/073_snowman.png');
  img_card[0] = loadImage('./img/card_base_green.png');
  img_card[1] = loadImage('./img/card_base_red.png');
  song = [];
  song[1] = loadSound('./music/m01_rpg_title.mp3');
  song[2] = loadSound('./music/m02_battle1.mp3');
  song[3] = loadSound('./music/m03_christmas.mp3');
  song[4] = loadSound('./music/m04_battle2.mp3');
  song[5] = loadSound('./music/m05_you_win.mp3');
}
let img_bg;
const bgimgs = [
  [2, './img/bk01_house.png'],
  [2, './img/bk01_house.png'],
  [2, './img/bk01_house.png'],
  [4, './img/bk02_town.png'],
  [4, './img/bk02_town.png'],
  [4, './img/bk02_town.png'],
  [2, './img/bk07_town2.png'],
  [2, './img/bk07_town2.png'],
  [2, './img/bk07_town2.png'],
  [4, './img/bk05_grass.png'],
  [4, './img/bk05_grass.png'],
  [4, './img/bk05_grass.png'],
  [2, './img/bk03_forest.png'],
  [2, './img/bk03_forest.png'],
  [2, './img/bk03_forest.png'],
  [4, './img/bk08_training.png'],
  [4, './img/bk08_training.png'],
  [2, './img/bk04_forest2.png'],
  [2, './img/bk04_forest2.png'],
  [4, './img/bk04_forest2.png'],
  [3, './img/bk19_town3.png'],
];
const reward = [
  [1, 1],
  [2, -2, [2, 2, 2, 2, 2, 2, 2, 1, 9]],
  [3, -1, ['エルナ', 2, 2], 0],
  [4, -2, [2, 2, 2, 2, 2, 6, 6, 10]],
  [5, -2, [2, 6, 7, 8]],
  [6, -1, ['サーナ', 3, 3], 0],
  [7, -2, [3, 6, 7, 8]],
  [8, -2, [3, 6, 7, 8]],
  [9, 9],
  [7, -2, [3, 6, 7, 8]],
  [8, -2, [3, 6, 7, 8]],
  [9, -2, [3, 6, 7, 8, 9, 10]],
  [10, -2, [3, 6, 7, 8]],
  [11, -2, [3, 6, 7, 8]],
  [12, -1, ['アリス', 9, 4], 0],
  [13, -2, [3, 6, 7, 8]],
  [14, -2, [3, 6, 7, 8]],
  [15, -2, [3, 6, 7, 8]],
  [16, -2, [3, 6, 7, 8]],
  [17, -2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5]],
  [18, 11],
];
const card_base = [
  // ★rank name,   img, _hp, at, def,hit agi skill
  [],
  ['★5 マリア', 1, 200, 50, 30, 30, 10, ['2回攻撃'], 'スキル：2回攻撃\n剣士「マリア・ファイアランス」\nパーティー「レッドキャッツ」のリー\nダーを務める。', ['2回攻撃、えいやっ！！', '2回攻撃、いっけぇ！！', '2回攻撃、そりゃぁ！']],
  ['★5 エルナ', 2, 150, 70, 15, 30, 10, ['ファイアボール'], '魔法使い「エナル・ブルーサファイア」\nパーティー「レッドキャッツ」のメン\nバー。【青髪の魔女】の二つ名を持つ。', ['ファイア・アロー', 'アイス・ミサイル', 'エア・スラッシュ']],
  ['★5 サーナ', 3, 180, 60, 20, 30, 10, ['アロー'], '弓使い「サーナ・ゴールドラッシュ」\nパーティー「レッドキャッツ」の\nポーター。\n【期待の猫娘】と呼ばれている。', ['弓をくらえにゃ！', '攻撃するにゃ', 'どんどんにゃ']],
  ['★1 黒猫', 4, 110, 40, 15, 20, 20, ['爪攻撃'], '黒い猫ちゃんだ。かわいい。\n裏路地を歩き回っているうちの一匹。\nみんなで餌をあげる地域猫だ。', ['にゃぁん', 'にゃんにゃん', 'にゃほーん']],
  ['★1 白猫', 5, 100, 50, 15, 20, 20, ['爪攻撃'], '白い猫ちゃんだ。かわいい。\n裏路地を歩き回っているうちの一匹。\nみんなで餌をあげる地域猫だ。', ['にゃぁん', 'にゃんにゃん', 'にゃうん']],
  ['★1 トラ猫', 6, 100, 40, 25, 20, 20, ['爪攻撃'], 'トラ猫ちゃんだ。かわいい。\n裏路地を歩き回っているうちの一匹。\nみんなで餌をあげる地域猫だ。', ['にゃぁん', 'にゃんにゃん', 'にゃう']],
  ['★1 茶犬', 7, 110, 40, 25, 15, 15, ['爪攻撃'], '茶色いワンちゃんだ。かわいい。\n裏路地を歩き回っているうちの一匹。\n誰かの飼い犬らしい。', ['ワン！！', 'ワンワン！', 'ワウーン！']],
  ['★1 白犬', 8, 120, 40, 25, 15, 15, ['爪攻撃'], '白いワンちゃんだ。かわいい。\n裏路地を歩き回っているうちの一匹。\n誰かの飼い犬らしい。', ['ワン！！', 'ワンワン！', 'ワウーン！']],
  ['★5 アリス', 9, 190, 50, 35, 20, 10, ['2回攻撃'], 'スキル：2回攻撃\n姫騎士「アリス・リッテンマイア」\n【王国の秘宝】エアイズ王国第一王女。\n美しく聡明な姫様。\n冒険者としても活動している。', ['2回攻撃、いきますっ', '2回攻撃、今度こそ！', '2回攻撃、やります！']],
  ['★2 スリ男子', 10, 120, 30, 15, 20, 20, ['スリ'], 'スラムの男の子。\nいつもお腹を空かせている。\nスリの常習犯。\n悪いことはしちゃダメ。', ['ちっ', 'ちぇっ', 'ふんっ']],
  ['★2 スリ女子', 11, 110, 25, 20, 20, 20, ['スリ'], 'スラムの女の子。\nいつもお腹を空かせている。\nスリの常習犯。\n悪いことはしちゃダメ。', ['きゃっ', 'もうっ', 'ちょっとっ']],
  ['★3 スリ男', 12, 150, 30, 25, 25, 25, ['スリ'], 'スラムの男。\nいつもお腹を空かせている。\nスリの常習犯。\n悪いことはしちゃダメ。\n子供にスリを教えている。', ['なんだ手前', '何見てるっ', 'あっち行けよ']],
  ['★1 カカシ', 13, 180, 10, 20, 100, 10, ['沈黙'], '冒険者ギルドの「カカシ」。\n人型の的。\n訓練場に設置されている。\nよく剣術訓練に使用される。', ['………', '……', '…']],
  ['★1 的(まと)', 14, 200, 10, 30, 100, 10, ['沈黙'], '冒険者ギルドの「的」。\n円形の的だ。\n訓練場に設置されている。\nよく魔法訓練に使用される。', ['………', '……', '…']],
  ['★4 ミーナ', 15, 180, 30, 25, 25, 25, ['計算'], '美人受付嬢「ミーナ・ロバーツ」。\n冒険者ギルドの受付嬢。\n特技は素早い事務処理に素材の目利き。\n冒険者に人気だ。\nしかし彼氏の噂は全然聞かない。\n実は凄腕の冒険者でもあり模擬戦も\nこなす。', ['手加減してますよ', '掛かってきなさいっ', '実力を見せてください']],
  ['★1 ゴミ袋', 16, 150, 10, 20, 20, 20, ['沈黙'], '路地に放置されたゴミ袋。\n思ったより重い。\n変な臭いがする。\nはやく片付けよう。', ['……', '……', '……']],
  ['★1 木箱', 17, 180, 10, 20, 20, 20, ['沈黙'], '路地に放置された木箱。\nいろいろな不要物が入っている。\n思ったより重い。\n変な臭いがする。\nはやく片付けよう。', ['……', '……', '……']],
  ['★1 空きビン', 18, 120, 10, 20, 20, 20, ['沈黙'], '路地に放置されたビン。\n思ったより重い。\n変な臭いがする。\nはやく片付けよう。\nリサイクルできる。', ['……', '……', '……']],
  [],[],
  [],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],
  ['★0 雑草', 50, 80, 40, 20, 10, 10, ['沈黙'], 'どこにでも生えてくる雑草だ。\n雑草だけにすぐ伸びる。\n草刈りをしよう。', ['(サワサワ)…', '(そよそよ)…', '……']],
  ['★1 薬草', 51, 100, 30, 15, 10, 10, ['沈黙'], 'ポーションの材料になる薬草だ。\n薬草も強くすぐ伸びる。\n草刈りをしよう。', ['(ザワザワ)…', '(ゆらゆら)…', '……']],
  [],[],[],[],[],[],[],[],
  ['★5 オーガ', 60, 250, 30, 40, 40, 10, ['咆哮'], '中級モンスター大鬼だ。\n防御力やHPが高くなかなか手ごわい。', ['ウオオオオオ', 'グォオオ', 'グアアア']],
  ['★3 ウルフ', 61, 150, 50, 10, 30, 10, ['咆哮'], '魔獣の一種、狼だ。\n攻撃力が高くなかなか手ごわい。', ['ワオーン', 'キャンキャン', 'グルルル']],
  ['★2 ディア', 62, 100, 20, 10, 10, 40, ['回避'], '魔獣の一種、鹿だ。\n回避能力が高くなかなか手ごわい。', ['キャン', 'キャンキャン', 'キャンッ']],
  ['★4 ベア', 63, 200, 40, 30, 100, 10, ['必中'], '魔獣の一種、熊だ。\n巨体による強力な攻撃力だ。', ['グワアア', 'ウオオオオ', 'オオオオ']],
  ['★1 スライム', 64, 90, 30, 30, 20, 50, ['回避'], '初級モンスターだ。\n小さく回避力が高い。\nあらゆる場所に住んでいる。', ['ピュピュ', 'ミュムム', 'ポムポム']],
  ['★2 ラビット', 65, 140, 35, 10, 30, 30, ['回避'], '魔獣の一種、兎だ。\n小さいわりに攻撃力もある。\n草原に多く生息している。', ['ピチュ', 'ピッピッ', 'ピィィ']],
  ['★3 スネーク', 66, 210, 45, 10, 35, 20, ['巻きつく'], '魔獣の一種、蛇だ。\nその巨体は圧巻だ。\n森林に多く生息している。', ['ギャア', 'グギャ', 'ギイイ']],
  ['★3 ゴースト', 67, 150, 45, 10, 35, 20, [''], 'アンデッドの一種、幽霊。\nアンデッドの森に生息する。', ['(シューン)', '(ぽわぽわ)', '(シュッシュ)']],
  ['★3 ジャック', 68, 160, 45, 20, 35, 20, [''], 'ジャック・オ。ランタン。\nアンデッドの一種、カボチャのお化け。\nその巨体は圧巻だ。\nアンデッドの森に生息する。', ['クワァ', 'カカカ', 'ワッハハ']],
  ['★4 マミー', 69, 170, 45, 15, 35, 20, [''], 'アンデッドの一種、ミイラ。\n包帯巻きの死体。\nアンデッドの森に生息する。', ['', 'グギャ', 'ギイイ']],
  ['★4 スケルトン', 70, 180, 45, 10, 35, 20, [''], 'アンデッドの一種、骸骨(がいこつ)。\nアンデッドの森に生息する。', ['ガガガガ', 'ギャギャ', 'カタカタカタ']],
  ['★5 サンタ', 71, 250, 45, 30, 40, 20, ['2回攻撃'], 'サンタ・クロース。\nクリスマスに発生する。\n闇に落ちたサンタ。\nクリスマス箱を持ってくる。', ['ひゃほううう', 'メリー、クリスマス', 'いい子にしていたかな？']],
  ['★4 ブレッドマン', 72, 210, 45, 20, 35, 20, [''], 'ジンジャー・ブレッドマン。\nクリスマスに発生する。\n人型のクッキーだ。', ['美味しいよ', '甘いよ', '食べないでぇ']],
  ['★4 スノーマン', 73, 220, 45, 20, 40, 30, [''], '雪ダルマ。\n冬になるとやってくる。\n寒い、寒いよう。', ['ほっほっほー', 'ひっひっひー', 'らっらっらー']],
];
const battle_map_cards = [
  ['1-1.エルナ邸の裏庭(1)', ['薬草', 51],['雑草A', 50], ['雑草B', 50], ['雑草C', 50]],
  ['1-2.エルナ邸の裏庭(2)', ['薬草A', 51], ['薬草B', 51], ['雑草A', 50], ['雑草B', 50]],
  ['1-3.エルナ邸の裏庭(3)', ['エルナ', 2], ['薬草A', 51], ['薬草B', 51], ['薬草C', 51]],
  ['2-1.サーナ捜索(1)', ['木箱', 17], ['ゴミ袋A', 16], ['ゴミ袋B', 16], ['雑草', 50]],
  ['2-2.サーナ捜索(2)', ['木箱A', 17], ['木箱B', 17], ['ゴミ袋', 16], ['空きビン', 18]],
  ['2-3.サーナ捜索(3)', ['サーナ', 3], ['木箱', 17], ['ゴミ袋', 16], ['空きビン', 18]],
  ['3-1.裏路地(1)', ['スリ男子', 10], ['木箱', 17], ['ゴミ袋', 16], ['空きビン', 18]],
  ['3-2.裏路地(2)', ['スリ男子', 10], ['スリ女子', 11], ['茶犬', 7], ['白犬', 8]],
  ['3-3.裏路地(3)', ['スリ男', 12], ['スリ男子', 10], ['スリ女子', 11], ['白犬', 8]],
  ['4-1.草原探索(1)', ['スライムA', 64], ['スライムB', 64], ['スライムC', 64], ['スライムD', 64]],
  ['4-2.草原探索(2)', ['ラビットA', 65], ['ラビットB', 65], ['スライムA', 64], ['スライムB', 64]],
  ['4-3.草原探索(3)', ['ウルフ', 61], ['ラビットA', 65], ['ラビットB', 65], ['スライム', 64]],
  ['5-1.森探索(1)', ['ディアA', 62], ['ディアB', 62], ['ディアC', 62], ['ディアD', 62]],
  ['5-2.森探索(2)', ['ウルフA', 61], ['ウルフB', 61], ['ディアA', 62], ['ディアB', 62]],
  ['5-3.森探索(3)', ['オーガ', 60], ['ウルフA', 61], ['ウルフB', 61], ['ウルフC', 61]],
  ['6-1.ギルドの訓練', ['カカシA', 13], ['カカシB', 13], ['的A', 14], ['的B', 14]],
  ['6-2.ギルドの模擬戦', ['ミーナ', 15], ['カカシA', 13], ['カカシB', 13], ['的', 14]],
  ['7-1.アンデッドの森(1)', ['ゴースト', 67], ['ジャック', 68], ['マミー', 69], ['スネーク', 66]],
  ['7-2.アンデッドの森(2)', ['スケルトン', 70], ['ゴースト', 67], ['マミー', 69], ['ベア', 63]],
  ['7-3.ドッペルゲンガーの森', ['Dマリア', 1], ['Dエルナ', 2], ['Dサーナ', 3], ['ベア', 63]],
  ['8.クリスマス(終)', ['サンタ', 71], ['ディア', 62], ['ブレッドマン', 72], ['スノーマン', 73]],
];
const battle_map_chat = [
  /*'1-1.エルナ邸の裏庭(1)',*/ 'ここはエアイズ王国冒険者の国だ。\n私は「マリア」冒険者の剣士だよ。\nエルナちゃんちの裏庭の雑草抜きに\n参加した。\n中には薬草も生えている。\nちゃんと仕事ができたら冒険者の\nことも手伝ってくれるって。',
  /*'1-2.エルナ邸の裏庭(2)',*/ '思ったより雑草が多い。\n薬草は薬草で分けて採取していく。\nなかなかの重労働だ。\nはやくエルナちゃんと仲良くしたい。',
  /*'1-3.エルナ邸の裏庭(3)',*/ '魔法使いのエルナちゃんが仲間に\nなった！\nこれで猫ちゃん以外一人のときより\n多くの仕事ができる。',
  /*'2-1.サーナ捜索(1)',*/ '猫獣人のポーター、サーナちゃんを\n王都のストリートで探している。\nなかなか見つからない\nそこの猫ちゃん知らない？\nそれにしてもゴミでいっぱいだ。\n少しは片付けないと。',
  /*'2-2.サーナ捜索(2)',*/ 'ストリートには猫ちゃんワンちゃんが\nたくさん住んでいる。\nワンちゃんはちょっと怖い。\nゴミばっかりで大変だ。\nサーナちゃんはどこかな？',
  /*'2-3.サーナ捜索(3)',*/ 'ついにストリートでサーナちゃんを\n発見した。\n仲間に加わったよ。\nよろしくお願いします。',
  /*'3-1.王都裏路地(1)',*/ '裏路地を探索している。\nこの辺りは治安が悪いようだ。\nよくよく注意しよう。\n町の警備も冒険者の仕事だ。',
  /*'3-2.王都裏路地(2)',*/ 'スリの子供たちをよく見る。\n彼らはお腹を空かせている。\n背に腹は代えられぬ。\nでもダメなものはダメ。',
  /*'3-3.王都裏路地(3)',*/ 'スリを指導する男を発見。\n厳重注意をした。\n少しは治安がよくなればいいけれど。\n警備の仕事はひとまず終わり。\nお肉を食べに行こう。\nお肉お肉……。',
  /*'4-1.草原探索(1)',*/ 'まずは草原探索をする。\nスライムがたくさんいるね。\nすばしっこくて少し苦戦したかも。',
  /*'4-2.草原探索(2)',*/ '草原にはラビットも出てくる。\n白いウサギさんだ。\nお肉が美味しいよ。',
  /*'4-3.草原探索(3)',*/ '草原では稀にウルフもいる。\n攻撃力が強いから注意だよ。\n彼らは普段は森にいるんだ。',
  /*'5-1.西の森探索(1)',*/ '西の森にはディアがいる。\nキノコや薬草などもたくさん生えて\nいるよ。\n危険な魔物もいるんだ。',
  /*'5-2.西の森探索(2)',*/ '西の森でウルフとディアに遭遇。\nちょっと敵も強くなってきた。\n気合を入れて進もう。',
  /*'5-3.西の森探索(3)',*/ '西の森のボス「オーガ」と戦闘。\n怖い顔をしているね。\n体力が多くてびっくり。\n倒すことができてよかった。\n',
  /*'6-1.ギルドの訓練',*/ '冒険者ギルドで訓練をした。\nカカシと的を相手に戦闘だ。\n設置物だけど練習にはなる。\nいい汗をかいた。\nあとでお肉を食べて飲み食いしよう。',
  /*'6-2.ギルドの模擬戦',*/ '冒険者ギルドで模擬戦をした。\n受付嬢のミーナさんが相手をして\nくれた。\nとても強くてびっくりだ。\nなんとか勝てたからよかった。\nこの人には逆らわないようにしよう。\nさぁ今度こそお肉だお肉。',
  /*'7-1.アンデッドの森',*/ 'アンデッドの森で探索だ。\nなんだか怪しい雰囲気がしている。\n怖いモンスターは早く倒そう。',
  /*'7-2.アンデッドの森',*/ 'ハロウィンは楽しいけど、\nお化けは怖いよね。\nさらに奥へ進もう。',
  /*'7-3.ドッペルゲンガーの森',*/ '私たちの「ドッペルゲンガー」を\n倒した。\nそろそろ潮時だね。町へ戻ろう。',
  /*'8.クリスマス(終)',*/ 'メリー、クリスマス！！\n\nCongratulations!!\nおめでとうございます。\n第一章はこれでおしまいです。\n継続すると第一話に戻ります。',
];
let battele_data = {
  teki: [],
  mikata: []
};
const items_data = [
  ['★3 記念コイン', 58, ['なし', 0], 'クリア記念コイン。\nおめでとうございます。\nなにかいいことがありそう。\nヨハン16世即位記念金貨。'],
  ['★0 雑草', 50, ['回復', 40], 'HPを40回復する。\n戦闘不能時には効果がない。\nその辺に生えている葉っぱだ。'],
  ['★1 薬草', 51, ['回復', 80], 'HPを80回復する。\n戦闘不能時には効果がない。\n少し苦い葉っぱ。煎じて飲む。'],
  ['★2 低級ポーション', 52, ['回復', 120], 'HPを120回復する。\n戦闘不能時には効果がない。\n薬草を精製したもの。'],
  ['★3 中級ポーション', 53, ['回復', 160], 'HPを160回復する。\n戦闘不能時には効果がない。\n薬草をさらに精製したもの。'],
  ['★4 上級ポーション', 54, ['回復', 200], 'HPを200回復する。\n戦闘不能時には効果がない。\n特別な薬草を精製したもの。'],
  ['★2 巻物【雷】', 55, ['全体攻撃', 40], '40固定全体ダメージ。\n神の怒り雷撃を撃つ。\n「サンダー・バースト」'],
  ['★3 巻物【氷】', 56, ['全体攻撃', 80], '80固定全体ダメージ。\n絶対零度の氷結攻撃。\n「アイス・ストーム」'],
  ['★4 巻物【火】', 57, ['全体攻撃', 120], '120固定全体ダメージ。\n紅蓮の炎で焼き尽くす。\n「フレイム・インフェルノ」'],
  ['★1 リンゴ', 40, ['回復', 60], 'HPを60回復する。\n赤く熟しているリンゴ。\n美味しそうな、いい匂い。'],
  ['★5 黄金リンゴ', 41, ['蘇生', 100], 'HPを100回復する。\n戦闘不能から復帰する。\n見た目は普通だが珍しい黄金のリンゴ。'],
  ['★5 クリスマス箱', 42, ['蘇生', 120], 'HPを120回復する。\n戦闘不能から復帰する。\nメリー、クリスマス。\nクリスマス・ボックスだ。\nサンタさんからのプレゼント。'],
];
let click_on = -1;
let click_off = -1;
let click_x = 0;
let click_y = 0;
let seen_select = 0;
let sprites = [];

function draw() {
  background(240);
  fill(0);
  if (mouse.presses()) {
    if (0 <= mouse.x && mouse.x < width && 0 <= mouse.y && mouse.y < height) {
      if (-1 < click_off) {
        click_on = 0;
        click_off = -1;
        click_x = mouse.x;
        click_y = mouse.y;
      }
    }
  } else {
    click_off++;
    if (0 <= click_on) {
      click_off = 0;
      click_x = -1;
      click_y = -1;
    }
  }
  if (seen_select === 0) {
    if (0 < click_on && 59 <= click_on) {
      seen_select = 1;
    }
    draw_logo();
  } else if (seen_select === 1) {
    if (0 < click_on && 59 <= click_on) {
      seen_select = 2;
      setup_map();
    }
    draw_title();
  } else if (seen_select === 2) {
    draw_battle();
  }
  if (0 <= click_on) {
    click_on++;
    if (60 <= click_on) {
      click_on = -1;
    }
  }
  fill(240);
  strokeWeight(1);
  rect(0, 0, width, 20);
  rect(0, height - 20, width, 20);
  strokeWeight(0);
  fill(0);
  textSize(12);
  textAlign(LEFT);
  text('エアイズ王国：カードバトル v0.07.20231208', 30, 14);
  textAlign(CENTER);
  text('copyright 2023 syuribox, Aipictors', width / 2, height - 8);
}
let logo_count = 0;

function draw_logo() {
  background(0);
  logo_count++;
  if (logo_count <= 255 / 2) {
    fill(logo_count * 2);
    textSize(20);
    textAlign(CENTER);
    text('syuribox', width / 2, height / 2 - 20);
  } else if (logo_count <= 255) {
    fill(parseInt(Math.min(255, (logo_count - 255 / 2) * 2)));
    textSize(20);
    text('by Aipictors', width / 2, height / 2 + 20);
  } else {
    fill(255);
    textSize(15);
    text('please click', width / 2, height / 2);
    logo_count = 9999;
  }
}
let set_music = false;
let draw_title_count = 0;

function draw_title() {
  if (!set_music) {
    pre_song = 1;
    song[pre_song].loop();
    set_music = true;
  }
  textSize(35);
  textAlign(CENTER);
  let pos = 0;
  draw_title_count++;
  const move = 880;
  const t = draw_title_count / 8;
  if (t < move) {
    pos = t;
  } else if (t < move*2) {
    pos = move - (t - move);
  } else {
    draw_title_count = 0;
  }
  const height_per = height / img_title.height;
  image(img_title, 0, 0, width, height, pos, 0, img_title.width * height_per, img_title.height, CONTAIN);
  const w = width / 2;
  const h = height / 2;
  fill(0);
  stroke(255);
  strokeWeight(6);
  strokeJoin(ROUND);
  const title_text = 'エアイズ王国　\n　：カードバトル';
  fill(0);
  text(title_text, w, h);
  textSize(18);
  strokeWeight(3);
  text('[新規開始⇒⇒⇒]', width / 2, height - 120);
  text('※データは保存されません。', width / 2, height - 120 + 20);
  strokeWeight(0);
  stroke(0);
}
let mikata_data = ['', ['マリア', 1], ['黒猫', 4], ['白猫', 5], ['トラ猫', 6]];
let items = [[2, 3], [6, 1], [8, 1]];
let battle_map = 0;
let battle_mode = 0;
let battle_count = 0;
let battle_count2 = 0;
let turn_mode = true;
let effect_on = -1;
let effect_x = 0;
let effect_y = 0;
let hit_damages = [];
let attacker_old = -1
let att_count = 0;
let is_win = false;
let battle_text = '';
let item_scroll = 0;
let item_use_index = -1;
let item_mode = 0;
let mode_card_index = -1;
let pre_song = -1;

function setup_map() {
  battle_mode = 0;
  battle_count = 0;
  turn_mode = true;
  effect_on = -1;
  effect_x = 0;
  effect_y = 0;
  hit_damages = [];
  attacker_old = -1;
  att_count = 0;
  is_win = false;
  battle_text = '';
  item_scroll = 0;
  item_use_index = -1;
  item_mode = 0;
  mode_card_index = -1;
  let load_char = function (array) {
    const name = array[0];
    const cardid = array[1];
    return {
      name: name,
      imgid: card_base[cardid][1],
      max_hp: card_base[cardid][2],
      hp: card_base[cardid][2],
      attack: card_base[cardid][3],
      def: card_base[cardid][4],
      hit: card_base[cardid][5],
      agi: card_base[cardid][6],
      skill: card_base[cardid][7],
      add_y: 0,
      org: cardid
    };
  }
  let b = battle_map_cards[battle_map];
  battele_data.teki = [load_char(b[1]), load_char(b[2]), load_char(b[3]), load_char(b[4])];
  let m = mikata_data;
  battele_data.mikata = [load_char(m[1]), load_char(m[2]), load_char(m[3]), load_char(m[4])];
  img_bg = loadImage(bgimgs[battle_map][1]);
  if (0 < pre_song) {
    song[pre_song].stop();
  }
  pre_song = bgimgs[battle_map][0];
  song[pre_song].loop();
}

function draw_battle() {
  let d = battele_data;
  let if_rect = function (x, y, width, height) {
    return (x <= click_x && click_x < x + width && y <= click_y && click_y < y + height);
  }
  image(img_bg, 0, 0, width, height);
  textSize(20);
  textAlign(LEFT);
  fill(0);
  text('■' + battle_map_cards[battle_map][0], 10, 40);
  if (battle_mode != 100) {
    textSize(15);
    let draw_battele_card = function (card, x, y, hp) {
      const y_ = y + card.add_y;
      const size = (width - 20 - 2 * 3) / 4;
      textAlign(CENTER);
      text(card.name, x + size / 2, y);
      textAlign(LEFT);
      if (card.hp <= 0) {
        fill('red');
      } else {
        fill(0);
      }
      textSize(15);
      text('' + card.hp + '/' + card.max_hp, x, y + 20);
      fill(0);
      image(img_temp[card.imgid], x, y_ + 30, size, size);
      if (battle_mode == 0) {
        if (if_rect(x - 15, y_ + 30, size, size)) {
          mode_card_index = card.org;
          item_use_index = card.org;
          battle_mode = 7;
          click_on = -1;
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      let x_ = 10 + ((width - 20) / 4) * i;
      draw_battele_card(d.teki[i], x_, 60);
      draw_battele_card(d.mikata[i], x_, 200);
    }
  }
  if (battle_mode == 0) {
    textSize(16);
    textAlign(CENTER);
    fill(color(150, 170, 255));
    strokeWeight(1);
    const bw = ((width - 30) / 2);
    const bh = 45;
    const top1 = 360;
    const left2 = 10 + bw + 10;
    const top2 = top1 + bh + 5;
    rect(10, top1, bw, bh);
    rect(left2, top1, bw, bh);
    fill(color(150, 170, 255));
    rect(10, top2, bw, bh);
    fill(color(150, 170, 200));
    //    rect(left2, top2, bw, bh);
    strokeWeight(0);
    fill(50);
    text('[戦う]', width / 4, 385);
    text('[オート]', width / 4 * 3, 385);
    text('[アイテム]', width / 4, 435);
    //    text('[逃げる(未)]', width / 4 * 3, 570);
    const w = (width - 60) / 2;
    const h = 45;
    if (if_rect(10, top1, w, h)) {
      battle_mode = 1;
      battle_count2 = -1;
    }
    if (if_rect(left2, top1, w, h)) {
      battle_mode = 2;
    }
    if (if_rect(10, top2, w, h)) {
      click_on = -1;
      click_x = -1;
      click_y = -1;
      battle_mode = 4;
    }
    if (if_rect(left2, top2, w, h)) {
      //      battle_mode = 5;
    }
  }
  if (battle_mode == 99) {
    if (0 == battle_count) {
      if (0 < pre_song) {
        song[pre_song].stop();
      }
      if (is_win) {
        pre_song = 5; // you_win
        song[pre_song].loop();
      } else {
        pre_song = -1;
      }
    }
    if (0 <= battle_count) {
      battle_count++;
    }
    if (is_win && battle_count == 60) {
      if (reward[battle_map][1] == -1) {
        let z = reward[battle_map][2];
        let char_name = z[0];
        let card_idx = z[1];
        let char_idx = z[2];
        if (mikata_data[char_idx][1] != card_idx) {
          mikata_data[char_idx] = [char_name, card_idx];
          item_use_index = card_idx;
          mode_card_index = card_idx;
          battle_mode = 8;
        } else {
          let item_index = reward[battle_map][3];
          add_item(item_index);
          item_use_index = item_index;
          mode_card_index = items_data[item_index][1];
          battle_mode = 9;
        }
      } else if (reward[battle_map][1] == -2) {
        let item_index = random(reward[battle_map][2]);
        add_item(item_index);
        item_use_index = item_index;
        mode_card_index = items_data[item_index][1];
        battle_mode = 9;
      } else {
        let item_index = reward[battle_map][1];
        add_item(item_index);
        item_use_index = item_index;
        mode_card_index = items_data[item_index][1];
        battle_mode = 9;
      }
    }
    if (60 < battle_count) {
      battle_count = 9999;
    }
    if (battle_count == 9999) {
      textSize(20);
      textAlign(CENTER);
      fill(color(150, 170, 255));
      strokeWeight(1);
      rect(30, 370, width - 60, 70);
      strokeWeight(0);
      fill(50);
      text(is_win ? '[次へ]' : '[再戦]', width / 2, 410);
      if (if_rect(30, 385, width - 60, 70)) {
        if (is_win) {
          if (0 < pre_song) {
            song[pre_song].stop();
          }
          pre_song = bgimgs[battle_map][0];
          song[pre_song].loop();
          click_on = -1;
          battle_mode = 100;
          battle_count = 0;
        }
      }
    }
  } else if (battle_mode == 100) {
    if (battle_count < 30) {
      battle_count++;
    } else {
      if (0 <= click_on) {
        battle_map++;
        if (battle_map == battle_map_cards.length) { // 最後の面
          battle_map = 0; // とりあえずループ
        }
        battle_mode = 0;
        setup_map();
      }
    }
  }
  if (battle_mode == 1 || battle_mode == 2) {
    const turn_time = 60;
    let next = battle_count % turn_time;
    battle_count++;
    if (battle_mode == 1 && next == 0) {
      if (battle_count2 == -1) {
        battle_count2 = 0;
      } else if (!turn_mode && battle_count2 == 0) {
        battle_count2 = 1;
      } else if (turn_mode && battle_count2 == 1) {
        battle_mode = 0;
        next = -1;
      }
    }
    if (next == 0) {
      let have_skill = function (skill_list, name) {
        for (let i = 0; i < skill_list.length; i++) {
          if (skill_list[i] == name) {
            return true;
          }
        }
        return false;
      }
      let seme = turn_mode ? d.mikata : d.teki;
      let uke = turn_mode ? d.teki : d.mikata;
      let attacker = attacker_old;
      if (attacker == -1 || att_count == 0) {
        attacker = parseInt(random(0, 4));
        att_count = 1;
        if (have_skill(seme[attacker].skill, '2回攻撃')) {
          att_count = 2;
        }
      }
      while (seme[attacker].hp <= 0) {
        attacker = parseInt(random(0, 4));
        if (have_skill(seme[attacker].skill, '2回攻撃')) {
          att_count = 2;
        }
      }
      let kougeki = function () {
        let target = parseInt(random(0, 4));
        while (uke[target].hp <= 0) {
          target = parseInt(random(0, 4));
        }
        let a = seme[attacker];
        let t = uke[target];
        a.add_y = -10;
        t.add_y = 10;
        effect_on = 0;
        effect_x = 10 + (target + 1) * ((width - 20 - 6) / 4);
        effect_y = turn_mode ? 140 - 30 : 290 - 30;
        let damage = parseInt(Math.max(5, a.attack - t.def));
        let hit_base = 70 + (a.hit - t.agi) / 2;
        let hit_per = Math.max(10, Math.min(95, hit_base));
        let hit = parseInt(random(0, 100));
        let text_;
        let colors;
        if (hit < hit_per) {
          let hit_point = damage;
          if (hit <= 5) {
            // クリティカル
            hit_point *= 2;
          }
          t.hp = parseInt(Math.max(0, t.hp - hit_point));
          text_ = '-' + hit_point;
          colors = 'red';
          battle_text = a.name + 'の攻撃。\n';
          battle_text += '「' + random(card_base[a.org][9]) + '」\n';
          battle_text += t.name + 'に' + hit_point + 'のダメージ。\n';
          if (t.hp <= 0) {
            battle_text += t.name;
            if (turn_mode) {
              battle_text += 'を倒した。';
            } else {
              battle_text += 'は戦闘不能になった。';
            }
          }
        } else {
          text_ = 'miss';
          colors = '#bbb';
          battle_text = a.name + 'の攻撃。\n';
          battle_text += '「' + random(card_base[a.org][9]) + '」\n';
          battle_text += t.name + 'は回避した。\n';
        }
        let hit_anime = {
          x: (15 + ((width - 20) / 4) * target),
          y: turn_mode ? 140 : 290,
          text: text_,
          color: colors,
          countdown: 55
        };
        hit_damages.push(hit_anime);
        let seizon = false;
        for (let i = 0; i < uke.length; i++) {
          if (0 < uke[i].hp) {
            seizon = true;
            break;
          }
        }
        if (seizon == false) {
          return false;
        }
        return true;
      }
      if (kougeki()) {
        attacker_old = attacker;
        att_count--;
        if (att_count == 0) {
          turn_mode = !turn_mode;
        }
      } else {
        is_win = turn_mode;
        battle_mode = 99;
        battle_count = 0;
      }
    } else if (next == turn_time - 1) {
      battle_text = '';
      for (let i = 0; i < 4; i++) {
        d.teki[i].add_y = 0;
        d.mikata[i].add_y = 0;
      }
    }
    textSize(20);
    textAlign(LEFT);
    text(battle_text, 40, 350);
  } else if (battle_mode == 4) {
    // アイテム
    const view_limit = 4;
    if (item_mode == 0) {
      for (let i = 0; i < view_limit + 3; i++) {
        let text_str = '　　　▲';
        let count_str = '';
        let index = -1;
        let card_id = -1;
        if (i == 0) {
          if (item_scroll == 0) {
            fill(color(150, 170, 200));
          } else {
            fill(color(150, 170, 255));
          }
        } else if (i == view_limit + 1) {
          text_str = '　　　▼ (' + (item_scroll + 1) + ')';
          if ((item_scroll + 1) * view_limit < items.length) {
            fill(color(150, 170, 255));
          } else {
            fill(color(150, 170, 200));
          }
        } else if (i == view_limit + 2) {
          fill(color(150, 170, 255));
          text_str = '　キャンセル';
        } else {
          let count = item_scroll * view_limit + i - 1;
          if (count < items.length) {
            fill(color(150, 170, 255));
            index = items[count][0];
            text_str = items_data[index][0];
            count_str = '' + items[count][1];
            card_id = items_data[index][1];
          } else {
            index = -1;
            fill(color(150, 170, 200));
            text_str = '';
          }
        }
        let margin_x = 40;
        let margin_y = 40;
        let imgsize = 50;
        let height = imgsize + 6;
        let text_y = margin_x + height * i + height / 2
        strokeWeight(1);
        rect(margin_x, margin_y + height * i, width - margin_y * 2, height - 3);
        strokeWeight(0);
        fill(0);
        textAlign(LEFT);
        textSize(15);
        text(text_str, margin_y + imgsize + 5, text_y);
        textAlign(RIGHT);
        text(count_str, width - margin_y - 5, text_y);
        if (0 <= card_id) {
          image(img_temp[card_id], margin_x + 3, margin_y + height * i + 2, imgsize, imgsize);
        }
        let mode_card_view = false;
        let menu_index = -1;
        if (if_rect(margin_x, margin_y + height * i + 2, imgsize, imgsize)) {
          menu_index = i;
          if (0 <= index) {
            item_use_index = index;
            mode_card_index = card_id;
            mode_card_view = true;
          }
        } else if (if_rect(margin_x + imgsize + 4, margin_y + height * i, width - margin_y * 2, height)) {
          menu_index = i;
          if (0 <= index) {
            item_use_index = index;
            item_mode = 1; // アイテム選択
            battle_count = 0;
          }
        }
        if (menu_index == 0) {
          if (0 < item_scroll) {
            item_scroll--;
          }
        } else if (menu_index == view_limit + 1) {
          if ((item_scroll + 1) * view_limit < items.length) {
            item_scroll++;
          }
        } else if (menu_index == view_limit + 2) {
          // キャンセル
          battle_mode = 0;
          item_scroll = 0;
          item_use_index = -1;
          item_mode == 0;
        } else if (mode_card_view) {
          battle_mode = 6;
          click_on = -1;
        }
      }
    } else if (item_mode == 1) {
      battle_count++;
      if (battle_count == 1) {
        for (let i = 0; i < items.length; i++) {
          if (items[i][0] == item_use_index) {
            items[i][1]--;
            if (items[i][1] <= 0) {
              items.splice(i, 1);
              break;
            }
          }
        }
        let item = items_data[item_use_index];
        let is_teki = false;
        let colors = 'green';
        let text_ = '';
        for (let target = 0; target < 4; target++) {
          if (item[2][0] == '回復') {
            text_ = '+' + item[2][1];
            if (0 < d.mikata[target].hp) {
              d.mikata[target].hp = parseInt(Math.min(d.mikata[target].max_hp, d.mikata[target].hp + item[2][1]));
            } else {
              continue;
            }
          } else if (item[2][0] == '蘇生') {
            text_ = '+' + item[2][1];
            d.mikata[target].hp = parseInt(Math.min(d.mikata[target].max_hp, d.mikata[target].hp + item[2][1]));
          } else if (item[2][0] == '全体攻撃') {
            is_teki = true;
            colors = 'red';
            text_ = '-' + item[2][1];
            if (0 < d.teki[target].hp) {
              d.teki[target].hp = parseInt(Math.max(0, d.teki[target].hp - item[2][1]));
            } else {
              continue;
            }
          } else {
            break;
          }
          let hit_anime = {
            x: (15 + ((width - 20) / 4) * target),
            y: is_teki ? 140 : 290,
            text: text_,
            color: colors,
            countdown: 55
          };
          hit_damages.push(hit_anime);
        }
      }
      textSize(20);
      textAlign(LEFT);
      text(battle_text, 40, 350);
      if (70 < battle_count) {
        let hantei = function (turn_mode) {
          let uke = turn_mode ? d.teki : d.mikata;
          let seizon = false;
          for (let i = 0; i < uke.length; i++) {
            if (0 < uke[i].hp) {
              seizon = true;
              break;
            }
          }
          return seizon;
        }
        if (false == hantei(true)) {
          battle_mode = 99;
          is_win = true;
        } else if (false == hantei(false)) {
          battle_mode = 99;
          is_win = false;
        } else {
          battle_mode = 0;
        }
        battle_count = 0;
        item_mode = 0;
      }
    }
  } else if (6 <= battle_mode && battle_mode <= 9) {
    // カード閲覧
    if (mode_card_index < 0) {
      if (battle_mode == 6) {
        battle_mode = 4;
      } else if (battle_mode == 7) {
        battle_mode = 0;
      } else {
        battle_mode = 99;
      }
    } else {
      let card_type = 0;
      if (battle_mode == 6) {
        card_type = 0;
      } else if (battle_mode == 7) {
        card_type = 1;
      } else if (battle_mode == 8) {
        card_type = 1;
      } else if (battle_mode == 9) {
        card_type = 0;
      }
      const base_h = height - 50;
      const base_w = parseInt(base_h / 1.5);
      const ratio = base_w / 640;
      const base_x = (width - base_w) / 2;
      const base_y = (height - base_h) / 2;
      image(img_card[card_type], base_x, base_y, base_w, base_h);
      image(img_temp[mode_card_index], base_x + 64 * ratio, base_y + 105 * ratio, 512 * ratio, 512 * ratio);
      let title = '';
      if (card_type == 0) {
        title = items_data[item_use_index][0];
        caption = items_data[item_use_index][3];
      } else {
        title = card_base[item_use_index][0];
        caption = card_base[item_use_index][8];
      }
      fill(0);
      textAlign(LEFT);
      textSize(13);
      text(title, base_x + 70 * ratio, base_y + 62 * ratio);
      textSize(12);
      text(caption, base_x + 70 * ratio, base_y + 668 * ratio);
    }
    if (0 <= click_on) {
      if (battle_mode == 6) {
        battle_mode = 4;
        menu_index = -1;
        mode_card_index = -1;
        item_use_index = -1;
      } else if (battle_mode == 7) {
        battle_mode = 0;
      } else {
        battle_mode = 99;
      }
    }
  } else if (battle_mode == 99) {
    textSize(80);
    textAlign(CENTER);
    let text_win;
    let text_fill;
    if (is_win) {
      text_fill = 'red';
      text_win = 'WIN!';
    } else {
      text_fill = '#777';
      text_win = 'LOSE!';
    }
    text_futi(text_win, width / 2, height / 2, text_fill, 0, 3);
  } else if (battle_mode == 100) {
    if (battle_map == battle_map_chat.length - 1) {
      image(img_end, 0, (height / 2), width, height / 2, 0, 0, img_end.width, img_end.height, CONTAIN);
    }
    textSize(15);
    textAlign(LEFT);
    text_futi(battle_map_chat[battle_map], (width / 2) - 120, 90, 0, 255);
  }
  draw_battle_splite();
}

function add_item(item_no) {
  for (let i = 0; i < items.length; i++) {
    if (items[i][0] == item_no) {
      items[i][1]++;
      return;
    }
  }
  items.push([item_no, 1]);
}

function draw_battle_splite() {
  if (effect_on === 0) {
    new_damege_effect(0, effect_x, effect_y, 10);
  }
  if (effect_on === 2) {
    new_damege_effect(1, effect_x, effect_y, 8);
  }
  if (effect_on === 4) {
    new_damege_effect(2, effect_x, effect_y, 6);
  }
  if (effect_on === 6) {
    new_damege_effect(3, effect_x, effect_y, 4);
  }
  if (effect_on === 8) {
    new_damege_effect(4, effect_x, effect_y, 2);
  }
  for (let i = 0; i < sprites.length; i++) {
    if (0 <= sprites[i].my_count) {
      sprites[i].my_count++;
    }
    if (16 <= sprites[i].my_count) {
      sprites[i].x = 9999;
      sprites[i].y = 9999;
      sprites[i].my_count = -1;
    }
  }
  if (0 <= effect_on) {
    effect_on++;
    if (12 < effect_on) {
      effect_on = -1;
    }
  }
  for (let hit = 0; hit < hit_damages.length; hit++) {
    h = hit_damages[hit];
    textSize(30);
    textAlign(LEFT);
    text_futi(h.text, h.x, h.y, h.color, 0, 3);
    h.countdown--;
    if (h.countdown < 0) {
      hit_damages.splice(hit, 1);
      hit--;
    }
  }
}

function new_damege_effect(no, x, y, size) {
  let sprite = new Sprite(x, y, 30, 30);
  sprite.color = 'red';
  sprite.diameter = size;
  sprite.vel.x = -3;
  sprite.vel.y = 4;
  sprite.my_count = 0;
  sprites[no] = sprite;
}

function text_futi(str, x, y, color_str, color_futi, bold_size = 1) {
  fill(color_str);
  stroke(color_futi);
  strokeWeight(bold_size);
  text(str, x, y);
  strokeWeight(0);
  stroke(0);
}
