import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
  IonImg,
  IonModal,
  IonButtons,
  IonNav,
  IonIcon,
} from '@ionic/angular/standalone';
import { AdvicePage } from '../pages/advice/advice.page';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonIcon,
    IonNav,
    IonButtons,
    IonModal,
    IonImg,
    IonButton,
    IonFooter,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  modalComponent = AdvicePage;

  constructor() {
    // add ion icons
    addIcons({ close });
  }
}
