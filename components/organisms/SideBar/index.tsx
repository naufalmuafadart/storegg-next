/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Cookies from 'js-cookie';
import React from 'react';
import { useRouter } from 'next/router';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" href="/member" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" icon="ic-menu-transaction" href="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
          <MenuItem title="Settings" icon="ic-menu-setting" href="/member/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem title="Log Out" icon="ic-menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
