import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_EMPLOYEE, ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "../utils/actions";
import { EmployeeList } from "../components/"
const EmployeeListPage = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getemployeelist(props.match.params.employee)
      .then(res => dispatch({ type: SET_CURRENT_EMPLOYEE, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addSelected = () => {
    dispatch({
      type: ADD_EMPLOYEE,
      employee: state.currentemployee
    });
  };

  const removeEmployee = () => {
    dispatch({
      type: REMOVE_EMPLOYEE,
      _id: state.currentemployee._id
    });
  };
  return (
    <>{state.currentemployeelist ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {state.currentemployee.employeeList} by emlpoyeeList={'title,department, first_name, last_name, image'}, 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details:</h1>
              <p>{state.currentemployee.body}</p>
            </article>
          </Col>
          {state.selected.indexOf(state.currentemployee) !== -1 ? (
            <button className="btn btn-danger" onClick={removeEmployee}>
                Remove from Selected!
            </button>
          ) : (
            <button className="btn" onClick={addSelected}>
                 Add to Selected!
            </button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Employee Search?</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default EmployeeListPage
