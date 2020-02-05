import React from 'react';
import Modal from '../Modal/Modal';
import Center from '../../../.storybook/Center';

export default { title: 'Modal', decorators: [storyFn => <Center>{storyFn()}</Center>] };

export const show = () => <Modal text="sample modal" show={true} color="white" />;
