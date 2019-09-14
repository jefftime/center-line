import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.centerLine', async () => {
    const ed = vscode.window.activeTextEditor;
    if (ed === undefined) return;

    const oldLine = ed.selection.active.line;

    // Get middle of screen (as best that we can)
    await vscode.commands.executeCommand(
      'cursorMove',
      {
        'to': 'viewPortCenter',
        'by': 'line'
      }
    );

    // Store the new position and get delta
    const newLine = ed.selection.active.line;
    const scrollDistance = newLine - oldLine;

    // Reposition the window and then reset the cursor position
    await vscode.commands.executeCommand(
      'editorScroll',
      {
        'to': 'up',
        'by': 'line',
        'value': scrollDistance
      }
    );
    await vscode.commands.executeCommand(
      'cursorMove',
      {
        'to': 'up',
        'by': 'line',
        'value': scrollDistance
      }
    );
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
