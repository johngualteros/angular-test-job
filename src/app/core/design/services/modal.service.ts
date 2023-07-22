import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }
  $openModal = new EventEmitter<boolean>();
}
