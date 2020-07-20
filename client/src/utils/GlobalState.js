import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_EMPLOYEE,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE_LIST,
  ADD_EMPLOYEE,
  ADD_SELECTED,
  REMOVE_SELECTED,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_EMPLOYEE:
    return {
      ...state,
      currentemployee: action.employee,
      loading: false
    };

  case UPDATE_EMPLOYEE_LIST:
    return {
      ...state,
      employee: [...action.employee],
      loading: false
    };

  case ADD_SELECTED:
    return {
      ...state,
      employee: [action.post, ...state.employee],
      loading: false
    };

  case REMOVE_EMPLOYEE:
    return {
      ...state,
      employee: state.employeelist.filter((title, department, first_name, last_name) => {
        return ({title, department, first_name, last_name}).employee !== action._employee; 
      })
    };

  case ADD_EMPLOYEE:
    return {
      ...state,
      employeelist: [action.employee, ...state.employeelist],
      loading: false
    };

  case UPDATE_EMPLOYEE_LIST:
    return {
      ...state,
      employeelist: [...state.employeelist],
      loading: false
    };

  case REMOVE_SELECTED:
    return {
      ...state,
      employeelist: state.employeelist.filter((_employee) => {
        return _employee({title: 'title', department: 'department',first_name: 'first_name', lastname: 'last_name'}).employeelist !== action._employee; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    employeelist: [],
    currentemployee: {
      _employee: 0,
      title: "",
      department: "",
      first_name: "",
      last_name: "",
      image: "",
    },
    employeelist: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
