# Dropdown VueJs component

#### ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `THIS PACKAGE IS STILL IN BETA!`

A dropdown VueJs component. Compatible with Vue 2.x

## Installation
```bash
npm i @marchef/vuejs-dropdown
```

### Usage
```javascript
import '@marchef/vuejs-dropdown';
import '@marchef/vuejs-dropdown/dist/vuejs-dropdown.css';
```

```javascript
<dropdown
    name="dropdown-name"
    :options="[
    {
        name: 'option_a',
        value: 'Option A',
    },
    {
        name: 'option_b',
        value: 'Option B',
    }]"
>
</dropdown>
```

### Props

| Name        | Description           | Default  | Require |
| ------------- |:-------------:|:-------------:| -----:|
| `name` | The name of the form field. [String] | | YES |
| `options` | The options of the dropdown field. [Array] (see below) | | YES |
| `option-value-type` | Configure the Option format. [`name`, `icon`, `iconName`, `nameIcon`] | `iconName` |
| `current-option-value-type` | Configure the current Option format. [`name`, `icon`, `iconName`, `nameIcon`] | `iconName` |
| `current-option-icon-class` | CSS Classes to style the current option icon. | `dd_icon dd_float_left` |
| `current-option-value-class` | CSS Classes to style the current option value. | `dd_float_left` |
| `:arrow` | Enable the arrow icon. [Boolean] | `true` |
| `arrow-icon-path` | The arrow SVG Icon path. [String] | `M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z` |
| `arrow-icon-viewbox` | The arrow SVG viewbox. [String] | `0 0 20 20` |
| `arrow-class` | CSS Classes to style the arrow. [String] | `dd_icon dd_float_left` |
| `arrow-active-class` | CSS Classes to style the arrow when the dropdown is Open. [String] | `dd_transform-180` |
| `popper_options` |  [Popper options.](https://popper.js.org/popper-documentation.html) |

### Prop Option Object

| Name        | Description           | Default  | Require |
| ------------- |:-------------:|:-------------:| -----:|
| `name` | The Option Name.  | | YES |
| `value` | The Option Value.  | | YES |
| `iconSvgPath` | The option SVG Icon path. [String] |
| `iconViewbox` | The option SVG Icon viewbox. [String] |

