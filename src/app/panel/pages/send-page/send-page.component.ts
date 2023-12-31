import { Component, OnInit } from '@angular/core';
import { Send } from '../../interfaces/send.interface';
import { SendService } from '../../services/send.service';

@Component({
  selector: 'sends-send-page',
  templateUrl: './send-page.component.html',
  styleUrls: ['./send-page.component.css'],
})
export class SendsPageComponent implements OnInit {
  public sends: Send[] = [];

  constructor(private sendService: SendService) {}
  ngOnInit(): void {
    this.sendService.getSends().subscribe((sends) => (this.sends = sends));
  
  }
  
}
