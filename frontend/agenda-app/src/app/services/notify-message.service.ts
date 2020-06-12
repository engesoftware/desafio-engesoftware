import { Injectable } from '@angular/core';
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";

@Injectable({
  providedIn: 'root'
})
export class NotifyMessageService {

  constructor() { }

  success(text: string){
      this.alert(text, Types.succes);
  }

  error(text: string){
      this.alert(text, Types.error);
  }

  private alert(text: string, type: Types){
      this.pnotify.alert({text, type});
  }

  private get pnotify(){
      PNotifyButtons;
      return PNotify;
  }
}

enum Types {
  succes = 'success',
  error = 'error'
}
