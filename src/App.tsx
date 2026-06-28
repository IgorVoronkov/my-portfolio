import styled from 'styled-components';

import { ContactSection, Header, HeroSection, ProjectsSection, SkillsSection } from './layout';

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
      <ProjectsSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;
