import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const GetLocation = ({ placeHolder, setPlaceHolder }) => {
  const [getLocation, setGetLocation] = useState(
    'https://maps.google.com/maps?q=%D1%81%D0%B0%D0%BC%D1%83%D0%B8%20%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82&t=&z=13&ie=UTF8&iwloc=&output=embed'
  );
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    setPlaceHolder(e.key);
    setOpen(true);
    if (e.key === 'Аэропорт Самуи') {
      setGetLocation(
        'https://maps.google.com/maps?q=%D1%81%D0%B0%D0%BC%D1%83%D0%B8%20%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82&t=&z=13&ie=UTF8&iwloc=&output=embed'
      );
    }
    if (e.key === 'Пляж "Тонгсон Бэй') {
      setGetLocation(
        'https://maps.google.com/maps?q=%D1%81%D0%B0%D0%BC%D1%83%D0%B8%20%D0%BF%D0%BB%D1%8F%D0%B6%20%D1%82%D0%BE%D0%BD%D0%B3%D1%81%D0%BE%D0%BD&t=&z=13&ie=UTF8&iwloc=&output=embed'
      );
    }
    if (e.key === 'Оки Таун') {
      setGetLocation(
        'https://maps.google.com/maps?q=%D1%81%D0%B0%D0%BC%D1%83%D0%B8%20oki%20town&t=&z=15&ie=UTF8&iwloc=&output=embed'
      );
    }
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const items = [
    {
      label: <span>Аэропорт Самуи</span>,
      key: 'Аэропорт Самуи',
    },
    {
      label: <span>Пляж "Тонгсон Бэй"</span>,
      key: 'Пляж "Тонгсон Бэй',
    },
    {
      label: <span>Оки Таун</span>,
      key: 'Оки Таун',
    },
    {
      label: (
        <iframe
          title="map"
          style={{ width: '280px', height: '213px' }}
          src={getLocation}
          frameBorder="0"
        ></iframe>
      ),
      key: 'map',
    },
  ];

  return (
    <>
      <Dropdown
        trigger={['click']}
        menu={{
          items,
          onClick: handleMenuClick,
          selectable: true,
        }}
        onOpenChange={handleOpenChange}
        open={open}
      >
        <Space>
          <span>{placeHolder}</span>
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  );
};

export default GetLocation;
