import { IonContent, IonPage } from '@ionic/react';

const ContactInfo: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <h2>Contact Information</h2>
        <p>Email: example@domain.com</p>
        <p>Phone: +63 912 345 6789</p>
        <p>Address: Northern Bukidnon State College, Impasugong, Bukidnon</p>
      </IonContent>
    </IonPage>
  );
};

export default ContactInfo;
