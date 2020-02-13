import { TestBed, inject } from '@angular/core/testing';

import { NotifyMessageService } from './notify-message.service';

describe('NotifyMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyMessageService]
    });
  });

  it('should be created', inject([NotifyMessageService], (service: NotifyMessageService) => {
    expect(service).toBeTruthy();
  }));
});
