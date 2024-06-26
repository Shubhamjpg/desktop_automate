Notepad Automation Script
This Node.js script demonstrates how to automate the opening and closing of Notepad using child_process, and how to hold the screen for a specified period of time.

Prerequisites
Node.js installed on your machine (Download Node.js)
Installation
Clone the repository:
git clone https://github.com/your/repository.git
Navigate to the project directory:
cd repository
Install dependencies:
npm install
Usage
Running the Script
To run the script:
node script.js
Functionality
Opening Notepad: The script opens Notepad using child_process.exec.

Holding the Screen: It holds the screen for 5 seconds using a promise-based timeout function.

Closing Notepad: It closes Notepad by killing the process after the hold time.
