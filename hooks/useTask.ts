import { useStore } from "@/stores/StoreProvider";
import React, { useState } from "react";

export default function useTask() {
  const { taskStore } = useStore();
  const [open, setOpen] = useState(false);
  return {
    taskStore,
    open,
    setOpen,
  };
}
