import { FlexWrapper } from '../flex-wrapper/FlexWrapper';

export const HeaderNav = () => {
  return (
    <nav>
      <FlexWrapper as="ul" $gap="50px">
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
      </FlexWrapper>
    </nav>
  );
};
