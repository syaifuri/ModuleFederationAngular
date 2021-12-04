import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-app02',
  templateUrl: './app02.component.html',
  styleUrls: ['./app02.component.scss'],
})
export class App02Component implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { AppComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:5500/remoteEntry.js',
      remoteName: 'app02',
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
