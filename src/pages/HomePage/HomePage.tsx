import React from 'react';
import './home-page.scss';
import {
  showGlobalLoader,
  showLocalLoader,
  hideGlobalLoader,
  hideLocalLoader,
} from '../../redux/store/loader';
import { useAppDispatch } from '../../redux/hooks';
import { Button } from '../../components/Button';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const globalHandler = () => {
    dispatch(showGlobalLoader());
    setTimeout(() => {
      dispatch(hideGlobalLoader());
    }, 3000);
  };

  const localHandler = () => {
    dispatch(showLocalLoader());
    setTimeout(() => {
      dispatch(hideLocalLoader());
    }, 3000);
  };
  return (
    <div className="HomePage">
      <div className="HomePage__buttons">
        <Button
          custom
          onClick={localHandler}
        >
          Включить локальный лоадер
        </Button>
        <Button
          disabled
          onClick={globalHandler}
        >
          Включить глобальный лоадер
        </Button>
        <Button
          style="secondary"
          onClick={globalHandler}
        >
          Второстепенная
        </Button>
        <Button onClick={globalHandler}>Глобальный</Button>
        <Button
          style="secondary"
          disabled
          onClick={globalHandler}
        >
          Второстепенная дизэйбл
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
