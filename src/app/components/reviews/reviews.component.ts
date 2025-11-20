import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Review {
  name: string
  role: string
  company: string
  text: string
  rating: number
  avatar: string
}

@Component({
  selector: "app-reviews",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./reviews.component.html",
  styleUrl: "./reviews.component.css",
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStartup Inc",
      text: "TechFlow has been a game-changer for our team. We shipped features 3x faster!",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Solutions",
      text: "The best platform we've used. Seamless integration and incredible support.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Emma Williams",
      role: "Developer",
      company: "Cloud Innovations",
      text: "Intuitive, powerful, and production-ready. Highly recommended!",
      rating: 5,
      avatar: "👩‍🔬",
    },
    {
      name: "James Martinez",
      role: "Engineering Lead",
      company: "Future Tech",
      text: "Outstanding platform. Reduced our development time significantly.",
      rating: 5,
      avatar: "👨‍⚕️",
    },
  ]

  getRating(rating: number) {
    return Array(rating).fill(0)
  }
}
