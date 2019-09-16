# CenterLine README

CenterLine is an extension for Visual Studio Code that will center the current cursor line in the viewport.

## Known Issues

CenterLine uses the `viewPortCenter` attribute of the VS Code command `cursorMove` to get the information about the middle of the screen. This command doesn't necessarily get the center of the viewport, but instead the center of the visible range. This means that if the last line of the active editor isn't at the bottom of the viewport, the center won't calculate correctly.

Sometimes the horizontal position will change when centering the line. There is code to help mitigate this, but there is an unknown issue that causes `cursorMove` to fail sometimes.

## Release Notes

CenterLine is available!

---

### 1.0.2

- Update README and CHANGELOG

### 1.0.1

- Fixed horizontal position being changed

