const app = require('express')();
const axios = require('axios');

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', req.header('access-control-request-headers') || '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }
  next();
});

const baseURL = 'https://swapi.dev/api/';
const baseURLStarWarsVisual = 'https://starwars-visualguide.com';

const getFilmId = (url) => {
  const id = url.split('/')[5];
  return Number(id);
}

const getFilmImageUrl = (id) => {
return `${baseURLStarWarsVisual}/assets/img/films/${id}.jpg`;
}

const getCharacterImageUrl = (url) => {
  const getCharacterId = url.split('/')[5];
 return `${baseURLStarWarsVisual}/assets/img/characters/${getCharacterId}.jpg`;
}

app.get('/films', async (req, res, next) => {
  try {
    const { data: { results } } = await axios.request({ baseURL, url: 'films' });
    results.forEach(x => x.id = getFilmId(x.url));
    results.forEach(x => x.photo = getFilmImageUrl(x.id));
    return res.status(200).send(results);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('/films/:id', async (req, res, next) => {

  try {
    if (!/^\d{1,3}$/.test(req.params.id)) {
      return res.status(400).send({ error: 'invalid_film_id', message: 'id must be a positive integer' });
    }
    const filmId = Number(req.params.id);
    const { data } = await axios.request({ baseURL, url: `films/${filmId}` });

    const charactersRequests = await Promise.all(data.characters.map(characterUrl => {
      return axios.get(characterUrl);
    }));

    const characters = charactersRequests.map((y) => y.data).map((x) => {
      return {
        name: x.name,
        gender: x.gender,
        birthYear: x.birth_year,
        eyeColor: x.eye_color,
        height: x.height,
        mass: x.mass,
        photo: getCharacterImageUrl(x.url)
      }
    });

    data.id = getFilmId(data.url);
    data.photo = getFilmImageUrl(data.id);
    data.characters = characters;

    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.all('*', async (req, res, next) => {
  res.send({
    routes: ['films', 'films/id']
  })
})

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Aplicação - Ativa :D | ${port}`);
});
