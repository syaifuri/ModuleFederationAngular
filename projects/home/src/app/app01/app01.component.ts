import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-app01',
  templateUrl: './app01.component.html',
  styleUrls: ['./app01.component.scss'],
})
export class App01Component implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { AppComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      remoteName: 'app01',
      exposedModule: './Component',
    });
    const componentRef: ComponentRef<{
      equipmentid: string;
    }> = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(AppComponent)
    );
    componentRef.instance.equipmentid = 'HD_001';
  }
}
