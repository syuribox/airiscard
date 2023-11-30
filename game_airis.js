function setup() {
  new Canvas(480, 640);
}
let img_title;
let img_temp = [];
let img_card = [];
let img_end;
function preload() {
  img_title = loadImage('./img/title.png');
  img_end      = loadImage('./img/end.png');
  img_temp[1]  = loadImage('./img/001_maria.png');
  img_temp[2]  = loadImage('./img/002_enal.png');
  img_temp[3]  = loadImage('./img/003_sarna.png');
  img_temp[4]  = loadImage('./img/004_black_cat.png');
  img_temp[5]  = loadImage('./img/005_white_cat.png');
  img_temp[6]  = loadImage('./img/006_orange_cat.png');
  img_temp[7]  = loadImage('./img/007_orange_dog.png');
  img_temp[8]  = loadImage('./img/008_white_dog.png');
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
  img_card[0]  = loadImage('./img/card_base_green.png');
  img_card[1]  = loadImage('./img/card_base_red');
};
const card_base = [
//name,    img, _hp, at, def,hit agi skill
  [],
  ['マリア', 1, 200, 50, 30, 20, 10, ['2回攻撃'], '剣士「マリア・ファイアランス」\nパーティー「レッドキャッツ」のリー\nダーを務める。'],
  ['エルナ', 2, 150, 70, 15, 20, 10, ['ファイアボール'], '魔法使い「エナル・ブルーサファイア」\nパーティー「レッドキャッツ」のメン\nバー。【青髪の魔女】の二つ名を持つ。'],
  ['サーナ', 3, 180, 60, 20, 20, 10, ['アロー'], '弓使い「サーナ・ゴールドラッシュ」\nパーティー「レッドキャッツ」のポー\nター。【期待の猫娘】と呼ばれている。'],
  ['黒猫',   4, 110, 40, 15, 10, 20, ['爪攻撃'], '黒い猫ちゃんだ。かわいい。'],
  ['白猫',   5, 100, 50, 15, 10, 20, ['爪攻撃'], '白い猫ちゃんだ。かわいい。'],
  ['トラ猫', 6, 100, 40, 25, 10, 20, ['爪攻撃'], 'トラ猫ちゃんだ。かわいい。'],
  ['茶犬',   7, 110, 40, 25, 15, 15, ['爪攻撃'], '茶色いワンちゃんだ。かわいい。'],
  ['白犬',   8, 120, 40, 25, 15, 15, ['爪攻撃'], '白いワンちゃんだ。かわいい。'],
  [],[],
  [],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],
  ['雑草',   50,  80, 40, 20, 10, 10, [], 'どこにでも生えてくる雑草だ。\n草刈りをしよう。'],
  ['薬草',   51, 100, 30, 15, 10, 10, [], 'ポーションの材料になる薬草だ。\n草刈りをしよう。'],
  [],[],[],[],[],[],[],[],
  ['オーガ', 60, 150, 30, 40, 20, 10, ['咆哮'], '中級モンスターだ。\n防御力やHPが高くなかなか手ごわい。'],
];
const battle_map_cards = [
  ['1-1.エルナ邸の裏庭(1)', ['薬草', 51], ['雑草A', 50], ['雑草B', 50], ['雑草C', 50]],
  ['1-2.エルナ邸の裏庭(2)', ['薬草A', 51], ['薬草B', 51], ['雑草A', 50], ['雑草B', 50]],
  ['1-3.エルナ邸の裏庭(3)', ['エルナ', 2], ['薬草A', 51], ['薬草B', 51], ['薬草C', 51]],
  ['2-1.サーナ捜索(1)', ['黒猫', 4], ['白猫', 5], ['トラ猫', 6], ['茶犬', 7]],
  ['2-2.サーナ捜索(2)', ['黒猫', 4], ['白猫', 5], ['茶犬', 7], ['白犬', 8]],
  ['2-3.サーナ捜索(3)', ['サーナ', 3], ['黒猫', 4], ['茶犬', 7], ['白犬', 8]],
  ['3.ドッペルゲンガー', ['Dマリア', 1], ['Dエルナ', 2], ['Dサーナ', 3], ['黒猫', 4]],
  ['4.オーガ(ボス)', ['オーガA', 60], ['オーガB', 60], ['オーガC', 60], ['オーガD', 60]],
];
let battele_data = {
  teki: [{name:'薬草Lv1', imgid:51,  max_hp: 200, hp:200, attack:50, def:20, hit:10, agi:10, skill: ['2回攻撃'], add_y:0, org:-1},
           {name:'雑草ALv1', imgid:50, max_hp: 80, hp:80, attack:40, def:15, hit:10, agi:20, skill: ['爪攻撃'],  add_y:0, org:-1},
           {name:'雑草BLv1', imgid:50, max_hp: 80, hp:80, attack:40, def:15, hit:10, agi:20, skill: ['爪攻撃'],  add_y:0, org:-1},
           {name:'雑草CLv1', imgid:50, max_hp: 80, hp:80, attack:40, def:15, hit:10, skill: ['爪攻撃'],  agi:20, add_y:0, org:-1},],
  mikata: [{name:'マリアLv1', imgid:1, max_hp: 200, hp:200, attack:50, def:20, hit:10, agi:10, skill: ['2回攻撃'], add_y:0, org:-1},
           {name:'黒猫Lv1', imgid:4, max_hp: 80, hp:80, attack:40, def:15, hit:10, agi:20, skill: ['爪攻撃'],  add_y:0, org:-1},
           {name:'白猫Lv1', imgid:5, max_hp: 80, hp:80, attack:40, def:15, hit:10, agi:20, skill: ['爪攻撃'],  add_y:0, org:-1},
           {name:'トラ猫Lv1', imgid:6, max_hp: 80, hp:80, attack:40, def:15, hit:10, skill: ['爪攻撃'],  agi:20, add_y:0, org:-1},]
}
const items_data = [
  ['記念コイン', 58, 0, 'クリア記念コイン。'],
  ['雑草', 50, 40, 'HPを40回復する。'],
  ['薬草', 51, 80, 'HPを80回復する。'],
  ['低級ポーション', 52, 120, 'HPを120回復する。'],
  ['中級ポーション', 53, 160, 'HPを160回復する。'],
  ['上級ポーション', 54, 200, 'HPを200回復する。'],
  ['スクロール【雷】', 55,  40, '40固定全体ダメージ。'],
  ['スクロール【氷】', 56,  80, '80固定全体ダメージ。'],
  ['スクロール【火】', 57, 120, '120固定全体ダメージ。'],
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
    if (0 <= mouse.x && mouse.x < width &&
       0 <= mouse.y && mouse.y < height) {
      if (-1 < click_off) {
        click_on = 0;
        click_off = -1;
        click_x = mouse.x;
        click_y = mouse.y;
      }
    }
  }else{
    click_off++;
    if (0 <= click_on){
      click_off = 0; 
      click_x = -1;
      click_y = -1;
    }
  }
  if (seen_select === 0) {
    if (0 < click_on && 59 <= click_on) {
      seen_select = 1;
      setup_map();
    }
    draw_title();
  } else if (seen_select === 1) {
    draw_battle();
  }
  if (0 <= click_on) {
    click_on++;
    if (60 <= click_on) {
      click_on = -1;
    }
  }
  fill(240);
  rect(0,0, width, 20);
  rect(0, height - 20, width, 20);
  fill(0);
  textSize(12);
  textAlign(LEFT);
  text('エアイズ王国：カートバトル v0.01', 30, 14);
  textAlign(CENTER);
  text('copyright 2023 syuribox, Aipictors', width / 2, height - 8);
}

