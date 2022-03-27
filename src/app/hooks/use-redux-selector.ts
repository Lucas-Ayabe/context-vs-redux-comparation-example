import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store/redux";

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useReduxSelector;
