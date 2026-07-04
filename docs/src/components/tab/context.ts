import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { TabVariant } from "@/components/tab/types";

export type TabContextValue = {
  id: string;
  selectedIndex: number;
  onChange: Dispatch<SetStateAction<number>>;
  variant: TabVariant;
};

export const TabContext = createContext<TabContextValue | null>(null);

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTabContext must be used within TabContext");
  return context;
}
