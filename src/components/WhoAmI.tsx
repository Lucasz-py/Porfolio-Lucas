import React from 'react';
import ProfileCard from './ProfileCard';
import personImg from '../assets/person.webp';
import grainImg from '../assets/grain.webp';

const WhoAmI: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ProfileCard
        avatarUrl={personImg}
        grainUrl={grainImg}
        name="Escobar Lucas"
        title="Lic. En Sistemas"
        handle="Lucasz"
        status="Available for work"
        contactText="Contact"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={true}
        mobileTiltSensitivity={5}
        behindGlowEnabled={true}
        behindGlowColor="rgba(125, 190, 255, 0.67)"
        behindGlowSize="50%"
        onContactClick={() => {
          window.location.href = 'mailto:tu@email.com';
        }}
      />
    </section>
  );
};

export default WhoAmI;