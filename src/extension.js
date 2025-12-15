const vscode = require("vscode");

function activate(context) {
  // ============================
  // 1️⃣ Highlight <%%> blocks
  // ============================
  const decoration = vscode.window.createTextEditorDecorationType({
    color: "rgba(255, 149, 0, 1)",
    backgroundColor: "rgba(255, 149, 0, 0.12)",
    borderRadius: "3px",
    fontWeight: "bold"
  });

  function highlightEta(editor) {
    if (!editor || !["eta", "html"].includes(editor.document.languageId)) return;

    const text = editor.document.getText();
    const regex = /<%[\s\S]*?%>/g;
    const ranges = [];
    let match;
    while ((match = regex.exec(text))) {
      ranges.push(
        new vscode.Range(
          editor.document.positionAt(match.index),
          editor.document.positionAt(match.index + match[0].length)
        )
      );
    }
    editor.setDecorations(decoration, ranges);
  }

  vscode.window.onDidChangeActiveTextEditor(highlightEta);
  vscode.workspace.onDidChangeTextDocument(() =>
    highlightEta(vscode.window.activeTextEditor)
  );

  // Initial highlight
  highlightEta(vscode.window.activeTextEditor);

  // // ============================
  // // 2️⃣ Explorer [eta] badge
  // // ============================
  // const etaDecorationProvider = {
  //   provideFileDecorations(uri) {
  //     if (uri.fsPath.endsWith(".eta")) {
  //       return {
  //         badge: "ETA",
  //         tooltip: "Eta template file",
  //         color: "#ff9500" // raw color works more reliably
  //       };
  //     }
  //     return;
  //   }
  // };

  // const providerDisposable = vscode.window.registerFileDecorationProvider(
  //   etaDecorationProvider
  // );
  // context.subscriptions.push(providerDisposable);
}

function deactivate() {}

module.exports = { activate, deactivate };