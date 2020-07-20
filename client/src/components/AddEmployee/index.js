import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_EMPLOYEE, LOADING} from "../../utils/actions";
import API from "../../utils/API";

function AddEmployeeForm() {
  const titleRef = useRef();
  const departmentRef = useRef();
  const first_nameRef = useRef();
  const last_nameRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      department: departmentRef.current.value,
      first_name: first_nameRef.current.value,
      last_name: last_nameRef.current.value,
    })
      .then(result => {
        dispatch({
          type: ADD_EMPLOYEE,
          employee: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    departmentRef.current.value = "";
    first_nameRef.current.value = "";
    last_nameRef.current.value = "";
    
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://www.clipartmax.com/png/middle/131-1319878_employee-self-serve-portal-people-icon-png.png"
        />
      </div>
      <h1>Add Employee</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        <input className="form-control mb-5" required ref={departmentRef} placeholder="Depatment" />
        <input className="form-control mb-5" ref={first_nameRef} placeholder="First name" />
        <input className="form-control mb-5" ref={last_nameRef} placeholder="Last name" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
