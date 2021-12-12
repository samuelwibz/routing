import { ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { RecipeDetailComponent } from "./recipe-detail.component"
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { appRoutes, AppRoutingModule } from "src/app/app-routing-module";
import { RecipeEditComponent } from "src/app/recipe-edit/recipe-edit.component";
import { RecipesService } from "../recipes.service";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Recipes } from "../recipes.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { RecipesComponent } from "../recipes.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";

class RecipesServiceDependencyStub{

}
describe ('RecipeDetailComponent', () => {
    let component: RecipeDetailComponent;
    let fixture: ComponentFixture<RecipeDetailComponent>;
    let location: Location;
    let router: Router;
    let testBedRecipesService: RecipesService;
    let testBedShoppingListService: ShoppingListService;
    let recipesServiceDependency: Recipes; 
    let spy: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(appRoutes), AppRoutingModule],
            declarations: [RecipeDetailComponent, RecipeEditComponent, RecipesComponent, RecipeListComponent],
            providers: [
                RecipesService,
                {provide: Recipes, useClass: RecipesServiceDependencyStub},
                ShoppingListService
            ]
        })
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(RecipeDetailComponent);
        router.initialNavigation();
        component = fixture.componentInstance;
        fixture.detectChanges();
        testBedRecipesService = TestBed.get(RecipesService);
        testBedShoppingListService = TestBed.get(ShoppingListService);
        recipesServiceDependency = TestBed.get(Recipes);

    })
    it (`should create`, () => {
        expect(component).toBeTruthy();
    })
/*`
    it(`should create an instance of the server`, () => {
        
        expect(testBedShoppingListService).toBeDefined();
       
    })
*/
    /*
    it(`Service injected via inject() and TestBed.get() should be the same instance`, 
        inject([RecipesService], (injectService: RecipesService) => {
            expect(injectService).toBe(testBedRecipesService);
        })
        
    );
    */
})

