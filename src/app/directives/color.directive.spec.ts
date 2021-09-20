import {ColorDirective} from './color.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

@Component({
    template: `
        <p appColor="yellow">test 1</p>
        <p appColor="blue">test 2</p>
    `
})
class HostComponent {}

describe('ColorDirective', () => {
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ColorDirective,
                HostComponent
            ]
        })

        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
    })

    it('should create an instance', () => {
        const directive = new ColorDirective(null);
        expect(directive).toBeTruthy();
    });

    it('should apply input color', () => {
        let debugElement = fixture.debugElement.queryAll(By.css('p'))[0];

        expect(debugElement.nativeElement.style.backgroundColor).toBe('yellow');
    });

    it('should apply default color', () => {
        let debugElement = fixture.debugElement.queryAll(By.css('p'))[1];

        let directive = debugElement.injector.get(ColorDirective);

        expect(debugElement.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
    })
});
