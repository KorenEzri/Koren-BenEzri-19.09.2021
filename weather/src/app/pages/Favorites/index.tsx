import { FavoritesList } from 'app/components';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
interface Props {}

export function Favorites(props: Props) {
  return (
    <FavoritesPageWrapper>
      <Helmet>
        <title>Favorites</title>
        <meta
          name="Weather - Favorites"
          content="An H Home Assignment Weather-App"
        />
      </Helmet>
      <FavoritesList />
    </FavoritesPageWrapper>
  );
}

const FavoritesPageWrapper = styled.div`
  background: #f7f6f9;
`;
