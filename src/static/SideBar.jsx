import styled from "styled-components"

const SideBar = () => {
  return (
<Container>
    <Wrapper>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Settings</h3>
        <h3>Contacts</h3>
    </Wrapper>
</Container>
  )
}

export default SideBar
const Container = styled.div`
display: flex;
justify-content: flex-end;
`
const Wrapper = styled.div`
background-color:lightblue;
height: 70vh;
width:300px;
color: purple;

`