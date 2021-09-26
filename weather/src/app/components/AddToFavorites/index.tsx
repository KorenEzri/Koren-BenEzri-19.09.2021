import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useFavoritesSlice } from '../favoritesSlice';
import { selectFavorites } from '../favoritesSlice/selectors';
import { IFavorite } from '../favoritesSlice/types';

interface Props {
  favorite?: boolean;
  locationKey: string;
  locationName: string;
}

export function AddToFavorites(props: Props) {
  const isFavorite = props.favorite || false;
  const { locationKey, locationName } = props;

  const [star, setStar] = React.useState(isFavorite);
  const [favorite, setFavorite] = React.useState<IFavorite>();

  const { favorites } = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const {
    actions: { addFavorite, removeFavorite },
  } = useFavoritesSlice();


  React.useEffect(()=>{
    const found = favorites.find(a => a.key === locationKey); // check if location key is in favorites
    if (found) {
      setStar(true)
      return;
    }
    setFavorite({
      name: locationName,
      key: locationKey
    })
  }, [])

  return (
    <FavoriteBtnFrame
      onClick={() => {
        if (!favorite) return;
        setStar(!star);
        if (star) {
          dispatch(removeFavorite(favorite));
        } else {
          dispatch(addFavorite(favorite));
        }
      }}
    >
      <svg
        className={star ? 'star' : ''}
        width="42px"
        height="40px"
        viewBox="0 0 42 40"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M21,34 L10.4346982,39.5545079 C8.47875732,40.5828068 7.19697214,39.6450119 7.56952871,37.4728404 L9.5873218,25.7082039 L1.03981311,17.3764421 C-0.542576313,15.8339937 -0.0467737017,14.3251489 2.13421047,14.0082334 L13.946577,12.2917961 L19.2292279,1.58797623 C20.2071983,-0.393608322 21.7954064,-0.388330682 22.7707721,1.58797623 L28.053423,12.2917961 L39.8657895,14.0082334 C42.0525979,14.3259953 42.5383619,15.8381017 40.9601869,17.3764421 L32.4126782,25.7082039 L34.4304713,37.4728404 C34.8040228,39.6508126 33.5160333,40.5800681 31.5653018,39.5545079 L21,34 Z"></path>
      </svg>
    </FavoriteBtnFrame>
  );
}

const FavoriteBtnFrame = styled.div`
  position: relative;
  fill: #cdcdcd;
  transition: fill 200ms;
  .star {
    fill: #ffa600;
    animation: fav 600ms ease;
  }
  cursor: pointer;
  margin-left: 100px;
  margin-top: 80px;
  width: 10px;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    margin-top: 10px;
    left: 320px;
  }
  @keyframes fav {
    70% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
