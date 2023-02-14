import './styles/global.scss';

import { useEffect, useState } from 'react';

import { Content } from './components/Content';
import { GenreResponseProps, SideBar } from './components/SideBar';
import { api } from './services/api';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps,
  );

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        changeGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />
      <Content
        selectedGenre={selectedGenre}
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
}
