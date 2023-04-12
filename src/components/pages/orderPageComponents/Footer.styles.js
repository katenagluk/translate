import styled from "styled-components";

// export const FooterWrapper = styled.footer`
//     color: #454c5d;
//     max-width: 1280px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 20px 60px;
//     margin: 0 auto;
//     @media (max-width: 767px) {
//     flex-direction: column;
//     text-align: center;
//     padding: 20px 15px 40px;
//   }
// `;

// export const FooterItems = styled.div`
// display: grid;
// `;

export const FooterWrapper = styled.footer`
    color: #454c5d;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20%;
    padding: 20px 60px;
    margin: 0 auto;
    font-size: 14px;
    @media (max-width: 1087px) {
      grid-column-gap: 10%;
    }
    @media (max-width: 767px) {
    grid-template-columns: 1fr;
    flex-direction: column;
    text-align: center;
    padding: 20px 15px 40px;
  }
`;

export const FooterItems = styled.div`
  @media (max-width: 767px) {
  }
`;
