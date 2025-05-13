import React, { useState } from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText
} from '@ionic/react';
import { heart, star } from 'ionicons/icons';

const FavoritesContainer: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const favorites = [
    {
      name: 'Agile Development',
      icon: heart,
      description: 'Flexible, team-based software methodology.',
      full: 'Agile Development encourages collaboration, adaptability, and iterative progress. It replaces rigid planning with small, manageable tasks and quick feedback loops.'
    },
    {
      name: 'Firebase Authentication',
      icon: star,
      description: 'Secure and simple user login system.',
      full: 'Firebase Authentication allows you to implement secure sign-in methods quickly, including email/password, Google, Facebook, and even anonymous login.'
    },
    {
      name: 'UI/UX Design Principles',
      icon: heart,
      description: 'Designing for usability and experience.',
      full: 'UI (User Interface) focuses on aesthetics, while UX (User Experience) ensures ease of use. Together, they create apps that are functional, intuitive, and enjoyable.'
    }
  ];

  const openModal = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <>
      <IonList>
        {favorites.map((item, index) => (
          <IonItem key={index} button onClick={() => openModal(item)}>
            <IonIcon slot="start" icon={item.icon} color="warning" />
            <IonLabel>
              <h2>{item.name}</h2>
              <IonText color="medium">
                <p>{item.description}</p>
              </IonText>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{selectedItem?.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>{selectedItem?.full}</p>
          <IonButton expand="block" onClick={() => setShowModal(false)}>
            Close
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  );
};

export default FavoritesContainer;
