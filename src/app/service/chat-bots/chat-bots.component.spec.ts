import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotsComponent } from './chat-bots.component';

describe('ChatBotsComponent', () => {
  let component: ChatBotsComponent;
  let fixture: ComponentFixture<ChatBotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
