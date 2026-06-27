import styled from 'styled-components';

import { Header, HeroSection, SkillsSection } from './layout';

const AppContainer = styled.div`
  & > * {
    padding: 20px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <SkillsSection />
    </AppContainer>
  );
}

export default App;
