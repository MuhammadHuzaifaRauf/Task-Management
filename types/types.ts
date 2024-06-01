import { Dispatch, SetStateAction } from "react";

export interface EditTaskProps {
  id: string;
  title: string;
  description: string;
  status: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: string;
}
