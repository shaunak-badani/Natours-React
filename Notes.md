# CSS

## Basic Responsive Design Principles

### Fluid Layouts

- To allow webpage to adapt to the current viewport width (or even height).
- Use % (or vh / vw) unit instead of px for elements that should adapt to viewport (usually layout).
- Use max-width instead of width.

### Responsive units

- Use rem instead of px for most lengths.
- To make it easy to scale the entire layout down (or up) automatically.

### Flexible images

- By default, images don't scale automatically as we change the viewport so we need to fix that.
- Always use % for image dimensions, together with the max-width property.

### Media queries

- To change CSS styles on certain viewport widths (called breakpoints).