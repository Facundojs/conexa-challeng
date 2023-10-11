import { FC, ReactNode, createContext, useContext, useEffect } from 'react';
import styled from '@emotion/styled';

const ScrollToBottomContext = createContext({});

interface Props {
  handleScroll: () => void;
  children: ReactNode;
}

export const ScrollToBottomProvider: FC<Props> = ({ children, handleScroll }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <ScrollToBottomContext.Provider value={{}}>
      <Container >
        {children}
      </Container>
    </ScrollToBottomContext.Provider>
  );
}

export function useScrollToBottom() {
  return useContext(ScrollToBottomContext);
}

const Container = styled.div`
  flex-direction: column;
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
`