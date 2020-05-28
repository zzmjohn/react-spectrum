/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {action} from '@storybook/addon-actions';
import Info from '@spectrum-icons/workflow/Info';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {TextArea} from '../';

storiesOf('TextArea', module)
  .addParameters({providerSwitcher: {status: 'positive'}})
  .add(
    'Default',
    () => render()
  )
  .add(
    'value: Test (controlled)',
    () => render({value: 'Test'})
  )
  .add(
    'defaultValue: Test (uncontrolled)',
    () => render({defaultValue: 'Test'})
  )
  .add(
    'isQuiet: true',
    () => render({isQuiet: true})
  )
  .add(
    'isDisabled: true',
    () => render({isDisabled: true})
  )
  .add(
    'isDisabled, isQuiet',
    () => render({isDisabled: true, isQuiet: true})
  )
  .add(
    'validationState: invalid',
    () => render({validationState: 'invalid'})
  )
  .add(
    'validationState: valid',
    () => render({validationState: 'valid'})
  )
  .add(
    'isReadOnly: true',
    () => render({isReadOnly: true})
  )
  .add(
    'isReadOnly: true, value: read only value',
    () => render({value: 'Read only value', isReadOnly: true})
  )
  .add(
    'isRequired: true',
    () => render({isRequired: true})
  )
  .add(
    'isRequired: true, necessityIndicator: label',
    () => render({isRequired: true, necessityIndicator: 'label'})
  )
  .add(
    'isRequired: false, necessityIndicator: label',
    () => render({isRequired: false, necessityIndicator: 'label'})
  )
  .add(
    'autoFocus: true',
    () => render({autoFocus: true})
  )
  .add(
    'icon: Info',
    () => render({icon: <Info />})
  )
  .add(
    'icon: Info, isQuiet',
    () => render({icon: <Info />, isQuiet: true})
  )
  .add(
    'icon: Info, isDisabled',
    () => render({icon: <Info />, isDisabled: true})
  )
  .add(
    'icon: Info, isQuiet, isDisabled',
    () => render({icon: <Info />, isQuiet: true, isDisabled: true})
  )
  .add(
    'icon: Info, validationState: invalid, isQuiet',
    () => render({icon: <Info />, validationState: 'invalid', isQuiet: true})
  )
  .add(
    'labelAlign: end',
    () => render({labelAlign: 'end'})
  )
  .add(
    'labelPosition: side',
    () => render({labelPosition: 'side'})
  )
  .add(
    'no visible label',
    () => render({label: null, 'aria-label': 'Street address'})
  )
  .add('custom width',
    () => render({icon: <Info />, validationState: 'invalid', width: '300px'})
  )
  .add('custom width, label side',
    () => render({icon: <Info />, labelPosition: 'side', validationState: 'invalid', width: '300px'})
  )
  .add('custom width, quiet',
    () => render({icon: <Info />, validationState: 'invalid', width: '300px', isQuiet: true})
  )
  .add('custom height, invalid',
    () => render({icon: <Info />, validationState: 'invalid', height: '300px'})
  )
  .add('custom height, invalid, label side',
    () => render({icon: <Info />, validationState: 'invalid', height: '300px', labelPosition: 'side'})
  )
  .add('custom height and width, invalid',
    () => render({icon: <Info />, validationState: 'invalid', height: '300px', width: '300px'})
  );

function render(props = {}) {
  return (
    <TextArea
      label="Comments"
      placeholder="React"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      UNSAFE_className="custom_classname"
      {...props} />
  );
}
