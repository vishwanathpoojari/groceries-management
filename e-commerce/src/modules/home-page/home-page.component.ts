import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  displayedColumns: string[] = [ 'itemName', 'Price', 'AvailableQuantity'];
  dataSource:any=[
    {id:'1', itemName: 'Sugar', Price:100, AvailableQuantity:100},
    {id:'2', itemName: 'Salt', Price:20, AvailableQuantity:100},
    {id:'3', itemName: 'Chilli powder', Price:150, AvailableQuantity:100},
    {id:'4', itemName: 'Soya', Price:120, AvailableQuantity:100},
    {id:'5', itemName: 'Edible Oil', Price:180, AvailableQuantity:100},
    {id:'6', itemName: 'Rice', Price:30, AvailableQuantity:100},
    {id:'7', itemName: 'Rava', Price:45, AvailableQuantity:100},
    {id:'8', itemName: 'wheat Atta', Price:48, AvailableQuantity:100},
  ];
  @ViewChild(MatPaginator, {static:true}) 
  paginator!: MatPaginator 
   @ViewChild(MatSort) sort: MatSort | undefined ;

  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(){
    //throw new Error('Method not implemented.');
    //this.getAllgroceries()
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllgroceries(){
    this.http.get('http://localhost:3000/book').subscribe((resp:any)=>{
      console.log(resp)
    })
  }

  applyFilter(event: Event) {
    debugger
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


