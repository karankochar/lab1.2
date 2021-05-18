import React from "react";
import Employee from "../Models/Employee";

export default class StudentComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            employee : new Employee(),
            eid:"",
            ename:"",
            esalary:"",
            edepartment:""

        }
    }

    render(){
        return(
            <div>
            <h1><span className="badge badge-dark">Employee form</span></h1>

            <form>
                <div className="form-group">
                    <input type="text" id="empid" className="form-control"
                    placeholder="Enter employee Id"
                    value={this.state.employee.id}
                    onChange={
                        (e) => {
                            console.log(e.target.value);
                            this.setState({employee: {...this.state.employee, id: e.target.value}})
                        }
                    }
                    />
                </div>

                <div className="form-group">
                    <input type="text" id="empname" 
                    className="form-control" 
                    placeholder="Enter Employee name"
                    value={this.state.employee.name}
                    onChange={
                        (e) => {
                            this.setState({employee: {...this.state.employee, name: e.target.value}})
                        }
                    }
                    />
                </div>
                <div className="form-group">
                  <input type="text" id="salary" 
                    className="form-control" 
                    placeholder="Enter Salary"
                    value={this.state.employee.salary}
                    onChange={
                    (e) => {
                        this.setState({employee: {...this.state.employee, salary: e.target.value}})
                    }
                }
                  />
                </div>

                <div className="form-group">
                  <input type="text" id="empdept" 
                    className="form-control" 
                    placeholder="Enter Department"
                    value={this.state.employee.department}
                    onChange={
                    (e) => {
                        this.setState({employee: {...this.state.employee, department: e.target.value}})
                    }
                }
                  />
                </div>

                <div className="form-group">
                    <button 
                    className="btn btn-primary"
                    onClick={
                        (e)=>{
                            e.preventDefault();
                            alert(JSON.stringify(this.state.employee))
                            this.setState({eid:this.state.employee.id})
                            this.setState({ename:this.state.employee.name})
                            
                            this.setState({esalary:this.state.employee.salary})
                            this.setState({edepartment:this.state.employee.department})
                        }
                    }
                    > Add Employee </button>
                </div>
                
            </form>
            
            {this.state.eid} <br/>
            {this.state.ename}  <br/>
            {this.state.esalary}  <br/>
            {this.state.edepartment}   <br/>       
            
        </div>
        );
    }
}