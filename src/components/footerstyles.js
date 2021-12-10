import styled from 'styled-components';

export const h1 = styled.div`
position: center;
color: #ebc344;
`;

export const Box = styled.div`
padding: 60px 10px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 500px) {
    padding: 10px 30px;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
                    minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
                    minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #ebc344;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
    color: white;
    transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
