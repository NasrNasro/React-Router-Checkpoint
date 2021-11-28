import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Add({movies, setMovies}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImage] = useState("")
  const [rate, setRate] = useState(0)

  const handleAdd = () => {setMovies([...movies, {id:Math.random(),title,desc,img,rate}])}

  return (
    <div className="add">
      <h1 style={{paddingBottom: "20px"}}>Welcome to Movies Show</h1>
      <Button variant="primary" onClick={handleShow}>
        Add Movie Card
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Title: </label>
          <input type="search" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Type movie title here" ></input>
          <label>Descr: </label>
          <input type="search" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Describe your movie here"></input>
          <label>Image: </label>
          <input type="URL" value={img} onChange={(e) => setImage(e.target.value)} placeholder="Type movie image URL"></input>
          <label>Rate:</label>
          <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add