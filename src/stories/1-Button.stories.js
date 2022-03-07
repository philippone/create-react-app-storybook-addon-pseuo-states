import React from "react";
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  Orientation,
  withPseudo,
} from "@ergosign/storybook-addon-pseudo-states-react";
import { SimpleButton } from "../SimpleButton/simple-button";
import { SimpleButton__withoutCssModules } from "../SimpleButtonWithoutCssModules/simple-button";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      pseudos: [...PseudoStatesDefault, "focus & hover"],
      attributes: [...AttributesStatesDefault],
      //   permutations: [{ attr: "theme", value: "dark" }, "isBig"],
    },
  },
};

export const simpleButton = () => (
  <SimpleButton label={"ButtonLabel"} rounded={boolean("rounded", false)} />
);

export const simpleButtonPermutation = () => (
  <SimpleButton label={"ButtonLabel"} rounded={boolean("rounded", false)} />
);
simpleButtonPermutation.parameters = {
  withPseudo: {
    attributes: [...AttributesStatesDefault],
    permutations: [
      { attr: "theme", label: "Dark Theme", value: "dark" },
      { attr: "theme", label: "Light Theme", value: "light" },
      "isBig",
    ],
    styles: {
      inlineGrid: true,
    },
  },
};

export const simpleButtonWithoutAttr = () => (
  <SimpleButton label={"ButtonLabel"} rounded={boolean("rounded", false)} />
);
simpleButtonWithoutAttr.parameters = {
  withPseudo: {
    pseudos: [],
    permutations: [
      { attr: "theme", label: "Dark Theme", value: "dark" },
      { attr: "theme", label: "Light Theme", value: "light" },
      "isBig",
    ],
    styles: {
      orientation: Orientation.ROW,
      inlineGrid: true,
    },
  },
};

export const simpleButtonWithoutCssModules = () => (
  <SimpleButton__withoutCssModules label={"ButtonLabel"} />
);

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
//
// export const emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img"
//           aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );

/*
storiesOf('Buttons', module)
    .addDecorator(withPseudo)
    .add('Button', () => (
        <Button onClick={action('clicked')}>
                 <span role="img"
                       aria-label="so cool">
                   😀 😎 👍 💯
                 </span>
        </Button>
    ));
*/
