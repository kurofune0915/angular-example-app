import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFileJsonComponent } from './post-file-json.component';

describe('PostFileJsonComponent', () => {
  let component: PostFileJsonComponent;
  let fixture: ComponentFixture<PostFileJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFileJsonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostFileJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
