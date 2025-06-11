import 'dotenv/config';
import { TwitterApi } from 'twitter-api-v2';

const tianndev_twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const tianndev_genreHashtags = {
  28: '#Action',
  12: '#Adventure',
  16: '#Animation',
  35: '#Comedy',
  80: '#Crime',
  99: '#Documentary',
  18: '#Drama',
  10751: '#Family',
  14: '#Fantasy',
  36: '#History',
  27: '#Horror',
  10402: '#Music',
  9648: '#Mystery',
  10749: '#Romance',
  878: '#SciFi',
  10770: '#TVMovie',
  53: '#Thriller',
  10752: '#War',
  37: '#Western'
};

const tianndev_getTrendingMovie = async () => {
  const tianndev_response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`);
  if (!tianndev_response.ok) throw new Error('Gagal mengambil data film trending');

  const { results } = await tianndev_response.json();
  const tianndev_movie = results[0];
  if (!tianndev_movie) throw new Error('Film trending tidak ditemukan');

  const tianndev_title = tianndev_movie.title;
  const tianndev_year = tianndev_movie.release_date?.split('-')[0] || '';
  const tianndev_overview = (tianndev_movie.overview || '').trim().replace(/\s+/g, ' ');
  const tianndev_hashtags = tianndev_movie.genre_ids
    .map(id => tianndev_genreHashtags[id])
    .filter(Boolean)
    .slice(0, 3)
    .join(' ');

  const tianndev_link = 'https://addictrelive.com/n6bgmjkff?key=e032ddc33e7ea84416160f5917600a0b';
  const tianndev_imageUrl = `https://image.tmdb.org/t/p/original${tianndev_movie.poster_path}`;
  const tianndev_text = `${tianndev_title} (${tianndev_year})\n\n${tianndev_overview}\n\nLink: ${tianndev_link}\n${tianndev_hashtags}`;

  return { tianndev_text, tianndev_imageUrl };
};

const tianndev_fetchImageBuffer = async (tianndev_url) => {
  const tianndev_response = await fetch(tianndev_url);
  if (!tianndev_response.ok) throw new Error('Gagal mengambil gambar');
  return Buffer.from(await tianndev_response.arrayBuffer());
};

const tianndev_main = async () => {
  try {
    const { tianndev_text, tianndev_imageUrl } = await tianndev_getTrendingMovie();
    const tianndev_imageBuffer = await tianndev_fetchImageBuffer(tianndev_imageUrl);
    const tianndev_mediaId = await tianndev_twitterClient.v1.uploadMedia(tianndev_imageBuffer, {
      mimeType: 'image/jpeg',
    });

    const tianndev_tweet = await tianndev_twitterClient.v2.tweet({
      text: tianndev_text,
      media: { media_ids: [tianndev_mediaId] },
    });

    console.log('Tweet berhasil dikirim:', tianndev_tweet.data);
  } catch (tianndev_err) {
    console.error('Terjadi kesalahan:', tianndev_err.message || tianndev_err);
  }
};

tianndev_main();
