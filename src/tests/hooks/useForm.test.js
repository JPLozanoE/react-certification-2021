import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing useForm hook', () => {
  const initialForm = {
    name: 'Pablo',
    email: 'pablo@gmail.com',
  };

  test('Should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Should return a default form when given not given values', () => {
    const { result } = renderHook(() => useForm());
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual({});
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Should change form value', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Liliana',
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: 'Liliana' });
  });

  test('Should reset form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Liliana',
        },
      });

      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
