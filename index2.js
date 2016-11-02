
var Bot = require('telegram-api').default;

// only require the message types you need, more coming soon!
var Message = require('telegram-api/types/Message');
var Question = require('telegram-api/types/Question');

var bot = new Bot({
  token: '265959059:AAGTX2RsPAVicLMoGKn-2NRgNrCRj8TJFUE'
});

bot.start().catch(err => {
  console.error(err, '\n', err.stack);
});

// polling
bot.on('update', update => {
  console.log('Polled\n', update);
});



bot.command('ki mibare', function(message) {
  var answer2 = new Message().text('maloome,oon teami ke behnam tooshe').to(message.chat.id);
  var answer = new Message().text('fahmidi ki mibare ya bazam soal dari????').to(message.from.id);
 var answer3 = new Message().text('nafahmidi begooooaaaa tarof nakon').to(message.from.id);
 bot.send(answer2);

    bot.send(answer);
    bot.send(answer3);
});
bot.command('begoo', function(message) {
  if (message.chat.first_name && message.chat.first_name === "Behnam") {
  var answer = new Message().text(message.text.substring(7)).to('-16714675');
  bot.send(answer);
}else {
  var answer = new Message().text('to ke nemituni begi oskol').to(message.from.id);
  bot.send(answer);
}
});

const hello = new Message().text('Hello, age miay roo /ok click kon');
bot.command('start', message => {
  bot.send(hello.to(message.chat.id));
});
bot.command('check', message => {
  var answer = new Message().text(message.chat.id).to('110176673');
  console.log(message.chat.id);
  bot.send(answer);

});


var list = new Array("daei", "behnam", "amir", "alisalar", "armin", "moez", "milad", "shahriyar", "saman");
//var list = new Array();

bot.command('ok', function(message) {
  if (message.chat.first_name === undefined) {
    if (list.indexOf(message.from.first_name.toLowerCase()) === -1) {
      var answer = new Message().text('jome montazeretim pas ' + message.from.first_name).to(message.from.id);
    list.push(message.from.first_name.toLowerCase());
    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." +list[i];
      text2 += "\n";
    }

    var answer2 = new Message().text(text2).to(message.chat.id);
        bot.send(answer);
        bot.send(answer2);
    } else {
      var answer = new Message().text('esmet too list hast ' + message.from.first_name + ' jan').to(message.chat.id);
        bot.send(answer);
    }
  }


});
bot.command('miam', function(message) {
  if (message.chat.first_name === undefined) {
    if (list.indexOf(message.from.first_name.toLowerCase()) === -1) {
      var answer = new Message().text('jome montazeretim pas ' + message.from.first_name).to(message.from.id);
    list.push(message.from.first_name.toLowerCase());
    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." +list[i];
      text2 += "\n";
    }

    var answer2 = new Message().text(text2).to(message.chat.id);
        bot.send(answer);
        bot.send(answer2);
    } else {
      var answer = new Message().text('esmet too list hast ' + message.from.first_name + ' jan').to(message.chat.id);
        bot.send(answer);
    }
  }


});
bot.command('miad <esm>', function(message) {
  if (message.chat.first_name === undefined || message.chat.first_name === "Behnam" || message.chat.first_name === "Amir") {

  if (list.indexOf(message.args.esm.toLowerCase()) === -1) {
  var answer = new Message().text('pas ' + message.args.esm + " jome miad").to(message.chat.id);
list.push(message.args.esm.toLowerCase());
var text2 = "";
for (var i = 0; i < list.length; i++) {
  text2 += i+1 +"." +list[i];
  text2 += "\n";
}

var answer2 = new Message().text(text2).to(message.chat.id);

    bot.send(answer);
    bot.send(answer2);
  } else {
    var answer = new Message().text('esme ' + message.args.esm + ' too list hast').to(message.chat.id);

      bot.send(answer);
  }
}
});
bot.command('nemiad <esm>', function(message) {
  if (message.chat.first_name === undefined || message.chat.first_name === "Behnam" || message.chat.first_name === "Amir") {
  if (list.indexOf(message.args.esm.toLowerCase()) === -1) {
    var answer = new Message().text('ok').to(message.chat.id);
    bot.send(answer);
  } else {
      list.splice(list.indexOf(message.args.esm.toLowerCase()),1);
      var text2 = "";
      for (var i = 0; i < list.length; i++) {
        text2 += i+1 +"." + list[i];
        text2 += "\n";
      }
      var answer2 = new Message().text(text2).to(message.chat.id);
      var answer = new Message().text('esme ' + message.args.esm + " az list hazf shod").to(message.chat.id);
      bot.send(answer);
      bot.send(answer2);
}
  }
});
bot.command('nemiam', function(message) {
  if (message.chat.first_name === undefined) {

  if (list.indexOf(message.from.first_name.toLowerCase()) === -1) {
  var answer = new Message().text('merC ke gofti nemiay').to(message.from.id);
  bot.send(answer);
  } else {
    list.splice(list.indexOf(message.from.first_name.toLowerCase()),1);
    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." + list[i];
      text2 += "\n";
    }
    var answer2 = new Message().text(text2).to(message.chat.id);
    var answer = new Message().text('esme ' + message.from.first_name + " az list hazf shod").to(message.from.id);
    bot.send(answer);
    bot.send(answer2);
}
  }
});

bot.command('list', function(message) {
    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." + list[i];
      text2 += "\n";
    }
    var answer2 = new Message().text(text2).to(message.chat.id);
    bot.send(answer2);


});
bot.command('togroup', function(message) {
  if (message.chat.first_name && message.chat.first_name === "Behnam") {
    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." + list[i];
      text2 += "\n";
    }
    var answer2 = new Message().text(text2).to('-16714675');
    bot.send(answer2);
  }


});
bot.command('multi <aval> <dovom> <sevom>', function(message) {
  if (message.chat.first_name && message.chat.first_name === "Behnam") {

    list.push(message.args.aval.toLowerCase());
    list.push(message.args.dovom.toLowerCase());
    list.push(message.args.sevom.toLowerCase());


    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." + list[i];
      text2 += "\n";
    }
    var answer2 = new Message().text(text2).to(message.chat.id);
    bot.send(answer2);
  }


});
bot.command('five <aval> <dovom> <sevom> <char> <panj>', function(message) {
  if (message.chat.first_name && message.chat.first_name === "Behnam") {
    list.push(message.args.aval.toLowerCase());
    list.push(message.args.dovom.toLowerCase());
    list.push(message.args.sevom.toLowerCase());
    list.push(message.args.char.toLowerCase());
    list.push(message.args.panj.toLowerCase());


    var text2 = "";
    for (var i = 0; i < list.length; i++) {
      text2 += i+1 +"." + list[i];
      text2 += "\n";
    }
    var answer2 = new Message().text(text2).to(message.chat.id);
    bot.send(answer2);
  }


});
bot.command('reset', function(message) {
  if (message.chat.first_name && message.chat.first_name === "Behnam" || message.chat.first_name === "Amir") {
    var answer = new Message().text('list in hafte reset gardid').to('-16714675');
  list = [];
    bot.send(answer);
  }


});
bot.command('number', function(message) {
  if (message.chat.first_name && message.chat.first_name === "Behnam" || message.chat.first_name === "Amir") {
    var answer = new Message().text(12-list.length + " ta kamim,kasi yar dare?").to('-16714675');
    bot.send(answer);
  };



});

// to stop a bot
// bot.stop();
