import apiToken from '../api-tokens/client_secret_flickr.json';

export const getPhotosUrl = (searchTerm: string) => {
  const params = Object.entries({
    format: 'json',
    nojsoncallback: 1,
    method: 'flickr.photos.search',
    api_key: apiToken.key,
    text: searchTerm,
    per_page: 30,
    sort: 'relevance',
    extras: 'owner_name,date_taken,views'
  })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `https://api.flickr.com/services/rest?${params}`;
};

export const getUserInfoUrl = (userId: string) => {
  const params = Object.entries({
    format: 'json',
    nojsoncallback: 1,
    method: 'flickr.people.getInfo',
    api_key: apiToken.key,
    user_id: userId
  })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `https://api.flickr.com/services/rest?${params}`;
};
