import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-exist-alert',
  templateUrl: './modal-exist-alert.component.html',
  styleUrls: ['./modal-exist-alert.component.scss'],
  standalone: true,
  imports: [IonAlert],
})
export class ModalExistAlertComponent implements OnInit {
  @Output() onClose = new EventEmitter<void>();
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.onClose.emit();
        console.log('Alert confirmed');
      },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