function draw_title(){
  textSize(48);
  textAlign(CENTER);
  image(img_title, 0, 15, width, height - 20, 0, 0, img_title.width, img_title.height, CONTAIN);
  const w = width / 2;
  const h = height / 2;
  fill(255);
  text('エアイズ王国　\n　　：カートバトル', w -1, h -1);
  text('エアイズ王国　\n　　：カートバトル', w -1, h -0);
  text('エアイズ王国　\n　　：カートバトル', w -1, h +1);
  text('エアイズ王国　\n　　：カートバトル', w +0, h -1);
  text('エアイズ王国　\n　　：カートバトル', w +0, h +1);
  text('エアイズ王国　\n　　：カートバトル', w +1, h -1);
  text('エアイズ王国　\n　　：カートバトル', w +1, h +0);
  text('エアイズ王国　\n　　：カートバトル', w +1, h +1);
  text('エアイズ王国　\n　　：カートバトル', w +0, h +2);
  text('エアイズ王国　\n　　：カートバトル', w +1, h +2);
  text('エアイズ王国　\n　　：カートバトル', w +2, h +1);
  text('エアイズ王国　\n　　：カートバトル', w +2, h +2);
  text('エアイズ王国　\n　　：カートバトル', w +2, h +1);
  text('エアイズ王国　\n　　：カートバトル', w +2, h +0);
  fill(0);
  text('エアイズ王国　\n　　：カードバトル', w, h);
}
let mikata_data = ['', ['マリア', 1], ['黒猫', 4], ['白猫', 5], ['トラ猫', 6]];
let items = [[2,3]];
let battle_map = 0;
let battle_mode = 0;
let battle_count = 0;
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
let mode_card_index = -1;
function setup_map(){
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
  mode_card_index = -1;
  let load_char = function(array){
    const name = array[0];
    const cardid = array[1];
    return {
      name:name, imgid:card_base[cardid][1],
      max_hp:card_base[cardid][2], hp:card_base[cardid][2],
      attack:card_base[cardid][3], def:card_base[cardid][4],
      hit:card_base[cardid][5], agi:card_base[cardid][6],
      skill: card_base[cardid][7], add_y:0, org:cardid};
  }
  let b = battle_map_cards[battle_map];
  battele_data.teki = 
    [load_char(b[1]), load_char(b[2]), load_char(b[3]), load_char(b[4])];
  let m = mikata_data;
  battele_data.mikata = 
    [load_char(m[1]), load_char(m[2]), load_char(m[3]), load_char(m[4])];
}
function draw_battle(){
  let d = battele_data;
  let if_rect = function(x, y, width, height) {
    return (x <= click_x && click_x < x + width &&
      y <= click_y && click_y < y + height);
  }
  if( battle_mode != 100) {
    textSize(20);
    textAlign(LEFT);
    fill(0);
    text('■' + battle_map_cards[battle_map][0], 10, 40);
    textSize(15);
    let draw_battele_card = function(card, x, y, hp) {
      const y_ = y + card.add_y;
      textAlign(CENTER);
      text(card.name, x + 30, y);
      textAlign(LEFT);
      if (card.hp <= 0) {
        fill('red');
      }else{
        fill(0);
      }
      text('HP：' + card.hp + '/' + card.max_hp, x - 20, y + 20);
      fill(0);
      image(img_temp[card.imgid], x - 28, y_ + 40, 96, 96);
      if (battle_mode == 0){
        if( if_rect(x - 28, y_ + 40, 96, 96)) {
          mode_card_index = card.org;
          item_use_index = card.org;
          battle_mode = 7;
          click_on = -1;
        }
      }
    }
    draw_battele_card(d.teki[0], 60, 60);
    draw_battele_card(d.teki[1], 160, 60);
    draw_battele_card(d.teki[2], 260, 60);
    draw_battele_card(d.teki[3], 360, 60);
    draw_battele_card(d.mikata[0], 60, 270);
    draw_battele_card(d.mikata[1], 160, 270);
    draw_battele_card(d.mikata[2], 260, 270);
    draw_battele_card(d.mikata[3], 360, 270);
  }
  if (battle_mode == 0) {
    textSize(20);
    textAlign(CENTER);
    fill(color(150,170,255));
    rect(20, 460, 200, 70);
    fill(color(150,170,200));
    rect(260, 460, 200, 70);
    fill(color(150,170,255));
    rect(20, 540, 200, 70);
    fill(color(150,170,200));
    rect(260, 540, 200, 70);
    fill(50);
    text('[戦う]', 120, 500);
    text('[必殺技(未)]', 360, 500);
    text('[アイテム](閲覧)', 120, 580);
    text('[逃げる(未)]', 360, 580);
    if( if_rect(20, 460, 200, 70)) {
      battle_mode = 2;
    }
    if( if_rect(260, 460, 200, 70)) {
//      battle_mode = 3;
    }
    if( if_rect(20, 540, 200, 70)) {
      battle_mode = 4;
    }
    if( if_rect(260, 540, 200, 70)) {
//      battle_mode = 5;
    }
  }
  if (battle_mode == 99) {
    textSize(20);
    textAlign(CENTER);
    fill(color(150,170,255));
    rect(260, 540, 200, 70);
    fill(50);
    if (is_win && battle_count == 0) {
      battle_count = 1;
      const reward = [
        [1, 1],
        [2, 2],
        [3,-1, [['エルナ', 2], 2], 0],
        [4,-2, [2, 2, 6]],
        [4,-2, [2, 6, 7, 8]],
        [6,-1, [['サーナ', 3], 3], 0],
        [7,-2, [6,7,8]],
        [8, 0],
      ];
      if (reward[battle_map][1] == -1){
        let z = reward[battle_map][2];
        let charc = z[0];
        let name = charc[1];
        let char_idx = z[1];
        if (mikata_data[char_idx][1] != name){
          mikata_data[char_idx] = charc;
          item_use_index  = char_idx;
          mode_card_index =char_idx;
          battle_mode = 8;
        }else{
          let item_index = reward[battle_map][4];
          add_item(item_index);
          item_use_index  = item_index;
          mode_card_index = items_data[item_index][1];
          battle_mode = 9;
        }
      } else if(reward[battle_map][1] == -2){
        let item_index = random(reward[battle_map][2]);
        add_item(item_index);
        item_use_index  = item_index;
        mode_card_index = items_data[item_index][1];
        battle_mode = 9;
      } else {
        let item_index = reward[battle_map][1];
        add_item(item_index);
        item_use_index  = item_index;
        mode_card_index = items_data[item_index][1];
        battle_mode = 9;
      }
    }
    text(is_win ? '[次へ]' : '[再戦]', 360, 580);
    if (if_rect(260, 540, 200, 70)) {
      if (is_win) {
        battle_map++;
        if(battle_map == 8){
          battle_map = 0; // とりあえずループ
          battle_mode = 100;
        }
      }
      setup_map();
    }
  } else if (battle_mode == 100) {
    if(0 <= click_on){
      battle_mode = 0;
    }
  }
  if (battle_mode == 2) {
    const turn_time = 60;
    let next = battle_count % turn_time;
    battle_count++;
    if (next == 0) {
      let have_skill = function(skill_list, name){
        for(let i = 0; i < skill_list.length; i++){
          if(skill_list[i] == name){
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
        if(have_skill(seme[attacker].skill, '2回攻撃')) {
          att_count = 2;
        }
      }
      while (seme[attacker].hp <= 0) {
        attacker = parseInt(random(0, 4));
        if(have_skill(seme[attacker].skill, '2回攻撃')) {
          att_count = 2;
        }
      }
      let kougeki = function() {
        let target = parseInt(random(0,4));
        while(uke[target].hp <= 0){
          target = parseInt(random(0,4));
        }
        let a = seme[attacker];
        let t = uke[target];
        a.add_y = -10;
        t.add_y = 10;
        effect_on = 0;
        effect_x = 80 + target * 100;
        effect_y = turn_mode ? 110 : 320;
        let damage = parseInt(Math.max(5, a.attack - t.def));
        let hit_base = 70 + (a.hit - t.agi) / 2;
        let hit_per = Math.max(10, Math.min(95, hit_base));
        let hit = parseInt(random(0, 100));
        let text;
        let colors;
        if( hit < hit_per ){
          let hit_point = damage;
          if (hit <= 5){
            // クリティカル
            hit_point *= 2;
          }
          t.hp = parseInt(Math.max(0, t.hp - hit_point));
          text = '-' + hit_point;
          colors = 'red';
          battale_text = a.name + 'の攻撃。\n' + t.name + 'に' + hit_point + 'のダメージ。\n';
          if(t.hp <= 0){
            battale_text += t.name; 
            if(turn_mode){
              battale_text +=  'を倒した。';
            }else{
              battale_text +=  'は戦闘不能になった。';
            }
          }
        }else{
          text = 'miss';
          colors = '#777';
          battale_text = a.name + 'の攻撃。\n' + t.name + 'は回避した。\n';
        }
        let hit_anime = {
          x: 50 + target * 100,
          y:turn_mode ? 140: 350,
          text:text,
          color:colors,
          countdown:55
        };
        hit_damages.push(hit_anime);
        let seizon = false;
        for (let i = 0; i < uke.length; i++) {
          if (0 < uke[i].hp) {
            seizon = true;
            break;
          }
        }
        if (seizon == false){
          return false;
        }
        return true;
      }
      if(kougeki()){
        attacker_old = attacker;
        att_count--;
        if(att_count == 0){
          turn_mode = !turn_mode;
        }
      }else{
        is_win = turn_mode;
        battle_mode = 99;
        battle_count = 0;
      }
    } else if( next == turn_time - 1) {
      battale_text = '';
      for (let i = 0; i < 4; i++) {
        d.teki[i].add_y = 0;
        d.mikata[i].add_y = 0;
      }
    }
    textSize(20);
    textAlign(LEFT);
    text(battale_text, 40, 500);
  } else if (battle_mode == 4) {
    // アイテム
    const view_limit = 4; 
    for (let i = 0; i < view_limit + 3; i++){
      let text_str = '　　　▲';
      let count_str = '';
      let index = -1;
      let card_id = -1;
      if(i == 0){
        if(item_scroll == 0){
          fill(color(150,170,200));
        }else{
          fill(color(150,170,255));
        }
      } else if (i == view_limit + 1){
        text_str = '　　　▼';
        if((items.length <= item_scroll + 1) * view_limit){
          fill(color(150,170,200));
        }else{
          fill(color(150,170,255));
        }
      } else if (i == view_limit + 2){
        fill(color(150,170,255));
        text_str = '　　キャンセル';
      } else {
        let count = item_scroll * view_limit + i - 1;
        if(count < items.length){
          fill(color(150,170,255));
          index = items[count][0];
          text_str = items_data[index][0];
          count_str = '' + items[count][1];
          card_id = items_data[index][1];
        }else{
          fill(color(150,170,200));
          text_str = '';
        }
      }
      rect(45, 100 + 60 * i, width - 90, 55);
      fill(0);
      textAlign(LEFT);
      textSize(20);
      text(text_str, 105, 100 + 60 * i + 30);
      textAlign(RIGHT);
      text(count_str, width - 50, 100 + 60 * i + 30);
      if (0 <= card_id) {
        image(img_temp[card_id], 50, 100 + 60 * i + 2, 55, 50);
      }
      let mode_card_view = false;
      let menu_index = -1;
      if( if_rect(50, 100 + 60 * i, 50, 50)) {
        menu_index = i;
        item_use_index = index;
        mode_card_index = card_id;
        mode_card_view = true;
      }
      if( if_rect(100, 100 + 60 * i, width - 90, 50)) {
        menu_index = i;
        item_use_index = index;
      }
      if( menu_index == view_limit + 2) {
        // キャンセル
        battle_mode = 0;
        items_scroll = 0;
        item_use_index = -1;
      }else if (mode_card_view) {
        battle_mode = 6;
        click_on = -1;
      }
    }
  } else if (6 <= battle_mode && battle_mode <= 9) {
    // カード閲覧
    if (mode_card_index < 0) {
      if (battle_mode == 6){
        battle_mode = 4;
      } else if(battle_mode == 7) {
        battle_mode = 0;
      } else{
        battle_mode = 99;
      }
    }else{
      let card_type = 0;
      if (battle_mode == 6){
        card_type = 0;
      } else if(battle_mode == 7) {
        card_type = 1;
      } else if(battle_mode == 8) {
        card_type = 1;
      } else if(battle_mode == 9) {
        card_type = 0;
      }
      const base_w = 350;
      const base_h = base_w * 1.5;
      const ratio = base_w / 640;
      const base_x = (width - base_w) / 2;
      const base_y = (height - base_h) / 2;
      image(img_card[card_type], base_x, base_y, base_w, base_h);
      image(img_temp[mode_card_index], base_x + 64 * ratio, base_y + 105 * ratio, 512 * ratio, 512 * ratio);
      fill(0);
      textAlign(LEFT);
      let title = '';
      if (card_type == 0){
        title= items_data[item_use_index][0];
        caption = items_data[item_use_index][3];
      }else{
        title = card_base[item_use_index][0];
        caption = card_base[item_use_index][8];
      }
      text(title, base_x + 70 * ratio, base_y + 62 * ratio);
      text(caption, base_x + 70 * ratio, base_y + 668 * ratio);
    }
    if (0 <= click_on) {
      if (battle_mode == 6){
        battle_mode = 4;
      } else if(battle_mode == 7) {
        battle_mode = 0;
      } else{
        battle_mode = 99;
      }
    }
  }else if (battle_mode == 99) {
    textSize(80);
    textAlign(CENTER);
    let text_win;
    let text_fill;
    if(is_win){
      text_fill = 'red';
      text_win = 'WIN!';
    }else{
      text_fill = '#777';
      text_win = 'LOSE!';
    }
    text_futi(text_win, width / 2, height / 2, text_fill, 0);
  }else if( battle_mode == 100 ){
    img(img_end, 0, 30, width, height - 60, 0, 0, img_end.width, img_end.width, CONTAIN);
  }
  draw_battle_splite();
}

function add_item(item_no){
  for(let i = 0; i < items.length; i++){
    if (items[i][0] == item_no){
      items[i][1]++;
      return;
    }
  }
  items.push([item_no, 1]);
}

function draw_battle_splite(){
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
    if (0 <= sprites[i].my_count){
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
    if(12 < effect_on){
      effect_on = -1;
    }
  }
  for(let hit = 0; hit < hit_damages.length; hit++){
    h = hit_damages[hit];
    textSize(30);
    textAlign(LEFT);
    text_futi(h.text, h.x, h.y, h.color, 0);
    h.countdown--;
    if(h.countdown < 0){
      hit_damages.splice(hit, 1);
      hit--;
    }
  }
}

function new_damege_effect(no, x, y, size){
  let sprite = new Sprite(x, y, 30, 30);
  sprite.color = 'red';
  sprite.diameter = size;
  sprite.vel.x = -3;
  sprite.vel.y = 4;
  sprite.my_count = 0;
  sprites[no] = sprite;
}

function text_futi(str, x, y, color_str, color_futi){
    fill(color_futi);
    text(str, x-1, y-1);
    text(str, x+1, y-1);
    text(str, x-1, y+1);
    text(str, x+1, y+1);
    fill(color_str);
    text(str, x, y);
}