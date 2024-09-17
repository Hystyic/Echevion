# Echevion

Echevion is a web-based recommender system designed to match creative professionals (e.g., designers, artists, developers) with employers based on mutual preferences. It leverages the Gale-Shapley algorithm, commonly known as the Stable Marriage algorithm, to ensure optimal matching.

## Features

- **Professional-to-Employer Matching**: Matches creative professionals to employers based on preferences provided by both parties.
- **Gale-Shapley Algorithm**: Uses the Gale-Shapley algorithm to ensure stable and optimal pairings where no two entities would prefer each other over their current match.
- **User-Friendly Interface**: Simple, intuitive web-based interface for both employers and professionals to provide their preferences and view matches.
- **Dynamic Recommendations**: Continuous improvement of recommendations as more users join the platform and provide feedback.

## Algorithm

Echevion’s core recommendation engine is built using the **Gale-Shapley Algorithm**, which solves the Stable Marriage Problem. The algorithm guarantees a stable matching where no two participants would rather be paired with someone else than their current match.

### How Gale-Shapley Works

1. Both employers and creative professionals rank each other based on their preferences.
2. The algorithm proceeds in rounds:
   - Professionals propose to the highest-ranked employer on their list.
   - Employers tentatively accept the best offer (based on their ranking) and reject the others.
   - Rejected professionals move on to propose to the next employer on their list.
3. The process repeats until all professionals are matched, and no unmatched professional or employer prefers each other over their current match.

This ensures that the matches are "stable" and mutually beneficial.

## Technology Stack

- **Frontend**: React.js for a modern, responsive user interface.
- **Backend**: Node.js with Express.js for handling API requests and managing user data.
- **Algorithm**: Gale-Shapley algorithm implemented in JavaScript to handle the matching logic.

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Hystyic/Echevion.git
   cd Echevion
   npm install
   npm start

### Screenshot
<img width="1265" alt="image" src="https://github.com/user-attachments/assets/fd1069fd-d99e-4959-9c29-107a6917f973">

