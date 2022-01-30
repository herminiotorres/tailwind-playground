## Main Concepts

__How Design Website using HTML and CSS:__
1. add the HTML
2. layout the things
3. spacing
4. box properties (border, background, shadow)
5. typography
6. fun element
7. responsive

__Main Concepts:__
- Spacing with Margin and Padding
- Box Properties
- Sizing and Numbering System
- Typography
- Colors
- Pseudo Classes
- Transitions and Transforms
- Animations

__Gradient Concepts:__
1. set a class for the gradient
2. set a starting color
3. set an end color
4. set a middle color

## Background Classes and Shades

```css
.bg-{color}-{shade}
```

| Colors | Shades  |
| ---    | ---     |
| black  | ---     |
| white  | ---     |
| gray   | 100-900 |
| red    | 100-900 |
| orange | 100-900 |
| yellow | 100-900 |
| green  | 100-900 |
| teal   | 100-900 |
| indigo | 100-900 |
| blue   | 100-900 |
| purple | 100-900 |
| pink   | 100-900 |

## Width and Height

```css
.w-{size}
```

```css
.h-{size}
```

| Sizes |    |
|---    |--- |
| 0, 1, 2, 3, 4, 5, 6, | +1 |
| 8, 10, 12,           | +2 |
| 16, 20, 24,          | +4 |
| 32, 40, 48, 56, 64   | +8 |
|---     |---|
| 1/2    | Every digit in fraction|
| 1/3    |   |
| 1/4    |   |
| 1/5    |   |
| 1/6    |   |
| 1/12   |   |
|---     |---|
| screen |   |
| full   |   |


## Padding and Margin

```css
.p-{size}
.pl-{size}
.pr-{size}
.pt-{size}
.pb-{size}
.px-{size}
.py-{size}
```

```css
.m-{size}
.ml-{size}
.mr-{size}
.mt-{size}
.mb-{size}
.mx-{size}
.my-{size}
```

| Sizes |    |
|---    |--- |
| 0, 1, 2, 3, 4, 5, 6, | +1 |
| 8, 10, 12,           | +2 |
| 16, 20, 24,          | +4 |
| 32, 40, 48, 56, 64   | +8 |

## Styling Text - Font Family

```css
.font-{family}
```

| Families | |
| ---      | ---                        |
| sans     | Helvetica or similar       |
| serif    | Times New Roman or similar |
| mono     | Monospace or similar       |

```css
.text-{size}
```

|Sizes | rem       | Pixels |
| ---  | ---       | ---    |
|xs    | .75 rem   | 12px |
|sm    | .875 rem  | 14px |
|base  | 1 rem     | 16px |
|lg    | 1.125 rem | 18px |
|xl    | 1.25 rem  | 20px |
|2xl   | 1.5 rem   | 24px |
|3xl   | 1.875 rem | 30px |
|4xl   | 2.25 rem  | 36px |
|5xl   | 3 rem     | 48px |
|6xl   | 4 rem     | 64px |

```css
.text-{align}
```

| Alignments |     |
| ---        | --- |
| left       ||
| center     ||
| right      ||
| justify    ||


```css
.text-{color}-{shade}
```

| Colors | Shades  |
| ---    | ---     |
| black  | ---     |
| white  | ---     |
| gray   | 100-900 |
| red    | 100-900 |
| orange | 100-900 |
| yellow | 100-900 |
| green  | 100-900 |
| teal   | 100-900 |
| indigo | 100-900 |
| blue   | 100-900 |
| purple | 100-900 |
| pink   | 100-900 |

```css
.italic
```

```css
.not-italic
```

```css
.font-{weight}
```

| Weights   | Font Weights |
| ---       | ---          |
| hairline  | 100 |
| thin      | 200 |
| light     | 300 |
| normal    | 400 |
| medium    | 500 |
| semibold  | 600 |
| bold      | 700 |
| extrabold | 800 |
| black     | 900 |

- __em__ - unit based on the parent element's font size, not the document.

```css
.tracking-{spacing}
```

| Spacings | Font Weights |
| ---      | ---          |
| tighter  | -0.05em  |
| tight    | -0.025em |
| normal   | 0        |
| wide     | 0.025em  |
| wider    | 0.05em   |
| widest   | 0.1em    |

```css
.leading-{spacing}
```

| Spacings | Font Weights |
| ---      | ---          |
| none     | 1     |
| tight    | 1.25  |
| snug     | 1.375 |
| normal   | 1.5   |
| relaxed  | 1.625 |
| loose    | 2     |

```css
.underline
```

```css
.no-underline
```

```css
.line-through
```

```css
.uppercase
```

```css
.lowercase
```

```css
.capitalize
```

```css
.normal-case
```

## Borders

```css
.border-{thickness}
```

| Thicknesses | Pixels |
| ---         | ---    |
| 0           | 0px |
| `[EMPTY]`   | 1px |
| 2           | 2px |
| 4           | 4px |
| 8           | 8px |

```css
.border-{side}-{thickness}
```

| Sides      | Thicknesses | Pixels |
| ---        | ---         | --- |
| t, b, l, r | 0           | 0px |
|            | [EMPTY]     | 1px |
|            | 2           | 2px |
|            | 4           | 4px |
|            | 8           | 8px |

```css
.border-{color}-{shade}
```

| Colors | Shades  |
| ---    | ---     |
| black  | ---     |
| white  | ---     |
| gray   | 100-900 |
| red    | 100-900 |
| orange | 100-900 |
| yellow | 100-900 |
| green  | 100-900 |
| teal   | 100-900 |
| indigo | 100-900 |
| blue   | 100-900 |
| purple | 100-900 |
| pink   | 100-900 |

