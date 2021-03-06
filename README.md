# react-mobile-range-selector

Read this in other languages: [简体中文](https://github.com/LazierGame/react-time-range-selector/blob/main/README.zh-CN.md)

Mobile range selector built on React。

The component can modify the span within a certain range by dragging.

## features

## API

| Property | Description | Type | Default |
| :----| :---- | :---- | :---- |
| range | The scope of the current selector | string[] | [] |
| value | Range value (left to right) | [number, number] / null | null |
| height | Current sliding zone height | number | 100 |
| splitWidth | The distance of the current slider scale | number | 100 |
| disabledRanges | Disabled range area (left, right, color) | [number, number,color ][] | [] |
| disableBoxBorderWidth | If the width of the border of the disabled area is 0, there is no border | number | 0 |
| disabled| Component disabled | boolean| false|
| isSnapToGrid | Is it calibrated when the slide stops | boolean | true |
| snap | The degree value of dwell time is 1 for the whole lattice and 0.5 for the half lattice | number | 1 |
| ruler | Does the selector display the ruler | boolean | true |
| scrollSpeed | The slider is close to the edge and the rolling speed is opposite | number | 25 |
| scrollLeft | The current left distance from the origin, dynamic adjustment | number  | undefined |
| onChange | Callback after modifying scope | (value: TimeRange | null) => void| undefined |
| onContainClick | Click the callback of the area block to return the value of the current click | (value: number) => void| undefined |
| onContainDbClick | Double click the callback of the area block to return the value of the current click  | (value: number) => void | undefined |

## Installation

```bash
npm install react-time-range-selector
```
or

```bash
yarn add react-time-range-selector
```



## Changelog

### 0.1.14
- For the specific business development has been completed, the subsequent version will be changed to the general version.

### 0.1.9
- Add the width of the isolation line between two forbidden blocks (if 0, no)
- Refactoring configuration items
- Add gesture library, and click event will be triggered when dragging
- Elegant degradation, not set when scrollTo cannot be used

### 0.1.8
- add "draggable"

### 0.1.5
- When the slider exceeds the current view, the scroll bar scrolls itself.
- Control scroll bar scroll position.
- Add scroll bar slide speed.

### 0.0.8
- Add a ruler.
- Add whether to align the grid.
- Add grid spacing.
- Add range array.
- Add initialization scrolling value.
- Add click, double-click event and display current node value (cooperate with business)
- Add a scroll event and pass out the current scroll position (distance node)
- Remove, click add, double-click delete code (determined by business party)


### 0.0.6(todo)
- Pull out time? Becomes range selector
- test

### 0.0.5
- Listen for external value modification and modify it.

### 0.0.4
- Fixed head height

### 0.0.3
- Setting DndContext as singleton to prevent errors `two HTML5 backends at the same time`

### 0.0.2
- Add a default value to ensure availability.

### 0.0.1
- Available. The project name is react-time-range-selector.
