# Node Version Manager

Node Version Manager (nvm) is a tool that allows you to easily install, manage, and switch between multiple versions of Node.js on your computer. It is a convenient way to ensure that you have the correct version of Node.js installed for a particular project, and it makes it easy to switch between different versions as needed.

Here's how to install nvm on Windows, Linux, and macOS:

## Windows

1. Download the `nvm-setup.exe` file from the nvm GitHub page (https://github.com/coreybutler/nvm-windows/releases).
2. Double click the downloaded file.
3. Follow the instruction.

To confirm that nvm has been installed, run the command `nvm -v`. You should see the version number of nvm displayed.

## Linux

1. Open a terminal window.
2. Run the command `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`. This will download and run the nvm installation script.
3. Close the terminal window and reopen it.

To confirm that nvm has been installed, run the command `nvm -v`. You should see the version number of nvm displayed.

## MacOS

1. Open a terminal window.
2. Run the command `brew install nvm`. This will install nvm using Homebrew, a package manager for macOS.
3. Close the terminal window and reopen it.

To confirm that nvm has been installed, run the command `nvm -v`. You should see the version number of nvm displayed.

Once nvm is installed, you can use it to install and manage different versions of Node.js. To see a list of available versions, run the command `nvm list-remote`. To install a specific version, use the command `nvm install` followed by the version number. For example, to install version 12.16.3, you would run the command `nvm install 12.16.3`. You can then use the command nvm use followed by the version number to switch between different versions of Node.js.

I hope this helps! Let me know if you have any questions.
