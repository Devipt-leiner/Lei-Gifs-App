import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsTemplateComponent } from './gifs-template.component';

describe('GifsTemplateComponent', () => {
  let component: GifsTemplateComponent;
  let fixture: ComponentFixture<GifsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
