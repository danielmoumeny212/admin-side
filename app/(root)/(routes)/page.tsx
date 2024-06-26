"use client";

import Modal from "@/components/modal";
import { useEffect } from 'react';
import useStoreModal from "@/hooks/useStoreModal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen) onOpen();

  }, [isOpen, onOpen])
  return null;
};

export default SetupPage;
