import React, {useEffect} from 'react'
import {useSelector, useDispatch } from "react-redux";
import { getEmployeeList } from '../redux/actions/ActionAuth';

function CompanyProfil  ()  {
    const {employee} = useSelector((state) => state.ReducerEmployee);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getEmployeeList())
      // console.log(employee)
  }, [dispatch])
  

    return (
        <div>
           
            {!employee ? <h2>plz wait</h2> : ""}

         {employee.filter((el)=> el.userRole === "Employee")
         .map((el)=> <div class="row">
            <div>{el.firstName}</div> 
            <div>{el.lastName}</div> 
            <div>{el.email}</div> 
            <div>{el.age}</div> 
            <div>{el.field}</div> 
            <div>{el.phone}</div>
            <div>{el.address}</div> 
          </div>)}
 
        </div>
    )
}

export default CompanyProfil

