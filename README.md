# INFO ABOUT THIS PROJEKT

It was developed with node **14.18.2** and to run this project, you have to switch to this node version

---

# TODO:

1 - use node `18.12.1` and build this library. There will be an error and you have to resolve it (README already contains the solution, it's titled `Error: Package subpath './package.json' is not defined by "exports"`).There will be also another error `(!) Plugin rpt2: You are using a Rollup version '<2.60.0'. This may result in type-only files being ignored.d.` so you have to check if this another error was also present when using older node version (like 14.18.2)
2 - remove charts `react-chartjs-2` and others as they are not even used anymore

# How to display `...` at the end of text if the text is too long:

In short you have to add the following styles to the tag rendering text:

```css
.text-wrapper {
  /* the CSS function that renders "..." characters if text is too long is text-overflow: ellipsis; */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

Let's say you have this React/HTML/JSX structure:

```tsx
const RenderTest = () => {
  return (
    <StyledAttachmentWrapper>
      <GetAppIcon className="AttachmentsSection__linkIcon" />

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flexStart"}
        ml={"8px"}
        className="AttachmentsSection__textsWrapper"
      >
        <StyledTypography className="AttachmentsSection__downloadText">
          {t("download")}
        </StyledTypography>
        <StyledTypography className="AttachmentsSection__fileName">
          {/* BELOW GOES THE TEXT */}
          {attachment.fileName}
        </StyledTypography>
      </Box>
    </StyledAttachmentWrapper>
  );
};
```

Then your styles should look like this:

```ts
import styled from "styled-components";

export const StyledAttachmentWrapper = styled.button`
  &&& {
    max-width: 100%;

    .AttachmentsSection__textsWrapper {
      /* 24px is AttachmentsSection__linkIcon icon width, 8px is  AttachmentsSection__textsWrapper margin-left */

      width: calc(100% - 24px - 8px);
    }

    & .AttachmentsSection__fileName {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
    }
  }
`;
```

# How to pass `data-` prop (for example `data-testid`) to nested component via its props object prop like `PaperProps`:

Example below:

```tsx

  <Menu
    id="primary-search-account-menu"
    PaperProps={{
      // @ts-ignore
      "data-testid": LangSwitcherMenuTestId, // just put the data- attr in " " characters. Menu component will spread props from the object passed as PaperProps to the Paper component anyway.
    }}
  >

```

# How to test in jest if an html element has an attribute set to some value (for example if `img` tag has `src` set to something):

Example:

```tsx
const img = screen.getByTestId("image");

expect(img).toHaveProperty("src", "some-url.com");
```

# Error `if (error?.stack) {`:

```bash
D:\your-library\node_modules\jest-cli\build\run.js:129
    if (error?.stack) {
              ^

158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Module.require (internal/modules/cjs/loader.js:1026:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (D:\your-library\node_modules\jest-cli\build\index.js:12:12)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

It means that you have older node version installed, for example `12.18.1` while the application was developed with `14.18.2`

# Error `Cannot read property 'isBatchingLegacy' of undefined` when trying to test snapshots:

If you have an error like this when trying to test snapshots:

```powershell

 FAIL  __tests__/SidebarMenuItem.test.tsx
  <SidebarMenuItem />
    × should render correctly and be visible and in the document (2 ms)

  ● <SidebarMenuItem /> › should render correctly and be visible and in the document

    TypeError: Cannot read property 'isBatchingLegacy' of undefined

      83 |
      84 |     const tree = renderer
    > 85 |       .create(
         |        ^
      86 |         <SidebarMenuItem
      87 |           variant="no-dropdown"
      88 |           icon={<NotificationsIcon />}

```

Then it means your version of `reacat-test-rerender` is newer than the react version your project has installed. Update it to the same version as react by uninstalling the `react-test-rerender` package alongside with its types package and install the correct version of both of them with the following commands:

`yarn add react-test-renderer@17.0.2 -D`

and also the types package:

`yarn add @types/react-test-renderer@17.0.2 -D`

# Preview of selected image via input type="file":

If you select file and look for its object of type `File` then you will have something like this:

```tsx
const file: File = {
  lastModified: 1640993859500,
  name: "somefile.PNG",
  preview: "blob:http://localhost:4000/0cf7abe3-853d-43c7-8735-9cf0959803vc",
  size: 66112,
  type: "image/png",
  webkitRelativePath: "",
};
```

and you can use `preview` attribute as the value of `src` attribute of an `img` tag:

```jsx
const Preview = (item) => {
  return <img alt="preview the image" src={item.preview} />;
};
```

OR you can even create a whole hook called `usePreviewUrl` to get the preview url:

```jsx
import { useState, useEffect } from "react";

const isTiffFile = (file) => file.type === "image/tiff";

const usePreviewUrl = (file) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (isTiffFile(file)) {
      // below is lazy loading of 'tiff.js' npm package
      import("tiff.js").then((Tiff) => {
        // 'tiff.js' is just a npm package and it's its full name: 'tiff.js'
        const reader = new FileReader();

        reader.onload = (event) => {
          const tiff = new Tiff({ buffer: event.target.result });
          setPreviewUrl(tiff.toDataURL());
        };

        reader.readAsArrayBuffer(file);
      });
    } else {
      setPreviewUrl(file.preview);
    }
  }, [file]);

  return previewUrl;
};

usePreviewUrl.pluginName = "usePreviewUrl";

export default usePreviewUrl;
```

and you can use the hook like this:

```jsx
import LoadableAvatar from "components/Avatars/LoadableAvatar";
import usePreviewUrl from "hooks/usePreviewUrl";

const LOADER_GIF = "/images/ajax-loader.gif";

const styles = () => ({
  root: {},
});

const FilePreviewThumbnail = ({ file }) => {
  const previewUrl = usePreviewUrl(file); // the usage of hook

  return <LoadableAvatar key={previewUrl} src={previewUrl || LOADER_GIF} />;
};

export default FilePreviewThumbnail;
```

where `LoadableAvatar` component is:

```jsx
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.lightSilver,
  },
  img: {
    opacity: "0",
    transition: "opacity 600ms",
  },
  unloaded: {
    opacity: "none",
  },
  loaded: {
    opacity: "1",
  },
  fallback: {
    width: "100%",
    height: "100%",
  },
}));

// function useIsMounted() {
//   let isMounted = useRef(true);

//   useEffect(() => {
//     return () => {
//       isMounted = null;
//     };
//   }, []);
//   return isMounted;
// }

const onLoad = (ref, loaddedClass) => () => {
  if (ref && ref.current) {
    ref.current.classList.add(loaddedClass);
  }
};

const LoadableAvatar = ({ className, ...other }) => {
  const classes = useStyles();
  let imgEl = useRef(null);

  useEffect(() => {
    return () => {
      imgEl = null;
    };
  }, []);

  return (
    <Avatar
      className={className}
      classes={{
        root: classes.root,
        img: classes.img,
      }}
      imgProps={{
        ref: imgEl,
        onLoad: onLoad(imgEl, classes.loaded),
      }}
      {...other}
    >
      <div className={classes.fallback} />
    </Avatar>
  );
};

export default LoadableAvatar;
```

# How to send files to server with a delay so requests won't be canceled by cancelToken (axios) or API

```tsx
class PrintTemplatesUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      isUploading: false,
    };
  }

  /**
   * This action removes file already send and fulfiled so they can be no longer dispalyed on the list of files pending to be uploaded
   */
  removeFile = (file) => {
    this.setState((state) => ({
      files: filter(state.files, (item) => item !== file),
    }));
  };

  /**
   * set files to be uploaded when user selects files form their disk
   */
  handleFilesChange = (files) => {
    this.setState({
      files,
    });
  };

  /**
   * Set loading flag to true so user can see CircularProgress when files are uploaded
   */
  handleUploadStart = (files) => {
    this.setState({
      uploading: true,
    });
  };

  /**
   * Set loading flag to false so user no longer can see CircularProgress and fetch fresh data
   */
  handleUploadEnd = ({ uploaded, rejected }) => {
    //  you can do something wit uploaded and rejected here

    this.setState({
      uploading: false,
    });

    actions.fetchPrintTemplatesForProcedure(this.procedureTargetType);
  };

  /**
   * @param {*} request request that uploads a file
   * @param {*} file it's a file to be uploaded
   * @param {*} delayMultiplier
   *
   * This funciton is used to delay a uplading template - without it backend will thrown 500 error for most of uploading requests as they comes too fast or axios will cancel request with cancelToken (if you use cancelToken)
   */
  makeRequestWithDelay = async (request, file, delayMultiplier = 0) => {
    const delay = (delayMultiplier + 1) * 500;

    await new Promise((res) =>
      setTimeout(() => {
        res();
      }, delay)
    );

    return request(file);
  };

  handleMultiUpload = (files) => {
    const { onUploadEnd } = this.props;

    handleUploadStart(); // set uploading flag to true so user can see CircularProgress for the time files are uploading

    const promises = map(files, (file, index) =>
      this.makeRequestWithDelay(this.handleSingleUpload, file, index).catch(
        (error) => error
      )
    );

    Promise.all(promises).then((res) => {
      if (handleUploadEnd) {
        // below code is usually not really needed. Just the Promise.all(promises) is needed but below code usually won't be needed
        const uploaded = [];
        const rejected = [];

        each(res, (item, index) => {
          if (item.error) {
            rejected.push(files[index]);
          } else {
            uploaded.push(get(item, "payload.data[0]"));
          }
        });

        // only this handleUploadEnd is needed - to hide CircularProgress
        handleUploadEnd({
          uploaded: compact(uploaded),
          rejected: compact(rejected),
        });
      }
    });
  };

  /**
   * @param {*} file It's the file to be uploaded to server
   * @returns redux action object with meta, payload, type
   */
  handleSingleUpload = async (file) => {
    const { actions } = this.props;

    return actions.uploadPrintTemplate(file, file.name).then((res) => {
      this.removeFile(file); // remove uploaaded file from list displaying files wainting to be uploaded as it has just got uploaded
      return res;
    });
  };

  render() {
    const { multiple = true } = this.props;
    const { files } = this.state;
    return (
      <PrintTemplatesUpload
        files={files}
        onChange={this.handleFilesChange}
        onUpload={this.handleMultiUpload}
        multiple={multiple} // allow user to select multiple files in files explorer window
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      uploadPrintTemplate,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(PrintTemplatesUploader);
```

# `Error: Package subpath './package.json' is not defined by "exports"` Error

If you have error like this:

```powershell
$ yarn build
yarn run v1.22.4
$ rollup -c
Error loading `tslib` helper library.
[!] Error: Package subpath './package.json' is not defined by "exports" in D:\MY-VISUAL-NOVEL-PROJECT\novel-ui-lobrary\node

_modules\rollup-plugin-typescript2\node_modules\tslib\package.json
Error: Package subpath './package.json' is not defined by "exports" in D:\MY-VISUAL-NOVEL-PROJECT\novel-ui-lobrary\node_mod

ules\rollup-plugin-typescript2\node_modules\tslib\package.json
    at new NodeError (node:internal/errors:393:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:358:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:668:3)
    at resolveExports (node:internal/modules/cjs/loader:529:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:569:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:981:27)
    at Function.Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (D:\MY-VISUAL-NOVEL-PROJECT\novel-ui-lobrary\node_modules\rollup-plugin-typescript2\src\tslib.ts:

11:23)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

Then it probably means that node version got updated. I had this issue when I switched my node version to `18.12.1` (previously developing it on `14.18.2`).

To solve this issue simply remove `rollup-plugin-typescript2` and install the latest version with:
`yarn add rollup-plugin-typescript2`

Then if you will try to run `yarn build` and got error:

```powershell

$ yarn build
yarn run v1.22.4
$ rollup -c

src/**/*.tsx, src/**/index.ts → lib...
(!) Plugin rpt2: You are using a Rollup version '<2.60.0'. This may result in type-only files being ignored.d.
created lib in 28.9s
Done in 29.68s.

```

the imporatant part is `(!) Plugin rpt2: You are using a Rollup version '<2.60.0'. This may result in type-only files being ignored.d.`

then you should install the latest version of `rollup`

# Notes about testing and rollup configuration:

`1` - you can't have tests next to the actuall components becuase test names matches the rollup input pattern so tests would be present in `lib` folder lib building. The pattern is the following:

```js
// rollup.config.js

const rollupConfig = {
  input: ["src/**/*.tsx", "src/**/index.ts"], // file Button.test.tsx also matches "src/**/*.tsx" pattern
};

export default rollupConfig;
```

And I couldn't find a way to exclude tests. So if you can't place tests next to their components you can place them in `__tests__` folder in root directory.

`3` - You can't include `__tests__` folder in `tsconfig.json` becasue it will put `__tests__` folder into `lib` folder after running `yarn build`

`3` - You can't include `setupTests.ts` file in `tsconfig.json` becasue it will put `src` folder and `setupTests.ts` file into `lib` folder after running `yarn build`

`4` - You can have `setupTests.ts` file in root directory (if you don't inlude it in `package.json`) but if you want to have `setupTests.ts` file next to the actuall tests in `__tests__` you would get error while `yarn test` beucase this file does not contain any tests so you have to exclude it from tests with the following option in `jest.config.json`:

```json
{
  "modulePathIgnorePatterns": ["<rootDir>/__tests__/setupTests.ts"]
}
```

Found [here](https://stackoverflow.com/a/40486671)

# Error `TypeError: expect(...).toBeInTheDocument is not a function`:

If you have the following error:

```
 FAIL  src/buttons/Button/Button.test.tsx
  test
    × should test (84 ms)

  ● test › should test

    TypeError: expect(...).toBeInTheDocument is not a function

      10 |       expect: expect(btn),
      11 |     });
    > 12 |     expect(btn).toBeInTheDocument();
         |                 ^
      13 |   });
      14 | });
      15 |

      at Object.<anonymous> (src/buttons/Button/Button.test.tsx:12:17)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        5.147 s, estimated 6 s
