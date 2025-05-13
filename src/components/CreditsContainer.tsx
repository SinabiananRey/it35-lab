import { IonContent, IonPage } from '@ionic/react';

const Credits: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <h2>Credits & Acknowledgement</h2>
        <p>Developed by: Your Name / Team</p>
        <p>Special thanks to: Instructor Name, NBSC Faculty</p>
      </IonContent>
    </IonPage>
  );
};

export default Credits;
