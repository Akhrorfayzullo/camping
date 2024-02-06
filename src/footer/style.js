import styled from "styled-components";
export const Lastdiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: 180px 3vw 80px;
`;
export const Oddiy = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: ${(props) => (props.$social ? "row" : "column")};
  gap: 10px;
`;
export const Lasth1 = styled.h1`
  color: #5e6282;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.5%; /* 22.41px */
`;
// export const Lastdiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   /* border: 1px solid red; */
//   margin: 180px 3vw 80px;
// `;