Ran all test suites.
```

But you can see that TypeScript gives you a hints that `toBeInTheDocument` exists on `expect()` then it means you have configured TypeScript correctly (you have the snippets) but you still need to install the package that actually allows you to use `ToBeInTheDocument`. Make sure you've got the library `@testing-library/jest-dom` installed. If not, install it with:

`yarn add -D @testing-library/jest-dom`

and then import it in your `setupTests.ts` file:

```ts
// setupTests.ts

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
```

and then point to that file in `jest.config.json`:

```json
{
  "setupFilesAfterEnv": ["<rootDir>/your/path/to/file/setupTests.ts"]
}
```

If you placed this file in a url that matches `jest` url under which `jest` looks for tests then simply exclude this particualr file in `jest.config.json` file:

```json
{
  "modulePathIgnorePatterns": ["<rootDir>/__tests__/setupTests.ts"]
}
```

Found [here](https://stackoverflow.com/a/40486671)

---

> Keep in mind you can't link `setupTests.ts` file to your `tsconfig.json` file like below:

```json
{
  "include": ["setupTests.ts"]
}
```

because when you do that, whole `src` folder and that file `setupTests.ts` will be included in `lib` folder after building via `yarn build`

---

Found [here](https://stackoverflow.com/a/60351942)

# Error `Jest environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.`:

If you run `yarn test` which is just:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

and you get error like the following one:

```
$ yarn test
yarn run v1.22.4
$ jest
● Validation Error:

  Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

  Configuration Documentation:
  https://jestjs.io/docs/configuration


