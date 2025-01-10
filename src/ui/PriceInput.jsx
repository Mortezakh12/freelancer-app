import React from "react";
import { useForm, Controller } from "react-hook-form";

const PriceInput = () => {
  const { control, watch } = useForm();

  // Watch the price input value
  const price = watch("price");

  // Format the input value with commas as thousand separators
  const formatInput = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Convert Rial to Toman (divide by 10) and format with commas
  const formatPrice = (value) => {
    if (!value) return "";
    const tomanValue = (parseInt(value.replace(/\D/g, ""), 10) / 10).toFixed(0); // Convert Rial to Toman
    return tomanValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="p-4">
      <form>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price (Rial)
          </label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter price in Rial"
                onChange={(e) => {
                  // Format the input value with commas
                  const formattedValue = formatInput(e.target.value);
                  // Update the field value (store the raw number without commas)
                  field.onChange(e.target.value.replace(/\D/g, ""));
                  // Manually update the input's displayed value
                  e.target.value = formattedValue;
                }}
                value={formatInput(field.value)} // Ensure the input displays formatted value
              />
            )}
          />
        </div>
      </form>

      {/* Display the formatted price in Toman */}
      <div className="mt-2">
        <span className="text-lg font-semibold">
          {formatPrice(price)} Toman
        </span>
      </div>
    </div>
  );
};

export default PriceInput;