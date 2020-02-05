import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TextInput from '../TextInput/TextInput';
import Center from '../../../.storybook/Center';

export default {
  title: 'Text Input',
  decorators: [storyfn => <Center>{storyfn()}</Center>, withKnobs]
};

export const withPlaceholder = () => (
  <TextInput placeholder={text('Placeholder Text', 'E-mail address')} />
);

export const withDefaultValue = () => <TextInput defaultValue="me@example.com" />;
