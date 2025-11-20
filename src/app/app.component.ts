import { Component } from "@angular/core"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { HeroComponent } from "./components/hero/hero.component"
import { FeaturesComponent } from "./components/features/features.component"
import { ReviewsComponent } from "./components/reviews/reviews.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FeaturesComponent, ReviewsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "TechFlow"
}
