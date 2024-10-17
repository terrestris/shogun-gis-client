import React, {
  useEffect, useState
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

  const [inputText, setInputText] = useState<any>(value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!_isNil(id)) {
      dispatch(addCustomParam({
        [id]: inputText
      }));
    }
  }, [inputText, id, dispatch]);

  useEffect(() => {
    setInputText(value);
  }, [value]);

  return (
    <Input
      id={id}
      value={inputText}
      onChange={(event) => setInputText(event.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      showCount={!!(maxLength && maxLength > 1)}
      {...restProps}
    />
  );
};

export default CustomFieldInput;
