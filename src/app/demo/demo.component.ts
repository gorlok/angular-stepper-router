import {
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { Subject } from "rxjs";

export interface StepConfig {
  title: string;
  index: number;
  key: string;
}
@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent implements OnInit {

  steps: any[] = [];
  subject = new Subject();

  constructor(private router: Router) {}

  ngOnInit() {
    let i = -1;
    while (++i < 4) {
      this.steps.push({
        title: `Step ${i + 1}`,
        index: i
      });
    }
    this.navigate();
  }

  public selectedStepIndex: number = 0;
  public loadingStep: boolean = false;
  
  selectionChanged(event: any) {
      this.selectedStepIndex = event.selectedIndex;
      if (event.previouslySelectedIndex != event.selectedIndex) {
          this.loadingStep = true;
          //Wait 1 sec. before showing the step
          setTimeout(() => {
              this.navigate();
              this.loadingStep = false;
          }, 1000);
      } else {
          this.navigate();
      }
  }
  
  private navigate(): void {
      const url = 'demo/step' + (this.selectedStepIndex+1);
      //'/some-path/' + this.links[this.selectedStepIndex].path;
      this.router.navigate([url]);//using -> private router: Router
  }
  
}
