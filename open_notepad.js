const { exec } = require('child_process');

// Function to open Notepad
const openNotepad = () => {
    return new Promise((resolve, reject) => {
        // Open Notepad
        const notepad = exec('notepad', (error) => {
            if (error) {
                reject(error);
            }
        });

        // Resolve the promise with the notepad process
        resolve(notepad);
    });
};

// Function to close Notepad
const closeNotepad = (notepadProcess) => {
    return new Promise((resolve, reject) => {
        // Kill the Notepad process
        notepadProcess.kill('SIGTERM');

        // Resolve the promise after closing
        resolve();
    });
};

// Function to hold the screen for a certain period
const holdScreen = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

// Main function to open Notepad, hold the screen, and close Notepad
const main = async () => {
    try {
        // Open Notepad
        const notepadProcess = await openNotepad();
        console.log('Notepad opened.');

        // Hold the screen for 5 seconds (5000 milliseconds)
        await holdScreen(5000);
        console.log('Held screen for 5 seconds.');

        // Close Notepad
        await closeNotepad(notepadProcess);
        console.log('Notepad closed.');
    } catch (error) {
        console.error('Error:', error);
    }
};

// Run the main function
main();
