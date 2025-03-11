import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter 
} from '@ionic/react';
import { useState } from 'react'; // Make sure to import useState
import { logoIonic } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user_email = 'hehe@gmail.com';
  const user_pwd = '123';

  const doLogin = () => {
    if(email !== user_email || password !== user_pwd) {
      setShowAlert(true);
      return;
    } else {
      console.log(email);
      console.log(password);

      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app','forward','replace');
      }, 1500);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30%' }}>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>

        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            placeholder="Username"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            placeholder="Password"
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
        </IonItem>

        <IonButton onClick={() => doLogin()} expand="full">
          Login
        </IonButton>

        {showAlert &&(
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Login failed"
            message="Username or password is incorrect"
            buttons={[{ text: 'OK', handler: () => setShowAlert(false) }]}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;
