require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

(async () => {
  try {
    const now = new Date().toLocaleString('id-ID');
    const tweet = await client.v2.tweet(`Tweet otomatis jam ${now} dari GitHub Actions 🚀`);
    console.log('✅ Tweet terkirim:', tweet.data);
  } catch (error) {
    console.error('❌ Gagal post tweet:', error);
    process.exit(1);
  }
})();
