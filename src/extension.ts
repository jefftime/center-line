/* This file is part of CenterLine
 *
 * Copyright 2019, Jeffery Stager
 *
 * CenterLine is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * CenterLine is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.centerLine', async () => {
    const ed = vscode.window.activeTextEditor;
    if (ed === undefined) return;

    const start = ed.visibleRanges[0].start.line;
    const end = ed.visibleRanges[0].end.line;
    const range = end - start;
    const pos = ed.selection.active.line;
    const scrollDistance = pos - start - (range / 2);
    await vscode.commands.executeCommand(
      'editorScroll',
      {
        'to': 'down',
        'value': scrollDistance
      }
    );
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
