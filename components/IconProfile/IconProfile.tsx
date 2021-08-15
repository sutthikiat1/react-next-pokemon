import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface IconProfileProp {
  src: string;
  width?: number;
  height?: number;
}
function IconProfile({ width = 56, height = 56, src }: IconProfileProp) {
  return (
    <Container width={width} height={height}>
      <Image
        src={src}
        alt="icn_profile"
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={src}
      />
    </Container>
  );
}
const Container = styled.div`
  min-width: ${({ width }) => width}px;
  max-width: ${({ width }) => width}px;
  flex-grow: 1;
  height: ${({ height }) => height}px;
  display: inline-block;
  background: linear-gradient(#ccc, #ccc) padding-box,
    linear-gradient(to right, #9c20aa, #fb3570) border-box;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
`;

export default IconProfile;
