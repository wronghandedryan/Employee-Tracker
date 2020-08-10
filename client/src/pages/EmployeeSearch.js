import React, { useEffect } from "react";
import { EmployeeListItem, EmployeeList } from "../components/EmployeeList";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_SELECTED, LOADING, UPDATE_SELECTED } from "../utils/actions";

const EmployeeListPage = () => {
  const [state, dispatch] = useStoreContext();

  const getSelected = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_SELECTED });
  };

  const removeFromSelected = id => {
    dispatch({
      type: REMOVE_SELECTED,
      _id: id
    });
  };

  useEffect(() => {
    getSelected();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Selected Employee's</h1>
      {state.favorites.length ? (
        <ul>
          <h3 className="mb-5 mt-5">Click on a Employee Name to view in detail</h3>
          {state.favorites.map(employee => (
            <li key={employee._id}>
              <Link to={"/employeeList/" + employee._id}>
                <strong>
                  {employee.title, employee.department, employee.first_name, employee.last_name} by {employee.title, employee.department, employee.first_name, employee.last_name}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>You haven't added any Employee's yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default EmployeeSearch;
