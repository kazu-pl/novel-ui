# React-snap with DashboardLayout and expand `Collapse` component when running react-snap:

When you run react-snap you have to make sure that `Collapse` component is open. When it's open then its children (react -router Links components) are mounted into the DOM and react-snap can detect it and create index.html files.

When you create Sidebar you probably want to pass to that component array with objects that describes all avaliable items in sidebar menu. You pass it like this:

```tsx
const MyComp = () => {
  return (
    <Sidebar
      items={[
        {
          variant: "no-dropdown",
          icon: (
            <ColoredIconWrapper color="grey">
              <DashboardIcon />
            </ColoredIconWrapper>
          ),
          label: "Dashboard",
          to: "/dashboard",
        },
        {
          variant: "with-dropdown",
          icon: (
            <ColoredIconWrapper color="grey">
              <InboxIcon />
            </ColoredIconWrapper>
          ),
          label: "Account",
          dropdownItems: [
            {
              to: "/account/avatar",
              label: "News",
            },
            {
              to: "/account/settings",
              label: "News",
            },
          ],
        },
      ]}
    />
  );
};
```

Lets suppose that single SidebarItem returns `Collapse` MUI component to colapse sidebar items if they are with dropdown. It may look lik this:

```tsx
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

// src/Sidebar/SidebarMenuItem.tsx

const SingleSidebarItem = () => {
  return (
    <Collapse
      // `navigator.userAgent === "ReactSnap"` checks if react-snap is running. If so, then open tabs so they are mounted into DOM so react-snap can detect its children (Links) and create links based on that
      in={navigator.userAgent === "ReactSnap" ? true : isSubmenuOpen}
      timeout="auto"
      unmountOnExit
    >
      <List component="div" disablePadding>
        {props.dropdownItems.map((item, index) => (
          <StyledLink key={index} to={item.to} $asSubmenuItem>
            {item.label}
          </StyledLink>
        ))}
      </List>
    </Collapse>
  );
};
```

Without that `navigator.userAgent === "ReactSnap"` sidebar submenu items will NOT be expanded when running `react-snap` so it will be impossible for `react-snap` to detect them and create index.html files for them.
When running in real browser it will be collapsed so the behaviour won't be affected. It SHOULD be collapsed UNLESS `isSubmenuOpen` is true

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

```json

 "eslintConfig": {
    "extends": "react-app"
  }

```

OR create `.eslintrc.json` and paste:

```json
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

```json
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

```tsx
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

```tsx
// Example.tsx

export interface CustomExampleProps {}

const CustomExample = forwardRef(
  (props: CustomExampleProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return <div></div>;
  }
);

CustomExample.displayName = "Example"; // CustomExample is a function name and is different than the file name (Example.tsx)
export default CustomExample;
```

---

This project setup was created with help of: [this site](https://prateeksurana.me/blog/react-component-library-using-storybook-6/)
