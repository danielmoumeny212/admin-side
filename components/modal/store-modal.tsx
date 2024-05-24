"use client";

import useStoreModal from "@/hooks/useStoreModal";
import Modal from "../modal";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from 'axios';

const formSchema = z.object({
  name: z.string().min(3, { message: "minimun 3 charactes" }),
});

type Data = z.infer<typeof formSchema>;

export const StoreModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<Data>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmitForm = async (values: Data) => {
    try {
      setIsLoading(true)
      const response = await axios.post("/api/stores",  values);
      console.log(response)
      
    }catch(error) {
      console.log(error)
    }finally {
      setIsLoading(false)
    }
  };

  const storeModal = useStoreModal();
  return (
    <Modal
      title="créer un nouveau espace de gestion"
      description="ajouter un nouvel espace de gestion pour gérer vos produits et catégories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Le nom de votre dashboard"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  type="button"
                  disabled={isLoading}
                  variant="outline"
                  size="sm">
                  Annuler
                </Button>
                <Button type="submit" disabled={isLoading} size="sm">
                  Continuer
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
