import { Component, OnInit,  } from '@angular/core';
import { Company } from '../../interfaces/companies.interface';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css']
})
export class CompaniesPageComponent implements OnInit{
public companies: Company[] = [];

constructor(private companyService: CompaniesService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies) => (this.companies = companies));
  }

}
