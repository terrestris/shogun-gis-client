import React, {
  useEffect
} from 'react';

import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import _isNil from 'lodash/isNil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import { addCustomParam } from '../../../store/print';

export type CustomFieldInputProps = InputProps;

export const CustomFieldInput: React.FC<CustomFieldInputProps> = ({
  value,
  id,
  placeholder,
  maxLength,
  ...restProps
}): JSX.Element => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!_isNil(id)) {
      dispatch(addCustomParam({
        [id]: value
      }));
    }
  }, [value, id, dispatch]);

  return (
    <Input
      id={id}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      showCount={!!(maxLength && maxLength > 1)}
      {...restProps}
    />
  );
};

export default CustomFieldInput;
