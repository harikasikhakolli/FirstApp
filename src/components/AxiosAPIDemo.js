import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function AxiosAPIDemo() 
{
  const classes = useStyles();

  const[option,setOption] = useState("")

  const[posts,setPosts] = useState([])
  const[photos,setPhotos] = useState([])
  const[todos,setToDos] = useState([])

  const display = (val) =>
  {
      setOption(val)
  }

const getpostsdata = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    
    setPosts(response.data)
    }).catch((error) => {
          console.log(error)
    })
  }

  const getphotosdata = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
    
      setPhotos(response.data)
  
      }).catch((error) => {
            console.log(error)
      })
  }

  const gettodosdata = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    
      setToDos(response.data)
  
      }).catch((error) => {
            console.log(error)
      })
  }

  if(option==="posts")
  {
     getpostsdata()
  }
  if(option==="photos")
  {
     getphotosdata()
  }
  if(option==="todos")
  {
     gettodosdata()
  }

  const Posts = (props) =>
  {
        if(props.posts!=null)
        {
          return (
      <div>

     {props.posts.map((post) => {
       return <p>{post.id} {post.title} {post.body}</p>
     })}

      </div>    

          );
        }
  }

  const ToDos = ({todos}) =>
  {
        if(todos!=null)
        {
          return (
      <div>

     {todos.map((todo) => {
       return <p>{todo.id} {todo.title} {todo.completed ? "Yes" : "No"}</p>
     })}

      </div>    

          );
        }
  }

  const Photos = ({photos}) =>
  {
        if(photos!=null)
        {
          return (
      <div>

     {photos.map((photo) => {
       return <img src={photo.thumbnailUrl} alt="photo1"/>
     })}

      </div>    

          );
        }
  }
  

  

  return (
    <div className={classes.root}>
     
      <Button variant="contained" color="secondary" onClick={()=>display("posts")}>Posts</Button>

      <Button variant="contained" color="secondary" onClick={()=>display("photos")}>Photos</Button>

      <Button variant="contained" color="secondary" onClick={()=>display("todos")}>ToDos</Button>
     

   <Posts posts={posts}/>
   <ToDos todos={todos}/>
   <Photos photos={photos}/>


    </div>
  );
}
export default AxiosAPIDemo