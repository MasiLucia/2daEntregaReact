import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { FavouritesListContext } from "../FavouritesContext/FavouritesContext";
import { FavouriteCards } from './favouriteCard/FavouriteCards'
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import './FavouritesList.css'

export function FavouritesList() {
  const [show, setShow] = useState(false);
  const { favouritesList } = useContext(FavouritesListContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {FavouritesList.length > 0 ? <AiTwotoneHeart onClick={handleShow} className="heart__icon--red" /> :<AiOutlineHeart onClick={handleShow} className="heart__icon" />}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header-color">
          <Modal.Title>Productos en Favoritos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-color">
          {FavouritesList.length > 0 ? (
            FavouritesList.map((product) => {
              return <FavouriteCards key={product.id} data={product} />;
            })
          ) : (
            <h2>No tiene ningun producto en Favoritos</h2>
          )}
        </Modal.Body>
        <Modal.Footer className="header-color">
          <Button className='favouritesList__btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}