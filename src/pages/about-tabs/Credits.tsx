import { IonContent, IonPage } from '@ionic/react';

const Credits: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Credits & Acknowledgements</h2>
        <p>
          This system was developed by BSIT 3rd Year students of NBSC. Special thanks to our instructor and the school community for their support.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Credits;
