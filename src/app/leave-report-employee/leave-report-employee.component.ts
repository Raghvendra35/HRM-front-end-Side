import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LeaveService } from '../leave.service';
import { LeaveEmployee } from '../leave';

@Component({
  selector: 'app-leave-report-employee',
  templateUrl: './leave-report-employee.component.html',
  styleUrls: ['./leave-report-employee.component.css']
})
export class LeaveReportEmployeeComponent implements OnInit
{
 
  employeeData:any;

  leaveEmployee: LeaveEmployee=new LeaveEmployee();

  constructor(private leaveService: LeaveService,
              private employeeService: EmployeeService) {}
 
  ngOnInit(): void
   {
    let res=this.employeeService.getDropdown();  
    
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
   }


   formSubmit()
   {
    console.log(this.leaveEmployee);
    
    this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
    {
       alert("Saved Leave !!!");
    }, (error)=>
    {
      alert("Failed !!!");
    })
   }

}
