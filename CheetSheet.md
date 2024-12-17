---

# Tailwind CSS Cheatsheet 📋

A quick reference guide for commonly used Tailwind CSS utilities to speed up production.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Layout](#layout)
3. [Typography](#typography)
4. [Colors](#colors)
5. [Spacing](#spacing)
6. [Flexbox and Grid](#flexbox-and-grid)
7. [Sizing](#sizing)
8. [Positioning](#positioning)
9. [Borders](#borders)
10. [Shadows](#shadows)
11. [Hover, Focus, and Active States](#hover-focus-and-active-states)
12. [Media Queries and Responsive Design](#media-queries-and-responsive-design)
13. [Grids for Media Content](#grids-for-media-content)
14. [Animations and Transitions](#animations-and-transitions)
15. [Miscellaneous](#miscellaneous)

---

## Getting Started
- Install Tailwind CSS:
  ```bash
  npm install -D tailwindcss
  npx tailwindcss init
  ```
- Add the following to your `tailwind.config.js`:
  ```javascript
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```
- Add Tailwind to your CSS:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## Layout

### Container
```html
<div class="container mx-auto px-4">
  <!-- Content -->
</div>
```

### Display
```html
<div class="block"></div>
<div class="inline-block"></div>
<div class="hidden"></div>
```

---

## Typography

### Font Size
```html
<p class="text-xs"></p>
<p class="text-lg"></p>
<p class="text-4xl"></p>
```

### Text Transform
```html
<p class="uppercase"></p>
<p class="lowercase"></p>
<p class="capitalize"></p>
```

---

## Colors

### Text Color
```html
<p class="text-red-500"></p>
<p class="text-green-500"></p>
<p class="text-blue-500"></p>
```

### Background Gradient
```html
<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
```

---

## Spacing

### Margin and Padding
```html
<div class="m-4 p-4"></div>
<div class="mx-auto my-2 px-6 py-4"></div>
```

---

## Flexbox and Grid

### Flexbox
```html
<div class="flex items-center justify-between"></div>
```

### Grid
```html
<div class="grid grid-cols-4 gap-4"></div>
<div class="col-span-2"></div>
```

---

## Media Queries and Responsive Design

### Breakpoints
```html
<div class="text-sm md:text-lg lg:text-xl"></div>
<div class="hidden md:block"></div>
<div class="w-full lg:w-1/2"></div>
```

---

## Grids for Media Content

### Basic Media Grid
```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="bg-gray-200">Item 1</div>
  <div class="bg-gray-300">Item 2</div>
  <div class="bg-gray-400">Item 3</div>
  <div class="bg-gray-500">Item 4</div>
</div>
```

### Responsive Image Grid
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <img src="image1.jpg" class="w-full rounded shadow" />
  <img src="image2.jpg" class="w-full rounded shadow" />
  <img src="image3.jpg" class="w-full rounded shadow" />
</div>
```

---

## Animations and Transitions

### Hover Effects
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover Me
</button>
```

### Transitions
```html
<div class="transition ease-in-out duration-300 hover:scale-110"></div>
```

### Keyframe Animation (Requires Configuration)
In `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
};
```
Usage:
```html
<div class="animate-bounce"></div>
```

---

## Miscellaneous

### Aspect Ratio
```html
<div class="aspect-w-16 aspect-h-9">
  <img src="video-thumbnail.jpg" />
</div>
```

### Line Clamping
```html
<p class="line-clamp-3">
  This is a long paragraph that will be truncated after three lines.
</p>
```

### Cursor
```html
<div class="cursor-pointer"></div>
<div class="cursor-not-allowed"></div>
```

---

## Learn More
For a full list of utilities, visit the [Tailwind CSS documentation](https://tailwindcss.com/docs).

--- 