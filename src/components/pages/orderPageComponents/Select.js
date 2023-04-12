export const customStyles = {
  control: (base, state) => ({
    ...base,
    height: "60px",
    borderColor: "rgb(238, 238, 238)",
    Width: "360px",
    // top: "8px"
    borderRadius: "10px",
  }),
  placeholder: (base, state) => ({
    ...base,
    // padding: "0px 19px",
  }),
  menu: (base, state) => ({
    ...base,
    width: "345px",
    padding: "12px 0px",
    position: "absolute",
    flexDirection: "column",
    overflow: "visible",
    zIndex: 2,
    background: "#FFF",
    lineHeight: 2.29,
    boxShadow: "0 15px 66px #0000000a",
    border: "solid 1px #eeeeee",
  }),
  singleValue: (base, state) => ({
    ...base,
    cursor: "pointer",
    padding: "0 20px",
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: "15px 19px",
  }),
  input: (base, state) => ({
    ...base,
    color: "transparent",
  }),
  // indicatorContainer: (base, state) => ({
  //   ...base,
  //   color: "black",
  // }),
  menuList: (base, state) => ({
    ...base,
    zIndex: 5,
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "14px",
    lineHeight: "6px",
    color: "#1b2235",
    "&:hover": {
      backgroundColor: "#a0a1a4"
    }
  }),
  // singleValue: (base, state) => ({
  //   ...base,
  //   backgroundColor: "red"
  // }),

  // valueContainer: (base, state) => ({
  //   ...base,
  //   height: "30px",
  //   padding: "0 6px",
  // }),

  // input: (base, state) => ({
  //   ...base,
  //   margin: "0px",
  // }),
  indicatorSeparator: (base, state) => ({
    display: "none",
  }),
  // indicatorsContainer: (base, state) => ({
  //   ...base,
  //   height: "30px",
  // }),
};
