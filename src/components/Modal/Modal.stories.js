import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Modal from '../Modal/Modal';
import Center from '../../../.storybook/Center';

export default { title: 'Modal', decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs] };

export const show = () => (
  <Modal
    text={text('Modal Text', 'sample modal')}
    show={boolean('Show Modal', true)}
    color={text('Modal Color', '#FFF')}
  />
);
