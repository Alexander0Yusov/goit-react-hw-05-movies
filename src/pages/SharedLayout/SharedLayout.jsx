import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Header from 'components/Header/Header';
import Section from 'components/Section/Section';

const SharedLayout = () => {
  return (
    <>
      <Section>
        <Header />

        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default SharedLayout;
