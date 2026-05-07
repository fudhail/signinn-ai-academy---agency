<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bdbb318a-36a4-4194-9561-a84b46562f78

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## LAN Hosting

Use these commands when you want to open the app from another device on the same network:

1. Development on LAN:
   `npm run dev`
2. Production preview on LAN:
   `npm run build` then `npm run preview:lan`

Vite will print the local and network URLs in the terminal. Use the `Network` address from the device you want to connect from.
