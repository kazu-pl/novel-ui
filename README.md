# 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

you need to change `"jsx": "react"` to `"jsx": "react-jsx"` in `tsconfig.json`.

---

# After running `yarn build` command the TS generated files are placed in different folder than its corresponding component

In folder that is the input folder for rollup you need to have at least 2 folders with different level od depth nesting, e.g.:

```
src:
|---Button
|---------Button.tsx
|---------index.ts
|---inputs
|---------TextField
|------------------TextField.tsx
|------------------index.ts

```

When you have that kind of structure building lib will correctly place `*.d.ts` files in `lib` folder

Also, pay attention to NOT put any `*.ts` or `*.tsx` file in `types` folder - it would become a part of rollup output files and would destrony paths for typescript generated types

---

# Add the same eslint rules as in Create React App:

- Run command `yarn add -D eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8`
- in `package.json` add:

```

 "eslintConfig": {
    "extends": "react-app"
  }

```

OR create `.eslintrc.json` and paste:

```
{
  "extends": "react-app"
}
```

more info [here](https://www.npmjs.com/package/eslint-config-react-app)

---

# Switch to styled-components enginge instead of emotion in MUI (in MUI v5):

- `yarn add @mui/material @mui/styled-engine-sc styled-components`
  (in this UI library you will install this as dev dependencies so: `yarn add @mui/material @mui/styled-engine-sc styled-components -D`)

more info on this step [here](https://mui.com/getting-started/installation/#npm)

- add in `"dependencies"` key in package.json:

```
 {
   "dependencies": {
-    "@mui/styled-engine": "latest"
+    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
   },
+  "resolutions": {
+    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
+  },
 }
```

(it's important to put it in `dependencies` and not `devDependencies` - it won't work)

- you will also need to install `@emotion/react`

more info on above 2 steps [here](https://mui.com/guides/styled-engine/#how-to-switch-to-styled-components)

HOW TO KNOW IF IT WORKED:
if you succeed then all MUI styles will be applied with styled-components-like classes, e.g.: `.gmIDSN` itd.
If not, then classes will be like: `.css-r85fhy-MuiButtonBase-root-MuiButton-root`

---

# Mui Tooltip wrapped around Mui Button does not show info on hover but shows if button is clicked

This is because you probably wrap button in your custom komponent so it loses ref. In order to fix this you need to pass `ref` like this:

```
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { ForwardedRef, forwardRef } from "react";

export interface ButtonProps extends MuiButtonProps {}

const Button = forwardRef(
  ({ ...rest }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return <MuiButton ref={ref} {...rest} />;
  }
);

export default Button;

```

---

# Some components has wrong name in storybook in `docs` section like `[object object]` or `_c`:

You need to set `displayName` in particular component file and also the component function has to be different name than file name, like this:

```
// Example.tsx


export interface CustomExampleProps {}

const CustomExample = forwardRef((props: CustomExampleProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return <div></div>
})

CustomExample.displayName = "Example"; // CustomExample is a function name and is different than the file name (Example.tsx)
export default CustomExample;


```

---

This project setup was created with help of: [this site](https://prateeksurana.me/blog/react-component-library-using-storybook-6/)
