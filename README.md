# 📁 Copy File Path (Unix) VSCode Extension

A simple VS Code extension that copies the current file’s absolute path to the clipboard using **Unix-style forward slashes**. Ideal for shell scripting, Linux/macOS workflows, or cross-platform devs.

![VS Code](https://img.shields.io/badge/vscode-1.100+-blue?logo=visualstudiocode)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)

---

## ✨ Features

- 📋 Copies the file path of the active file
- 🪟 Converts `\` to `/` automatically
- 🧠 Context-aware: only runs when a file is open
- 🔘 Accessible via right-click or command palette
- ⚡ Fast and lightweight – built with pure TypeScript

---

## ⚙️ Installation

### From VS Code Marketplace

> _Coming soon: Will be available once published._

### From Source (Development)

1. Clone this repository:

   ```bash
   git clone https://github.com/hadzicni/copy-file-path.git
   cd copy-file-path
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

   ```bash
   npm run compile
   ```

4. Open the folder in VS Code and press `F5` to run the Extension Development Host.

---

## 🚀 Usage

1. Open any file in the editor.
2. Right-click in the editor and choose:

   ```
   Copy File Path (Unix)
   ```

3. Or use the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search:

   ```
   Copy File Path (Unix)
   ```

4. The **absolute file path** will be copied to your clipboard using forward slashes `/`.

---

## 🧪 Testing

Run tests using:

```bash
npm run test
```

---

## 👨‍💻 Author

Made by **Nikola Hadzic**  
GitHub: [@hadzicni](https://github.com/hadzicni)

---

## 📄 License

This extension is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