As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

you should install the missing package via:
`yarn add -D jest-environment-jsdom`

Found [here](https://stackoverflow.com/a/69228464)

# Error `The error below may be caused by using the wrong test environment`:

If you got error like this:

```
  The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.

    ReferenceError: document is not defined

      4 | describe("Button", () => {
      5 |   it("should be in the document", () => {
    > 6 |     const { container } = render(<Button>click me</Button>);
        |                                 ^
      7 |
      8 |     const btn = getByText(container, "click me");
      9 |

      at render (node_modules/@testing-library/react/dist/pure.js:83:5)
      at Object.<anonymous> (src/buttons/Button/Button.test.tsx:6:33)
```

Then you should change jest environment in jest config file:

```json
{
  "testEnvironment": "jsdom"
}
```

Found [here](https://stackoverflow.com/a/69228464)

# Error `Cannot find module 'react-dom/client' from 'node_modules/@testing-library/react/dist/pure.js'` when trying to test components with command `yarn test`:

If you run `yarn test` which is just:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

and you get error like the following one:

```
$ yarn  test
yarn run v1.22.4
$ jest
 FAIL  src/buttons/Button/Button.test.tsx
  ● Test suite failed to run

    Cannot find module 'react-dom/client' from 'node_modules/@testing-library/react/dist/pure.js'

    Require stack:
      node_modules/@testing-library/react/dist/pure.js
      node_modules/@testing-library/react/dist/index.js
      src/buttons/Button/Button.test.tsx

    > 1 | import { getByText, render } from "@testing-library/react";
        | ^
      2 | import Button from "./Button";
      3 |
      4 | describe("test", () => {

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:425:11)
      at Object.<anonymous> (node_modules/@testing-library/react/dist/pure.js:35:46)
      at Object.<anonymous> (node_modules/@testing-library/react/dist/index.js:9:13)
      at Object.<anonymous> (src/buttons/Button/Button.test.tsx:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        4.783 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

then it means that you've installed the newest version of `@testing-library/react` package (13+) but you also have React v17 or lower. The thing is that `@testing-library/react` in version 13+ supports React 18+ and NOT React 17 or lower. So to fix this just install the latest `@testing-library/react` 12 version.

So first remove to current one:
`yarn remove @testing-library/react`

and then install the required one with:
`npm i -D @testing-library/react@release-12.x`
OR
`yarn add --dev @testing-library/react@release-12.x`

Found [here](https://stackoverflow.com/questions/71713405/cannot-find-module-react-dom-client-from-node-modules-testing-library-react#comment127617797_71716438)

Or you can update React to version 18

# Error `Jest encountered an unexpected token` with further description `Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.`:

If you run `yarn test` which is just:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

and you get error like the following one:

```
$ yarn  test
yarn run v1.22.4
$ jest
 FAIL  src/buttons/Button/Button.test.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not conf
igured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: D:\my-project\src\buttons\Button\Button.test.tsx: Support for the experimental syntax 'jsx' isn't c
urrently enabled (6:34):

      4 | describe("test", () => {
      5 |   it("should test", () => {
    > 6 |     const { container } = render(<Button>click me</Button>);
        |                                  ^
      7 |
      8 |     const btn = getByText(container, "click me");
      9 |

    Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config t
o enable transformation.
    If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the
 'plugins' section to enable parsing.

      at instantiate (node_modules/jest-config/node_modules/@babel/parser/src/parse-error/credentials.ts:62:21)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.026 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

then it means your test (jest) configuration is incorrect. To fix this, paste the following code inside of `package.json`:

```json
{
  "jest": {
    "transform": {
      ".(ts|tsx)": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": ["ts", "tsx", "js"]
  }
}
```

And install `ts-jest` package which is used to handle `(ts|tsx)` files:

`yarn add ts-jest --dev`

found [here](https://www.grzegorowski.com/react-typescript-library-rollup-jest-tests-setup)
Just search for `Then appending following lines to enable Typescript detection and transpilation:`

# How to add testing with `jest` and `react-testing-library`:

This project is outside of Create React App so the project does not use `react-scripts` (which has already configured testing solution) so we will configure it manually using `jest`.

`1` - install the required packages with:

`yarn add --dev @testing-library/jest-dom @testing-library/react @testing-library/user-event jest @types/jest`

`2` - create script that will run tests in `package.json`:

```json
{
  "scripts": {
    "test": "jest --watch"
  }
}
```

where `--watch` is just to run tests in watch mode but you can just put `jest`

`3` - add `react-app/jest` rules for eslint in `package.json`:

```diff
{
  "eslintConfig": {
-   "extends": "react-app",
+   "extends": ["react-app", "react-app/jest"]
  }
}
```

`4` - write some example test like:

```tsx
import { getByText, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should be in the document", () => {
    const { container } = render(<Button>click me</Button>);

    const btn = getByText(container, "click me");

    expect(btn).toBeInTheDocument();
  });
});
```

`5` - run tests with `yarn test`

From this point you may receive couple of errors but you can find answers to them above this one headline

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

> **_NOTE:_** Above command will install some specific versions of those plugins. At some point eslint stoped working for me and I discovered that I had to remove above plugins and install them again without telling any specific version. Looks like the VSC eslint extension got updated and stopped working with above specific old versions

OR the same command without any concrete version to install the latest packages:

`yarn add -D eslint-config-react-app @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

- in `package.json` add:

```json
{
  "eslintConfig": {
    "extends": "react-app"
  }
}
```

OR create `.eslintrc.json` and paste:

```json
{
  "extends": "react-app"
}
```

You can also add `jest` rules if you write tests: `"extends": ["react-app", "react-app/jest"]`

More info [here](https://www.npmjs.com/package/eslint-config-react-app)

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

```

```
