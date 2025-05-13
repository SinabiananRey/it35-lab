import {
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { informationCircleOutline, callOutline, peopleOutline } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';

import AppOverview from './about-tabs/AppOverview';
import ContactInfo from './about-tabs/ContactInfo';
import Credits from './about-tabs/Credits';

const About: React.FC = () => {

  const tabs = [
    { name: 'Overview', tab: 'overview', url: '/it35-lab/app/about/overview', icon: informationCircleOutline },
    { name: 'Contact', tab: 'contact', url: '/it35-lab/app/about/contact', icon: callOutline },
    { name: 'Credits', tab: 'credits', url: '/it35-lab/app/about/credits', icon: peopleOutline },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/it35-lab/app/about/overview" render={AppOverview} />
          <Route exact path="/it35-lab/app/about/contact" render={ContactInfo} />
          <Route exact path="/it35-lab/app/about/credits" render={Credits} />
          <Route exact path="/it35-lab/app/about">
            <Redirect to="/it35-lab/app/about/overview" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default About;
