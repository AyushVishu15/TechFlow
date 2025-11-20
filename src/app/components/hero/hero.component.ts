import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent {
  onGetStartedClick() {
    alert("Welcome! Ready to build the future? Sign up now!")
  }

  onExploreClick() {
    const element = document.getElementById("features")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}
