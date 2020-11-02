import React from 'react';
import styled from 'styled-components';

const AddNewTermCard = styled.div`
    border: 1px solid red;
    width: 400px;
    position: sticky;
    top: 100px;
    margin: 200px 20px;
    height: 360px;
    background-color: #f9f9f9;
`

const AddNewTerm = () => {
  return ( 
    <AddNewTermCard></AddNewTermCard>
   );
}
 
export default AddNewTerm;