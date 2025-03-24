import React from 'react';
import './home-page.scss';
import {
  showGlobalLoader,
  showLocalLoader,
  hideGlobalLoader,
  hideLocalLoader,
} from '../../redux/store/loader';
import { useAppDispatch } from '../../redux/hooks';

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
        <button className="HomePage__button" onClick={localHandler}>
          Включить локальный
        </button>
        <button className="HomePage__button" onClick={globalHandler}>
          Включить глобальный
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aut
        deserunt, ducimus, eaque exercitationem harum ipsam iusto modi neque officia placeat quae
        quidem rem reprehenderit suscipit tenetur. Alias aliquid amet architecto beatae culpa
        cupiditate deserunt dolor dolorem eum ex facere illum impedit, ipsum itaque laboriosam magni
        nihil nulla numquam obcaecati quas, quidem ratione recusandae reiciendis saepe similique
        soluta suscipit ullam, ut velit voluptate! A accusantium alias aliquam atque commodi,
        consequatur corporis culpa cum deleniti dolorem ea eius enim est expedita facere hic id
        inventore ipsum, iure labore laborum maiores, mollitia nisi non omnis possimus quae qui
        ratione reprehenderit totam ut vel velit voluptatibus. Aperiam atque aut deleniti dicta
        eligendi, et fuga magnam nihil praesentium tempora! Ab blanditiis dolores eum facere
        numquam. Magnam maxime molestiae molestias! Aliquam at consequuntur esse facilis, fugit id
        impedit laborum modi obcaecati optio perferendis porro qui quidem recusandae repudiandae
        similique tenetur voluptates? Deserunt, minima, perspiciatis!
      </p>
    </div>
  );
};

export default HomePage;
