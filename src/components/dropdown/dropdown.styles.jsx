import styled from "styled-components";


export const DropdownWrapper = styled.div`
 .Dropdown-root {
   width: 20rem;
  position: relative;
  color: ${props=> props.isThemeLight? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  box-shadow: 0 0 3px rgba(0,0,0,0.1)
 
}

.Dropdown-control {
  border: 2px solid transparent;
  background-color: ${props => props.isThemeLight? 'white' : 'hsl(209, 23%, 22%)'};
  height:  5.6rem;
  font-size: 1.4rem;
  padding: 1.8rem 2.4rem;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  transition: all .2s ease;
}

.Dropdown-control:hover {
      border-color: ${props => props.isThemeLight? 'darkgray' : 'lightgray'} !important;
}

.is-open {
  .Dropdown-control, .Dropdown-menu {
    border: 2px solid transparent;
    border-color: ${props => props.isThemeLight? 'darkgray' : 'lightgray'} !important;
  }
}

.Dropdown-menu {
  font-size: 1.4rem;
  border: 1px solid red;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: ${props => props.isThemeLight? 'white' : 'hsl(209, 23%, 22%)'};
  border-radius: 5px;
  animation: open .3s ease-out forwards;
}

.Dropdown-option {
  padding: 0.8rem 2.4rem;
}

.Dropdown-option:hover {
  background-color: ${props => props.isThemeLight? 'hsl(0, 0%, 90%)' : '#3c566e'}; ;
}

@keyframes open {
  from {
    height: 20%;
    opacity: 0;
  }

  to {
    height: auto;
    opacity: 1;
  }
}

`