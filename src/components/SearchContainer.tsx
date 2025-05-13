import React, { useState } from 'react';
import { IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';

const SearchContainer: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  // Sample data
  const data = ['Basketball', 'Volleyball', 'Soccer', 'Table Tennis', 'Badminton'];

  // Filter data based on search input
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <IonSearchbar
        value={searchText}
        onIonInput={e => setSearchText(e.detail.value!)}
        placeholder="Search items"
      />
      <IonList>
        {filteredData.map((item, index) => (
          <IonItem key={index}>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </>
  );
};

export default SearchContainer;
