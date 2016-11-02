
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
