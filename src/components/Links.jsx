import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const actions = [
  {
    icon: <WhatsAppIcon />,
    name: 'whatsapp',
    link: 'https://wa.me/79288995198',
  },
  { icon: <TelegramIcon />, name: 'telegram', link: 'https://t.me/inthisreality' },
  { icon: <InstagramIcon />, name: 'instagram', link: 'https://www.instagram.com/so.nomad' },
];

const Links = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (link) => {
    window.open(link, '_blank');
    handleClose();
  };

  const styles = {
    speedDial: {
      position: 'fixed',
      bottom: 16,
      right: 'calc((100vw - 1000px) / 10)',
    },
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={styles.speedDial}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleClick(action.link)}
        />
      ))}
    </SpeedDial>
  );
};

export default Links;
