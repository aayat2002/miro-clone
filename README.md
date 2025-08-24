# Miro Clone

This project is a clone of the popular Miro whiteboard application, built using modern web technologies and tools.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [Convex](https://www.convex.dev/)
- **Real-time Collaboration**: [Liveblocks](https://liveblocks.io/)

## Deployment

The application is deployed on Vercel. Check it out [here](https://miro-clone-chi.vercel.app).

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/aayat2002/miro-clone
   cd miro-clone
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add your configuration variables. You can explore the `.env.example` file for more information.

4. **Clerk Setup**

   - Enable Organization from the "Organization settings"
   - Add JWT Template named "convex"
   - Make sure to have `org_id` and `org_role` inside **Claims**
   - Don't forget to add issuer into the `auth.config.js` inside /convex.

5. **Prepare the convex functions:**

   ```sh
   npx convex dev
   ```

6. **Run the development server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Real-time collaboration**: Multiple users can interact on the whiteboard simultaneously.
- **Interactive UI**: Intuitive and responsive user interface for a seamless experience.
- **Scalable backend**: Powered by Convex for managing backend logic and data storage.
- **Live updates**: Instant updates using Liveblocks for real-time synchronization.

### New Features

- **Keyboard Shortcuts**:

  - Move Selected Layers with arrow keys
  - Duplicate layers with `Ctrl + D`
  - Focus on the search input quickly

- **Enhanced Selection Tool**:

  - Added duplicate icon in the selection box
  - Layers selected only if fully inside the selection rectangle
  - Shortcuts for layer insertion

- **Board Creation Limit**:

  - Users can create up to 5 boards per organization

- **Reset Camera**:

  - Reset camera button appears after scrolling through the canvas

- **Color Picker**:

  - Infinite color combinations with debouncing to prevent multiple undo/redo actions

- **Export as PNG**:

  - Export the board as a PNG image for saving and sharing

- **Bug Fixes**:
  - Improved search and favorite functionality using `useSearchParams`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

🔗 GitHub Repo: [https://github.com/aayat2002/miro-clone](https://github.com/aayat2002/miro-clone)
