import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeviewComponent } from './home-view.component';


describe('HomeViewComponent', () => {
  let component: HomeviewComponent;
  let fixture: ComponentFixture<HomeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeviewComponent]
    });
    fixture = TestBed.createComponent(HomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
