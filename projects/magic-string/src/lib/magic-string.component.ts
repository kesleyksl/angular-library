import { ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'km-magic-string',
  template: `
  <input type="text" (keydown.enter)="markText($event.target)">
  <div #content [hidden]="true">
    <ng-content></ng-content>
  </div>
  <div [innerHTML]="controlledContent">
  </div>
  `,
  styles: [`.mark{background-color: yellow}`
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent{
  @ViewChild('content') content!: ElementRef;
  originalContent!: string;
  controlledContent!: string;
  constructor(private readonly det: ChangeDetectorRef) { }
  ngOnInit(){
  }
  ngAfterViewInit(): void {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
    this.det.detectChanges();

  }
  markText(value: any){
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value.value, 'g'), 
      `<span class="mark">${value.value}</span>`)
  }
}
