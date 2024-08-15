import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  userAvatar: string = 'assets/default-avatar.png'; // Default avatar

  constructor(private authService: AuthService) {
      this.loadUserProfile();
  }

  loadUserProfile() {
      const user = this.authService.getUserRoles(); // Assuming you have a method to get the logged-in user
      if (user && user.avatarUrl) {
          this.userAvatar = user.avatarUrl; // Set the avatar URL from the user data
      }
  }
  reports = [
    { id: 1, title: 'Burglary in Downtown', date: 'August 1, 2024', description: 'A burglary occurred at the downtown retail store. No injuries reported.' },
    { id: 2, title: 'Robbery Attempt', date: 'July 30, 2024', description: 'An attempted robbery at the local convenience store. Suspects were apprehended.' },
    { id: 3, title: 'Assault Incident', date: 'July 28, 2024', description: 'An assault incident reported near the park. Victim received medical treatment.' },
    { id: 4, title: 'Murder', date: 'January 2, 2024', description: 'A murder incident reported near the hotel. Victim is found dead.' }
  ];

  highlights = [
    { image: 'assets/volunteer.jpg', title: 'Neighborhood Watch Program', description: 'Join our neighborhood watch program to help keep your community safe. Volunteers are needed to patrol and report suspicious activities.', link: '#' },
    { image: 'assets/campaign.jpg', title: 'Safety Workshops', description: 'Attend our safety workshops to learn more about crime prevention, personal safety, and emergency response strategies.', link: '#' },
    { image: 'assets/community clean.jpg', title: 'Community Clean-Up Day', description: 'Participate in our community clean-up day to help beautify our neighborhood and promote environmental responsibility.', link: '#' }
  ];

  tips = [
    { image: 'assets/awareness.png', title: 'Tip 1: Be Aware of Your Surroundings', description: 'Always stay alert and be aware of your surroundings, especially in unfamiliar areas.' },
    { image: 'assets/belongings.png', title: 'Tip 2: Secure Your Belongings', description: 'Keep your belongings close and secure to avoid theft and loss.' },
    { image: 'assets/trust.png', title: 'Tip 3: Trust Your Instincts', description: 'If something doesn’t feel right, trust your instincts and take action to protect yourself.' },
    { image: 'assets/img/report suspicious 2.png', title: 'Tip 4: Report Suspicious Activity', description: 'If you notice anything suspicious, report it to the authorities immediately.' }
  ];
}