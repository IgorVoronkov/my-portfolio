import styled from 'styled-components';

import {
  ContactSection,
  Footer,
  Header,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from './layout';

const AppContainer = styled.div`
  & > * {
    padding: 40px;
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
      <Footer />
    </AppContainer>
  );
}

export default App;
