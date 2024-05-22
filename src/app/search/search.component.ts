import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Supplies } from './interface/interface.search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  listData:any;

  type1!: string;
  query!: string;
  name!: string;
  category!: string;
  detail!: string;
  orderDate!: Date;
  serialNumber!: string;

  showBtn = false

  nameTemp!: string;
  categoryTemp!: string;
  detailTemp!: string;
  orderDateTemp!: Date;
  serialNumberTemp!: string;
  idTemp!: number;

  addData = {} as Supplies;
  editData = {} as Supplies;

  isVisible = false;
  isOkLoading = false;

  isEditVisible = false;
  isOkEditLoading = false;

  userName?:string;
  password?:string;
  active?:string;
  
  constructor(private router: Router
    , private api: ApiService
    , private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'];
      this.password= params['password'];
      this.active = params['active'];
    });
    this.api.fetchData().subscribe(res => {
      this.listData = res;
      console.log(this.listData);
    });
    console.log('search: ',this.active);
    if (this.active) {
      this.showBtn = true
    }
  }

  serachAll():void {

    this.api.fetchDataAll(this.query).subscribe(res => {
      this.listData = res;
      console.log(this.listData);
      
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  async handleOk(): Promise<void> {
    this.isOkLoading = true;
    this.addData = {
      name : this.name      
      , type : this.category
      , itemDetail : this.detail
      , orderDate : this.orderDate
      , serial : this.serialNumber
      , status : 'Available'
      , createDate: new Date()
      , updateDate: new Date()
    }
    await this.api.addData(this.addData).subscribe();
      this.isVisible = false;
      this.isOkLoading = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showEditModal(i:number): void {
    this.isEditVisible = true;
    this.listData[i]
    this.nameTemp = this.listData[i].name
    this.categoryTemp = this.listData[i].type
    this.detailTemp = this.listData[i].itemDetail
    this.orderDateTemp = new Date(this.listData[i].orderDate);
    this.serialNumberTemp = this.listData[i].serial
    this.idTemp = this.listData[i].id
  }

  async handleEditOk(): Promise<void> {
    this.isOkEditLoading = true;
    this.editData = {
      name : this.nameTemp      
      , type : this.categoryTemp
      , itemDetail : this.detailTemp
      , orderDate : this.orderDateTemp
      , serial : this.serialNumberTemp
      , status : 'Available'
      , createDate: new Date()
      , updateDate: new Date()
      , id: this.idTemp
    }

    await this.api.updateData(this.editData).toPromise().then(() => {
      this.isEditVisible = false;
      this.isOkEditLoading = false;
      this.serachAll();
    });

  }

  handleEditCancel(): void {
    this.isEditVisible = false;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onEditChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
