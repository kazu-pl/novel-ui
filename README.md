# What git merge method choose to merge develop into master branch:

If you have some branch `A` that contains only release versions (for example: `master`) and another branch `B` that develops new features (for example: `develop`) then if you want to publish new features from develop to master you should choose normal merge request method (on gitub it's called `Create merge request`) instead of `squash merge`.

If you choose squash commit in that situation, then your next merge request from develop into master will give you many conflicts.
If it will happen, you will need to rebase develop branch and accept every change as `current changes` (which are develop changes).
It can be done in one single command. Assuming you're on `develop` branch and want to rebase:
`git rebase -Xtheirs master`

more [here](https://demisx.github.io/git/rebase/2015/07/02/git-rebase-keep-my-branch-changes.html) about that command.

In general, if you have branch that continuously develops new things and merges them into another branch, its better to merge that changes with normal merge request.

But on the other hand, it does not apply to `feature/` branches because once they're merged into `develop` the should be destroyed and if another change is needed, then you should create new `feature/` or `fix/` branch.
So, if you're merging `feature/` branch into `develop` you can choose `squash` merge if you want (or stick to normal method) because that problem with conflicts will never appear becuase `feature/` branch will be removed afterwards anyway (or at least it should be removed) and won't develop new things so it doesn't matter.

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

# How to create input type file with formik or other form library:

Basucally, `<input type="file" />` is uncontrolled component and you can't set its value. To get value from uncontrolled component you can create ref and pass it to that `<input />` so you can read that ref value.
What you have to do is create an object or array ob objects in formik that will contain selected files, pass that value to component that returns `<input />` and loop over the array to show selected items.
On every `onChange` of input, you receive selected items, update formik state, pass that state to the component and in that component show items for every item from array.
When you submit, you will get that array from formik but you don't need that. In submit function you will check the `inputRef` files, create `formData` and append to it all files you can find in the input ref.

HOW TO CUSTOMIZE INPUT FILE:
You can hide original input file but you should add `id` to it, so you can use `label` for the same id and wrap it around your custom styled button or div. IMPORTANT: you can't use `<button/>` component inside `label` because when you will click on that, you will trigger that button click action, not the input triger action. The easiest way is to just use `span` that looks like a button:

```
<input id="file_id" type="file" hidden ref={inputRef} {...rest} />
  <InputLabel htmlFor="file_id">
    <Button component="span" {...buttonProps}>
      {text}
    </Button>
  </InputLabel>
```

---

This project setup was created with help of: [this site](https://prateeksurana.me/blog/react-component-library-using-storybook-6/)
