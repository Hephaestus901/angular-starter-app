import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("appComponent", () => {
    const initialSetup = async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();
    };

    it("should create the app", async () => {
        expect.hasAssertions();
        await initialSetup();
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-panel'`, async () => {
        expect.hasAssertions();
        await initialSetup();
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toStrictEqual("angular-panel");
    });

    it("should render title", async () => {
        expect.hasAssertions();
        await initialSetup();
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".content span")?.textContent).toContain("angular-panel app is running!");
    });
});
