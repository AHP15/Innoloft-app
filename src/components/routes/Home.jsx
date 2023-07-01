import { useDispatch } from "react-redux";

import { test } from '../../slices/testSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(test())}>Hello</div>
  );
};
export default Home;
