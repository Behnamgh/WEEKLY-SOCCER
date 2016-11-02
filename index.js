var TelegramBot = require('node-telegram-bot-api');

var options = {
  polling: true
};

var token = process.env.TELEGRAM_BOT_TOKEN || '265959059:AAGTX2RsPAVicLMoGKn-2NRgNrCRj8TJFUE';

var bot = new TelegramBot(token, options);
bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});
bot.on(/\/love/, function (msg) {
  var chatId = msg.chat.id;
  var opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['Yes, you are the bot of my life ❤'],
          ['No, sorry there is another one...']]
      })
    };
    bot.sendMessage(chatId, 'Do you love me?', opts);
});
bot.on(/love/i, function (msg) {
  var chatId = msg.chat.id;
  var opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['Yes, you are the bot of my life ❤'],
          ['No, sorry there is another one...']]
      })
    };
    bot.sendMessage(chatId, 'u love me?', opts);
});
bot.on('message', function (msg) {
  var chatId = msg.chat.id;


    bot.sendMessage(chatId, 'you love me?');
});
