"use client";
import { MAX_WIDTH } from '../common/config';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Props) {
  const pathname = usePathname()

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>SWAPI Conexa challenge</title>
      </Head>
      <Body>
        <Header>
          <Nav>
            {
              pathname !== '/' && (
                <LinkText href='/' >
                  Inicio
                </LinkText>
              )
            }
            <p>
              Conexa Challenge
            </p>
            <p>
              SWAPI
            </p>
            <p>
              Facundo Serrano
            </p>
          </Nav>
        </Header>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Body>
    </Html>
  );
}

const Html = styled.html`
  background-image: url('https://th.bing.com/th/id/R.42a4d085085fdf2ea02dae514b303102?rik=L0TNbMVXiQF5LA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fLLal9DN.jpg&ehk=CPyfOBmXIoWgZATvW%2fGr7XRNoaHn5NGv35WlmwfkZzg%3d&risl=&pid=ImgRaw&r=0');
  background-repeat: inherit;
  background-size: cover; /* Ajusta el tamaño de la imagen de fondo */
  background-position: center center; /* Centra la imagen de fondo */
`;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFE81F;
  padding: 1rem;
  width: ${MAX_WIDTH}px;
  border-bottom: 2px solid #FFE81F;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;


const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const LinkText = styled(Link)`
  color: #FFE81F;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #FF4500;
  }
`;
const ContentContainer = styled.div`
  margin: 2rem auto;
  padding: 0 1rem;
  width: ${MAX_WIDTH}px;
  text-align: center; /* Centra el contenido */
`;
