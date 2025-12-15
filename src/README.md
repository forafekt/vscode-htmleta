# Eta Template Support for VS Code

First-class HTML support for [Eta](https://eta.js.org/) templates with proper JavaScript IntelliSense.

## Features

- ✅ **Full HTML IntelliSense**: Tag completion, attribute suggestions, hover docs
- ✅ **Emmet Support**: All Emmet abbreviations work in `.eta` files
- ✅ **JavaScript Highlighting**: Proper syntax highlighting inside `<% %>` blocks
- ✅ **JavaScript IntelliSense**: Full JS completion in `<script>` tags and Eta blocks
- ✅ **Auto-closing Tags**: Both HTML tags and Eta delimiters
- ✅ **Zero Performance Overhead**: Lightweight grammar-based extension

## Supported Syntax

| Syntax | Purpose | Example |
|--------|---------|---------|
| `<%= expression %>` | Escaped output (HTML-safe) | `<%= user.name %>` |
| `<%- expression %>` | Unescaped output (raw HTML) | `<%- htmlContent %>` |
| `<% code %>` | Control flow / scriptlet | `<% if (user) { %>` |
| `<%# comment %>` | Comments | `<%# TODO: Fix this %>` |

## Setup

After installing the extension, add this to your **User Settings** (`settings.json`):

```json
{
  "html.customData": [],
  "html.suggest.html5": true,
  "emmet.includeLanguages": {
    "eta": "html"
  }
}
```

**Important:** You may need to reload VS Code after installation for HTML IntelliSense to activate properly.

### For Workspace-Specific Settings

Add to `.vscode/settings.json`:

```json
{
  "files.associations": {
    "*.eta": "eta"
  }
}
```

## Framework Compatibility

Works with:
- ✅ Node.js
- ✅ Deno
- ✅ Vite
- ✅ Server-side rendering frameworks
- ✅ Any Eta integration

## Usage

1. Install the extension
2. Open any `.eta` file
3. Start typing HTML or Eta syntax
4. Enjoy full IntelliSense and Emmet support

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= it.title %></title>
</head>
<body>
  <% if (it.user) { %>
    <h1>Welcome, <%= it.user.name %>!</h1>
  <% } else { %>
    <p>Please log in.</p>
  <% } %>
  
  <ul>
    <% it.items.forEach(item => { %>
      <li><%- item.html %></li>
    <% }); %>
  </ul>
</body>
</html>
```

## License

MIT