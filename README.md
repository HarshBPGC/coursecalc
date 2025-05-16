# Course Option Calculator

A web application designed to help students make informed decisions about choosing between PCT (Progressive Continuous Test) and Comprehensive Exam options for their courses.

## Purpose

This calculator helps students analyze their performance in both PCT and Comprehensive exams to determine which option would give them a better final score. It takes into account:
- Individual scores in both PCT and Comprehensive exams
- Class averages for both options
- Percentage comparisons
- Relative performance against class averages

## Features

- Add up to 10 courses for analysis
- Input PCT and Comprehensive exam scores
- View class averages for both options
- Get detailed recommendations with:
  - Clear choice recommendation (PCT/Comprehensive/Equal)
  - Percentage advantage of the recommended option
  - Performance comparison with class average
- Modern, responsive UI
- Easy to use interface
- Real-time calculations

## How to Use

1. Enter course details:
   - Course name
   - PCT score and total marks
   - PCT class average
   - Comprehensive exam score and total marks
   - Comprehensive exam class average

2. Click "Add Course" to add it to the analysis table

3. View the recommendations:
   - Green alert: PCT is recommended
   - Blue alert: Comprehensive exam is recommended
   - Yellow alert: Both options give equal results

4. The recommendation includes:
   - The better option
   - How much better it is (in percentage points)
   - Your performance compared to class average

## Technical Details

- Built with React and TypeScript
- Uses Material-UI for modern, responsive design
- Real-time calculations and updates
- Mobile-friendly interface

## Live Demo

[Add your deployed URL here after deployment]

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/HarshBPGC/coursecalc.git
```

2. Install dependencies:
```bash
cd coursecalc
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
