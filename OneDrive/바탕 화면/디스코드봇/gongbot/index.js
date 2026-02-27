const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = '1475821544809693295';

client.once('ready', () => {
  console.log(`${client.user.tag} 로그인 완료`);

  // 매주 화요일 20:50 (한국시간)
  cron.schedule('50 20 * * 2,4,6', async () => {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel) {
      channel.send('📢 공명전 10분 전입니다!');
    }
  }, {
    timezone: "Asia/Seoul"
  });
});

client.login(TOKEN);
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is running');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Web server running');
});