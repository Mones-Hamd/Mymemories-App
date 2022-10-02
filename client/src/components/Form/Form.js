import React, { useContext, useEffect } from 'react';
import useStyles from './Styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { createPost } from '../../API/CreatePost';
import { updatePost } from '../../API/UpdatePost';
import { PostsContext } from '../../context/PostsContect';

const Form = ({ currentId, setCurrentID }) => {
  const [postData, setPostdata] = useState({
    title: '',
    message: '',
    tags: [],
    selectedFile: '',
  });
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const posts = useContext(PostsContext);
  const post = currentId ? posts.find((p) => p._id === currentId) : null;

  useEffect(() => {
    if (post) {
      setPostdata(post);
    }
  }, [currentId]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      updatePost(currentId, { ...postData, name: user?.result?.name });
    } else {
      createPost({ ...postData, name: user?.result?.name });
    }
    clear();
  };
  const clear = () => {
    setCurrentID(null);
    setPostdata({
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
    });
  };
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to create your Own memories
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Editing' : 'Creating'} a Memory{' '}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostdata({ ...postData, title: e.target.value });
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            setPostdata({ ...postData, message: e.target.value });
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostdata({ ...postData, tags: e.target.value });
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostdata({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
