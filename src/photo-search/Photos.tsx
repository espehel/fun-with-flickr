import React from 'react';
import { Photo } from '../types';
import PhotoCard from './PhotoCard';

interface Props {
  photos: Photo[];
}

const Photos = ({ photos }: Props) => {
  console.log(photos);
  return (
    <section className="photos-grid">
      {photos.map(photo => (
        <PhotoCard photo={photo} key={photo.id} />
      ))}
    </section>
  );
};

export default Photos;
