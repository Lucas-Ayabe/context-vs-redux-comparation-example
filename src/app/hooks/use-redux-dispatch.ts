import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/redux";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export default useReduxDispatch;
