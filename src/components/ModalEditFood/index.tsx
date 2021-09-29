import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { useEffect, useState } from "react";

interface FoodData {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: FoodData;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodData) => void;
}

export function ModalEditFood({
  isOpen,
  editingFood,
  setIsOpen,
  handleUpdateFood,
}: ModalEditFoodProps) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    const data = { ...editingFood, image, name, price, description };

    handleUpdateFood(data);
    setIsOpen();
  }

  useEffect(() => {
    setImage(editingFood.image);
    setName(editingFood.name);
    setPrice(editingFood.price);
    setDescription(editingFood.description);
  }, [editingFood]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={() => handleSubmit()}>
        <h1>Editar Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          name="price"
          placeholder="Ex: 19.90"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <Input
          name="description"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit" data-testid="edit-food-button">
          <p className="text">Editar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
