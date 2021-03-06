import React, { useMemo } from 'react';
import useMedia from 'use-media';
import styled from 'styled-components';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  const isWide = useMedia({ minWidth: '521px' });

  const burgerStyles = useMemo(() => {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '20px',
        right: '36px',
        top: '36px',
      },
      bmBurgerBars: {
        background: '#373a47',
      },
      bmBurgerBarsHover: {
        background: '#a90000',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: '#bdc3c7',
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#fff',
        padding: '0.8em',
        display: 'flex',
        flexDirection: 'column',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
      },
    };

    return styles;
  }, []);

  const BugerMenu = () => {
    return (
      <Menu styles={burgerStyles} right>
        <Link href={'/'}>
          <Anchor>Home</Anchor>
        </Link>
        <Link href={'/about'}>
          <Anchor>About</Anchor>
        </Link>
        <Link href={'/service'}>
          <Anchor>Service</Anchor>
        </Link>
        <Link href={'/contact'}>
          <Anchor>Contact</Anchor>
        </Link>
      </Menu>
    );
  };

  return (
    <div style={{ position: 'relative', zIndex: 100 }}>
      <CorporateName isWide={isWide}>
        <Link href={'/'}>
          <Anchor>
            <h2>Company Name</h2>
          </Anchor>
        </Link>
      </CorporateName>
      {isWide ? (
        <List>
          <Item>
            <Link href={'/about'}>
              <Anchor>About</Anchor>
            </Link>
          </Item>
          <Item>
            <Link href={'/service'}>
              <Anchor>Service</Anchor>
            </Link>
          </Item>
          <Item>
            <Link href={'/contact'}>
              <Anchor>Contact</Anchor>
            </Link>
          </Item>
        </List>
      ) : (
        <BugerMenu />
      )}
    </div>
  );
};

const CorporateName = styled.div<{ isWide: boolean }>`
  position: absolute;
  left: ${(props) => (props.isWide ? '40px' : '16px')};
`;

const List = styled.ul`
  list-style: none;
  position: absolute;
  right: 40px;
  display: flex;
  margin-top: 30px;
`;

const Item = styled.li`
  margin-left: 24px;
`;

export const Anchor = styled.a`
  font-size: 20px;
  position: relative;
  text-decoration: none;
  padding-bottom: 12px;
  font-family: 'Oswald';

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: black;
  }
  &:before {
    opacity: 0;
    transform: translateY(-8px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY(8px/2);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 0.4s;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0.4s;
    }
    &:after {
      transition: transform 0s 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0s 0.4s;
    }
  }
`;

export default Header;
