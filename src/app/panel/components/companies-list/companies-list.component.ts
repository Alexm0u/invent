import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../interfaces/companies.interface';
import data from '../../../../../data/db.json';

@Component({
  selector: 'company-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit{
  
  displayedColumns: string[] = ['id', 'name', 'direction', 'phone', 'postalCodes'];
  dataSource: any = (data as any).companies;

  
  ngOnInit(): void {
    if (!this.company) throw Error ('Se requiere la prop company');
  }
  @Input()
  public company!: Company
}
