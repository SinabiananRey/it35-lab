import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import {
  mail,
  call,
  location,
  logoGithub,
  logoFacebook,
  logoTwitter,
} from 'ionicons/icons';

const ContactInfo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonList>
          <IonItem>
            <IonIcon icon={mail} slot="start" />
            <IonLabel>Email: sinabiananrey@gmail.com</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={call} slot="start" />
            <IonLabel>Phone: +63 912 345 6789</IonLabel>
          </IonItem>
          <IonItem
            button
            href="https://g.co/kgs/SrNFww5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={location} slot="start" />
            <IonLabel>
              Northern Bukidnon State College, Kihare, Tankulan Manolo Fortich,
              Bukidnon, 8703, Philippines
            </IonLabel>
          </IonItem>
        </IonList>

        {/* Embedded Google Map */}
        <div style={{ marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            title="NBSC Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125505.94958839765!2d124.81042535000001!3d8.3950858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff118e2d4de8d3%3A0xc6fc2b15e7b1f8e4!2sNorthern%20Bukidnon%20State%20College!5e0!3m2!1sen!2sph!4v1715583149482!5m2!1sen!2sph"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h3 style={{ marginTop: '30px' }}>Follow Us</h3>
        <IonList>
          <IonItem
            button
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={logoGithub} slot="start" />
            <IonLabel>GitHub</IonLabel>
          </IonItem>
          <IonItem
            button
            href="https://web.facebook.com/itz.rey.712/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={logoFacebook} slot="start" />
            <IonLabel>Facebook</IonLabel>
          </IonItem>
          <IonItem
            button
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={logoTwitter} slot="start" />
            <IonLabel>X (formerly Twitter)</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ContactInfo;
