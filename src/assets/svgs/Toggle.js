// import * as React from "react";
// import Svg, { Rect, Circle } from "react-native-svg";
// const Toggle = (props) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={46}
//     height={25}
//     viewBox="0 0 46 25"
//     fill="none"
//     {...props}
//   >
//     <Rect
//       width={46}
//       height={24.7952}
//       rx={12.3976}
//       fill="black"
      
//       fillOpacity={0.33}
//     />
//     <Circle cx={11.5} cy={12.3976} r={8.14958} fill="#FAFAFA" />
//   </Svg>
// );
// export default Toggle;
import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

const Toggle = ({ isOn }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={25}
      viewBox="0 0 46 25"
      fill="none"
    >
      <Rect
        width={46}
        height={24.7952}
        rx={12.3976}
        fill={isOn ? "#D6721E" : "black"}
        fillOpacity={isOn ? 1 : 0.33}
      />
      <Circle
        cx={isOn ? 34.5 : 11.5} // switch position
        cy={12.3976}
        r={8.14958}
        fill="#FAFAFA"
      />
    </Svg>
  );
};

export default Toggle;
