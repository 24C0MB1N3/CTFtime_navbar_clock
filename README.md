# CTF Clock Extension

## Overview

The **CTF Clock Extension** is a simple browser extension that adds a UTC clock to the navigation bar of the CTFtime website (`https://ctftime.org/`). This extension helps users keep track of the current UTC time while navigating through various Capture The Flag (CTF) events and resources.

## Features

- Displays the current UTC time in the navigation bar.
- Updates every second to provide real-time information.
- Lightweight and easy to install.

## Installation

### Prerequisites

- A modern web browser that supports extensions (e.g., Google Chrome, Microsoft Edge).

### Steps to Install

1. **Download the Extension Files**: Clone or download the repository containing the extension files.

2. **Open the Extensions Page**:
   - For Chrome: Navigate to `chrome://extensions/`
   - For Edge: Navigate to `edge://extensions/`

3. **Enable Developer Mode**: Toggle the "Developer mode" switch in the top right corner of the extensions page.

4. **Load the Extension**:
   - Click on the "Load unpacked" button.
   - Select the directory where the extension files are located.

5. **Visit CTFtime**: Open your browser and navigate to `https://ctftime.org/`. You should see the UTC clock displayed in the navigation bar.

## Files Included

- `manifest.json`: The manifest file that defines the extension's properties and permissions.
- `content.js`: The content script that adds the UTC clock to the navigation bar.
- `icon.png`: An optional icon for the extension (48x48 pixels).

## Usage

Once installed, the UTC clock will automatically appear in the navigation bar of the CTFtime website. The clock updates every second to reflect the current UTC time.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Thanks to the CTFtime community for providing a platform for CTF enthusiasts.
