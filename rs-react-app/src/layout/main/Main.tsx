import SectionCreateFromBtn from '@layout/section/sectionCreateFromBtn/SectionCreateFromBtn';
import SectionUsersList from '@layout/section/sectionUsersList/SectionUsersList';

const Main: React.FC = () => {
  return (
    <>
      <main>
        <SectionCreateFromBtn />
        <SectionUsersList />
      </main>
    </>
  );
};

export default Main;
