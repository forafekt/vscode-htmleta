# Eta HTML Templates for VS Code

> 🚧 **Development Status: Active / Experimental**
> This project is currently **in active development**. APIs, behaviors, and features may change frequently. Use with the expectation of breaking changes between versions.

First-class support for **Eta (`.eta`) templates** in Visual Studio Code — combining **full HTML IntelliSense**, **embedded JavaScript highlighting**, and a **distinct Explorer icon** for Eta files.

**Package name:** `vscode-htmleta` (`.eta`) templates** in Visual Studio Code — combining **full HTML IntelliSense**, **embedded JavaScript highlighting**, and a **distinct Explorer icon** for Eta files.

This extension is designed to feel *native* to VS Code: HTML-first, fast, lightweight, and theme-aware.

---

## ✨ Features

> ⚠️ **Note**: This extension is under active development. Feature behavior, defaults, and configuration may evolve rapidly.

### ✅ HTML‑First Editing

* `.eta` files behave like **HTML files**
* Full **HTML IntelliSense**, validation, formatting
* **Emmet** works out of the box

### 🧠 Eta Syntax Highlighting

* Highlighting for all Eta tags:

  * `<% %>` scriptlets
  * `<%= %>` escaped output
  * `<%- %>` unescaped output
  * `<%# %>` comments
* Embedded **JavaScript syntax highlighting** inside Eta blocks

### 🎨 Visual Enhancements

* Subtle **background highlighting** for Eta blocks in the editor
* Improves readability without overpowering your theme

### 🧩 Explorer Icon Support

* Optional **Eta File Icon Theme**
* Replaces the default icon with a clear `[ETA]` icon for `.eta` files
* Light & dark variants included

> ⚠️ File icons are controlled by VS Code icon themes.
> To enable the Eta icon, select **Preferences → File Icon Theme → Eta File Icons**.

---

## 📦 Installation

~~### From Marketplace (recommended)~~

~~1. Open VS Code~~
~~2. Go to Extensions~~
~~3. Search for **vscode-htmleta**~~
~~4. Install~~

### From Source (development)

```bash
git clone https://github.com/forafekt/vscode-htmleta.git
cd vscode-htmleta
npx vsce package
```

Press `F5` to launch a new Extension Development Host.

---

## 🧪 File Type Behavior

| File    | Language   | IntelliSense |
| ------- | ---------- | ------------ |
| `.html` | HTML       | ✅            |
| `.eta`  | HTML + Eta | 🟠            |

`.eta` files are intentionally treated as **HTML-first** to ensure maximum compatibility with VS Code’s built‑in tooling.

---

~~## 🎨 Enabling the Eta File Icon~~

~~VS Code does not allow extensions to override file icons automatically.~~

~~To enable the Eta icon:~~

~~1. Open Command Palette~~
~~2. Run **Preferences: File Icon Theme**~~
~~3. Select **Eta File Icons**~~

~~This will replace the Explorer icon for all `.eta` files.~~

---

## 🛠 Configuration

This extension applies sensible defaults automatically:

```json
{
  "files.associations": {
    "*.eta": "html"
  },
  "emmet.includeLanguages": {
    "eta": "html"
  }
}
```

You can override these at any time in your user or workspace settings.

---

## 🧱 Project Structure

```
.
├── package.json
├── extension.js
├── syntaxes/
│   └── eta.tmLanguage.json
├── icons/
│   ├── eta-icon-theme.json
│   ├── eta-light.svg
│   └── eta-dark.svg
└── README.md
```

---

## 🚀 Roadmap

* More Snippets for common Eta patterns
* Optional formatter integration
* Better folding rules for Eta blocks
* Partial/template detection
* Improved diagnostics for malformed tags

---

## 🤝 Contributing

Contributions are welcome.

* Bug reports
* Syntax improvements
* Icon officialization
* Documentation updates

Please open an issue or submit a pull request.

---

## 📄 License

MIT

#### [Go to License](LICENSE)
---

## 💡 Why HTML‑First?

Eta templates are fundamentally HTML documents with embedded logic.

By keeping `.eta` files HTML-first, this extension ensures:

* Maximum compatibility with VS Code
* Zero performance overhead
* No custom language server required

This is the same philosophy used by tools like:

* Blade
* EJS
* Astro
* Svelte

---

Happy templating ✨
