import * as S from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <a href="#projects">Проекты</a>
        </li>
        <li>
          <a href="#technologies">Технологии</a>
        </li>
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
    </S.Nav>
  );
};
