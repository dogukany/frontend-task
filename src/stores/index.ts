import { createContext } from "react";
import { IContext } from "../util/types";

export const StoreContext = createContext<IContext>({} as IContext);
