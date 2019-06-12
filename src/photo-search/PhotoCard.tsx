import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Photo, User } from '../types';
import { getUserInfoUrl } from '../utils';

interface Props {
  photo: Photo;
}

const PhotoCard = ({ photo }: Props) => {
  const [owner, setOwner] = useState<User>();

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(getUserInfoUrl(photo.owner));
      const json = await response.json();
      setOwner(json.person);
    }
    fetchPhotos();
  }, [photo]);

  return (
    <Card className="photo-card">
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            className="avatar"
            src={
              owner &&
              `http://farm${owner.iconfarm}.staticflickr.com/${
                owner.iconserver
              }/buddyicons/${owner.nsid}.jpg`
            }
          >
            R
          </Avatar>
        }
        title={photo.ownername}
      />
      <CardMedia
        className="media"
        image={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}.jpg`}
        title={photo.title}
      />
      <CardContent>
        <Typography variant="h4" color="textSecondary" component="h2">
          {photo.title}
        </Typography>
        <section className="details">
          <Typography variant="body2" color="textSecondary" component="p">
            {`Date taken: ${photo.datetaken}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Views: ${photo.views}`}
          </Typography>
        </section>
      </CardContent>
    </Card>
  );
};
export default PhotoCard;
