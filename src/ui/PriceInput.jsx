import { useForm } from 'react-hook-form';

const PriceInput = () => {
  const { register, handleSubmit, watch } = useForm();
  const price = watch('price', '');

  const formatPrice = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // State to hold the formatted price
  const formattedPrice = formatPrice(price.replace(/,/g, ''));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        name="price"
        type="text"
        {...register('price', {
          onChange: (event) => {
            const { value } = event.target;
            event.target.value = formatPrice(value.replace(/,/g, ''));
          },
        })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PriceInput;

// 