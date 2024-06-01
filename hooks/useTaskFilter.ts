import { useSearchParams } from "next/navigation";
import React from "react";

export default function useTaskFilter() {
  const searchParams = useSearchParams();
  const tasksFilter = searchParams.get("tasks");
  return {
    tasksFilter,
    searchParams,
  };
}
