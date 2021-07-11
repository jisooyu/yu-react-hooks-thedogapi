import  styled  from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  background: papayawhip;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" :
   "palevioletred"};

  font-size: 1em;
  padding: 0em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// Create an Input component that'll render an <input> tag with some styles
export const Input = styled.input`
  font-size: 1em;
  padding: 0em 0.2em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;