import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { informationCircle, call, people } from 'ionicons/icons';

// ✅ Updated imports after moving files to components folder
import AppOverview from './AppOverviewContainer';
import ContactInfo from './ContactInfoContainer';
import Credits from './CreditsContainer';

const AboutTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/about/overview" component={AppOverview} />
        <Route exact path="/about/contact" component={ContactInfo} />
        <Route exact path="/about/credits" component={Credits} />
        <Redirect exact from="/about" to="/about/overview" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="overview" href="/about/overview">
          <IonIcon icon={informationCircle} />
          <IonLabel>Overview</IonLabel>
        </IonTabButton>
        <IonTabButton tab="contact" href="/about/contact">
          <IonIcon icon={call} />
          <IonLabel>Contact</IonLabel>
        </IonTabButton>
        <IonTabButton tab="credits" href="/about/credits">
          <IonIcon icon={people} />
          <IonLabel>Credits</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AboutTabs;
