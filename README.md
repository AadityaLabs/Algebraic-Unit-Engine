# Algebraic Unit Engine

A polished, interactive unit conversion tool with a math-inspired UI, designed for quick conversions across length, mass, temperature, area, volume, speed, time, digital storage, energy, and pressure.

## Features

- Dark/light theme support with smooth UI transitions
- Interactive unit conversion across 10 categories
- Temperature conversions with proper non-linear formula handling
- Conversion proof panel showing algebraic transformation and results
- Live conversion history log stored in `localStorage`
- Responsive design built with Tailwind CSS CDN
- Animated 3D background canvas for modern visual context

## Built With

- HTML
- Tailwind CSS (via CDN)
- JavaScript
- FontAwesome icons (via CDN)
- Google Fonts: Inter, Fira Code

## Project Structure

- `Algebraic Unit Engine.html` — main application page
- `style.css` — custom styling and animations
- `app.js` — core application logic, conversions, animation, and history

## Usage

1. Open `Algebraic Unit Engine.html` in your browser.
2. Choose a conversion category from the top navigation.
3. Enter a value in the `INPUT QUANTITY [α]` field.
4. Select the source and destination units.
5. View the converted result, proof steps, and comparison bars.
6. Use the history panel to track recent conversions.

## Notes

- No build tools or package installation required.
- The application runs entirely in the browser.
- History is persisted to `localStorage` and can be cleared from the UI.

## License

This project is available to use freely. Add your preferred license if you want to publish it on GitHub.
