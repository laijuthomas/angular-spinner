

# Angular Spinner
A spinner component and directive for Angular 2-12+

## Getting Started

### Installation

Install via [npm][npm] package manager 

```bash
npm install @laijuthomas/angular-spinner --save
```

### Usage

Import `angular-spinner` module

```js
import { HttpClientModule} from '@angular/common/http';
import { AngularSpinnerModule } from '@laijuthomas/angular-spinner';

@NgModule({
  imports: [ HttpClientModule, AngularSpinnerModule ]
})
```

Then in HTML

```html
<angular-spinner></angular-spinner>
```

### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| size | `string` | `medium` | no | Set custom sizes like xxsmall, xsmall, small, medium, large, xlarge, xxlarge |
| status | `string` | `active` | no | Set custom status like active, disabled, primary, info, success, warning, danger |
| message | `string` | `-` | no | Custom message to show along with the loader |

To use as directive pass a boolean variable to the directive

```html
<div [angularSpinner]="loading"></div>
```

### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| spinnerSize | `string` | `medium` | no | Set custom sizes like xxsmall, xsmall, small, medium, large, xlarge, xxlarge |
| spinnerStatus | `string` | `active` | no | Set custom status like active, disabled, primary, info, success, warning, danger |
| spinnerMessage | `string` | `-` | no | Custom message to show along with the loader |

## What's included

Within the download you'll find the following directories and files. You'll see something like this:

```
angular-spinner/
└── projects/
    ├── angular-spinner/
    └── angular-spinner-app/
```
`angular-spinner/` - library

`angular-spinner-app/` - demo application

## Creators

**Laiju Thomas**

* <https://github.com/laijuthomas>