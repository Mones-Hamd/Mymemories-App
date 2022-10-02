import React from 'react';
import useStyles from './Styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deletePost } from '../../../API/DeletePost';
import { likePost } from '../../../API/LikePost';
import Likes from './Likes';
const Post = ({ post, setCurrentID }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {user?.result?.sub === post?.creator ||
        (user?.result?._id === post?.creator && (
          <div className={classes.overlay2}>
            <Button
              style={{ color: 'white' }}
              size="large"
              onClick={() => {
                console.log(post._id);
                setCurrentID(post._id);
              }}
            >
              <MoreHorizIcon fontSize="large" />
            </Button>
          </div>
        ))}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => {
              likePost(post._id);
            }}
          >
            <Likes post={post} />
          </Button>
          {user?.result?.sub === post?.creator ||
            (user?.result?._id === post?.creator && (
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  deletePost(post._id);
                }}
              >
                <DeleteIcon fontSize="small" />
                Delete
              </Button>
            ))}
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
