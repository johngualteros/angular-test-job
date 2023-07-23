import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }
  // event emitter to open modal
  $openModal = new EventEmitter<boolean>();
}
