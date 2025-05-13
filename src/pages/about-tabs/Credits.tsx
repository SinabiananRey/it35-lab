import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const Credits: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Credits & Acknowledgement</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Developed By</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Sinabianan, Rey</p>
            <p>Course: AppDev</p>
            <p>Institution: Northern Bukidnon State College</p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Special Thanks</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Mr. Cliff Amadeus Evangelio</strong> – Instructor</p>
            <p><strong>Ms. Cristine Joy Sagaosao</strong> – Instructor</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Credits;
