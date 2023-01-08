import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.scss'],
})
export class ViewPdfComponent {
  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;
  file: File | null = null;
  url: string | null = null;

  onClickFileInputButton(): void {
    this.fileInput?.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files = this.fileInput?.nativeElement.files;
    if (files) {
      this.file = files[0];
      this.url = URL.createObjectURL(this.file);
    }
  }

  clearFile(): void {
    this.fileInput.nativeElement.value = '';
    this.file = null;
  }

  openWindow(e: Event): void {
    e.preventDefault();
    if (this.url) {
      window.open(this.url, undefined, 'popup');
    }
  }
}
