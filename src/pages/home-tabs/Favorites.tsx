import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >
        <IonList>
      <IonItem>
        <IonLabel>MINK</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>MLUE</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>MLACK</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>SUMBAGAY</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>MALOLET</IonLabel>
      </IonItem>
    </IonList>
   <IonButton>Add Favorites</IonButton>
          
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', }} > Favorites </div>
        </IonContent>
        
      </IonPage>
    );
  };
 export default Favorites;