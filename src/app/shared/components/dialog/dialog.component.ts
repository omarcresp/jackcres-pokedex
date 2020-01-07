import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.styl']
})
export class DialogComponent {

  @Output() eventClose: EventEmitter<void>;

  public enabled: boolean;

  private styleTag: HTMLStyleElement;

  constructor() {
    this.styleTag = this.buildStyleElement();
    this.eventClose = new EventEmitter<void>();
  }

  openModal(): void {
    this.enabled = true;
    document.body.appendChild(this.styleTag);
  }

  closeModal(): void {
    if (this.enabled) {
      this.enabled = false;
      document.body.removeChild(this.styleTag);
      this.eventClose.emit();
    }
  }

  buildStyleElement(): HTMLStyleElement {
    const style = document.createElement('style');

    style.setAttribute('data-debug', 'Injected by WindowScrolling service.');
    style.textContent = 'body { overflow: hidden !important ; }';

    return style;
  }

}
