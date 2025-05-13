import { IonContent, IonPage, IonList, IonItem, IonLabel } from '@ionic/react';

const ContactInfo: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Contact Information</h2>
        <IonList>
          <IonItem>
            <IonLabel>Email: nbsc.app.support@example.com</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Phone: +63 912 345 6789</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Address: NBSC, Impasugong, Bukidnon</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ContactInfo;
