import React, { useState } from 'react';
import {
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/react';

const SearchContainer: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const topics = [
    {
      title: 'Agile Development',
      description: 'A flexible, iterative approach to software development.',
      full: 'Agile Development is a methodology that promotes continuous iteration and testing throughout the development lifecycle. It encourages team collaboration, customer feedback, and flexible response to change.'
    },
    {
      title: 'CRUD Operations',
      description: 'Create, Read, Update, Delete basics.',
      full: 'CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used in persistent storage systems like databases. CRUD is a foundational concept in full-stack development.'
    },
    {
      title: 'Cross-Platform Development',
      description: 'Develop once, deploy anywhere.',
      full: 'Cross-platform development allows developers to create applications that work on multiple platforms such as iOS, Android, and web using a single codebase. Popular tools include React Native and Flutter.'
    },
    {
      title: 'Frontend vs Backend',
      description: 'UI vs logic and data.',
      full: 'Frontend refers to everything the user interacts with directly (HTML, CSS, JavaScript), while backend handles business logic, database operations, and server management.'
    },
    {
      title: 'APIs (Application Programming Interfaces)',
      description: 'Bridge between systems.',
      full: 'APIs allow different software applications to communicate with each other. They define how software components should interact, often used in mobile apps, web development, and cloud services.'
    },
    {
      title: 'Firebase Authentication',
      description: 'Simple and secure login.',
      full: 'Firebase Authentication provides backend services to help authenticate users easily. It supports email/password, social logins, and even anonymous login with secure session handling.'
    },
    {
      title: 'UI/UX Design Principles',
      description: 'Design for humans.',
      full: 'UI (User Interface) and UX (User Experience) focus on how an app looks and how it feels to use. Good UI/UX design enhances user satisfaction, engagement, and accessibility.'
    }
  ];

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchText.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchText.toLowerCase()) ||
    topic.full.toLowerCase().includes(searchText.toLowerCase())
  );

  const openModal = (topic: any) => {
    setSelectedTopic(topic);
    setShowModal(true);
  };

  return (
    <>
      <IonSearchbar
        value={searchText}
        onIonInput={e => setSearchText(e.detail.value!)}
        placeholder="Search development topics..."
      />
      <IonList>
        {filteredTopics.map((topic, index) => (
          <IonItem key={index} button onClick={() => openModal(topic)}>
            <IonLabel>
              <h2>{topic.title}</h2>
              <IonText color="medium">
                <p>{topic.description}</p>
              </IonText>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{selectedTopic?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>{selectedTopic?.full}</p>
          <IonButton expand="block" onClick={() => setShowModal(false)}>Close</IonButton>
        </IonContent>
      </IonModal>
    </>
  );
};

export default SearchContainer;
