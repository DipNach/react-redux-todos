import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <div>
        <input ref={node => (input = node)} />

        <button
          onClick={event => {
            event.preventDefault();
            if(!input.value.trim()){
              return;
            }
            dispatch(addTodo(input.value.toString()));
            input.value = "";
          }}
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTodo);
