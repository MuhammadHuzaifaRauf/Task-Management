import { useStore } from "@/stores/StoreProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EditTaskProps } from "../types/types";
import { Toast } from "@/components/toast/Toast";

export default function useEditTask({
  title,
  description,
  id,
  setOpen,
}: EditTaskProps) {
  const { taskStore } = useStore();
  const router = useRouter();
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDescription, setNewDescription] = useState<string>(description);
  const [newStatus, setNewStatus] = useState<string>(status);
  const [error, setError] = useState<string>();

  const handleEditedTask = (e: any) => {
    e.preventDefault();

    if (newTitle.length < 3) {
      setError("Please enter a title with at least 3 characters");
      Toast.error("Title must be at least 3 characters");
    } else if (newDescription.length < 3) {
      setError("Please enter a description with at least 3 characters");
      Toast.error("Description must be at least 3 characters");
    } else if (!newStatus) {
      setError("Please select a status for the task");
      Toast.error("Status is required");
    } else {
      const editedTask = {
        title: newTitle,
        description: newDescription,
        status: newStatus,
      };

      taskStore.editTask(id, editedTask);

      // Reset the input values
      setNewTitle("");
      setNewDescription("");
      setNewStatus("");
      setError("");
      setOpen(!open);
      router.refresh();
      Toast.success("Task edited successfully");
    }
  };
  return {
    handleEditedTask,
    newTitle,
    setNewTitle,
    newDescription,
    setNewDescription,
    newStatus,
    setNewStatus,
    error,
    setError,
    setOpen,
    open,
  };
}
