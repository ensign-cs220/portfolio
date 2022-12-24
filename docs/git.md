# Git

Git is a version control system that is widely used for tracking changes in computer files and coordinating work on those files among multiple people. It is important because it allows developers to work collaboratively on a project without the need to constantly transfer files back and forth.

With Git, developers can make changes to files, and those changes are recorded in a history of the project. This history allows developers to see exactly what changes have been made, by whom, and when. It also allows developers to easily revert to previous versions of the project if necessary.

Git is particularly useful in software development, where multiple people may be working on the same codebase and making frequent changes. It helps to ensure that everyone is working with the most up-to-date version of the code and that changes can be easily tracked and coordinated.

## Installation & Setup

To install and configure Git, follow these steps:

### On Windows

Go to the [Git download page](https://git-scm.com/download/win) and click on the Download button to download the latest version of Git for Windows. Run the installer and follow the prompts to complete the installation.

### On macOS

If you don't already have Homebrew installed, you can install it by running the following command in a terminal:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, you can use it to install Git by running the following command in a terminal:

```shell
brew install git
```

### On Linux

Git is usually included with most Linux distributions, so you may already have it installed. If not, you can install it using your distribution's package manager. For example, on Debian or Ubuntu, you can use the following command:

```bash
sudo apt-get install git
```

### Configuration

Once Git is installed, you will need to configure it with your name and email address. This is important because Git uses this information to associate your changes with your identity. To configure Git, open a terminal and enter the following commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Creating a GitHub Account

To create a GitHub account, follow these steps:

1. Go to the GitHub website (https://github.com/).
2. Click on the Sign up button in the top right corner of the page.
3. Enter your email address, choose a username, and set a password.
4. Click on the Continue button.
5. Verify your email address by clicking on the link sent to you by GitHub.
6. Once you have verified your email address, you can complete the sign-up process by filling out your profile information and choosing your plan.
7. Click on the Finish sign up button to complete the process.

That's it! You now have a GitHub account and are ready to start using the platform.

### Using SSH for GitHub Authentication

Using SSH for GitHub authentication is a secure and convenient way to access your repositories on the platform. With SSH, you can authenticate using a public-private key pair rather than a username and password, which is more secure and less prone to compromise. Additionally, SSH allows you to authenticate automatically without having to enter your credentials each time, which can be convenient when working with Git on the command line.

To set up an SSH key for GitHub, follow these steps:

1. Check for existing SSH keys:
   Before you generate a new SSH key, you should check to see if you already have one. To do this, open a terminal and enter the following command:

```bash
ls -al ~/.ssh
```

This will list the files in the .ssh directory, which is where SSH keys are usually stored. If you see a file named id_rsa.pub, then you already have an SSH key set up and you can skip to step 3.

2. Generate a new SSH key:

If you don't already have an SSH key, you will need to generate a new one. To do this, enter the following command in a terminal:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

This will create a new SSH key with the specified email address. When prompted, enter a passphrase to protect your key. This passphrase is optional, but it is recommended for added security.

3. Add the SSH key to your GitHub account:

Once you have generated an SSH key, you need to add it to your GitHub account so that you can use it to authenticate your Git commits. To do this, copy the contents of your `id_rsa.pub` file to your clipboard by running the following command:

```bash
# This will display the content of your public key
cat ~/.ssh/id_rsa.pub
```

Then, log in to your GitHub account and go to the [Settings page](https://github.com/settings/profile). Under the [SSH and GPG keys section](https://github.com/settings/keys), click on the New SSH key button. In the Title field, enter a descriptive name for the key (e.g., "Personal MacBook"). In the Key field, paste the contents of your public key.
