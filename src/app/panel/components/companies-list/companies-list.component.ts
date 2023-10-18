import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../interfaces/companies.interface';

@Component({
  selector: 'company-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit{
  ngOnInit(): void {
    if (!this.company) throw Error ('Se requiere la prop company');
  }
  @Input()
  public company!: Company
}
