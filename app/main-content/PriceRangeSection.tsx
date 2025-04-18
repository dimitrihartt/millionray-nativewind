import React from "react";
import {
  Checkbox,
  Slider,
  Text,
  Tooltip,
  VStack,
  Heading,
  CheckboxGroup,
  SliderTrack,
  SliderFilledTrack,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckIcon
} from "@/components/ui";

const PriceRangeSection = () => {
  const [sliderValue, setSliderValue] = React.useState(3500);
  const [values, setValues] = React.useState(["entirePlace"]);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  const sidebarFiltersPriceRange = [
    {
      label: "below R$ 100000",
      value: "below R$ 100000",
    },
    {
      label: "R$100000 - R$250000",
      value: "R$100000 - R$250000",
    },
    {
      label: "R$250000 - R$500000",
      value: "R$250000 - R$500000",
    },
    {
      label: "Above R$500000",
      value: "Above R$500000",
    },
  ];

  return (
    <VStack space="md">
      <Heading size="sm">Price Range</Heading>
      <Slider
        minValue={100000}
        maxValue={5000000}
        w="100%"
        size="sm"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          placement="bottom"
          trigger={(triggerProps: any) => {
            return <Slider.Thumb {...triggerProps} />;
          }}
        >
          <Tooltip.Content>
            <Text color="$white">₹{sliderValue}</Text>
          </Tooltip.Content>
        </Tooltip>
      </Slider>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        mt="$3"
        accessibilityLabel="price filter"
      >
        {sidebarFiltersPriceRange.map((priceRange: any) => {
          return (
            <Checkbox
              value={priceRange.value}
              size="sm"
              my="$2"
              key={priceRange.value}
              accessibilityLabel={priceRange.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel ml="$2">{priceRange.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PriceRangeSection;
