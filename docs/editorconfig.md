# EditorConfig

[EditorConfig](https://editorconfig.org/) is a file format and tool for defining and maintaining consistent coding styles between different editors and IDEs. There are several benefits to using EditorConfig:

Consistency: EditorConfig helps to ensure that the coding style of a project is consistent across different editors and IDEs. This can be especially useful in large teams where different members may be using different tools.

Maintainability: With EditorConfig, it is easy to make changes to the coding style of a project. If the team decides to change the style guide, the changes can be made in the EditorConfig file, and all of the editors and IDEs will automatically update to reflect the new style.

Collaboration: EditorConfig helps to establish a common set of conventions that everyone on the team can follow. This can facilitate collaboration and improve the overall quality of the codebase.

Compatibility: EditorConfig is compatible with a wide range of editors and IDEs, so it can be used with most development tools.

Overall, EditorConfig is a useful tool for maintaining consistent coding styles and improving the collaboration and maintainability of a project.

## Setup

```txt
root = true

[*]
indent_style = space
indent_size = 4
insert_final_newline = true
charset = utf-8
trim_trailing_whitespace = true
end_of_line = lf

[*.md]
trim_trailing_whitespace = false
```
