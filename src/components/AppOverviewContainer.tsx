import { IonContent, IonPage } from '@ionic/react';

const AppOverview: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <h2>App Overview</h2>
        <p>This app provides a simple way to manage and access different features of our system efficiently.</p>
      </IonContent>
    </IonPage>
  );
};

export default AppOverview;
