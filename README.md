# Feed-Curator
## Project Overview
A browser extension that acts as a mental health filter for social media. It doesn't just block keywords; it uses AI to understand the "vibe" and "value" of posts on LinkedIn and YouTube, hiding content that doesn't align with user goals.

## Problem Statement
Social media algorithms prioritize engagement through outrage, negativity, and "doomscrolling." Users want to see high-value, educational content but are forced to see "filler" or "toxic" posts.

## Core Features (MVP)
1. DOM Interceptor: A script that detects when a new post is loaded on the screen (LinkedIn/YouTube).
2. Vibe Analysis Engine: Sends post text to an LLM to categorize it (e.g., "Educational," "Outrage," "Humor," "Humble-brag").
3. The "Cloak": Automatically hides or blurs posts that the user has marked as "low-vibe" in their settings.

## Nice-to-Have Features
1. YouTube Transcript Analysis: Reading the hidden transcript of a video to decide if it's "Clickbait" before the user clicks.
2. Statistics Dashboard: Shows the user how many "low-value" posts were blocked today, reinforcing the app's value.

## Stretch Goals
1. Image Recognition: Detecting "outrage-face" thumbnails on YouTube and blurring them.
2. Custom AI Personalities: Allowing the user to say: "Act like a Stoic philosopher—hide anything that is a distraction from my deep work."

## Technical Stack
- Front-end: JavaScript/TypeScript (Chrome Extension API), React (for the Popup/Settings page).
- Back-end: Node.js (with Express) to proxy AI requests and hide API keys.
- Database: MongoDB (to store user-specific filter settings and cached post scores).
- Other: OpenAI GPT-4o-mini (for fast text analysis), Cheerio/Puppeteer (for local DOM parsing).

## Installation & Setup

### Prerequisites
* **Node.js**: Version 18.x or higher.
* **npm**: Included with Node.js.
* **Browser**: Chrome or any Chromium-based browser (Edge, Brave).

### 1. Clone the Repository
```bash
git clone https://github.com/matanatkhalil/Feed-Curator.git
cd Feed-Curator
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Available Scripts
| Command | Description |
| :--- | :--- |
| `npm run lint` | Runs **ESLint** to catch syntax errors and ensure code quality. |
| `npm run build` | Compiles the extension and prepares it for production. |
| `npm test` | Executes the test suite (currently a placeholder). |
| `npm run format`| **Fixes** and cleans up your code formatting locally.|
| `npm run format:check`| **Checks** if code is properly formatted (used in CI). |

## Project Structure
- Content Script: Injected into the social media site to find and hide HTML elements.
- Background Service Worker: Handles communication between the extension and the AI server.
- Classification API: The logic that prompts the AI to "judge" a post's vibe.

## Success Criteria
- [ ] Extension successfully identifies and hides a "marriage/relationship/self-aggrandizing content" post on LinkedIn.
- [ ] The user can toggle filters on/off in real-time.
- [ ] No significant slowdown in browser scrolling speed while the extension is active.
