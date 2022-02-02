import React from 'react';
import styled from 'styled-components'


function SelectView({data , handleChange}) {
  return (
    <SelectBox onChange={(e) => handleChange(e.target.value)}>
        {data.map(item => 
        <option value={item.value} key={item.id} >{item.value}</option>
        )}
    </SelectBox>
  );
}

const SelectBox=styled.select`
border:none;
outline:none;
margin-bottom:1rem;
width:90%;
color:#fff;
background-color:rgb(153, 87, 214);
padding:.5rem;
border-radius:10px;
@media only screen and (max-width:600px) {
  width:100%
}
option
{
  padding:1rem;
}
`
export default SelectView;
