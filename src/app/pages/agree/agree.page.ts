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
  IonNavLink,
  IonButton,
  IonList,
  IonItem,
  IonCheckbox,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCard,
    IonCheckbox,
    IonItem,
    IonList,
    IonButton,
    IonNavLink,
    IonFooter,
    IonText,
    IonContent,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class AgreePage implements OnInit {
  agreeChecked = false;
  constructor() {}

  ngOnInit() {}
}
