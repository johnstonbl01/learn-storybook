import React from 'react';
import TextInput from '../TextInput/TextInput';

export default { title: 'Text Input' };

export const withPlaceholder = () => <TextInput placeholder="E-mail address" />;
export const withDefaultValue = () => <TextInput defaultValue="me@example.com" />;
