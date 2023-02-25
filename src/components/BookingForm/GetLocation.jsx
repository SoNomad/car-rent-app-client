import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const GetLocation = () => {
  const [getLocation, setGetLocation] = useState(
    'https://maps.google.com/maps?q=%D0%B3%D1%80%D0%BE%D0%B7%D0%BD%D1%8B%D0%B9&t=&z=13&ie=UTF8&iwloc=&output=embed'
  );
  const [placeHolder, setPlaceHolder] = useState('Место получения');
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    setPlaceHolder(e.key);
    setOpen(true);
    if (e.key === 'Аэропорт Грозного') {
      setGetLocation(
        'https://maps.google.com/maps?q=grozny%20aeroport&t=&z=13&ie=UTF8&iwloc=&output=embed'
      );
    }
    if (e.key === 'Комплекс "Грозный Сити"') {
      setGetLocation(
        'https://maps.google.com/maps?q=grozny%20%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%20%D0%B3%D1%80%D0%BE%D0%B7%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B8%D1%82%D0%B8&t=&z=13&ie=UTF8&iwloc=&output=embed'
      );
    }
    if (e.key === 'Офис "Интукод"') {
      setGetLocation(
        'https://maps.google.com/maps?q=grozny%20intocode&t=&z=13&ie=UTF8&iwloc=&output=embed'
      );
    }
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const items = [
    {
      label: <span>Аэропорт Грозного</span>,
      key: 'Аэропорт Грозного',
    },
    {
      label: <span>Комплекс "Грозный Сити""</span>,
      key: 'Комплекс "Грозный Сити"',
    },
    {
      label: <span>Офис "Интукод"</span>,
      key: 'Офис "Интукод"',
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
