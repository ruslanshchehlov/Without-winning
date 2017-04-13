/*<script type="text/javascript">
 //Определение рисунков
 var k=new Image(); k.src="cross.gif";
 var n=new Image(); n.src="null.gif";
 var e=new Image(); e.src="empty.gif";

 var step=0; //Номер хода (1-5)
 var userpos=0;  //Клетка, занятая юзером
 var t=new Array(9); //Буфер для поля
 var win=0; //Побед компа
 var draw=0; //Ничьих
 var begin=0; //Метка обновления поля

 function start(compwin) { //Начало игры
  if (compwin) { win++; document.getElementById('score').innerHTML = "Вы проиграли"; }
  else { draw++; document.getElementById('score').innerHTML = "Ничья"; }
  document.getElementById('score').innerHTML += '. Общий счёт '+win+':'+draw+':0';
  begin=1;
  step=userpos=0;
 }

 function click (b) { //Клик по клетке b (0-9) :)
  if (begin) { for (var i=0; i<9; i++) document.images['pos'+i].src=e.src; begin=0; return; }
  document.getElementById('score').innerHTML = 'Играем. Общий счёт '+win+':'+draw+':0';
  if ((document.images['pos'+b].src==k.src) || (document.images['pos'+b].src==n.src)) return; //Занято тут!
  step++;
  document.images['pos'+b].src=k.src;
  userpos=b;
  test();
 }

 function rand() { //Случайное число 0-8 (без аргументов) или из списка
  if (arguments.length>0)return arguments[Math.floor(Math.random()*arguments.length)];
  else return Math.floor(Math.random()*9);
 }

 function test() { //Основная функция
  if (step==1) {
   if (document.images['pos4'].src==k.src) { //Лох занял центр на 1 шаге
    document.images['pos'+rand(0,2,6,8)].src=n.src; //Тогда случайненько из угловых
   }
   else { //Лох не занял центр - занять
    document.images['pos4'].src=n.src;
   }
  } //1
  else if (step==2) {
   if (document.images['pos4'].src==k.src) {
    b2=userpos-8; if(b2<0) b2=-b2;
    if(document.images['pos'+b2].src!==n.src) document.images['pos'+b2].src=n.src;
    else {
     if (document.images['pos0'].src==e.src) b2=0;
     else {
      if (rand()>5) b2=2; else b2=6;
     }
     document.images['pos'+b2].src=n.src
    }
   }
   else if (document.images[4].src==n.src) {
    if (testAll()==0) {
     if(testNols()!=1) {
      if(t[0]==e.src) document.images['pos0'].src=n.src;
      else {
       if(t[2]==e.src) document.images['pos2'].src=n.src;
       else {
        if(t[6]==e.src) document.images['pos6'].src=n.src;
        else {
         if(t[8]==e.src) document.images['pos8'].src=n.src;
        }
       }
      }
     }
    }
   }
  } //2
  else if (step==3) { //3
   if (document.images['pos4'].src==k.src) {
    if (testWin()==1) start(1);
    else {
     b3=userpos-8; if(b3<0) b3*=-1;
     if (document.images['pos'+b3].src==e.src) document.images['pos'+b3].src=n.src;
     else {
      if (document.images['pos0'].src==e.src) document.images['pos0'].src=n.src;
      else {
       if (document.images['pos2'].src==e.src) document.images['pos2'].src=n.src;
       else {
        if (document.images['pos6'].src==e.src) document.images['pos6'].src=n.src;
        else {
         if (document.images['pos8'].src==e.src) document.images['pos8'].src=n.src;
        }
       }
      }
     }
    }
   }
   else if (document.images['pos4'].src==n.src) {
    if (testWin()==1) start(1);
    else {
     if (testAll()==0) {
      if (document.images['pos8'].src==e.src) document.images['pos8'].src=n.src;
      else {
       if (document.images['pos6'].src==e.src) document.images['pos6'].src=n.src;
       else {
        if (document.images['pos2'].src==e.src) document.images['pos2'].src=n.src;
        else {
         if (document.images['pos0'].src==e.src) document.images['pos0'].src=n.src;
         else {
          if (document.images['pos1'].src==e.src) document.images['pos1'].src=n.src;
          else {
           if (document.images['pos3'].src==e.src) document.images['pos3'].src=n.src;
           else {
            if (document.images['pos5'].src==e.src) document.images['pos5'].src=n.src;
            else {
             if (document.images['pos7'].src==e.src) document.images['pos7'].src=n.src;
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  } //3
  else if (step==4) {
   if (document.images['pos4'].src==k.src) {
    if (testWin()==1) start(1);
    else {
     b3=userpos-8; if (b3<0) b3*=-1;
     if (document.images['pos'+b3].src==e.src) document.images['pos'+b3].src=n.src;
     else {
      if (document.images['pos8'].src==e.src) document.images['pos8'].src=n.src;
      else {
       if (document.images['pos6'].src==e.src) document.images['pos6'].src=n.src;
       else {
        if (document.images['pos2'].src==e.src) document.images['pos2'].src=n.src;
        else {
         if (document.images['pos0'].src==e.src) document.images['pos0'].src=n.src;
         else {
          if (document.images['pos1'].src==e.src) document.images['pos1'].src=n.src;
          else {
           if (document.images['pos3'].src==e.src) document.images['pos3'].src=n.src;
           else {
            if (document.images['pos5'].src==e.src) document.images['pos5'].src=n.src;
            else {
             if (document.images['pos7'].src==e.src) document.images['pos7'].src=n.src;
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
   else if (document.images['pos4'].src==n.src) {
    if (testWin()==1) start(1);
    else {
     if (document.images['pos8'].src==e.src) document.images['pos8'].src=n.src;
     else {
      if (document.images['pos6'].src==e.src) document.images['pos6'].src=n.src;
      else {
       if (document.images['pos2'].src==e.src) document.images['pos2'].src=n.src;
       else {
        if (document.images['pos0'].src==e.src) document.images['pos0'].src=n.src;
        else {
         if (document.images['pos1'].src==e.src) { //bug is here
          document.images['pos1'].src=n.src;
         }
         else {
          if (document.images['pos3'].src==e.src) document.images['pos3'].src=n.src;
          else {
           if (document.images['pos5'].src==e.src) document.images['pos5'].src=n.src;
           else {
            if (document.images['pos7'].src==e.src) document.images['pos7'].src=n.src;
           }
          }
         }
        }
       }
      }
     }
    }
   }
  } //4
  else if(step==5) start(0);
 }

 function testAll() { //Тестирует всё :)
  var ta=0;
  for (var i=0; i<9; i++) t[i]=document.images['pos'+i].src;
  if (( ((t[1]==k.src)&&(t[2]==k.src)) || ((t[1]==n.src)&&(t[2]==n.src)) || ((t[3]==k.src)&&(t[6]==k.src)) || 
        ((t[3]==n.src)&&(t[6]==n.src)) || ((t[4]==k.src)&&(t[8]==k.src)) || ((t[4]==n.src)&&(t[8]==n.src)) )
      && (t[0]==e.src)
     ) { document.images['pos0'].src=n.src; ta=1; }
  if (( ((t[0]==k.src)&&(t[2]==k.src)) || ((t[0]==n.src)&&(t[2]==n.src)) || ((t[4]==k.src)&&(t[7]==k.src)) || 
        ((t[4]==n.src)&&(t[7]==n.src)) )
      && (t[1]==e.src)
     ) { document.images['pos1'].src=n.src; ta=1; }
  if (( ((t[1]==k.src)&&(t[0]==k.src)) || ((t[1]==n.src)&&(t[0]==n.src)) || ((t[5]==k.src)&&(t[8]==k.src)) ||
        ((t[5]==n.src)&&(t[8]==n.src)) || ((t[4]==k.src)&&(t[6]==k.src))|| ((t[4]==n.src)&&(t[6]==n.src)) )
      && (t[2]==e.src)
     ) { document.images['pos2'].src=n.src; ta=1; }
  if (( ((t[0]==k.src)&&(t[6]==k.src)) || ((t[0]==n.src)&&(t[6]==n.src)) || ((t[4]==k.src)&&(t[5]==k.src)) ||
        ((t[4]==n.src)&&(t[5]==n.src)) )
      && (t[3]==e.src)
     ) { document.images['pos3'].src=n.src; ta=1; }
  if (( ((t[2]==k.src)&&(t[8]==k.src)) || ((t[2]==n.src)&&(t[8]==n.src)) || ((t[4]==k.src)&&(t[3]==k.src)) ||
        ((t[4]==n.src)&&(t[3]==n.src)) )
      && (t[5]==e.src)
     ) { document.images['pos5'].src=n.src; ta=1; }
  if (( ((t[0]==k.src)&&(t[3]==k.src)) || ((t[0]==n.src)&&(t[3]==n.src)) || ((t[2]==k.src)&&(t[4]==k.src)) ||
        ((t[2]==n.src)&&(t[4]==n.src)) || ((t[7]==k.src)&&(t[8]==k.src)) || ((t[7]==n.src)&&(t[8]==n.src)) )
      && (t[6]==e.src)
     ) { document.images['pos6'].src=n.src; ta=1; }
  if (( ((t[1]==k.src)&&(t[4]==k.src)) || ((t[1]==n.src)&&(t[4]==n.src)) || ((t[6]==k.src)&&(t[8]==k.src)) ||
        ((t[6]==n.src)&&(t[8]==n.src)) )
      && (t[7]==e.src)
     ) { document.images['pos7'].src=n.src; ta=1; }
  if (( ((t[6]==k.src)&&(t[7]==k.src)) || ((t[6]==n.src)&&(t[7]==n.src)) || ((t[0]==k.src)&&(t[4]==k.src)) ||
        ((t[0]==n.src)&&(t[4]==n.src)) || ((t[2]==k.src)&&(t[5]==k.src)) || ((t[2]==n.src)&&(t[5]==n.src)))
      && (t[8]==e.src)
     ) { document.images['pos8'].src=n.src; ta=1; }
  return ta;
 }

 function testWin() { //Тестирует победу компа
  var nol=0;
  for (var i=0; i<9; i++) t[i]=document.images['pos'+i].src;
  if (( ((t[1]==n.src)&&(t[2]==n.src)) || ((t[3]==n.src)&&(t[6]==n.src)) || ((t[4]==n.src)&&(t[8]==n.src)))
      && (t[0]==e.src)) { document.images['pos0'].src=n.src; nol=1; }
  if (( ((t[0]==n.src)&&(t[2]==n.src)) || ((t[4]==n.src)&&(t[7]==n.src)))
      && (t[1]==e.src)) { document.images['pos1'].src=n.src; nol=1; }
  if (( ((t[1]==n.src)&&(t[0]==n.src)) || ((t[5]==n.src)&&(t[8]==n.src)) || ((t[4]==n.src)&&(t[6]==n.src)))
      && (t[2]==e.src)) { document.images['pos2'].src=n.src; nol=1; }
  if (( ((t[0]==n.src)&&(t[6]==n.src)) || ((t[4]==n.src)&&(t[5]==n.src)))
      && (t[3]==e.src)) { document.images['pos3'].src=n.src; nol=1; }
  if (( ((t[2]==n.src)&&(t[8]==n.src)) || ((t[4]==n.src)&&(t[3]==n.src)))
      && (t[5]==e.src)) { document.images['pos5'].src=n.src; nol=1; }
  if (( ((t[0]==n.src)&&(t[3]==n.src)) || ((t[2]==n.src)&&(t[4]==n.src)) || ((t[7]==n.src)&&(t[8]==n.src)))
      && (t[6]==e.src)) { document.images['pos6'].src=n.src; nol=1; }
  if (( ((t[1]==n.src)&&(t[4]==n.src)) || ((t[6]==n.src)&&(t[8]==n.src)))
      && (t[7]==e.src)) { document.images['pos7'].src=n.src; nol=1; }
  if (( ((t[6]==n.src)&&(t[7]==n.src)) || ((t[0]==n.src)&&(t[4]==n.src)) || ((t[2]==n.src)&&(t[5]==n.src)))
      && (t[8]==e.src)) { document.images['pos8'].src=n.src; nol=1; }
  return nol;
 }

 function testNols() {
  var nols=0;
  for (var i=0; i<9; i++) t[i]=document.images['pos'+i].src;
  if (( ((t[1]==k.src)&&(t[3]==k.src))) || ((t[3]==k.src)&&(t[2]==k.src))
      && (t[0]==e.src)) { document.images['pos0'].src=n.src; nols=1; }
  if (( ((t[1]==k.src)&&(t[5]==k.src))) || ((t[5]==k.src)&&(t[0]==k.src))
      && (t[2]==e.src)) { document.images['pos2'].src=n.src; nols=1; }
  if (( ((t[3]==k.src)&&(t[7]==k.src))) || ((t[3]==k.src)&&(t[8]==k.src))
      && (t[6]==e.src)) { document.images['pos6'].src=n.src; nols=1; }
  if (( ((t[5]==k.src)&&(t[7]==k.src))) || ((t[5]==k.src)&&(t[6]==k.src))
      && (t[0]==e.src)) { document.images['pos8'].src=n.src; nols=1; }
  if ((t[0]==k.src)&&(t[8]==k.src)) {
   if (rand()>5) document.images['pos3'].src=n.src;
   else document.images['pos5'].src=n.src;
   nols=1;
  }
  if ((t[6]==k.src)&&(t[2]==k.src)) {
   if (rand()>5) document.images['pos7'].src=n.src;
   else document.images['pos1'].src=n.src;
   nols=1; 
  }
  return nols;
 }

 //Отрисовка поля
 for (var i=0; i<9; i+=3) {
  document.writeln ('<div align="center">');
  for (var j=i; j<i+3; j++) document.writeln 
   ('<a href="javascript:click('+j+')"><img src="empty.gif" border=0 id="pos'+j+'"></a>');
  document.writeln ('</div>');
 }
 document.writeln ('<div align="center" id="score"></div>');
</script>
<noscript>Извините, для работы приложения нужен включённый Javascript</noscript>*/