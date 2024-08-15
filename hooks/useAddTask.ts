import { Toast } from "@/components/toast/Toast";
import { useStore } from "@/stores/StoreProvider";
import React, { useState } from "react";

export default function useAddTask() {
  const { taskStore } = useStore();
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>();
  const [error, setError] = useState<string>();

  const handleNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 3) {
      setError("Please enter a title with at least 3 characters");
      Toast.error("Title must be at least 3 characters");
    } else if (description.length < 3) {
      setError("Please enter a description with at least 3 characters");
      Toast.error("Description must be at least 3 characters");
    } else if (!status) {
      setError("Please select a status for the task");
      Toast.error("Status is required");
    } else {
      try {
        const newTask = {
          id: Date.now().toString(),
          title,
          description,
          status,
        };

        taskStore.addTask(newTask);

        setTitle("");
        setDescription("");
        setStatus("");
        setError("");
        setOpen(false);

        Toast.success("Task added successfully");
      } catch (err) {
        setError("Failed to add task");
        Toast.error("Failed to add task");
      }
    }
  };

  return {
    handleNewTask,
    error,
    title,
    open,
    setOpen,
    setTitle,
    setDescription,
    setStatus,
    description,
    status,
  };
}
