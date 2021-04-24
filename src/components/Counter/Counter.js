import { Button, Box } from "@material-ui/core";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../app/reducers/countSlice";
const Count = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div>
      Counter is {count}
      <Box component="span" m={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </Box>
    </div>
  );
};

export default Count;
