# VS Code

We're happy to try and convince you to give Visual Studio Code (VS Code) a try. It's a great code editor that offers a lot of powerful features and is easy to use. Here are a few reasons why I think you should give it a try:

1. It's lightweight and fast. VS Code is designed to be fast and efficient, so you won't have to deal with slow load times or sluggish performance.
2. It has a clean and intuitive interface. The interface is easy to navigate and customize, so you can make it look and feel the way you want.
3. It has a ton of extensions. VS Code has a huge repository of extensions that add additional features and functionality to the editor. There's an extension for just about everything, so you can customize the editor to suit your needs.
4. It's free. VS Code is an open-source project, so you can use it for free. And since it's developed by Microsoft, you can trust that it's a high-quality tool.
5. It has a great community. There are tons of resources available online for learning how to use VS Code, and the community of developers who use it is very active and helpful.

So if you're looking for a code editor that's fast, intuitive, and customizable, give VS Code a try. I think you'll like it!

## The Plugin Emporium

Whether you're looking for a plugin to help with linting, formatting, or testing, we've got you covered. So go ahead and browse through our collection of code-enhancing [plugins](https://marketplace.visualstudio.com/vscode) - we promise you won't be disappointed. Just be careful not to overload on the plugins, or you might end up with some seriously impressive (and probably impractical) code powers. Use them wisely, my code-savvy friends!

Here is a list of "must-haves":

-   [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=geyao.html-snippets)
-   [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
-   [Live Share Audio](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-audio)
-   [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
-   [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Shades of Purple](https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple)
-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-   [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

## Make your VS code awesome

Welcome to the world of VS Code Settings, where you can tweak, customize, and personalize your code editor to your heart's content. Not sure where to start? Check out this handy video tutorial: [VS Code Settings - Customizing Visual Studio Code](https://www.youtube.com/watch?v=V0s7uQlbSRY). Trust us, your code will thank you for giving it the love it deserves. Happy customizing!

Keybindings, keybindings, everywhere! If you're feeling overwhelmed by all the different key combinations you can use in VS Code, don't worry - we've got you covered. Check out this helpful video tutorial to learn all about Keybindings and how to customize them to your liking: [25 VS Code Productivity Tips and Speed Hacks](https://www.youtube.com/watch?v=ifTF3ags0XI).

If you're tired of typing out the same old code blocks over and over again, it's time to check out Snippets Files in VS Code. These handy little code snippets can save you a ton of time and effort, and they're easy to create and customize. Need a little help getting started? Check out this video tutorial: [How To Create Custom VSCode Snippets](https://www.youtube.com/watch?v=TGh2NpCIDlc).
<<<<<<< HEAD

Here are my current `settings.json`:

```json

    "diffEditor.ignoreTrimWhitespace": false,
    "diffEditor.renderSideBySide": false,
    "editor.copyWithSyntaxHighlighting": false,
    "editor.emptySelectionClipboard": false,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "top",
    "editor.detectIndentation": false,
    "files.trimTrailingWhitespace": true,
    "files.trimFinalNewlines": true,
    "files.insertFinalNewline": true,
    "window.newWindowDimensions": "inherit",
    "workbench.editor.enablePreview": false,
    "workbench.colorTheme": "Shades of Purple",
    "workbench.activityBar.visible": true,
    "workbench.sideBar.location": "right",
    "workbench.statusBar.visible": true,
    "workbench.editor.showTabs": true,
    "editor.minimap.enabled": false,
    "editor.lineNumbers": "on",
    "breadcrumbs.enabled": false,
    "editor.colorDecorators": false,
    "editor.gotoLocation.multipleDefinitions": "goto",
    "editor.gotoLocation.multipleDeclarations": "goto",
    "editor.gotoLocation.multipleImplementations": "goto",
    "editor.gotoLocation.multipleReferences": "goto",
    "editor.gotoLocation.multipleTypeDefinitions": "goto",
    "editor.hideCursorInOverviewRuler": true,
    "editor.hover.enabled": false,
    "editor.lightbulb.enabled": false,
    "editor.matchBrackets": "never",
    "editor.occurrencesHighlight": false,
    "editor.overviewRulerBorder": false,
    "editor.renderControlCharacters": false,
    "editor.renderLineHighlight": "none",
    "editor.selectionHighlight": false,
    "git.decorations.enabled": false,
    "problems.decorations.enabled": false,
    "scm.diffDecorations": "none",
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.tips.enabled": false,
    "workbench.startupEditor": "none",
    "editor.fontSize": 16,
    "editor.lineHeight": 45,
    "editor.suggestFontSize": 15,
    "editor.suggestLineHeight": 28,
    "terminal.integrated.fontSize": 15,
    "terminal.integrated.lineHeight": 1.5,
    "search.useIgnoreFiles": false,
    "search.exclude": {
        "**/node_modules": true,
        "**/package-lock.json": true
    },
    "editor.wordSeparators": "`~!@#%^&*()=+[{]}\\|;:'\",.<>/?",
    "prettier.requireConfig": true,
    "prettier.useEditorConfig": false,
    "window.titleBarStyle": "native",
    "editor.guides.indentation": false,
    "liveServer.settings.donotShowInfoMsg": true,
    "html.format.indentInnerHtml": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs":"active",
```

My `keybindings.json`:

```json
[
    /** panels */
    {
        "key": "cmd+1",
        "command": "workbench.view.explorer"
    },
    {
        "key": "cmd+2",
        "command": "workbench.view.scm"
    },
    {
        "key": "cmd+3",
        "command": "workbench.view.debug"
    },
    {
        "key": "cmd+4",
        "command": "workbench.extensions.action.showInstalledExtensions"
    },
    {
        "key": "cmd+e",
        "command": "workbench.action.focusActiveEditorGroup"
    },
    {
        "key": "cmd+t",
        "command": "workbench.action.terminal.toggleTerminal"
    },
    /* File explorer */
    {
        "key": "cmd+d",
        "command": "duplicate.execute",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus"
    },
    {
        "key": "cmd+n",
        "command": "explorer.newFile",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "shift+cmd+n",
        "command": "explorer.newFolder",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    /* terminal split */
    {
        "key": "ctrl+n",
        "command": "workbench.action.terminal.split",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.terminal.kill",
        "when": "terminalFocus"
    },
    /* line manipulation */
    {
        "key": "cmd+l",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+j",
        "command": "editor.action.joinLines",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+cmd+[",
        "command": "editor.fold",
        "when": "editorFocus"
    },
    {
        "key": "shift+cmd+]",
        "command": "editor.unfold",
        "when": "editorFocus"
    },
    /* multi cursor */
    {
        "key": "cmd+right",
        "command": "editor.action.insertCursorAtEndOfEachLineSelected",
        "when": "editorFocus && editorHasSelection"
    },
    /* Split Panels */
    {
        "key": "ctrl+w",
        "command": "workbench.action.joinAllGroups",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+n",
        "command": "workbench.action.splitEditor",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+=",
        "command": "workbench.action.increaseViewSize",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+-",
        "command": "workbench.action.decreaseViewSize",
        "when": "editorFocus"
    },
    /* Emmet */
    {
        "key": "cmd+m cmd+m",
        "command": "editor.emmet.action.matchTag",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+m cmd+e",
        "command": "editor.action.smartSelect.expand",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+m cmd+r",
        "command": "editor.emmet.action.updateTag",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+m cmd+backspace",
        "command": "editor.emmet.action.removeTag",
        "when": "editorTextFocus"
    },
    /* Toggle Big/Small Font Size */
    {
        "key": "cmd+k cmd+k",
        "command": "toggle",
        "when": "editorTextFocus",
        "args": {
            "id": "fontSize",
            "value": [
                {
                    "editor.fontSize": 16,
                    "editor.lineHeight": 45
                },
                {
                    "editor.fontSize": 14,
                    "editor.lineHeight": 0
                }
            ]
        }
    },
    /** IntelliSense **/
    {
        "key": "cmd+r",
        "command": "workbench.action.gotoSymbol"
    },
    {
        "key": "cmd+shift+r",
        "command": "workbench.action.showAllSymbols"
    },
    {
        "key": "cmd+k cmd+enter",
        "command": "editor.action.goToDeclaration",
        "when": "editorTextFocus"
    },
    /* navigation */
    {
        "key": "cmd+[",
        "command": "workbench.action.navigateBack",
        "when": "editorFocus"
    },
    {
        "key": "cmd+]",
        "command": "workbench.action.navigateForward",
        "when": "editorFocus"
    },
    /* Formatting */
    {
        "key": "alt+cmd+l",
        "command": "editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    }
]
```

=======

> > > > > > > 53cbdb537b9c37d110fa8e962fc800d1bba7a6fe
