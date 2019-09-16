# CenterLine README

CenterLine is an extension for Visual Studio Code that will center the current cursor line in the viewport.

## Known Issues

CenterLine calculates the middle of the page based on the `visibleRanges` property on active editor. This command doesn't necessarily get the center of the viewport, but instead the middle of the visible range. This means that if the last line of the active editor isn't at the bottom of the viewport, the center won't calculate 100% accurately.

## Release Notes

### 1.0.3

- Changed backend to use `editorScroll` instead of `cursorMove` for better reliability
