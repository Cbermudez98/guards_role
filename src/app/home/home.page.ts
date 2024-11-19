import { Component } from '@angular/core';
import { ROLE } from '../enums/role.enum';
import { StorageService } from '../services/storage.service';
import { CONSTANT } from '../enums/constants';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public roles = ROLE;

  constructor(
    private readonly storageSrv: StorageService,
    private readonly navCtrl: NavController
  ) {}

  setRole(role: ROLE) {
    this.storageSrv.set(CONSTANT.ROLE, role);
  }

  goToPage(route: string) {
    this.navCtrl.navigateForward([route]);
  }
  
  clear() {
    this.storageSrv.clear();
  }
}
