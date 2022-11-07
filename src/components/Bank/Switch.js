import React from "react";

import SwitchSelector from "react-switch-selector";

const options = [
  {
    label: "Comprar",
    value: "rent",
    selectedBackgroundColor: "#5DD490",
    fontColor: "#5DD490"
    //border:"1px solid black"
  },
  {
    label: "Vender",
    value: "purchase",
    selectedBackgroundColor: "#EC634C",
    fontColor: "#EC634C"
  },
  {
    label: "Vende2",
    value: "purchase",
    selectedBackgroundColor: "red",
    fontColor: "#EC634C"
  }
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

function Switch() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <p style={{ height: "50px" }}>
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          // backgroundColor={"#353b48"}
          fontSize={18}
          selectedFontColor={"#f5f6fa"}
          wrapperBorderRadius={10}
          optionBorderRadius={10}
          border="1px solid #E6E6E6"
        />
      </p>
    </div>
  );
}

export default Switch;
