import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const AppOverview: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App Overview</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to the App!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This mobile application was developed as part of our <strong>Application Development</strong> course. It demonstrates core mobile development concepts using the Ionic Framework and React.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Main Features</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li><strong>Search:</strong> Quickly find topics and features related to app development.</li>
              <li><strong>Favorites:</strong> Save important topics for quick access anytime.</li>
              <li><strong>Modals:</strong> Get in-depth explanations about key development concepts.</li>
              <li><strong>Responsive Design:</strong> Optimized for mobile devices and tablets.</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Technologies Used</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li><strong>React:</strong> Component-based JavaScript library for building UIs.</li>
              <li><strong>Ionic Framework:</strong> For mobile-optimized UI components and navigation.</li>
              <li><strong>TypeScript:</strong> Ensures type safety and better code maintainability.</li>
              <li><strong>Context API:</strong> Shared state management across components.</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Purpose</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This app was built to demonstrate real-world applications of mobile development principles, such as UI design, state management, navigation, and feature implementation. It serves as a foundation for learning and improving application development skills.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AppOverview;
