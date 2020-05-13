import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';
import {AttributesStatesDefault, PseudoStatesDefault, withPseudo} from "@ergosign/storybook-addon-pseudo-states-react";
import {SimpleButton} from "../SimpleButton/simple-button";
import {SimpleButton__withoutCssModules} from "../SimpleButtonWithoutCssModules/simple-button";

export default {
    title: 'Button',
    decorators: [
        withPseudo
    ],
    parameters: {
        withPseudo: {
            pseudos: [...PseudoStatesDefault, 'focus & hover'],
            attributes: [...AttributesStatesDefault, 'isBig']
        }
    }
};

export const simpleButton = () => <SimpleButton label={'ButtonLabel'}/>;
export const simpleButton__withoutCssModules = () => <SimpleButton__withoutCssModules label={'ButtonLabel'}/>;

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
