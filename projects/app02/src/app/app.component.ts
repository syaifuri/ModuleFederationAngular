import { Component } from '@angular/core';
import { AnyCnameRecord } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'application 2';
  card = {
    buttons: ['read more'],
    content: `this is only words for web application 2.`,
    icons: ['favorite', 'share'],
    title: 'Article 2',
  };

  public onDialogOKSelected(event: any) {
    event.dialog.close();
  }
}
