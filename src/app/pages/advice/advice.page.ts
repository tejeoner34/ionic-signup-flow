import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonText,
  IonFooter,
  IonButton,
  IonNavLink,
} from '@ionic/angular/standalone';
import { AgreePage } from '../agree/agree.page';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.page.html',
  styleUrls: ['./advice.page.scss'],
  standalone: true,
  imports: [
    IonNavLink,
    IonButton,
    IonFooter,
    IonText,
    IonImg,
    IonContent,
    CommonModule,
    FormsModule,
  ],
})
export class AdvicePage implements OnInit {
  agreePage = AgreePage;
  constructor() {}

  ngOnInit() {}
}
