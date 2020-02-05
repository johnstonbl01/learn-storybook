import React from 'react';
import TextInput from '../TextInput/TextInput';
import Center from '../../../.storybook/Center';

export default { title: 'Text Input', decorators: [storyfn => <Center>{storyfn()}</Center>] };

export const withPlaceholder = () => <TextInput placeholder="E-mail address" />;
export const withDefaultValue = () => <TextInput defaultValue="me@example.com" />;
