import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-file-json',
  templateUrl: './post-file-json.component.html',
  styleUrls: ['./post-file-json.component.scss'],
})
export class PostFileJsonComponent {
  title = '';
  message = '';
  file?: File;
  response?: PostFileJsonResponse;

  constructor(private http: HttpClient) {}

  onFileSelect(e: Event): void {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      this.file = files[0];
    }
  }

  post(): void {
    const req = {
      title: this.title,
      message: this.message,
    };
    const fd = new FormData();
    fd.append(
      'body',
      new Blob([JSON.stringify(req)], { type: 'application/json' })
    );
    if (this.file) {
      fd.append('file', this.file);
    }

    console.log(fd.get('body'));
    this.http.post<PostFileJsonResponse>('/api/test', fd).subscribe({
      next: (response) => {
        console.log(response);
        this.response = response;
      },
    });
  }
}

export interface PostFileJsonRequest {
  title: string;
  message: string;
}

export interface PostFileJsonResponse {
  title: string;
  message: string;
  fileName?: string;
}
