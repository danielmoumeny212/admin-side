"use client";
 
import useStoreModal from "@/hooks/useStoreModal";
import Modal from "../modal";
import  { z } from 'zod';
import { useState } from "react";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(3, { message: 'minimun 3 charactes' })
})

type Data = z.infer<typeof formSchema>

export const StoreModal = () => {

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<Data>()

    const storeModal = useStoreModal()
  return (
    <Modal
      title="créer un nouveau espace de gestion"
      description="ajouter un nouvel espace de gestion pour gérer vos produits et catégories"
      isOpen={storeModal.isOpen}
      onClose ={storeModal.onClose}
      >
        Form to create the store
      </Modal>
  );
};
