import React from 'react';
import Container from '../components/grid/container';
import Row from '../components/grid/row';
import Col from '../components/grid/col';
import styled from 'styled-components';

const Main = styled.main`
  padding: 40px 0;
`;

const Base = ({ children }) => {
  return (
    <Main>
      <Container>
        <Row $center>
          <Col md={5}>
            {children}
          </Col>
        </Row>
      </Container>
    </Main>
  );
};

export default Base;
