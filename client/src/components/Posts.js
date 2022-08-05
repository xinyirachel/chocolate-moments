import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Navigation from "./Navigation"
import Card from 'react-bootstrap/Card';


function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});
  
  //For Modal -- update

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [])


  const deletePost = (id) => {
    console.log(id);

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (post) => {
    // console.log(post);
    setUpdatedPost(post);
    // setUpdatedPost((prev) => {
    //     return {
    //       ...prev,
    //       id: id,
    //       title: title,
    //       description: description,
    //     };
    //   });
    handleShow();

    };


  const handleChange =(event)=>{
    const { name, value } = event.target;
    setUpdatedPost((prev) => {
        return {
            ...prev,
            [name]: value,
        };
    });
  };

  const saveUpdatedPost = () => {
    // console.log(updatedPost);

    axios
      .put(`/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    
    <div className='section-center'>
        <Navigation />
        <h1>Moments</h1>
        
          {/* Imported Modal(Live) */}
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update a post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {/* insert form here */}
              <Form.Group>
                  <Form.Control
                  placeholder="title"
                  name="title"
                  value={updatedPost.title ? updatedPost.title : ""}
                  onChange={handleChange}
              />
              <Form.Control
                  placeholder="description"
                  name="description"
                  value={updatedPost.description ? updatedPost.description : ""}
                  onChange={handleChange}
              />
            </Form.Group>
              {/* insert form above */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-dark" onClick={saveUpdatedPost}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>





          {posts ? (
              <div className="grid">
              {posts.map(post =>{
                  return(
                    
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                      <div key={post._id}>
                          <h4>{post.title}</h4>
                          <p>{post.description}</p>
                          <div>
                          <Button size="sm" variant="outline-dark"
                          onClick={() =>
                              updatePost(post)
                            }
                          >UPDATE</Button>
                          <Button size="sm" variant="outline-dark" onClick={() => deletePost(post._id)}>DELETE</Button>
                          </div>
                      </div>
                      </Card.Body>
                    </Card>
                  )
              })}
              </div>

        ) : ""}
    </div>
  );

}

export default Posts;
