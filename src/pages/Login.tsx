import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
  IonImg
} from '@ionic/react';
import { useState, useRef } from 'react';
import { supabase } from '../utils/supabaseClient';
import ReCAPTCHA from 'react-google-recaptcha';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Notification"
    message={message}
    buttons={['OK']}
  />
);

const Login: React.FC = () => {
  const router = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const doLogin = async () => {
    if (!recaptchaToken) {
      setAlertMessage("Please complete the reCAPTCHA.");
      setShowAlert(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      router.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '20px',
          gap: '20px'
        }}>
          <IonAvatar style={{ width: '120px', height: '120px' }}>
            <IonImg
              src="https://freesvg.org/img/rick-mii.png"
              alt="User Avatar"
            />
          </IonAvatar>

          <h1 style={{ fontWeight: 'bold', fontSize: '2rem', margin: '10px 0' }}>Login</h1>

          <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
            <IonInput
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            {/* reCAPTCHA Component */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ReCAPTCHA
                sitekey="6LfjsiorAAAAAE3urcIWg7TpPCuW4AVh-89LppUz"
                onChange={(token) => setRecaptchaToken(token)}
                ref={recaptchaRef}
              />
            </div>

            <IonButton onClick={doLogin} expand="block" shape="round" color="primary">
              Login
            </IonButton>

            <IonButton routerLink="/it35-lab/register" expand="block" fill="clear" shape="round" color="medium">
              Register here!
            </IonButton>
          </div>
        </div>

        {/* Alert and Toast Components */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
