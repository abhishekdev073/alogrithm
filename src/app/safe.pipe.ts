import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safe1'
})
export class SafePipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) { }
  transform(v: string):SafeHtml {
      return this._sanitizer.bypassSecurityTrustHtml(v);
  }

}
