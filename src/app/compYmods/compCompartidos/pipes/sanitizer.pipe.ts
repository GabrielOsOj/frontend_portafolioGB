import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer',
})
export class SanitizerPipe implements PipeTransform {
  constructor(private Sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.Sanitizer.bypassSecurityTrustUrl(url);
  }
}
