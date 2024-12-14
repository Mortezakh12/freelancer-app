import { useForm } from 'react-hook-form';

const PriceInput = () => {
  const { register, handleSubmit, watch } = useForm();
  const price = watch('price', '');

  const formatPrice = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        name="price"
        type="text"
        {...register('price')}
        onChange={(e) => {
          e.target.value = formatPrice(e.target.value.replace(/,/g, ''));
        }}
      />
      <span>{formatPrice(price.replace(/,/g, ''))}</span>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PriceInput;
