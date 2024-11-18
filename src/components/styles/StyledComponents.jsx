// here we keep all the styled componenets
import { styled } from "@mui/material"
import {Link as LinkComponent} from 'react-router-dom'
import { grayColor,matBlack } from "../../constants/color";

//here instyled component me kuch html ka element yha fr 
export const visuallyHiddenInput = styled('input')({
    border:0,
    clip:"rect(0 0 0 0)",
    height:1,
    margin:-1,
    overflow:"hidden",
    padding:0,
    position:"absolute",
    whiteSpace:"nowrap",
    width:1,
})
;
export const Link =styled(LinkComponent)`
  text-decoration:none;
  color:black;
  padding:1rem;
  &:hover{
  background-color:grey;
}
`;

export const InputBox=styled("input")`
  width:100%;
  height:100%;
  border:none;
  outline:none;
  padding:0 3rem;
  border-radius:1.5rem;
  background-color:${grayColor};

`;

export const SearchField = styled("input")`
  padding:1rem 2rem,
  width:20vmax;
  height:2.5rem;
  border:none;
  outline:none;
  border-radius:1.5rem;
  background-color:#f1f1f1;
  font-size:1rem;
`;

export const CurveButton =styled("button")`

  border-radius: 1.5rem;
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${matBlack};
  color: white;
  font-size: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

`;