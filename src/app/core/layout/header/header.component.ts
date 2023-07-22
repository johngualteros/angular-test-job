import { Component } from '@angular/core';
import { NotificationsService } from '../../design/services/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private notificationsService: NotificationsService) { }
  showFuncionalityNotAvailable() {
    this.notificationsService.showNotification('warning', 'Funcionalidad aun no esta disponible');
  }
}
