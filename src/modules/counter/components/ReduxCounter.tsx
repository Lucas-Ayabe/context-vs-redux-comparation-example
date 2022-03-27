import { useReduxDispatch, useReduxSelector } from "../../../app/hooks";
import { increment, selectCount } from "../slice";

export function ReduxCounter() {
  const dispatch = useReduxDispatch();
  const count = useReduxSelector(selectCount);
  const dispatchIncrement = () => dispatch(increment());

  return (
    <button className="d:ib w:auto" onClick={dispatchIncrement}>
      {count}
    </button>
  );
}

export default ReduxCounter;
