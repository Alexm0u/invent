import { Component, Input, OnInit } from '@angular/core';
import { Send } from '../../interfaces/send.interface';

@Component({
  selector: 'sends-send-list',
  templateUrl: './send-list.component.html',
  styleUrls: ['./send-list.component.css'
  ]
})
export class SendListComponent implements OnInit{
  ngOnInit(): void {
    if (!this.send) throw Error('Se requiere la prop Send');
  }
  @Input()
  public send!: Send;

  getCompanyNameFromId(companyId: string): string {
    switch (companyId) {
      case '1':
        return 'Correos';
      case '2':
        return 'Seur';
      case '3':
        return 'Invent';
      default:
        return 'Desconocido';
    }
  }

}
