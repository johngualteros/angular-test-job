import { TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import { NotifierModule } from 'angular-notifier';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotifierModule]
    });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have showNotification method', () => {
    expect(service.showNotification).toBeTruthy();
  });
});
