import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation"

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  })
 
  // saving what we are typing in the above state
  const handleChange = (event) =>{
    const {name, value} = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };


  // useEffect(()=>{
  //   console.log(post);
  // }, [post]);


const handleClick = (event) => {
  event.preventDefault();

  axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
};


  return (
    <div className="section-center">
      <Navigation />
      <h1>Create</h1>
      <Form>
        <Form.Group>
          <Button variant="outline-dark" onClick={handleClick}>Add to the Todo list</Button>
          <Form.Control name="title" placeholder="title" value={post.title}
          onChange={handleChange}/>

          <Form.Control as="textarea" rows={9} name="description" placeholder="description" value={post.description}
          onChange={handleChange}/>
        </Form.Group>
      </Form>
    </div>
  )
}

export default CreatePost