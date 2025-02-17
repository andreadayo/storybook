import Modal from "./Modal";
import { useState } from "react";

export default {
  component: Modal,
  title: "Components/Modal",
  tags: ["autodocs"],
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} title="Modal Title">
      This is a modal
    </Modal>
  );
};
