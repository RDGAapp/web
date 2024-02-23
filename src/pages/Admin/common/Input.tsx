import { ChangeEvent, InputHTMLAttributes, useContext } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';

import { AppSettingsContext } from 'context/AppSettings';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CustomInput = styled.input`
  padding: 0.2rem 0.6rem;
  background-color: inherit;
  border: 1px solid currentColor;
  border-radius: 0.5rem;

  &:invalid {
    border-color: ${({ theme }) => theme.colors.invalid};
  }
`;

const CustomSelect = styled.select`
  padding: 0.2rem 0.6rem;
  background-color: inherit;
  border: 1px solid currentColor;
  border-radius: 0.5rem;

  &:invalid {
    border-color: ${({ theme }) => theme.colors.invalid};
  }
`;

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  variants: { value: string; text: string }[];
  onChange: (value: any) => void;
}

const Input = ({ label, onChange, type, ...props }: Props) => {
  const { theme } = useContext(AppSettingsContext);
  return (
    <Label>
      {label}:
      {type === 'tinymce' && (
        <Editor
          apiKey='pzic39vq99npan2dulhohsiej067iwv4u9hae7jo3q9l7uwt'
          initialValue={props.value as string}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'lists',
              'advlist',
              'link',
              'autolink',
              'image',
              'charmap',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'help',
              'fullscreen',
              'emoticons',
              'quickbars',
              'media',
            ],
            toolbar: `
              undo redo
              | link image media
              | blocks
              | bold italic forecolor emoticons
              | align
              | bullist numlist outdent indent
              | removeformat
              | charmap insertdatetime searchreplace
              | fullscreen
              | help
            `,
            fullscreen_native: true,
            quickbars_insert_toolbar: false,
            skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
            content_css: theme === 'dark' ? 'dark' : '',
            extended_valid_elements: 'img[src|style|alt|loading=lazy]',
          }}
          onEditorChange={(value) => onChange(value)}
        />
      )}
      {type === 'select' && (
        <CustomSelect
          value={props.value}
          required={props.required}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            onChange(event.target.value)
          }
        >
          <option value='' />
          {props.variants.map((variant) => (
            <option key={variant.value} value={variant.value}>
              {variant.text}
            </option>
          ))}
        </CustomSelect>
      )}
      {!['select', 'tinymce'].includes(type ?? '') && (
        <CustomInput
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            type === 'file'
              ? onChange(event.target.files)
              : onChange(event.target.value)
          }
          value={props.value}
          required={props.required}
          type={type}
        />
      )}
    </Label>
  );
};

export default Input;
