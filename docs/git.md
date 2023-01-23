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
git config --global push.default simple
git config --global init.defaultBranch main
git config --global core.excludesfile ~/.gitignore
git config --global --add --bool push.autoSetupRemote true
# for windows users:
git config --global core.autocrlf false
git config --global core.eol lf
```

### Using SSH for GitHub authentication

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

# Commit Clarity

Are you tired of struggling to make sense of your commit messages? [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) can help! This handy convention provides a standardized format for writing commit messages, which can make it easier to understand and track changes to your codebase. Plus, it's super easy to use and can help improve the readability and clarity of your commit messages. So why not give it a try and see how much easier it is to keep track of your code changes? With Conventional Commits, you'll be able to better understand your codebase and collaborate more effectively with your team. Give it a shot and see for yourself!

Conventional Commits have their own special code words for different types of commits, and they can include any of these magic keywords:

-   `build`: build: update build scripts for new dependency
-   `ci`: ci: update CircleCI config with new pipeline
-   `docs`: docs: update README with new instructions for installation
-   `feat`: feat: add new feature for exporting data
-   `fix`: fix: fix bug in login form
-   `perf`: perf: optimize database queries for performance
-   `refactor`: refactor: rewrite function for readability
-   `style`: style: fix formatting in codebase
-   `test`: test: add tests for new feature

There are many short videos on YouTube that explain how to use Conventional Commits. Here are a few that you might find helpful:

"Conventional Commits: A Beginner's Guide" by Fireship (https://www.youtube.com/watch?v=T1QEs3mdJoc) - This video provides a simple and easy-to-understand introduction to Conventional Commits. It covers the basic principles of Conventional Commits and provides examples of how to use them in practice.

"Conventional Commits in 5 Minutes" by Traversy Media (https://www.youtube.com/watch?v=5U5LW-nN6zg) - This video provides a quick overview of Conventional Commits, including the syntax and structure of commit messages.

"Conventional Commits: Tips and Tricks" by JavaScript Mastery (https://www.youtube.com/watch?v=kM8KvD-0Y9U) - This video provides more advanced tips and tricks for using Conventional Commits, including how to use them with tools like Semantic Release.

I hope these videos are helpful in explaining how to use Conventional Commits! Let me know if you have any other questions.

# The Code Shepherd

[Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) is a workflow for managing branches in a Git repository. It provides a set of rules for how branches should be created, merged, and deleted, and is designed to help teams collaborate on codebase changes in a structured and organized way.

Imagine you have a team of developers working on a codebase. They all need to make changes to the code, but they can't all work on the same branch at the same time, or they might accidentally overwrite each other's work. That's where Gitflow comes in!

With Gitflow, each programmer gets their own branch to work on. When they're done making changes, they can send a "request" to merge their changes into the main branch (kind of like sending a package through the mail). But before the changes are actually merged, someone else has to "approve" the request and make sure everything looks good. This way, everyone's changes get reviewed before they're added to the main branch, which helps to prevent bugs and other issues.

Gitflow is kind of like a traffic controller for code changes. It helps to keep everything organized and moving smoothly, so that everyone can work together without causing too many "traffic jams" or "accidents". It's a handy tool for teams who want to make sure their codebase stays in good shape!

There are many short videos on YouTube that explain how Gitflow works. Here are a few that you might find helpful:

"Gitflow Workflow" by Atlassian (https://www.youtube.com/watch?v=aJnFGMclhU8) - This video is a quick and easy-to-understand introduction to the Gitflow workflow. It covers the basic principles of Gitflow and provides a visual representation of how it works.

"GitFlow explained" by Martin Führlinger (https://www.youtube.com/watch?v=xXiqLdH5BHM) - This video provides a more in-depth explanation of the Gitflow workflow, including how to set it up and use it in practice.

"Gitflow Workflow: A Simple Explanation" by LearnCode.academy (https://www.youtube.com/watch?v=HVsySz-h9r4) - This video provides a simple and easy-to-understand explanation of the Gitflow workflow. It covers the basic principles of Gitflow and provides examples of how it can be used in practice.

We hope these videos are helpful in explaining the Gitflow workflow! Let us know if you have any other questions.
