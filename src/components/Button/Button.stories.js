import React from 'react';
import Button from '../Button/Button';
import Center from '../../../.storybook/Center';

export default {
  title: 'Button',
  decorators: [storyFn => <Center>{storyFn()}</Center>]
};

export const withText = () => (
  <Button>
    <span>Click me!</span>
  </Button>
);

export const withIcon = () => (
  <Button>
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="narwhal"
      class="svg-inline--fa fa-narwhal fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="40px"
    >
      <path
        fill="#FFF"
        d="M600.83 211.05l38.9-166.17c1.04-4.46-.94-9.25-5.14-11.57-5.07-2.8-11.45-.96-14.25 4.11L535 192s.41.17 1.12.46C299.61 197.4 227.97 416 163.88 416 144.1 416 128 399.91 128 380.13v-97.99l49.75-30.51A32.007 32.007 0 00192 225v-80.98c0-12.78-14.24-20.4-24.88-13.31L96 178.13l-71.12-47.42C14.24 123.63 0 131.25 0 144.03V225c0 10.7 5.35 20.69 14.25 26.62L64 282.14v97.99C64 435.2 108.8 480 163.88 480H576c35.35 0 64-28.65 64-64V288c0-31.6-15.54-59.45-39.17-76.95zM432 352c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
      />
    </svg>
  </Button>
);
