import styled from 'styled-components/macro';
import { selectFavorites } from 'app/components/favoritesSlice/selectors';
import { useSelector } from 'react-redux';
import { FavoriteListItem } from './FavoriteListItem/Loadable';

interface Props {}

export function FavoritesList(props: Props) {
  const { favorites } = useSelector(selectFavorites);
  return (
    <FavoritesListFrame>
      <FavoritesPageTitle>Your favorites</FavoritesPageTitle>
      <FavoriteListUl>
        {favorites?.map((favorite, index) => {
          return (
            <FavoriteListItem
              favorite={favorite}
              key={`favoriteListItem#${index}`}
            />
          );
        })}
      </FavoriteListUl>
    </FavoritesListFrame>
  );
}

const FavoritesPageTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  position: relative;
  margin-left: 12px;
  width: 200px;
`;
const FavoriteListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style-type: none;
  width: 70%;
  margin: auto;
  flex-wrap: wrap;
`;
const FavoritesListFrame = styled.div`
`;