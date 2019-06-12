import React, { useEffect, useState } from 'react';

import Photos from './Photos';
import { Photo } from '../types';
import Search from './Search';
import { getPhotosUrl } from '../utils';
import { Typography } from '@material-ui/core';

const PhotoSearch = () => {
  const [photos, setPhotos] = useState<Photo[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(getPhotosUrl(searchTerm));
      const json = await response.json();
      setPhotos(json.photos.photo);
    }
    if (searchTerm) {
      fetchPhotos();
    }
  }, [searchTerm]);

  return (
    <main className="app-content">
      <header>
        <Typography variant="h1" component="h1">
          Flickr Photo Search
        </Typography>
      </header>
      <Search onSearchButtonClick={setSearchTerm} />
      {photos && <Photos photos={photos} />}
    </main>
  );
};

export default PhotoSearch;
