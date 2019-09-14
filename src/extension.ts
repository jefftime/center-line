import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.centerLine', async () => {
    const ed = vscode.window.activeTextEditor;
    if (ed === undefined) return;

    const ranges = ed.visibleRanges;
    if (ranges.length < 1) return;
    const firstRange = ranges[0];
    const start = firstRange.start.line;
    const end = firstRange.end.line;
    const halfDist = (end - start) / 2;
    const cursor = ed.selection.active.line;
    const scrollDistance = cursor - start - halfDist;
    await vscode.commands.executeCommand("editorScroll", {
      "to": "down",
      "value": scrollDistance
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
