import toast from "react-hot-toast";

const success = (message: string) => {
  toast.success(message);
};

const error = (message: string) => {
  toast.error(message);
};

const loading = (message: string) => {
  toast.loading(message);
};

export const Toast = { success, error, loading };
