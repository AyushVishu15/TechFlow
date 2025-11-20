import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Feature {
  icon: string
  title: string
  description: string
}

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./features.component.html",
  styleUrl: "./features.component.css",
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Deploy your applications in seconds with our optimized infrastructure",
    },
    {
      icon: "🔐",
      title: "Enterprise Security",
      description: "Industry-leading security standards and compliance certifications",
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Real-time analytics to track performance and user behavior",
    },
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Intelligent automation to streamline your development workflow",
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connect with your favorite tools and services effortlessly",
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Work together in real-time with advanced collaboration features",
    },
  ]
}
