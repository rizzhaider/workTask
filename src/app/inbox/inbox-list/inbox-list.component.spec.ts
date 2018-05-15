import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxListComponent } from './inbox-list.component';

describe('InboxListComponent', () => {
  let component: InboxListComponent;
  let fixture: ComponentFixture<InboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
