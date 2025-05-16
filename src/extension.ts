import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const command = vscode.commands.registerCommand(
    "copyFilePath.copyUnixPath",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No active file");
        return;
      }

      const filePath = editor.document.uri.fsPath.replace(/\\/g, "/");
      await vscode.env.clipboard.writeText(filePath);
      vscode.window.showInformationMessage(
        "File path copied (Unix): " + filePath
      );
    }
  );

  context.subscriptions.push(command);
}

export function deactivate() {}
