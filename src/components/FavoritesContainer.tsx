// src/components/FavoritesContainer.tsx

import React from 'react';
import { IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { heart, star } from 'ionicons/icons';

const FavoritesContainer: React.FC = () => {
  // Sample favorite items
  const favorites = [
    { name: 'Basketball', icon: heart },
    { name: 'Badminton Racket', icon: star },
    { name: 'Soccer Ball', icon: heart }
  ];

  return (
    <IonList>
      {favorites.map((item, index) => (
        <IonItem key={index}>
          <IonIcon slot="start" icon={item.icon} color="danger" />
          <IonLabel>{item.name}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default FavoritesContainer;
