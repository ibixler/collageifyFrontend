import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  
  lalaList: string[] = [
    "Implementing secure authentication mechanisms",
    "User identity verification through multi-factor authentication",
    "Protecting user credentials with strong hashing algorithms",
    "Enforcing password complexity requirements",
    "Implementing session management and expiration",
    "Securing user data with encryption at rest and in transit",
    "Preventing common security vulnerabilities like cross-site scripting (XSS) and SQL injection",
    "Implementing role-based access control (RBAC)",
    "Enabling single sign-on (SSO) across multiple applications",
    "Implementing secure password reset and recovery flows",
    "Monitoring and logging user authentication events",
    "Implementing secure token-based authentication",
    "Managing user consent and privacy preferences",
    "Implementing account lockout policies to prevent brute-force attacks",
    "Integrating with identity providers (IdPs) like OAuth or OpenID Connect",
    "Implementing secure session storage mechanisms",
    "Securing user authentication against common threats like phishing and social engineering",
    "Implementing secure account creation and user onboarding processes",
    "Enabling secure password storage and retrieval",
    "Implementing secure authentication for mobile and web applications",
  ];
  lala: string = "gfgdf";
  ngOnInit() {
    this.rotateText();
  }

  rotateText() {
    let index = 0;
    this.lala = this.lalaList[index];

    setInterval(() => {
      index = (index + 1) % this.lalaList.length;
      this.lala = this.lalaList[index];
    }, this.getRandomTimeInterval());
  }

  getRandomTimeInterval(): number {
    return Math.floor(Math.random() * 3000) + 1000; // Random interval between 1 and 4 seconds (1000ms = 1s)
  }

}