```css
.border-{style}
```

| Styles |     |
| ---    | --- |
| solid  ||
| dashed ||
| dotted ||
| double ||
| none   ||

```css
.rounded-{radius}
```

| Radiuses  | rems      | Pixels |
| ---       | ---       | ---    |
| sm        | 0.125 rem | 2px    |
| `[EMPTY]` | 0.25 rem  | 4px    |
| lg        | 0.5 rem   | 8px    |
| full      | -         | 9999px |
| none      | 0         | 0px    |

```css
.rounded-{side}-{radius}
```

| Sides | Pixels |
| ---   | ---    |
| t     | top-left & top-right       |
| r     | top-right & bottom-right   |
| b     | bottom-left & bottom-right |
| l     | top-left & bottom-left     |
| tl    | top-left                   |
| tr    | top-right                  |
| br    | bottom-right               |
| bl    | bottom-left                |

## Display Modes

```css
.{display}
```

| Display Modes |     |
| ---           | --- |
| block         |           |
| inline        | No widths |
| inline-block  |           |
| flex          |           |
| inline-flex   |           |
| table         |           |
| table-row     |           |
| table-cell    |           |
| hidden        |           |

## Flexbox

```css
.flex-{direction}
```

| Directions  |     |
| ---         | --- |
| row         | Default |
| row-reverse |         |
| col         |         |
| col-reverse |         |

```css
.flex-{wrap}
```

| Wrap Modes   |     |
| ---          | --- |
| no-wrap      | Default |
| wrap         |         |
| wrap-reverse |         |

### flexbox direction (horizontal)

```css
.justify-{alignment}
```

| Alignments |     |
| ---        | --- |
| start      | Default |
| center     |         |
| end        |         |
| between    |         |
| around     |         |

### flexbox direction (vertical)

```css
.items-{alignment}
```

| Alignments |     |
| ---        | --- |
| stretch    | Default - fill container |
| start      |                          |
| center     |                          |
| end        |                          |
| baseline   |                          |

## Responsive Design

```css
.{breakpoint}:{...classes}
```

| Breakpoints | Starts |
| ---         | ---    |
| `[ALL]`     | 0px    |
| sm:         | 640px  |
| md:         | 768px  |
| lg:         | 1024px |
| xl:         | 1280px |

| Responsive Classes         |     |
| ---                        | --- |
| `[PADDING / MARGING]`      ||
| .{sm}:bg-*                 | background color                          |
| .{sm}:w-*                  | width                                     |
| .{sm}:h-*                  | height                                    |
| .{sm}:p-*                  | padding                                   |
| .{sm}:m-*                  | margin                                    |
| `[FONT STYLING]`           ||
| .sm:font-sans              | font family - sans, serif, mono           |
| .sm:text-lg                | font size - xs, sm, base, lg, lx, {2-6}xl |
| .sm:text-left              | left, center, right, justify              |
| .sm:text-{color}-{shade}   | text color                                |
| .sm:font-bold              | font weight                               |
| .sm:tracking-tighter       | letter spacing                            |
| .sm:leading-tight          | line spacing/height                       |
| .sm:uppercase              | text transform                            |
| `[BORDER]`                 ||
| .sm:border-{color}-{shade} | border color                              |
| .sm:border-{style}         | border style                              |
| .sm:border-{width}         | border width                              |
| .sm:rounded-{size}         | border radius                             |
| `[DISPLAY]` ||
| .sm:{display}              | block, inline, flex, hidden...            |
| .sm:flex                   | display flex                              |
| .sm:flex-{col|row}         | flex direction                            |

## Hover Modifier

```css
.{hover}:{...classes}
```

| Hover Classes                 |     |
| ---                           | --- |
| .hover:bg-*                   | background color |
| .hover:text-{color}-{shade}   | text color       |
| .hover:font-bold              | font weight      |
| .hover:border-{color}-{shade} | border color     |

## Focus Modifier

```css
.{focus}:{...classes}
```

| Focus Classes                 |     |
| ---                           | --- |
| .focus:bg-*                   | background color |
| .focus:text-{color}-{shade}   | text color       |
| .focus:font-bold              | font weight      |
| .focus:border-{color}-{shade} | border color     |

## Combination Modifier

```css
.{breakpoint}:{mod}:{...classes}
```

| Focus and Hover Classes with Breakpoints |     |
| ---                                      | --- |
| .md:hover:bg-{color}-{shade}             | med+ hover background color |
| .md:focus:bg-{color}-{shade}             | med+ focus background color |
| --- | --- |
| .md:hover:text-{color}-{shade}           | med+ hover text color       |
| .md:focus:text-{color}-{shade}           | med+ focus text color       |

## Other Utilities

### shadow
```css
.shadow-{size}
```

| Sizes   |     |
| ---     | --- |
| md      ||
| lg      ||
| xl      ||
| 2xl     ||
| ---     ||
| inner   ||
| outline ||
| none    ||

### opacity
```css
.opacity-{percent}
```

| Percentages   |     |
| ---           | --- |
| 100           ||
| 75            ||
| 50            ||
| 25            ||
| 0             ||

### cursor
```css
.cursor-{style}
```

| Styles      |     |
| ---         | --- |
| default     ||
| pointer     ||
| wait        ||
| text        ||
| move        ||
| not-allowed ||

### select
```css
.select-{style}
```

| Styles |     |
| ---    | --- |
| none   ||
| text   ||
| all    ||
| auto   ||

### screen readers
```css
.sr-only
```

```css
.not-sr-only
```
