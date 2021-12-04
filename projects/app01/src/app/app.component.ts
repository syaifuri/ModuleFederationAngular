import { Component } from '@angular/core';
import { AnyCnameRecord } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app01';
  card = {
    buttons: ['read more'],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean.`,
    icons: ['favorite', 'share'],
    imageUrl:
      'https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg',
    title: 'New York City',
  };

  public onDialogOKSelected(event: any) {
    event.dialog.close();
  }
}
